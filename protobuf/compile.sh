#!/usr/bin/env bash
set -e
set -x

# Add node_modules/.bin to PATH so protoc can find protoc-gen-ts_proto
export PATH="$PWD/../node_modules/.bin:$PATH"

PROTOC="protoc"
PROTOC_VERSION=$(protoc --version | awk '{print $2}')
echo "protoc version: $PROTOC_VERSION"

if [ "$PROTOC_VERSION" != "33.0" ]; then
    echo "protoc version should be 33.0"
    exit 1
fi

if [ "$(uname)" == "Darwin" ]; then
    SED=gsed
else
    SED=sed
fi

# Generate TypeScript files from proto files
# Arguments:
#   $1 - Input proto directory
#   $2 - Output ts directory
#   $3 - Module name (e.g., "common", "game", "gate")
#   $4 - Skip nested directory name (optional, default: none)
generate_ts() {
    local INPUT_DIR=$1
    local OUTPUT_DIR=$2
    local MODULE=$3
    local SKIP_DIR=${4:-""}
    
    echo "Generating $MODULE"
    rm -rf $OUTPUT_DIR && mkdir -p $OUTPUT_DIR

    protoc --proto_path=proto --ts_proto_out=$OUTPUT_DIR --ts_proto_opt=esModuleInterop=true,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,env=node $INPUT_DIR/*.proto

    # Remove protobufPackage export from all generated .ts files
    find "$OUTPUT_DIR" -name "*.ts" -type f -exec $SED -i '/export const protobufPackage =/d' {} \;

    # Flatten directory structure: move files from nested package directories to OUTPUT_DIR
    for nested_dir in $(find "$OUTPUT_DIR" -mindepth 1 -maxdepth 1 -type d); do
        nested_name=$(basename "$nested_dir")
        if [ -n "$SKIP_DIR" ] && [ "$nested_name" == "$SKIP_DIR" ]; then
            # Skip specified directory
            # Remove the directory and its contents
            rm -rf "$nested_dir"
            continue
        fi
        mv "$nested_dir"/* "$OUTPUT_DIR"/
    done
    # Remove empty nested directories
    find "$OUTPUT_DIR" -mindepth 1 -type d -empty -delete
}

# First, compile common module separately (no skip)
generate_ts "proto/common" "ts/common" "common"

# Then compile other modules (game, gate, etc.)
# Skip "common" nested directory as it's already in ts/common
for INPUT_DIR in $(find proto -maxdepth 3 -mindepth 1 -type d); do
    module=$(basename $INPUT_DIR)
    
    # Skip common as it's already compiled
    if [ "$module" == "common" ]; then
        continue
    fi
    
    generate_ts "$INPUT_DIR" "ts/$module" "$module" "common"
done