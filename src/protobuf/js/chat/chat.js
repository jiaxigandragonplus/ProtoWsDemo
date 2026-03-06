/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    var chat = {};

    chat.CSendMessage = (function() {

        /**
         * Properties of a CSendMessage.
         * @memberof chat
         * @interface ICSendMessage
         * @property {string|null} [channelId] CSendMessage channelId
         * @property {string|null} [message] CSendMessage message
         */

        /**
         * Constructs a new CSendMessage.
         * @memberof chat
         * @classdesc Represents a CSendMessage.
         * @implements ICSendMessage
         * @constructor
         * @param {chat.ICSendMessage=} [properties] Properties to set
         */
        function CSendMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CSendMessage channelId.
         * @member {string} channelId
         * @memberof chat.CSendMessage
         * @instance
         */
        CSendMessage.prototype.channelId = "";

        /**
         * CSendMessage message.
         * @member {string} message
         * @memberof chat.CSendMessage
         * @instance
         */
        CSendMessage.prototype.message = "";

        /**
         * Creates a new CSendMessage instance using the specified properties.
         * @function create
         * @memberof chat.CSendMessage
         * @static
         * @param {chat.ICSendMessage=} [properties] Properties to set
         * @returns {chat.CSendMessage} CSendMessage instance
         */
        CSendMessage.create = function create(properties) {
            return new CSendMessage(properties);
        };

        /**
         * Encodes the specified CSendMessage message. Does not implicitly {@link chat.CSendMessage.verify|verify} messages.
         * @function encode
         * @memberof chat.CSendMessage
         * @static
         * @param {chat.ICSendMessage} message CSendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified CSendMessage message, length delimited. Does not implicitly {@link chat.CSendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.CSendMessage
         * @static
         * @param {chat.ICSendMessage} message CSendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chat.CSendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.CSendMessage} CSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSendMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.CSendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
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
         * Decodes a CSendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.CSendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.CSendMessage} CSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSendMessage message.
         * @function verify
         * @memberof chat.CSendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a CSendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.CSendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.CSendMessage} CSendMessage
         */
        CSendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.CSendMessage)
                return object;
            var message = new $root.chat.CSendMessage();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a CSendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.CSendMessage
         * @static
         * @param {chat.CSendMessage} message CSendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channelId = "";
                object.message = "";
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this CSendMessage to JSON.
         * @function toJSON
         * @memberof chat.CSendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CSendMessage
         * @function getTypeUrl
         * @memberof chat.CSendMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSendMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.CSendMessage";
        };

        return CSendMessage;
    })();

    chat.SSendMessage = (function() {

        /**
         * Properties of a SSendMessage.
         * @memberof chat
         * @interface ISSendMessage
         * @property {Array.<common.IChatMessageInfo>|null} [addedMessages] SSendMessage addedMessages
         */

        /**
         * Constructs a new SSendMessage.
         * @memberof chat
         * @classdesc Represents a SSendMessage.
         * @implements ISSendMessage
         * @constructor
         * @param {chat.ISSendMessage=} [properties] Properties to set
         */
        function SSendMessage(properties) {
            this.addedMessages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SSendMessage addedMessages.
         * @member {Array.<common.IChatMessageInfo>} addedMessages
         * @memberof chat.SSendMessage
         * @instance
         */
        SSendMessage.prototype.addedMessages = $util.emptyArray;

        /**
         * Creates a new SSendMessage instance using the specified properties.
         * @function create
         * @memberof chat.SSendMessage
         * @static
         * @param {chat.ISSendMessage=} [properties] Properties to set
         * @returns {chat.SSendMessage} SSendMessage instance
         */
        SSendMessage.create = function create(properties) {
            return new SSendMessage(properties);
        };

        /**
         * Encodes the specified SSendMessage message. Does not implicitly {@link chat.SSendMessage.verify|verify} messages.
         * @function encode
         * @memberof chat.SSendMessage
         * @static
         * @param {chat.ISSendMessage} message SSendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addedMessages != null && message.addedMessages.length)
                for (var i = 0; i < message.addedMessages.length; ++i)
                    $root.common.ChatMessageInfo.encode(message.addedMessages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SSendMessage message, length delimited. Does not implicitly {@link chat.SSendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.SSendMessage
         * @static
         * @param {chat.ISSendMessage} message SSendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SSendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chat.SSendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.SSendMessage} SSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSendMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SSendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.addedMessages && message.addedMessages.length))
                            message.addedMessages = [];
                        message.addedMessages.push($root.common.ChatMessageInfo.decode(reader, reader.uint32()));
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
         * Decodes a SSendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.SSendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.SSendMessage} SSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SSendMessage message.
         * @function verify
         * @memberof chat.SSendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SSendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addedMessages != null && message.hasOwnProperty("addedMessages")) {
                if (!Array.isArray(message.addedMessages))
                    return "addedMessages: array expected";
                for (var i = 0; i < message.addedMessages.length; ++i) {
                    var error = $root.common.ChatMessageInfo.verify(message.addedMessages[i]);
                    if (error)
                        return "addedMessages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SSendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.SSendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.SSendMessage} SSendMessage
         */
        SSendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SSendMessage)
                return object;
            var message = new $root.chat.SSendMessage();
            if (object.addedMessages) {
                if (!Array.isArray(object.addedMessages))
                    throw TypeError(".chat.SSendMessage.addedMessages: array expected");
                message.addedMessages = [];
                for (var i = 0; i < object.addedMessages.length; ++i) {
                    if (typeof object.addedMessages[i] !== "object")
                        throw TypeError(".chat.SSendMessage.addedMessages: object expected");
                    message.addedMessages[i] = $root.common.ChatMessageInfo.fromObject(object.addedMessages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SSendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.SSendMessage
         * @static
         * @param {chat.SSendMessage} message SSendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SSendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.addedMessages = [];
            if (message.addedMessages && message.addedMessages.length) {
                object.addedMessages = [];
                for (var j = 0; j < message.addedMessages.length; ++j)
                    object.addedMessages[j] = $root.common.ChatMessageInfo.toObject(message.addedMessages[j], options);
            }
            return object;
        };

        /**
         * Converts this SSendMessage to JSON.
         * @function toJSON
         * @memberof chat.SSendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SSendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SSendMessage
         * @function getTypeUrl
         * @memberof chat.SSendMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SSendMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.SSendMessage";
        };

        return SSendMessage;
    })();

    chat.CGetChatLog = (function() {

        /**
         * Properties of a CGetChatLog.
         * @memberof chat
         * @interface ICGetChatLog
         * @property {string|null} [channelId] CGetChatLog channelId
         * @property {number|null} [minMessageId] CGetChatLog minMessageId
         * @property {number|null} [maxMessageId] CGetChatLog maxMessageId
         * @property {number|Long|null} [lastLoadTimestamp] CGetChatLog lastLoadTimestamp
         * @property {number|null} [loadType] CGetChatLog loadType
         */

        /**
         * Constructs a new CGetChatLog.
         * @memberof chat
         * @classdesc Represents a CGetChatLog.
         * @implements ICGetChatLog
         * @constructor
         * @param {chat.ICGetChatLog=} [properties] Properties to set
         */
        function CGetChatLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CGetChatLog channelId.
         * @member {string} channelId
         * @memberof chat.CGetChatLog
         * @instance
         */
        CGetChatLog.prototype.channelId = "";

        /**
         * CGetChatLog minMessageId.
         * @member {number} minMessageId
         * @memberof chat.CGetChatLog
         * @instance
         */
        CGetChatLog.prototype.minMessageId = 0;

        /**
         * CGetChatLog maxMessageId.
         * @member {number} maxMessageId
         * @memberof chat.CGetChatLog
         * @instance
         */
        CGetChatLog.prototype.maxMessageId = 0;

        /**
         * CGetChatLog lastLoadTimestamp.
         * @member {number|Long} lastLoadTimestamp
         * @memberof chat.CGetChatLog
         * @instance
         */
        CGetChatLog.prototype.lastLoadTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CGetChatLog loadType.
         * @member {number} loadType
         * @memberof chat.CGetChatLog
         * @instance
         */
        CGetChatLog.prototype.loadType = 0;

        /**
         * Creates a new CGetChatLog instance using the specified properties.
         * @function create
         * @memberof chat.CGetChatLog
         * @static
         * @param {chat.ICGetChatLog=} [properties] Properties to set
         * @returns {chat.CGetChatLog} CGetChatLog instance
         */
        CGetChatLog.create = function create(properties) {
            return new CGetChatLog(properties);
        };

        /**
         * Encodes the specified CGetChatLog message. Does not implicitly {@link chat.CGetChatLog.verify|verify} messages.
         * @function encode
         * @memberof chat.CGetChatLog
         * @static
         * @param {chat.ICGetChatLog} message CGetChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetChatLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.minMessageId != null && Object.hasOwnProperty.call(message, "minMessageId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minMessageId);
            if (message.maxMessageId != null && Object.hasOwnProperty.call(message, "maxMessageId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxMessageId);
            if (message.lastLoadTimestamp != null && Object.hasOwnProperty.call(message, "lastLoadTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lastLoadTimestamp);
            if (message.loadType != null && Object.hasOwnProperty.call(message, "loadType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.loadType);
            return writer;
        };

        /**
         * Encodes the specified CGetChatLog message, length delimited. Does not implicitly {@link chat.CGetChatLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.CGetChatLog
         * @static
         * @param {chat.ICGetChatLog} message CGetChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetChatLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGetChatLog message from the specified reader or buffer.
         * @function decode
         * @memberof chat.CGetChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.CGetChatLog} CGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetChatLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.CGetChatLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.minMessageId = reader.int32();
                        break;
                    }
                case 3: {
                        message.maxMessageId = reader.int32();
                        break;
                    }
                case 4: {
                        message.lastLoadTimestamp = reader.int64();
                        break;
                    }
                case 5: {
                        message.loadType = reader.int32();
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
         * Decodes a CGetChatLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.CGetChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.CGetChatLog} CGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetChatLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGetChatLog message.
         * @function verify
         * @memberof chat.CGetChatLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetChatLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.minMessageId != null && message.hasOwnProperty("minMessageId"))
                if (!$util.isInteger(message.minMessageId))
                    return "minMessageId: integer expected";
            if (message.maxMessageId != null && message.hasOwnProperty("maxMessageId"))
                if (!$util.isInteger(message.maxMessageId))
                    return "maxMessageId: integer expected";
            if (message.lastLoadTimestamp != null && message.hasOwnProperty("lastLoadTimestamp"))
                if (!$util.isInteger(message.lastLoadTimestamp) && !(message.lastLoadTimestamp && $util.isInteger(message.lastLoadTimestamp.low) && $util.isInteger(message.lastLoadTimestamp.high)))
                    return "lastLoadTimestamp: integer|Long expected";
            if (message.loadType != null && message.hasOwnProperty("loadType"))
                if (!$util.isInteger(message.loadType))
                    return "loadType: integer expected";
            return null;
        };

        /**
         * Creates a CGetChatLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.CGetChatLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.CGetChatLog} CGetChatLog
         */
        CGetChatLog.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.CGetChatLog)
                return object;
            var message = new $root.chat.CGetChatLog();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.minMessageId != null)
                message.minMessageId = object.minMessageId | 0;
            if (object.maxMessageId != null)
                message.maxMessageId = object.maxMessageId | 0;
            if (object.lastLoadTimestamp != null)
                if ($util.Long)
                    (message.lastLoadTimestamp = $util.Long.fromValue(object.lastLoadTimestamp)).unsigned = false;
                else if (typeof object.lastLoadTimestamp === "string")
                    message.lastLoadTimestamp = parseInt(object.lastLoadTimestamp, 10);
                else if (typeof object.lastLoadTimestamp === "number")
                    message.lastLoadTimestamp = object.lastLoadTimestamp;
                else if (typeof object.lastLoadTimestamp === "object")
                    message.lastLoadTimestamp = new $util.LongBits(object.lastLoadTimestamp.low >>> 0, object.lastLoadTimestamp.high >>> 0).toNumber();
            if (object.loadType != null)
                message.loadType = object.loadType | 0;
            return message;
        };

        /**
         * Creates a plain object from a CGetChatLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.CGetChatLog
         * @static
         * @param {chat.CGetChatLog} message CGetChatLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetChatLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channelId = "";
                object.minMessageId = 0;
                object.maxMessageId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastLoadTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastLoadTimestamp = options.longs === String ? "0" : 0;
                object.loadType = 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.minMessageId != null && message.hasOwnProperty("minMessageId"))
                object.minMessageId = message.minMessageId;
            if (message.maxMessageId != null && message.hasOwnProperty("maxMessageId"))
                object.maxMessageId = message.maxMessageId;
            if (message.lastLoadTimestamp != null && message.hasOwnProperty("lastLoadTimestamp"))
                if (typeof message.lastLoadTimestamp === "number")
                    object.lastLoadTimestamp = options.longs === String ? String(message.lastLoadTimestamp) : message.lastLoadTimestamp;
                else
                    object.lastLoadTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.lastLoadTimestamp) : options.longs === Number ? new $util.LongBits(message.lastLoadTimestamp.low >>> 0, message.lastLoadTimestamp.high >>> 0).toNumber() : message.lastLoadTimestamp;
            if (message.loadType != null && message.hasOwnProperty("loadType"))
                object.loadType = message.loadType;
            return object;
        };

        /**
         * Converts this CGetChatLog to JSON.
         * @function toJSON
         * @memberof chat.CGetChatLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetChatLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CGetChatLog
         * @function getTypeUrl
         * @memberof chat.CGetChatLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGetChatLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.CGetChatLog";
        };

        return CGetChatLog;
    })();

    chat.SGetChatLog = (function() {

        /**
         * Properties of a SGetChatLog.
         * @memberof chat
         * @interface ISGetChatLog
         * @property {Array.<common.IChatMessageInfo>|null} [messages] SGetChatLog messages
         */

        /**
         * Constructs a new SGetChatLog.
         * @memberof chat
         * @classdesc Represents a SGetChatLog.
         * @implements ISGetChatLog
         * @constructor
         * @param {chat.ISGetChatLog=} [properties] Properties to set
         */
        function SGetChatLog(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGetChatLog messages.
         * @member {Array.<common.IChatMessageInfo>} messages
         * @memberof chat.SGetChatLog
         * @instance
         */
        SGetChatLog.prototype.messages = $util.emptyArray;

        /**
         * Creates a new SGetChatLog instance using the specified properties.
         * @function create
         * @memberof chat.SGetChatLog
         * @static
         * @param {chat.ISGetChatLog=} [properties] Properties to set
         * @returns {chat.SGetChatLog} SGetChatLog instance
         */
        SGetChatLog.create = function create(properties) {
            return new SGetChatLog(properties);
        };

        /**
         * Encodes the specified SGetChatLog message. Does not implicitly {@link chat.SGetChatLog.verify|verify} messages.
         * @function encode
         * @memberof chat.SGetChatLog
         * @static
         * @param {chat.ISGetChatLog} message SGetChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetChatLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.common.ChatMessageInfo.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SGetChatLog message, length delimited. Does not implicitly {@link chat.SGetChatLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.SGetChatLog
         * @static
         * @param {chat.ISGetChatLog} message SGetChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetChatLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGetChatLog message from the specified reader or buffer.
         * @function decode
         * @memberof chat.SGetChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.SGetChatLog} SGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetChatLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SGetChatLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.common.ChatMessageInfo.decode(reader, reader.uint32()));
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
         * Decodes a SGetChatLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.SGetChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.SGetChatLog} SGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetChatLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGetChatLog message.
         * @function verify
         * @memberof chat.SGetChatLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGetChatLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.common.ChatMessageInfo.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SGetChatLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.SGetChatLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.SGetChatLog} SGetChatLog
         */
        SGetChatLog.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SGetChatLog)
                return object;
            var message = new $root.chat.SGetChatLog();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".chat.SGetChatLog.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".chat.SGetChatLog.messages: object expected");
                    message.messages[i] = $root.common.ChatMessageInfo.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SGetChatLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.SGetChatLog
         * @static
         * @param {chat.SGetChatLog} message SGetChatLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SGetChatLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.common.ChatMessageInfo.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this SGetChatLog to JSON.
         * @function toJSON
         * @memberof chat.SGetChatLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SGetChatLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SGetChatLog
         * @function getTypeUrl
         * @memberof chat.SGetChatLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SGetChatLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.SGetChatLog";
        };

        return SGetChatLog;
    })();

    chat.CGetChatTips = (function() {

        /**
         * Properties of a CGetChatTips.
         * @memberof chat
         * @interface ICGetChatTips
         * @property {Array.<common.IGetChatTipsParam>|null} [params] CGetChatTips params
         */

        /**
         * Constructs a new CGetChatTips.
         * @memberof chat
         * @classdesc Represents a CGetChatTips.
         * @implements ICGetChatTips
         * @constructor
         * @param {chat.ICGetChatTips=} [properties] Properties to set
         */
        function CGetChatTips(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CGetChatTips params.
         * @member {Array.<common.IGetChatTipsParam>} params
         * @memberof chat.CGetChatTips
         * @instance
         */
        CGetChatTips.prototype.params = $util.emptyArray;

        /**
         * Creates a new CGetChatTips instance using the specified properties.
         * @function create
         * @memberof chat.CGetChatTips
         * @static
         * @param {chat.ICGetChatTips=} [properties] Properties to set
         * @returns {chat.CGetChatTips} CGetChatTips instance
         */
        CGetChatTips.create = function create(properties) {
            return new CGetChatTips(properties);
        };

        /**
         * Encodes the specified CGetChatTips message. Does not implicitly {@link chat.CGetChatTips.verify|verify} messages.
         * @function encode
         * @memberof chat.CGetChatTips
         * @static
         * @param {chat.ICGetChatTips} message CGetChatTips message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetChatTips.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    $root.common.GetChatTipsParam.encode(message.params[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CGetChatTips message, length delimited. Does not implicitly {@link chat.CGetChatTips.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.CGetChatTips
         * @static
         * @param {chat.ICGetChatTips} message CGetChatTips message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetChatTips.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGetChatTips message from the specified reader or buffer.
         * @function decode
         * @memberof chat.CGetChatTips
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.CGetChatTips} CGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetChatTips.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.CGetChatTips();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.params && message.params.length))
                            message.params = [];
                        message.params.push($root.common.GetChatTipsParam.decode(reader, reader.uint32()));
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
         * Decodes a CGetChatTips message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.CGetChatTips
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.CGetChatTips} CGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetChatTips.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGetChatTips message.
         * @function verify
         * @memberof chat.CGetChatTips
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetChatTips.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i) {
                    var error = $root.common.GetChatTipsParam.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CGetChatTips message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.CGetChatTips
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.CGetChatTips} CGetChatTips
         */
        CGetChatTips.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.CGetChatTips)
                return object;
            var message = new $root.chat.CGetChatTips();
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".chat.CGetChatTips.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".chat.CGetChatTips.params: object expected");
                    message.params[i] = $root.common.GetChatTipsParam.fromObject(object.params[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CGetChatTips message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.CGetChatTips
         * @static
         * @param {chat.CGetChatTips} message CGetChatTips
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetChatTips.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = $root.common.GetChatTipsParam.toObject(message.params[j], options);
            }
            return object;
        };

        /**
         * Converts this CGetChatTips to JSON.
         * @function toJSON
         * @memberof chat.CGetChatTips
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetChatTips.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CGetChatTips
         * @function getTypeUrl
         * @memberof chat.CGetChatTips
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGetChatTips.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.CGetChatTips";
        };

        return CGetChatTips;
    })();

    chat.SGetChatTips = (function() {

        /**
         * Properties of a SGetChatTips.
         * @memberof chat
         * @interface ISGetChatTips
         * @property {Array.<common.IChatTipsInfo>|null} [tips] SGetChatTips tips
         */

        /**
         * Constructs a new SGetChatTips.
         * @memberof chat
         * @classdesc Represents a SGetChatTips.
         * @implements ISGetChatTips
         * @constructor
         * @param {chat.ISGetChatTips=} [properties] Properties to set
         */
        function SGetChatTips(properties) {
            this.tips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGetChatTips tips.
         * @member {Array.<common.IChatTipsInfo>} tips
         * @memberof chat.SGetChatTips
         * @instance
         */
        SGetChatTips.prototype.tips = $util.emptyArray;

        /**
         * Creates a new SGetChatTips instance using the specified properties.
         * @function create
         * @memberof chat.SGetChatTips
         * @static
         * @param {chat.ISGetChatTips=} [properties] Properties to set
         * @returns {chat.SGetChatTips} SGetChatTips instance
         */
        SGetChatTips.create = function create(properties) {
            return new SGetChatTips(properties);
        };

        /**
         * Encodes the specified SGetChatTips message. Does not implicitly {@link chat.SGetChatTips.verify|verify} messages.
         * @function encode
         * @memberof chat.SGetChatTips
         * @static
         * @param {chat.ISGetChatTips} message SGetChatTips message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetChatTips.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tips != null && message.tips.length)
                for (var i = 0; i < message.tips.length; ++i)
                    $root.common.ChatTipsInfo.encode(message.tips[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SGetChatTips message, length delimited. Does not implicitly {@link chat.SGetChatTips.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.SGetChatTips
         * @static
         * @param {chat.ISGetChatTips} message SGetChatTips message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetChatTips.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGetChatTips message from the specified reader or buffer.
         * @function decode
         * @memberof chat.SGetChatTips
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.SGetChatTips} SGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetChatTips.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SGetChatTips();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.tips && message.tips.length))
                            message.tips = [];
                        message.tips.push($root.common.ChatTipsInfo.decode(reader, reader.uint32()));
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
         * Decodes a SGetChatTips message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.SGetChatTips
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.SGetChatTips} SGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetChatTips.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGetChatTips message.
         * @function verify
         * @memberof chat.SGetChatTips
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGetChatTips.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tips != null && message.hasOwnProperty("tips")) {
                if (!Array.isArray(message.tips))
                    return "tips: array expected";
                for (var i = 0; i < message.tips.length; ++i) {
                    var error = $root.common.ChatTipsInfo.verify(message.tips[i]);
                    if (error)
                        return "tips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SGetChatTips message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.SGetChatTips
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.SGetChatTips} SGetChatTips
         */
        SGetChatTips.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SGetChatTips)
                return object;
            var message = new $root.chat.SGetChatTips();
            if (object.tips) {
                if (!Array.isArray(object.tips))
                    throw TypeError(".chat.SGetChatTips.tips: array expected");
                message.tips = [];
                for (var i = 0; i < object.tips.length; ++i) {
                    if (typeof object.tips[i] !== "object")
                        throw TypeError(".chat.SGetChatTips.tips: object expected");
                    message.tips[i] = $root.common.ChatTipsInfo.fromObject(object.tips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SGetChatTips message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.SGetChatTips
         * @static
         * @param {chat.SGetChatTips} message SGetChatTips
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SGetChatTips.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tips = [];
            if (message.tips && message.tips.length) {
                object.tips = [];
                for (var j = 0; j < message.tips.length; ++j)
                    object.tips[j] = $root.common.ChatTipsInfo.toObject(message.tips[j], options);
            }
            return object;
        };

        /**
         * Converts this SGetChatTips to JSON.
         * @function toJSON
         * @memberof chat.SGetChatTips
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SGetChatTips.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SGetChatTips
         * @function getTypeUrl
         * @memberof chat.SGetChatTips
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SGetChatTips.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.SGetChatTips";
        };

        return SGetChatTips;
    })();

    return chat;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * ChannelType enum.
     * @name common.ChannelType
     * @enum {number}
     * @property {number} CHANNEL_INVALID=0 CHANNEL_INVALID value
     * @property {number} CHANNEL_PRIVATE=1 CHANNEL_PRIVATE value
     * @property {number} CHANNEL_GUILD=2 CHANNEL_GUILD value
     * @property {number} CHANNEL_TEAM=3 CHANNEL_TEAM value
     * @property {number} CHANNEL_WORLD=4 CHANNEL_WORLD value
     */
    common.ChannelType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CHANNEL_INVALID"] = 0;
        values[valuesById[1] = "CHANNEL_PRIVATE"] = 1;
        values[valuesById[2] = "CHANNEL_GUILD"] = 2;
        values[valuesById[3] = "CHANNEL_TEAM"] = 3;
        values[valuesById[4] = "CHANNEL_WORLD"] = 4;
        return values;
    })();

    /**
     * ContentType enum.
     * @name common.ContentType
     * @enum {number}
     * @property {number} CONTENT_INVALID=0 CONTENT_INVALID value
     * @property {number} CONTENT_TEXT=1 CONTENT_TEXT value
     * @property {number} CONTENT_IMAGE=2 CONTENT_IMAGE value
     * @property {number} CONTENT_CARD=3 CONTENT_CARD value
     * @property {number} CONTENT_AUDIO=4 CONTENT_AUDIO value
     * @property {number} CONTENT_VEDIO=5 CONTENT_VEDIO value
     * @property {number} CONTENT_EMOJI=6 CONTENT_EMOJI value
     */
    common.ContentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONTENT_INVALID"] = 0;
        values[valuesById[1] = "CONTENT_TEXT"] = 1;
        values[valuesById[2] = "CONTENT_IMAGE"] = 2;
        values[valuesById[3] = "CONTENT_CARD"] = 3;
        values[valuesById[4] = "CONTENT_AUDIO"] = 4;
        values[valuesById[5] = "CONTENT_VEDIO"] = 5;
        values[valuesById[6] = "CONTENT_EMOJI"] = 6;
        return values;
    })();

    /**
     * MessageLoadType enum.
     * @name common.MessageLoadType
     * @enum {number}
     * @property {number} BACKWORD=0 BACKWORD value
     * @property {number} FORWORD=1 FORWORD value
     */
    common.MessageLoadType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BACKWORD"] = 0;
        values[valuesById[1] = "FORWORD"] = 1;
        return values;
    })();

    /**
     * ChatType enum.
     * @name common.ChatType
     * @enum {number}
     * @property {number} CHAT_TYPE_UNKONOWN=0 CHAT_TYPE_UNKONOWN value
     * @property {number} CHAT_TYPE_USER_MESSAGE=1 CHAT_TYPE_USER_MESSAGE value
     * @property {number} CHAT_TYPE_SYSTEM_MESSAGE=2 CHAT_TYPE_SYSTEM_MESSAGE value
     * @property {number} CHAT_TYPE_GUILD_NOTICE=3 CHAT_TYPE_GUILD_NOTICE value
     */
    common.ChatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CHAT_TYPE_UNKONOWN"] = 0;
        values[valuesById[1] = "CHAT_TYPE_USER_MESSAGE"] = 1;
        values[valuesById[2] = "CHAT_TYPE_SYSTEM_MESSAGE"] = 2;
        values[valuesById[3] = "CHAT_TYPE_GUILD_NOTICE"] = 3;
        return values;
    })();

    /**
     * ChatChannelType enum.
     * @name common.ChatChannelType
     * @enum {number}
     * @property {number} CHAT_CHANNEL_TYPE_UNKNOWN=0 CHAT_CHANNEL_TYPE_UNKNOWN value
     * @property {number} CHAT_CHANNEL_TYPE_WORLD=1 CHAT_CHANNEL_TYPE_WORLD value
     * @property {number} CHAT_CHANNEL_TYPE_PRIVATE=2 CHAT_CHANNEL_TYPE_PRIVATE value
     * @property {number} CHAT_CHANNEL_TYPE_GUILD=3 CHAT_CHANNEL_TYPE_GUILD value
     */
    common.ChatChannelType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CHAT_CHANNEL_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "CHAT_CHANNEL_TYPE_WORLD"] = 1;
        values[valuesById[2] = "CHAT_CHANNEL_TYPE_PRIVATE"] = 2;
        values[valuesById[3] = "CHAT_CHANNEL_TYPE_GUILD"] = 3;
        return values;
    })();

    /**
     * ChatItemType enum.
     * @name common.ChatItemType
     * @enum {number}
     * @property {number} CHAT_ITEM_TYPE_UNKNOWN=0 CHAT_ITEM_TYPE_UNKNOWN value
     * @property {number} CHAT_ITEM_TYPE_NORMAL=1 CHAT_ITEM_TYPE_NORMAL value
     * @property {number} CHAT_ITEM_TYPE_NOTICE=2 CHAT_ITEM_TYPE_NOTICE value
     * @property {number} CHAT_ITEM_TYPE_GUILD_NOTICE=3 CHAT_ITEM_TYPE_GUILD_NOTICE value
     */
    common.ChatItemType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CHAT_ITEM_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "CHAT_ITEM_TYPE_NORMAL"] = 1;
        values[valuesById[2] = "CHAT_ITEM_TYPE_NOTICE"] = 2;
        values[valuesById[3] = "CHAT_ITEM_TYPE_GUILD_NOTICE"] = 3;
        return values;
    })();

    common.GetChatTipsParam = (function() {

        /**
         * Properties of a GetChatTipsParam.
         * @memberof common
         * @interface IGetChatTipsParam
         * @property {string|null} [channelId] GetChatTipsParam channelId
         * @property {number|null} [maxReadedMessageId] GetChatTipsParam maxReadedMessageId
         */

        /**
         * Constructs a new GetChatTipsParam.
         * @memberof common
         * @classdesc Represents a GetChatTipsParam.
         * @implements IGetChatTipsParam
         * @constructor
         * @param {common.IGetChatTipsParam=} [properties] Properties to set
         */
        function GetChatTipsParam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetChatTipsParam channelId.
         * @member {string} channelId
         * @memberof common.GetChatTipsParam
         * @instance
         */
        GetChatTipsParam.prototype.channelId = "";

        /**
         * GetChatTipsParam maxReadedMessageId.
         * @member {number} maxReadedMessageId
         * @memberof common.GetChatTipsParam
         * @instance
         */
        GetChatTipsParam.prototype.maxReadedMessageId = 0;

        /**
         * Creates a new GetChatTipsParam instance using the specified properties.
         * @function create
         * @memberof common.GetChatTipsParam
         * @static
         * @param {common.IGetChatTipsParam=} [properties] Properties to set
         * @returns {common.GetChatTipsParam} GetChatTipsParam instance
         */
        GetChatTipsParam.create = function create(properties) {
            return new GetChatTipsParam(properties);
        };

        /**
         * Encodes the specified GetChatTipsParam message. Does not implicitly {@link common.GetChatTipsParam.verify|verify} messages.
         * @function encode
         * @memberof common.GetChatTipsParam
         * @static
         * @param {common.IGetChatTipsParam} message GetChatTipsParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChatTipsParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.maxReadedMessageId != null && Object.hasOwnProperty.call(message, "maxReadedMessageId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxReadedMessageId);
            return writer;
        };

        /**
         * Encodes the specified GetChatTipsParam message, length delimited. Does not implicitly {@link common.GetChatTipsParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GetChatTipsParam
         * @static
         * @param {common.IGetChatTipsParam} message GetChatTipsParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChatTipsParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetChatTipsParam message from the specified reader or buffer.
         * @function decode
         * @memberof common.GetChatTipsParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GetChatTipsParam} GetChatTipsParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChatTipsParam.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GetChatTipsParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.maxReadedMessageId = reader.int32();
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
         * Decodes a GetChatTipsParam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GetChatTipsParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GetChatTipsParam} GetChatTipsParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChatTipsParam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetChatTipsParam message.
         * @function verify
         * @memberof common.GetChatTipsParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetChatTipsParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.maxReadedMessageId != null && message.hasOwnProperty("maxReadedMessageId"))
                if (!$util.isInteger(message.maxReadedMessageId))
                    return "maxReadedMessageId: integer expected";
            return null;
        };

        /**
         * Creates a GetChatTipsParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GetChatTipsParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GetChatTipsParam} GetChatTipsParam
         */
        GetChatTipsParam.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GetChatTipsParam)
                return object;
            var message = new $root.common.GetChatTipsParam();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.maxReadedMessageId != null)
                message.maxReadedMessageId = object.maxReadedMessageId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetChatTipsParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GetChatTipsParam
         * @static
         * @param {common.GetChatTipsParam} message GetChatTipsParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetChatTipsParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channelId = "";
                object.maxReadedMessageId = 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.maxReadedMessageId != null && message.hasOwnProperty("maxReadedMessageId"))
                object.maxReadedMessageId = message.maxReadedMessageId;
            return object;
        };

        /**
         * Converts this GetChatTipsParam to JSON.
         * @function toJSON
         * @memberof common.GetChatTipsParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetChatTipsParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetChatTipsParam
         * @function getTypeUrl
         * @memberof common.GetChatTipsParam
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetChatTipsParam.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GetChatTipsParam";
        };

        return GetChatTipsParam;
    })();

    common.ChatTipsInfo = (function() {

        /**
         * Properties of a ChatTipsInfo.
         * @memberof common
         * @interface IChatTipsInfo
         * @property {string|null} [channelId] ChatTipsInfo channelId
         * @property {number|null} [newMessageCount] ChatTipsInfo newMessageCount
         */

        /**
         * Constructs a new ChatTipsInfo.
         * @memberof common
         * @classdesc Represents a ChatTipsInfo.
         * @implements IChatTipsInfo
         * @constructor
         * @param {common.IChatTipsInfo=} [properties] Properties to set
         */
        function ChatTipsInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatTipsInfo channelId.
         * @member {string} channelId
         * @memberof common.ChatTipsInfo
         * @instance
         */
        ChatTipsInfo.prototype.channelId = "";

        /**
         * ChatTipsInfo newMessageCount.
         * @member {number} newMessageCount
         * @memberof common.ChatTipsInfo
         * @instance
         */
        ChatTipsInfo.prototype.newMessageCount = 0;

        /**
         * Creates a new ChatTipsInfo instance using the specified properties.
         * @function create
         * @memberof common.ChatTipsInfo
         * @static
         * @param {common.IChatTipsInfo=} [properties] Properties to set
         * @returns {common.ChatTipsInfo} ChatTipsInfo instance
         */
        ChatTipsInfo.create = function create(properties) {
            return new ChatTipsInfo(properties);
        };

        /**
         * Encodes the specified ChatTipsInfo message. Does not implicitly {@link common.ChatTipsInfo.verify|verify} messages.
         * @function encode
         * @memberof common.ChatTipsInfo
         * @static
         * @param {common.IChatTipsInfo} message ChatTipsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatTipsInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.newMessageCount != null && Object.hasOwnProperty.call(message, "newMessageCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.newMessageCount);
            return writer;
        };

        /**
         * Encodes the specified ChatTipsInfo message, length delimited. Does not implicitly {@link common.ChatTipsInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ChatTipsInfo
         * @static
         * @param {common.IChatTipsInfo} message ChatTipsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatTipsInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatTipsInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.ChatTipsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ChatTipsInfo} ChatTipsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatTipsInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ChatTipsInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.newMessageCount = reader.int32();
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
         * Decodes a ChatTipsInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ChatTipsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ChatTipsInfo} ChatTipsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatTipsInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatTipsInfo message.
         * @function verify
         * @memberof common.ChatTipsInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatTipsInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.newMessageCount != null && message.hasOwnProperty("newMessageCount"))
                if (!$util.isInteger(message.newMessageCount))
                    return "newMessageCount: integer expected";
            return null;
        };

        /**
         * Creates a ChatTipsInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ChatTipsInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ChatTipsInfo} ChatTipsInfo
         */
        ChatTipsInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ChatTipsInfo)
                return object;
            var message = new $root.common.ChatTipsInfo();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.newMessageCount != null)
                message.newMessageCount = object.newMessageCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChatTipsInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ChatTipsInfo
         * @static
         * @param {common.ChatTipsInfo} message ChatTipsInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatTipsInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channelId = "";
                object.newMessageCount = 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.newMessageCount != null && message.hasOwnProperty("newMessageCount"))
                object.newMessageCount = message.newMessageCount;
            return object;
        };

        /**
         * Converts this ChatTipsInfo to JSON.
         * @function toJSON
         * @memberof common.ChatTipsInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatTipsInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatTipsInfo
         * @function getTypeUrl
         * @memberof common.ChatTipsInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatTipsInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ChatTipsInfo";
        };

        return ChatTipsInfo;
    })();

    common.ChatSenderInfo = (function() {

        /**
         * Properties of a ChatSenderInfo.
         * @memberof common
         * @interface IChatSenderInfo
         * @property {string|null} [uid] ChatSenderInfo uid
         * @property {string|null} [name] ChatSenderInfo name
         * @property {string|null} [avatar] ChatSenderInfo avatar
         * @property {string|null} [extra] ChatSenderInfo extra
         */

        /**
         * Constructs a new ChatSenderInfo.
         * @memberof common
         * @classdesc Represents a ChatSenderInfo.
         * @implements IChatSenderInfo
         * @constructor
         * @param {common.IChatSenderInfo=} [properties] Properties to set
         */
        function ChatSenderInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatSenderInfo uid.
         * @member {string} uid
         * @memberof common.ChatSenderInfo
         * @instance
         */
        ChatSenderInfo.prototype.uid = "";

        /**
         * ChatSenderInfo name.
         * @member {string} name
         * @memberof common.ChatSenderInfo
         * @instance
         */
        ChatSenderInfo.prototype.name = "";

        /**
         * ChatSenderInfo avatar.
         * @member {string} avatar
         * @memberof common.ChatSenderInfo
         * @instance
         */
        ChatSenderInfo.prototype.avatar = "";

        /**
         * ChatSenderInfo extra.
         * @member {string} extra
         * @memberof common.ChatSenderInfo
         * @instance
         */
        ChatSenderInfo.prototype.extra = "";

        /**
         * Creates a new ChatSenderInfo instance using the specified properties.
         * @function create
         * @memberof common.ChatSenderInfo
         * @static
         * @param {common.IChatSenderInfo=} [properties] Properties to set
         * @returns {common.ChatSenderInfo} ChatSenderInfo instance
         */
        ChatSenderInfo.create = function create(properties) {
            return new ChatSenderInfo(properties);
        };

        /**
         * Encodes the specified ChatSenderInfo message. Does not implicitly {@link common.ChatSenderInfo.verify|verify} messages.
         * @function encode
         * @memberof common.ChatSenderInfo
         * @static
         * @param {common.IChatSenderInfo} message ChatSenderInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatSenderInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified ChatSenderInfo message, length delimited. Does not implicitly {@link common.ChatSenderInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ChatSenderInfo
         * @static
         * @param {common.IChatSenderInfo} message ChatSenderInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatSenderInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatSenderInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.ChatSenderInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ChatSenderInfo} ChatSenderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatSenderInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ChatSenderInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.avatar = reader.string();
                        break;
                    }
                case 4: {
                        message.extra = reader.string();
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
         * Decodes a ChatSenderInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ChatSenderInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ChatSenderInfo} ChatSenderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatSenderInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatSenderInfo message.
         * @function verify
         * @memberof common.ChatSenderInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatSenderInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a ChatSenderInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ChatSenderInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ChatSenderInfo} ChatSenderInfo
         */
        ChatSenderInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ChatSenderInfo)
                return object;
            var message = new $root.common.ChatSenderInfo();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a ChatSenderInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ChatSenderInfo
         * @static
         * @param {common.ChatSenderInfo} message ChatSenderInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatSenderInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.name = "";
                object.avatar = "";
                object.extra = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this ChatSenderInfo to JSON.
         * @function toJSON
         * @memberof common.ChatSenderInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatSenderInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatSenderInfo
         * @function getTypeUrl
         * @memberof common.ChatSenderInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatSenderInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ChatSenderInfo";
        };

        return ChatSenderInfo;
    })();

    common.ChatContentInfo = (function() {

        /**
         * Properties of a ChatContentInfo.
         * @memberof common
         * @interface IChatContentInfo
         * @property {common.ContentType|null} [type] ChatContentInfo type
         * @property {string|null} [content] ChatContentInfo content
         */

        /**
         * Constructs a new ChatContentInfo.
         * @memberof common
         * @classdesc Represents a ChatContentInfo.
         * @implements IChatContentInfo
         * @constructor
         * @param {common.IChatContentInfo=} [properties] Properties to set
         */
        function ChatContentInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatContentInfo type.
         * @member {common.ContentType} type
         * @memberof common.ChatContentInfo
         * @instance
         */
        ChatContentInfo.prototype.type = 0;

        /**
         * ChatContentInfo content.
         * @member {string} content
         * @memberof common.ChatContentInfo
         * @instance
         */
        ChatContentInfo.prototype.content = "";

        /**
         * Creates a new ChatContentInfo instance using the specified properties.
         * @function create
         * @memberof common.ChatContentInfo
         * @static
         * @param {common.IChatContentInfo=} [properties] Properties to set
         * @returns {common.ChatContentInfo} ChatContentInfo instance
         */
        ChatContentInfo.create = function create(properties) {
            return new ChatContentInfo(properties);
        };

        /**
         * Encodes the specified ChatContentInfo message. Does not implicitly {@link common.ChatContentInfo.verify|verify} messages.
         * @function encode
         * @memberof common.ChatContentInfo
         * @static
         * @param {common.IChatContentInfo} message ChatContentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatContentInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified ChatContentInfo message, length delimited. Does not implicitly {@link common.ChatContentInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ChatContentInfo
         * @static
         * @param {common.IChatContentInfo} message ChatContentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatContentInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatContentInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.ChatContentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ChatContentInfo} ChatContentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatContentInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ChatContentInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
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
         * Decodes a ChatContentInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ChatContentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ChatContentInfo} ChatContentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatContentInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatContentInfo message.
         * @function verify
         * @memberof common.ChatContentInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatContentInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a ChatContentInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ChatContentInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ChatContentInfo} ChatContentInfo
         */
        ChatContentInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ChatContentInfo)
                return object;
            var message = new $root.common.ChatContentInfo();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "CONTENT_INVALID":
            case 0:
                message.type = 0;
                break;
            case "CONTENT_TEXT":
            case 1:
                message.type = 1;
                break;
            case "CONTENT_IMAGE":
            case 2:
                message.type = 2;
                break;
            case "CONTENT_CARD":
            case 3:
                message.type = 3;
                break;
            case "CONTENT_AUDIO":
            case 4:
                message.type = 4;
                break;
            case "CONTENT_VEDIO":
            case 5:
                message.type = 5;
                break;
            case "CONTENT_EMOJI":
            case 6:
                message.type = 6;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatContentInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ChatContentInfo
         * @static
         * @param {common.ChatContentInfo} message ChatContentInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatContentInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "CONTENT_INVALID" : 0;
                object.content = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.common.ContentType[message.type] === undefined ? message.type : $root.common.ContentType[message.type] : message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this ChatContentInfo to JSON.
         * @function toJSON
         * @memberof common.ChatContentInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatContentInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatContentInfo
         * @function getTypeUrl
         * @memberof common.ChatContentInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatContentInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ChatContentInfo";
        };

        return ChatContentInfo;
    })();

    common.ChatMessageInfo = (function() {

        /**
         * Properties of a ChatMessageInfo.
         * @memberof common
         * @interface IChatMessageInfo
         * @property {number|null} [messageId] ChatMessageInfo messageId
         * @property {common.IChatSenderInfo|null} [sender] ChatMessageInfo sender
         * @property {common.IChatContentInfo|null} [content] ChatMessageInfo content
         * @property {number|null} [timestamp] ChatMessageInfo timestamp
         * @property {common.ChatType|null} [chatType] ChatMessageInfo chatType
         * @property {string|null} [channelId] ChatMessageInfo channelId
         */

        /**
         * Constructs a new ChatMessageInfo.
         * @memberof common
         * @classdesc Represents a ChatMessageInfo.
         * @implements IChatMessageInfo
         * @constructor
         * @param {common.IChatMessageInfo=} [properties] Properties to set
         */
        function ChatMessageInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMessageInfo messageId.
         * @member {number} messageId
         * @memberof common.ChatMessageInfo
         * @instance
         */
        ChatMessageInfo.prototype.messageId = 0;

        /**
         * ChatMessageInfo sender.
         * @member {common.IChatSenderInfo|null|undefined} sender
         * @memberof common.ChatMessageInfo
         * @instance
         */
        ChatMessageInfo.prototype.sender = null;

        /**
         * ChatMessageInfo content.
         * @member {common.IChatContentInfo|null|undefined} content
         * @memberof common.ChatMessageInfo
         * @instance
         */
        ChatMessageInfo.prototype.content = null;

        /**
         * ChatMessageInfo timestamp.
         * @member {number} timestamp
         * @memberof common.ChatMessageInfo
         * @instance
         */
        ChatMessageInfo.prototype.timestamp = 0;

        /**
         * ChatMessageInfo chatType.
         * @member {common.ChatType} chatType
         * @memberof common.ChatMessageInfo
         * @instance
         */
        ChatMessageInfo.prototype.chatType = 0;

        /**
         * ChatMessageInfo channelId.
         * @member {string} channelId
         * @memberof common.ChatMessageInfo
         * @instance
         */
        ChatMessageInfo.prototype.channelId = "";

        /**
         * Creates a new ChatMessageInfo instance using the specified properties.
         * @function create
         * @memberof common.ChatMessageInfo
         * @static
         * @param {common.IChatMessageInfo=} [properties] Properties to set
         * @returns {common.ChatMessageInfo} ChatMessageInfo instance
         */
        ChatMessageInfo.create = function create(properties) {
            return new ChatMessageInfo(properties);
        };

        /**
         * Encodes the specified ChatMessageInfo message. Does not implicitly {@link common.ChatMessageInfo.verify|verify} messages.
         * @function encode
         * @memberof common.ChatMessageInfo
         * @static
         * @param {common.IChatMessageInfo} message ChatMessageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageId);
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                $root.common.ChatSenderInfo.encode(message.sender, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                $root.common.ChatContentInfo.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timestamp);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.chatType);
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.channelId);
            return writer;
        };

        /**
         * Encodes the specified ChatMessageInfo message, length delimited. Does not implicitly {@link common.ChatMessageInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ChatMessageInfo
         * @static
         * @param {common.IChatMessageInfo} message ChatMessageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatMessageInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.ChatMessageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ChatMessageInfo} ChatMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ChatMessageInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.messageId = reader.int32();
                        break;
                    }
                case 2: {
                        message.sender = $root.common.ChatSenderInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.content = $root.common.ChatContentInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.timestamp = reader.int32();
                        break;
                    }
                case 5: {
                        message.chatType = reader.int32();
                        break;
                    }
                case 6: {
                        message.channelId = reader.string();
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
         * Decodes a ChatMessageInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ChatMessageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ChatMessageInfo} ChatMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessageInfo message.
         * @function verify
         * @memberof common.ChatMessageInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessageInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId))
                    return "messageId: integer expected";
            if (message.sender != null && message.hasOwnProperty("sender")) {
                var error = $root.common.ChatSenderInfo.verify(message.sender);
                if (error)
                    return "sender." + error;
            }
            if (message.content != null && message.hasOwnProperty("content")) {
                var error = $root.common.ChatContentInfo.verify(message.content);
                if (error)
                    return "content." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                switch (message.chatType) {
                default:
                    return "chatType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            return null;
        };

        /**
         * Creates a ChatMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ChatMessageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ChatMessageInfo} ChatMessageInfo
         */
        ChatMessageInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ChatMessageInfo)
                return object;
            var message = new $root.common.ChatMessageInfo();
            if (object.messageId != null)
                message.messageId = object.messageId | 0;
            if (object.sender != null) {
                if (typeof object.sender !== "object")
                    throw TypeError(".common.ChatMessageInfo.sender: object expected");
                message.sender = $root.common.ChatSenderInfo.fromObject(object.sender);
            }
            if (object.content != null) {
                if (typeof object.content !== "object")
                    throw TypeError(".common.ChatMessageInfo.content: object expected");
                message.content = $root.common.ChatContentInfo.fromObject(object.content);
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            switch (object.chatType) {
            default:
                if (typeof object.chatType === "number") {
                    message.chatType = object.chatType;
                    break;
                }
                break;
            case "CHAT_TYPE_UNKONOWN":
            case 0:
                message.chatType = 0;
                break;
            case "CHAT_TYPE_USER_MESSAGE":
            case 1:
                message.chatType = 1;
                break;
            case "CHAT_TYPE_SYSTEM_MESSAGE":
            case 2:
                message.chatType = 2;
                break;
            case "CHAT_TYPE_GUILD_NOTICE":
            case 3:
                message.chatType = 3;
                break;
            }
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            return message;
        };

        /**
         * Creates a plain object from a ChatMessageInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ChatMessageInfo
         * @static
         * @param {common.ChatMessageInfo} message ChatMessageInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessageInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageId = 0;
                object.sender = null;
                object.content = null;
                object.timestamp = 0;
                object.chatType = options.enums === String ? "CHAT_TYPE_UNKONOWN" : 0;
                object.channelId = "";
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = $root.common.ChatSenderInfo.toObject(message.sender, options);
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = $root.common.ChatContentInfo.toObject(message.content, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                object.chatType = options.enums === String ? $root.common.ChatType[message.chatType] === undefined ? message.chatType : $root.common.ChatType[message.chatType] : message.chatType;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            return object;
        };

        /**
         * Converts this ChatMessageInfo to JSON.
         * @function toJSON
         * @memberof common.ChatMessageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatMessageInfo
         * @function getTypeUrl
         * @memberof common.ChatMessageInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatMessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ChatMessageInfo";
        };

        return ChatMessageInfo;
    })();

    return common;
})();

module.exports = $root;
