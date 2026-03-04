/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gate = (function() {

    /**
     * Namespace gate.
     * @exports gate
     * @namespace
     */
    var gate = {};

    gate.CKickPlayer = (function() {

        /**
         * Properties of a CKickPlayer.
         * @memberof gate
         * @interface ICKickPlayer
         * @property {number|Long|null} [playerId] CKickPlayer playerId
         * @property {common.KickPlayerReason|null} [reason] CKickPlayer reason
         */

        /**
         * Constructs a new CKickPlayer.
         * @memberof gate
         * @classdesc Represents a CKickPlayer.
         * @implements ICKickPlayer
         * @constructor
         * @param {gate.ICKickPlayer=} [properties] Properties to set
         */
        function CKickPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CKickPlayer playerId.
         * @member {number|Long} playerId
         * @memberof gate.CKickPlayer
         * @instance
         */
        CKickPlayer.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CKickPlayer reason.
         * @member {common.KickPlayerReason} reason
         * @memberof gate.CKickPlayer
         * @instance
         */
        CKickPlayer.prototype.reason = 0;

        /**
         * Creates a new CKickPlayer instance using the specified properties.
         * @function create
         * @memberof gate.CKickPlayer
         * @static
         * @param {gate.ICKickPlayer=} [properties] Properties to set
         * @returns {gate.CKickPlayer} CKickPlayer instance
         */
        CKickPlayer.create = function create(properties) {
            return new CKickPlayer(properties);
        };

        /**
         * Encodes the specified CKickPlayer message. Does not implicitly {@link gate.CKickPlayer.verify|verify} messages.
         * @function encode
         * @memberof gate.CKickPlayer
         * @static
         * @param {gate.ICKickPlayer} message CKickPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CKickPlayer message, length delimited. Does not implicitly {@link gate.CKickPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.CKickPlayer
         * @static
         * @param {gate.ICKickPlayer} message CKickPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CKickPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof gate.CKickPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.CKickPlayer} CKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickPlayer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.CKickPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int64();
                        break;
                    }
                case 2: {
                        message.reason = reader.int32();
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
         * Decodes a CKickPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.CKickPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.CKickPlayer} CKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CKickPlayer message.
         * @function verify
         * @memberof gate.CKickPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CKickPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a CKickPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.CKickPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.CKickPlayer} CKickPlayer
         */
        CKickPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.CKickPlayer)
                return object;
            var message = new $root.gate.CKickPlayer();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            switch (object.reason) {
            default:
                if (typeof object.reason === "number") {
                    message.reason = object.reason;
                    break;
                }
                break;
            case "ClientLeave":
            case 0:
                message.reason = 0;
                break;
            case "DuplicateLogin":
            case 1:
                message.reason = 1;
                break;
            case "ServerShutdown":
            case 2:
                message.reason = 2;
                break;
            case "GMKick":
            case 3:
                message.reason = 3;
                break;
            case "Banned":
            case 4:
                message.reason = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CKickPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.CKickPlayer
         * @static
         * @param {gate.CKickPlayer} message CKickPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CKickPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.reason = options.enums === String ? "ClientLeave" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.common.KickPlayerReason[message.reason] === undefined ? message.reason : $root.common.KickPlayerReason[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this CKickPlayer to JSON.
         * @function toJSON
         * @memberof gate.CKickPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CKickPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CKickPlayer
         * @function getTypeUrl
         * @memberof gate.CKickPlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CKickPlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.CKickPlayer";
        };

        return CKickPlayer;
    })();

    gate.SKickPlayer = (function() {

        /**
         * Properties of a SKickPlayer.
         * @memberof gate
         * @interface ISKickPlayer
         */

        /**
         * Constructs a new SKickPlayer.
         * @memberof gate
         * @classdesc Represents a SKickPlayer.
         * @implements ISKickPlayer
         * @constructor
         * @param {gate.ISKickPlayer=} [properties] Properties to set
         */
        function SKickPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SKickPlayer instance using the specified properties.
         * @function create
         * @memberof gate.SKickPlayer
         * @static
         * @param {gate.ISKickPlayer=} [properties] Properties to set
         * @returns {gate.SKickPlayer} SKickPlayer instance
         */
        SKickPlayer.create = function create(properties) {
            return new SKickPlayer(properties);
        };

        /**
         * Encodes the specified SKickPlayer message. Does not implicitly {@link gate.SKickPlayer.verify|verify} messages.
         * @function encode
         * @memberof gate.SKickPlayer
         * @static
         * @param {gate.ISKickPlayer} message SKickPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SKickPlayer message, length delimited. Does not implicitly {@link gate.SKickPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.SKickPlayer
         * @static
         * @param {gate.ISKickPlayer} message SKickPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SKickPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof gate.SKickPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.SKickPlayer} SKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickPlayer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.SKickPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SKickPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.SKickPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.SKickPlayer} SKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SKickPlayer message.
         * @function verify
         * @memberof gate.SKickPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SKickPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SKickPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.SKickPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.SKickPlayer} SKickPlayer
         */
        SKickPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.SKickPlayer)
                return object;
            return new $root.gate.SKickPlayer();
        };

        /**
         * Creates a plain object from a SKickPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.SKickPlayer
         * @static
         * @param {gate.SKickPlayer} message SKickPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SKickPlayer.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SKickPlayer to JSON.
         * @function toJSON
         * @memberof gate.SKickPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SKickPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SKickPlayer
         * @function getTypeUrl
         * @memberof gate.SKickPlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SKickPlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.SKickPlayer";
        };

        return SKickPlayer;
    })();

    gate.CKickGamePlayers = (function() {

        /**
         * Properties of a CKickGamePlayers.
         * @memberof gate
         * @interface ICKickGamePlayers
         * @property {number|null} [serverId] CKickGamePlayers serverId
         * @property {common.KickPlayerReason|null} [reason] CKickGamePlayers reason
         */

        /**
         * Constructs a new CKickGamePlayers.
         * @memberof gate
         * @classdesc Represents a CKickGamePlayers.
         * @implements ICKickGamePlayers
         * @constructor
         * @param {gate.ICKickGamePlayers=} [properties] Properties to set
         */
        function CKickGamePlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CKickGamePlayers serverId.
         * @member {number} serverId
         * @memberof gate.CKickGamePlayers
         * @instance
         */
        CKickGamePlayers.prototype.serverId = 0;

        /**
         * CKickGamePlayers reason.
         * @member {common.KickPlayerReason} reason
         * @memberof gate.CKickGamePlayers
         * @instance
         */
        CKickGamePlayers.prototype.reason = 0;

        /**
         * Creates a new CKickGamePlayers instance using the specified properties.
         * @function create
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {gate.ICKickGamePlayers=} [properties] Properties to set
         * @returns {gate.CKickGamePlayers} CKickGamePlayers instance
         */
        CKickGamePlayers.create = function create(properties) {
            return new CKickGamePlayers(properties);
        };

        /**
         * Encodes the specified CKickGamePlayers message. Does not implicitly {@link gate.CKickGamePlayers.verify|verify} messages.
         * @function encode
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {gate.ICKickGamePlayers} message CKickGamePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickGamePlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CKickGamePlayers message, length delimited. Does not implicitly {@link gate.CKickGamePlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {gate.ICKickGamePlayers} message CKickGamePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickGamePlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CKickGamePlayers message from the specified reader or buffer.
         * @function decode
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.CKickGamePlayers} CKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickGamePlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.CKickGamePlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.serverId = reader.int32();
                        break;
                    }
                case 2: {
                        message.reason = reader.int32();
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
         * Decodes a CKickGamePlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.CKickGamePlayers} CKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickGamePlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CKickGamePlayers message.
         * @function verify
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CKickGamePlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a CKickGamePlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.CKickGamePlayers} CKickGamePlayers
         */
        CKickGamePlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.CKickGamePlayers)
                return object;
            var message = new $root.gate.CKickGamePlayers();
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            switch (object.reason) {
            default:
                if (typeof object.reason === "number") {
                    message.reason = object.reason;
                    break;
                }
                break;
            case "ClientLeave":
            case 0:
                message.reason = 0;
                break;
            case "DuplicateLogin":
            case 1:
                message.reason = 1;
                break;
            case "ServerShutdown":
            case 2:
                message.reason = 2;
                break;
            case "GMKick":
            case 3:
                message.reason = 3;
                break;
            case "Banned":
            case 4:
                message.reason = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CKickGamePlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {gate.CKickGamePlayers} message CKickGamePlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CKickGamePlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverId = 0;
                object.reason = options.enums === String ? "ClientLeave" : 0;
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.common.KickPlayerReason[message.reason] === undefined ? message.reason : $root.common.KickPlayerReason[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this CKickGamePlayers to JSON.
         * @function toJSON
         * @memberof gate.CKickGamePlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CKickGamePlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CKickGamePlayers
         * @function getTypeUrl
         * @memberof gate.CKickGamePlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CKickGamePlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.CKickGamePlayers";
        };

        return CKickGamePlayers;
    })();

    gate.SKickGamePlayers = (function() {

        /**
         * Properties of a SKickGamePlayers.
         * @memberof gate
         * @interface ISKickGamePlayers
         */

        /**
         * Constructs a new SKickGamePlayers.
         * @memberof gate
         * @classdesc Represents a SKickGamePlayers.
         * @implements ISKickGamePlayers
         * @constructor
         * @param {gate.ISKickGamePlayers=} [properties] Properties to set
         */
        function SKickGamePlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SKickGamePlayers instance using the specified properties.
         * @function create
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {gate.ISKickGamePlayers=} [properties] Properties to set
         * @returns {gate.SKickGamePlayers} SKickGamePlayers instance
         */
        SKickGamePlayers.create = function create(properties) {
            return new SKickGamePlayers(properties);
        };

        /**
         * Encodes the specified SKickGamePlayers message. Does not implicitly {@link gate.SKickGamePlayers.verify|verify} messages.
         * @function encode
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {gate.ISKickGamePlayers} message SKickGamePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickGamePlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SKickGamePlayers message, length delimited. Does not implicitly {@link gate.SKickGamePlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {gate.ISKickGamePlayers} message SKickGamePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickGamePlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SKickGamePlayers message from the specified reader or buffer.
         * @function decode
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.SKickGamePlayers} SKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickGamePlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.SKickGamePlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SKickGamePlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.SKickGamePlayers} SKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickGamePlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SKickGamePlayers message.
         * @function verify
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SKickGamePlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SKickGamePlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.SKickGamePlayers} SKickGamePlayers
         */
        SKickGamePlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.SKickGamePlayers)
                return object;
            return new $root.gate.SKickGamePlayers();
        };

        /**
         * Creates a plain object from a SKickGamePlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {gate.SKickGamePlayers} message SKickGamePlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SKickGamePlayers.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SKickGamePlayers to JSON.
         * @function toJSON
         * @memberof gate.SKickGamePlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SKickGamePlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SKickGamePlayers
         * @function getTypeUrl
         * @memberof gate.SKickGamePlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SKickGamePlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.SKickGamePlayers";
        };

        return SKickGamePlayers;
    })();

    gate.CBroadcastMessage = (function() {

        /**
         * Properties of a CBroadcastMessage.
         * @memberof gate
         * @interface ICBroadcastMessage
         * @property {string|null} [msgType] CBroadcastMessage msgType
         * @property {Uint8Array|null} [msgBody] CBroadcastMessage msgBody
         */

        /**
         * Constructs a new CBroadcastMessage.
         * @memberof gate
         * @classdesc Represents a CBroadcastMessage.
         * @implements ICBroadcastMessage
         * @constructor
         * @param {gate.ICBroadcastMessage=} [properties] Properties to set
         */
        function CBroadcastMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CBroadcastMessage msgType.
         * @member {string} msgType
         * @memberof gate.CBroadcastMessage
         * @instance
         */
        CBroadcastMessage.prototype.msgType = "";

        /**
         * CBroadcastMessage msgBody.
         * @member {Uint8Array} msgBody
         * @memberof gate.CBroadcastMessage
         * @instance
         */
        CBroadcastMessage.prototype.msgBody = $util.newBuffer([]);

        /**
         * Creates a new CBroadcastMessage instance using the specified properties.
         * @function create
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {gate.ICBroadcastMessage=} [properties] Properties to set
         * @returns {gate.CBroadcastMessage} CBroadcastMessage instance
         */
        CBroadcastMessage.create = function create(properties) {
            return new CBroadcastMessage(properties);
        };

        /**
         * Encodes the specified CBroadcastMessage message. Does not implicitly {@link gate.CBroadcastMessage.verify|verify} messages.
         * @function encode
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {gate.ICBroadcastMessage} message CBroadcastMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBroadcastMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msgType);
            if (message.msgBody != null && Object.hasOwnProperty.call(message, "msgBody"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.msgBody);
            return writer;
        };

        /**
         * Encodes the specified CBroadcastMessage message, length delimited. Does not implicitly {@link gate.CBroadcastMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {gate.ICBroadcastMessage} message CBroadcastMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBroadcastMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CBroadcastMessage message from the specified reader or buffer.
         * @function decode
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.CBroadcastMessage} CBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBroadcastMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.CBroadcastMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.msgType = reader.string();
                        break;
                    }
                case 2: {
                        message.msgBody = reader.bytes();
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
         * Decodes a CBroadcastMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.CBroadcastMessage} CBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBroadcastMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CBroadcastMessage message.
         * @function verify
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CBroadcastMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                if (!$util.isString(message.msgType))
                    return "msgType: string expected";
            if (message.msgBody != null && message.hasOwnProperty("msgBody"))
                if (!(message.msgBody && typeof message.msgBody.length === "number" || $util.isString(message.msgBody)))
                    return "msgBody: buffer expected";
            return null;
        };

        /**
         * Creates a CBroadcastMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.CBroadcastMessage} CBroadcastMessage
         */
        CBroadcastMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.CBroadcastMessage)
                return object;
            var message = new $root.gate.CBroadcastMessage();
            if (object.msgType != null)
                message.msgType = String(object.msgType);
            if (object.msgBody != null)
                if (typeof object.msgBody === "string")
                    $util.base64.decode(object.msgBody, message.msgBody = $util.newBuffer($util.base64.length(object.msgBody)), 0);
                else if (object.msgBody.length >= 0)
                    message.msgBody = object.msgBody;
            return message;
        };

        /**
         * Creates a plain object from a CBroadcastMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {gate.CBroadcastMessage} message CBroadcastMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CBroadcastMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msgType = "";
                if (options.bytes === String)
                    object.msgBody = "";
                else {
                    object.msgBody = [];
                    if (options.bytes !== Array)
                        object.msgBody = $util.newBuffer(object.msgBody);
                }
            }
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = message.msgType;
            if (message.msgBody != null && message.hasOwnProperty("msgBody"))
                object.msgBody = options.bytes === String ? $util.base64.encode(message.msgBody, 0, message.msgBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.msgBody) : message.msgBody;
            return object;
        };

        /**
         * Converts this CBroadcastMessage to JSON.
         * @function toJSON
         * @memberof gate.CBroadcastMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CBroadcastMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CBroadcastMessage
         * @function getTypeUrl
         * @memberof gate.CBroadcastMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CBroadcastMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.CBroadcastMessage";
        };

        return CBroadcastMessage;
    })();

    gate.SBroadcastMessage = (function() {

        /**
         * Properties of a SBroadcastMessage.
         * @memberof gate
         * @interface ISBroadcastMessage
         */

        /**
         * Constructs a new SBroadcastMessage.
         * @memberof gate
         * @classdesc Represents a SBroadcastMessage.
         * @implements ISBroadcastMessage
         * @constructor
         * @param {gate.ISBroadcastMessage=} [properties] Properties to set
         */
        function SBroadcastMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SBroadcastMessage instance using the specified properties.
         * @function create
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {gate.ISBroadcastMessage=} [properties] Properties to set
         * @returns {gate.SBroadcastMessage} SBroadcastMessage instance
         */
        SBroadcastMessage.create = function create(properties) {
            return new SBroadcastMessage(properties);
        };

        /**
         * Encodes the specified SBroadcastMessage message. Does not implicitly {@link gate.SBroadcastMessage.verify|verify} messages.
         * @function encode
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {gate.ISBroadcastMessage} message SBroadcastMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBroadcastMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SBroadcastMessage message, length delimited. Does not implicitly {@link gate.SBroadcastMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {gate.ISBroadcastMessage} message SBroadcastMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBroadcastMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SBroadcastMessage message from the specified reader or buffer.
         * @function decode
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.SBroadcastMessage} SBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBroadcastMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.SBroadcastMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SBroadcastMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.SBroadcastMessage} SBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBroadcastMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SBroadcastMessage message.
         * @function verify
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBroadcastMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SBroadcastMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.SBroadcastMessage} SBroadcastMessage
         */
        SBroadcastMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.SBroadcastMessage)
                return object;
            return new $root.gate.SBroadcastMessage();
        };

        /**
         * Creates a plain object from a SBroadcastMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {gate.SBroadcastMessage} message SBroadcastMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBroadcastMessage.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SBroadcastMessage to JSON.
         * @function toJSON
         * @memberof gate.SBroadcastMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBroadcastMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SBroadcastMessage
         * @function getTypeUrl
         * @memberof gate.SBroadcastMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SBroadcastMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.SBroadcastMessage";
        };

        return SBroadcastMessage;
    })();

    gate.CBroadcastGameMessage = (function() {

        /**
         * Properties of a CBroadcastGameMessage.
         * @memberof gate
         * @interface ICBroadcastGameMessage
         * @property {number|null} [serverId] CBroadcastGameMessage serverId
         * @property {string|null} [msgType] CBroadcastGameMessage msgType
         * @property {Uint8Array|null} [msgBody] CBroadcastGameMessage msgBody
         */

        /**
         * Constructs a new CBroadcastGameMessage.
         * @memberof gate
         * @classdesc Represents a CBroadcastGameMessage.
         * @implements ICBroadcastGameMessage
         * @constructor
         * @param {gate.ICBroadcastGameMessage=} [properties] Properties to set
         */
        function CBroadcastGameMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CBroadcastGameMessage serverId.
         * @member {number} serverId
         * @memberof gate.CBroadcastGameMessage
         * @instance
         */
        CBroadcastGameMessage.prototype.serverId = 0;

        /**
         * CBroadcastGameMessage msgType.
         * @member {string} msgType
         * @memberof gate.CBroadcastGameMessage
         * @instance
         */
        CBroadcastGameMessage.prototype.msgType = "";

        /**
         * CBroadcastGameMessage msgBody.
         * @member {Uint8Array} msgBody
         * @memberof gate.CBroadcastGameMessage
         * @instance
         */
        CBroadcastGameMessage.prototype.msgBody = $util.newBuffer([]);

        /**
         * Creates a new CBroadcastGameMessage instance using the specified properties.
         * @function create
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {gate.ICBroadcastGameMessage=} [properties] Properties to set
         * @returns {gate.CBroadcastGameMessage} CBroadcastGameMessage instance
         */
        CBroadcastGameMessage.create = function create(properties) {
            return new CBroadcastGameMessage(properties);
        };

        /**
         * Encodes the specified CBroadcastGameMessage message. Does not implicitly {@link gate.CBroadcastGameMessage.verify|verify} messages.
         * @function encode
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {gate.ICBroadcastGameMessage} message CBroadcastGameMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBroadcastGameMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgType);
            if (message.msgBody != null && Object.hasOwnProperty.call(message, "msgBody"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msgBody);
            return writer;
        };

        /**
         * Encodes the specified CBroadcastGameMessage message, length delimited. Does not implicitly {@link gate.CBroadcastGameMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {gate.ICBroadcastGameMessage} message CBroadcastGameMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBroadcastGameMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CBroadcastGameMessage message from the specified reader or buffer.
         * @function decode
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.CBroadcastGameMessage} CBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBroadcastGameMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.CBroadcastGameMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.serverId = reader.int32();
                        break;
                    }
                case 2: {
                        message.msgType = reader.string();
                        break;
                    }
                case 3: {
                        message.msgBody = reader.bytes();
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
         * Decodes a CBroadcastGameMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.CBroadcastGameMessage} CBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBroadcastGameMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CBroadcastGameMessage message.
         * @function verify
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CBroadcastGameMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                if (!$util.isString(message.msgType))
                    return "msgType: string expected";
            if (message.msgBody != null && message.hasOwnProperty("msgBody"))
                if (!(message.msgBody && typeof message.msgBody.length === "number" || $util.isString(message.msgBody)))
                    return "msgBody: buffer expected";
            return null;
        };

        /**
         * Creates a CBroadcastGameMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.CBroadcastGameMessage} CBroadcastGameMessage
         */
        CBroadcastGameMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.CBroadcastGameMessage)
                return object;
            var message = new $root.gate.CBroadcastGameMessage();
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.msgType != null)
                message.msgType = String(object.msgType);
            if (object.msgBody != null)
                if (typeof object.msgBody === "string")
                    $util.base64.decode(object.msgBody, message.msgBody = $util.newBuffer($util.base64.length(object.msgBody)), 0);
                else if (object.msgBody.length >= 0)
                    message.msgBody = object.msgBody;
            return message;
        };

        /**
         * Creates a plain object from a CBroadcastGameMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {gate.CBroadcastGameMessage} message CBroadcastGameMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CBroadcastGameMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverId = 0;
                object.msgType = "";
                if (options.bytes === String)
                    object.msgBody = "";
                else {
                    object.msgBody = [];
                    if (options.bytes !== Array)
                        object.msgBody = $util.newBuffer(object.msgBody);
                }
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = message.msgType;
            if (message.msgBody != null && message.hasOwnProperty("msgBody"))
                object.msgBody = options.bytes === String ? $util.base64.encode(message.msgBody, 0, message.msgBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.msgBody) : message.msgBody;
            return object;
        };

        /**
         * Converts this CBroadcastGameMessage to JSON.
         * @function toJSON
         * @memberof gate.CBroadcastGameMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CBroadcastGameMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CBroadcastGameMessage
         * @function getTypeUrl
         * @memberof gate.CBroadcastGameMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CBroadcastGameMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.CBroadcastGameMessage";
        };

        return CBroadcastGameMessage;
    })();

    gate.SBroadcastGameMessage = (function() {

        /**
         * Properties of a SBroadcastGameMessage.
         * @memberof gate
         * @interface ISBroadcastGameMessage
         */

        /**
         * Constructs a new SBroadcastGameMessage.
         * @memberof gate
         * @classdesc Represents a SBroadcastGameMessage.
         * @implements ISBroadcastGameMessage
         * @constructor
         * @param {gate.ISBroadcastGameMessage=} [properties] Properties to set
         */
        function SBroadcastGameMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SBroadcastGameMessage instance using the specified properties.
         * @function create
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {gate.ISBroadcastGameMessage=} [properties] Properties to set
         * @returns {gate.SBroadcastGameMessage} SBroadcastGameMessage instance
         */
        SBroadcastGameMessage.create = function create(properties) {
            return new SBroadcastGameMessage(properties);
        };

        /**
         * Encodes the specified SBroadcastGameMessage message. Does not implicitly {@link gate.SBroadcastGameMessage.verify|verify} messages.
         * @function encode
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {gate.ISBroadcastGameMessage} message SBroadcastGameMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBroadcastGameMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SBroadcastGameMessage message, length delimited. Does not implicitly {@link gate.SBroadcastGameMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {gate.ISBroadcastGameMessage} message SBroadcastGameMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBroadcastGameMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SBroadcastGameMessage message from the specified reader or buffer.
         * @function decode
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.SBroadcastGameMessage} SBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBroadcastGameMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.SBroadcastGameMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SBroadcastGameMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.SBroadcastGameMessage} SBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBroadcastGameMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SBroadcastGameMessage message.
         * @function verify
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBroadcastGameMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SBroadcastGameMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gate.SBroadcastGameMessage} SBroadcastGameMessage
         */
        SBroadcastGameMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.gate.SBroadcastGameMessage)
                return object;
            return new $root.gate.SBroadcastGameMessage();
        };

        /**
         * Creates a plain object from a SBroadcastGameMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {gate.SBroadcastGameMessage} message SBroadcastGameMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBroadcastGameMessage.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SBroadcastGameMessage to JSON.
         * @function toJSON
         * @memberof gate.SBroadcastGameMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBroadcastGameMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SBroadcastGameMessage
         * @function getTypeUrl
         * @memberof gate.SBroadcastGameMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SBroadcastGameMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gate.SBroadcastGameMessage";
        };

        return SBroadcastGameMessage;
    })();

    return gate;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

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
