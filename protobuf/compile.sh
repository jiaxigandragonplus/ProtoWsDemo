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
    
    echo "Generating $MODULE (TypeScript)"
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

# Generate JavaScript files for Cocos Creator using protobufjs
# Arguments:
#   $1 - Input proto directory
#   $2 - Output js directory
#   $3 - Module name (e.g., "common", "game", "gate")
#   $4 - Skip nested directory name (optional, default: none)
generate_js() {
    local INPUT_DIR=$1
    local OUTPUT_DIR=$2
    local MODULE=$3
    local SKIP_DIR=${4:-""}
    
    echo "Generating $MODULE (JavaScript)"
    rm -rf $OUTPUT_DIR && mkdir -p $OUTPUT_DIR

    # Use protobufjs-cli to generate static module
    # -p specifies the include path for resolving imports
    ../node_modules/.bin/pbjs -t static-module -w commonjs -p proto -o $OUTPUT_DIR/$MODULE.js $INPUT_DIR/*.proto

    # Generate TypeScript definitions
    ../node_modules/.bin/pbts -o $OUTPUT_DIR/$MODULE.d.ts $OUTPUT_DIR/$MODULE.js

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

# Generate protocol_map.json for C/S protocols
# Arguments:
#   $1 - Input proto directory
#   $2 - Output protocol_map.json path
generate_protocol_map() {
    local INPUT_DIR=$1
    local OUTPUT_FILE=$2
    local DIR_NAME=$(basename "$INPUT_DIR")
    
    echo "Generating protocol_map.json for $DIR_NAME"
    
    # Start JSON object
    echo "{" > "$OUTPUT_FILE"
    
    local first=true
    
    # Iterate over all proto files in the input directory
    for proto_file in "$INPUT_DIR"/*.proto; do
        [ -f "$proto_file" ] || continue
        
        local FILE_NAME=$(basename "$proto_file" .proto)
        
        # Extract message names starting with C
        while IFS= read -r line; do
            # Match message definitions starting with C
            if [[ $line =~ ^[[:space:]]*message[[:space:]]+(C[A-Za-z0-9]+) ]]; then
                local MSG_NAME="${BASH_REMATCH[1]}"
                
                # Remove first character and convert to snake_case
                local MSG_WITHOUT_FIRST="${MSG_NAME:1}"
                # Convert CamelCase to snake_case using awk
                local SNAKE_CASE=$(echo "$MSG_WITHOUT_FIRST" | awk '{
                    str = $0
                    result = ""
                    for (i = 1; i <= length(str); i++) {
                        c = substr(str, i, 1)
                        if (c ~ /[A-Z]/) {
                            if (result != "") result = result "_"
                            result = result tolower(c)
                        } else {
                            result = result c
                        }
                    }
                    print result
                }')
                
                # Build URL: /dir_name/file_name/snake_case
                local URL="/${DIR_NAME}/${FILE_NAME}/${SNAKE_CASE}"
                
                # Add comma before entry if not first
                if [ "$first" = true ]; then
                    first=false
                else
                    echo "," >> "$OUTPUT_FILE"
                fi
                
                # Write JSON entry
                printf '    "%s": {\n        "method": "POST",\n        "uri": "%s"\n    }' "$MSG_NAME" "$URL" >> "$OUTPUT_FILE"
            fi
        done < "$proto_file"
    done
    
    # Close JSON object
    echo "" >> "$OUTPUT_FILE"
    echo "}" >> "$OUTPUT_FILE"
}

# First, compile common module separately (no skip)
generate_ts "proto/common" "ts/common" "common"
generate_js "proto/common" "js/common" "common"

# Then compile other modules (game, gate, etc.)
# Skip "common" nested directory as it's already in ts/common or js/common
for INPUT_DIR in $(find proto -maxdepth 3 -mindepth 1 -type d); do
    module=$(basename $INPUT_DIR)
    
    # Skip common as it's already compiled
    if [ "$module" == "common" ]; then
        continue
    fi
    
    generate_ts "$INPUT_DIR" "ts/$module" "$module" "common"
    generate_js "$INPUT_DIR" "js/$module" "$module" "common"
    generate_protocol_map "$INPUT_DIR" "proto/$module/protocol_map.json"
done