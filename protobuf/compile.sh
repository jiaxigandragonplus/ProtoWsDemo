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

for INPUT_DIR in $(find proto -maxdepth 3 -mindepth 1 -type d); do
    module=$(basename $INPUT_DIR)
    echo "Generating $module"

    ## Generate ts
    OUTPUT_DIR=ts/$module
    rm -rf $OUTPUT_DIR && mkdir -p $OUTPUT_DIR

    protoc --proto_path=proto --ts_proto_out=$OUTPUT_DIR --ts_proto_opt=esModuleInterop=true,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,env=node $INPUT_DIR/*.proto

    # Remove protobufPackage export from all generated .ts files
    find "$OUTPUT_DIR" -name "*.ts" -type f -exec $SED -i '/export const protobufPackage =/d' {} \;
done