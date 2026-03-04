/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.WebsocketMessage = (function() {

        /**
         * Properties of a WebsocketMessage.
         * @memberof common
         * @interface IWebsocketMessage
         * @property {string|null} [uri] WebsocketMessage uri
         * @property {string|null} [method] WebsocketMessage method
         * @property {string|null} [messageType] WebsocketMessage messageType
         * @property {Uint8Array|null} [messagePayload] WebsocketMessage messagePayload
         * @property {string|null} [uuid] WebsocketMessage uuid
         * @property {number|null} [errno] WebsocketMessage errno
         * @property {string|null} [errmsg] WebsocketMessage errmsg
         * @property {number|Long|null} [timestamp] WebsocketMessage timestamp
         */

        /**
         * Constructs a new WebsocketMessage.
         * @memberof common
         * @classdesc Represents a WebsocketMessage.
         * @implements IWebsocketMessage
         * @constructor
         * @param {common.IWebsocketMessage=} [properties] Properties to set
         */
        function WebsocketMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebsocketMessage uri.
         * @member {string} uri
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.uri = "";

        /**
         * WebsocketMessage method.
         * @member {string} method
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.method = "";

        /**
         * WebsocketMessage messageType.
         * @member {string} messageType
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.messageType = "";

        /**
         * WebsocketMessage messagePayload.
         * @member {Uint8Array} messagePayload
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.messagePayload = $util.newBuffer([]);

        /**
         * WebsocketMessage uuid.
         * @member {string} uuid
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.uuid = "";

        /**
         * WebsocketMessage errno.
         * @member {number} errno
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.errno = 0;

        /**
         * WebsocketMessage errmsg.
         * @member {string} errmsg
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.errmsg = "";

        /**
         * WebsocketMessage timestamp.
         * @member {number|Long} timestamp
         * @memberof common.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WebsocketMessage instance using the specified properties.
         * @function create
         * @memberof common.WebsocketMessage
         * @static
         * @param {common.IWebsocketMessage=} [properties] Properties to set
         * @returns {common.WebsocketMessage} WebsocketMessage instance
         */
        WebsocketMessage.create = function create(properties) {
            return new WebsocketMessage(properties);
        };

        /**
         * Encodes the specified WebsocketMessage message. Does not implicitly {@link common.WebsocketMessage.verify|verify} messages.
         * @function encode
         * @memberof common.WebsocketMessage
         * @static
         * @param {common.IWebsocketMessage} message WebsocketMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebsocketMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.method);
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.messageType);
            if (message.messagePayload != null && Object.hasOwnProperty.call(message, "messagePayload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.messagePayload);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.uuid);
            if (message.errno != null && Object.hasOwnProperty.call(message, "errno"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.errno);
            if (message.errmsg != null && Object.hasOwnProperty.call(message, "errmsg"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.errmsg);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified WebsocketMessage message, length delimited. Does not implicitly {@link common.WebsocketMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.WebsocketMessage
         * @static
         * @param {common.IWebsocketMessage} message WebsocketMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebsocketMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebsocketMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.WebsocketMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.WebsocketMessage} WebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebsocketMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.WebsocketMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uri = reader.string();
                        break;
                    }
                case 2: {
                        message.method = reader.string();
                        break;
                    }
                case 3: {
                        message.messageType = reader.string();
                        break;
                    }
                case 4: {
                        message.messagePayload = reader.bytes();
                        break;
                    }
                case 5: {
                        message.uuid = reader.string();
                        break;
                    }
                case 6: {
                        message.errno = reader.uint32();
                        break;
                    }
                case 7: {
                        message.errmsg = reader.string();
                        break;
                    }
                case 8: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WebsocketMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.WebsocketMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.WebsocketMessage} WebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebsocketMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebsocketMessage message.
         * @function verify
         * @memberof common.WebsocketMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebsocketMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                if (!$util.isString(message.uri))
                    return "uri: string expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            if (message.messagePayload != null && message.hasOwnProperty("messagePayload"))
                if (!(message.messagePayload && typeof message.messagePayload.length === "number" || $util.isString(message.messagePayload)))
                    return "messagePayload: buffer expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.errno != null && message.hasOwnProperty("errno"))
                if (!$util.isInteger(message.errno))
                    return "errno: integer expected";
            if (message.errmsg != null && message.hasOwnProperty("errmsg"))
                if (!$util.isString(message.errmsg))
                    return "errmsg: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a WebsocketMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.WebsocketMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.WebsocketMessage} WebsocketMessage
         */
        WebsocketMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.common.WebsocketMessage)
                return object;
            var message = new $root.common.WebsocketMessage();
            if (object.uri != null)
                message.uri = String(object.uri);
            if (object.method != null)
                message.method = String(object.method);
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            if (object.messagePayload != null)
                if (typeof object.messagePayload === "string")
                    $util.base64.decode(object.messagePayload, message.messagePayload = $util.newBuffer($util.base64.length(object.messagePayload)), 0);
                else if (object.messagePayload.length >= 0)
                    message.messagePayload = object.messagePayload;
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.errno != null)
                message.errno = object.errno >>> 0;
            if (object.errmsg != null)
                message.errmsg = String(object.errmsg);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a WebsocketMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.WebsocketMessage
         * @static
         * @param {common.WebsocketMessage} message WebsocketMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebsocketMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uri = "";
                object.method = "";
                object.messageType = "";
                if (options.bytes === String)
                    object.messagePayload = "";
                else {
                    object.messagePayload = [];
                    if (options.bytes !== Array)
                        object.messagePayload = $util.newBuffer(object.messagePayload);
                }
                object.uuid = "";
                object.errno = 0;
                object.errmsg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = message.uri;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.messagePayload != null && message.hasOwnProperty("messagePayload"))
                object.messagePayload = options.bytes === String ? $util.base64.encode(message.messagePayload, 0, message.messagePayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.messagePayload) : message.messagePayload;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.errno != null && message.hasOwnProperty("errno"))
                object.errno = message.errno;
            if (message.errmsg != null && message.hasOwnProperty("errmsg"))
                object.errmsg = message.errmsg;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this WebsocketMessage to JSON.
         * @function toJSON
         * @memberof common.WebsocketMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebsocketMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebsocketMessage
         * @function getTypeUrl
         * @memberof common.WebsocketMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebsocketMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.WebsocketMessage";
        };

        return WebsocketMessage;
    })();

    /**
     * KickPlayerReason enum.
     * @name common.KickPlayerReason
     * @enum {number}
     * @property {number} ClientLeave=0 ClientLeave value
     * @property {number} DuplicateLogin=1 DuplicateLogin value
     * @property {number} ServerShutdown=2 ServerShutdown value
     * @property {number} GMKick=3 GMKick value
     * @property {number} Banned=4 Banned value
     */
    common.KickPlayerReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ClientLeave"] = 0;
        values[valuesById[1] = "DuplicateLogin"] = 1;
        values[valuesById[2] = "ServerShutdown"] = 2;
        values[valuesById[3] = "GMKick"] = 3;
        values[valuesById[4] = "Banned"] = 4;
        return values;
    })();

    return common;
})();

module.exports = $root;
