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

# First, compile common module separately
echo "Generating common"
COMMON_OUTPUT_DIR=ts/common
rm -rf $COMMON_OUTPUT_DIR && mkdir -p $COMMON_OUTPUT_DIR
protoc --proto_path=proto --ts_proto_out=$COMMON_OUTPUT_DIR --ts_proto_opt=esModuleInterop=true,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,env=node proto/common/*.proto
find "$COMMON_OUTPUT_DIR" -name "*.ts" -type f -exec $SED -i '/export const protobufPackage =/d' {} \;
# Flatten directory structure for common
for nested_dir in $(find "$COMMON_OUTPUT_DIR" -mindepth 1 -maxdepth 1 -type d); do
    mv "$nested_dir"/* "$COMMON_OUTPUT_DIR"/
done
find "$COMMON_OUTPUT_DIR" -mindepth 1 -type d -empty -delete

# Then compile other modules (game, gate, etc.)
for INPUT_DIR in $(find proto -maxdepth 3 -mindepth 1 -type d); do
    module=$(basename $INPUT_DIR)
    
    # Skip common as it's already compiled
    if [ "$module" == "common" ]; then
        continue
    fi
    
    echo "Generating $module"

    ## Generate ts
    OUTPUT_DIR=ts/$module
    rm -rf $OUTPUT_DIR && mkdir -p $OUTPUT_DIR

    protoc --proto_path=proto --ts_proto_out=$OUTPUT_DIR --ts_proto_opt=esModuleInterop=true,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,env=node $INPUT_DIR/*.proto

    # Remove protobufPackage export from all generated .ts files
    find "$OUTPUT_DIR" -name "*.ts" -type f -exec $SED -i '/export const protobufPackage =/d' {} \;

    # Flatten directory structure: move files from nested package directories to OUTPUT_DIR
    # e.g., ts/game/game/*.ts -> ts/game/*.ts
    # But skip common directory as it's already compiled
    for nested_dir in $(find "$OUTPUT_DIR" -mindepth 1 -maxdepth 1 -type d); do
        nested_name=$(basename "$nested_dir")
        if [ "$nested_name" == "common" ]; then
            # Skip common directory, it's already in ts/common
            # Remove the common directory and its contents
            rm -rf "$nested_dir"
            continue
        fi
        mv "$nested_dir"/* "$OUTPUT_DIR"/
    done
    # Remove empty nested directories
    find "$OUTPUT_DIR" -mindepth 1 -type d -empty -delete
done