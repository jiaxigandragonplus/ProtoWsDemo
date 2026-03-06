/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.battle = (function() {

    /**
     * Namespace battle.
     * @exports battle
     * @namespace
     */
    var battle = {};

    battle.CSendCommand = (function() {

        /**
         * Properties of a CSendCommand.
         * @memberof battle
         * @interface ICSendCommand
         * @property {number|Long|null} [instId] CSendCommand instId
         * @property {number|null} [card] CSendCommand card
         * @property {Array.<common.IRouteInfo>|null} [routes] CSendCommand routes
         */

        /**
         * Constructs a new CSendCommand.
         * @memberof battle
         * @classdesc Represents a CSendCommand.
         * @implements ICSendCommand
         * @constructor
         * @param {battle.ICSendCommand=} [properties] Properties to set
         */
        function CSendCommand(properties) {
            this.routes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CSendCommand instId.
         * @member {number|Long} instId
         * @memberof battle.CSendCommand
         * @instance
         */
        CSendCommand.prototype.instId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CSendCommand card.
         * @member {number} card
         * @memberof battle.CSendCommand
         * @instance
         */
        CSendCommand.prototype.card = 0;

        /**
         * CSendCommand routes.
         * @member {Array.<common.IRouteInfo>} routes
         * @memberof battle.CSendCommand
         * @instance
         */
        CSendCommand.prototype.routes = $util.emptyArray;

        /**
         * Creates a new CSendCommand instance using the specified properties.
         * @function create
         * @memberof battle.CSendCommand
         * @static
         * @param {battle.ICSendCommand=} [properties] Properties to set
         * @returns {battle.CSendCommand} CSendCommand instance
         */
        CSendCommand.create = function create(properties) {
            return new CSendCommand(properties);
        };

        /**
         * Encodes the specified CSendCommand message. Does not implicitly {@link battle.CSendCommand.verify|verify} messages.
         * @function encode
         * @memberof battle.CSendCommand
         * @static
         * @param {battle.ICSendCommand} message CSendCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSendCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.instId);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
            if (message.routes != null && message.routes.length)
                for (var i = 0; i < message.routes.length; ++i)
                    $root.common.RouteInfo.encode(message.routes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CSendCommand message, length delimited. Does not implicitly {@link battle.CSendCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CSendCommand
         * @static
         * @param {battle.ICSendCommand} message CSendCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSendCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSendCommand message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CSendCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CSendCommand} CSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSendCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CSendCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.instId = reader.int64();
                        break;
                    }
                case 2: {
                        message.card = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.routes && message.routes.length))
                            message.routes = [];
                        message.routes.push($root.common.RouteInfo.decode(reader, reader.uint32()));
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
         * Decodes a CSendCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CSendCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CSendCommand} CSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSendCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSendCommand message.
         * @function verify
         * @memberof battle.CSendCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSendCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (!$util.isInteger(message.instId) && !(message.instId && $util.isInteger(message.instId.low) && $util.isInteger(message.instId.high)))
                    return "instId: integer|Long expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            if (message.routes != null && message.hasOwnProperty("routes")) {
                if (!Array.isArray(message.routes))
                    return "routes: array expected";
                for (var i = 0; i < message.routes.length; ++i) {
                    var error = $root.common.RouteInfo.verify(message.routes[i]);
                    if (error)
                        return "routes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CSendCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CSendCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CSendCommand} CSendCommand
         */
        CSendCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CSendCommand)
                return object;
            var message = new $root.battle.CSendCommand();
            if (object.instId != null)
                if ($util.Long)
                    (message.instId = $util.Long.fromValue(object.instId)).unsigned = false;
                else if (typeof object.instId === "string")
                    message.instId = parseInt(object.instId, 10);
                else if (typeof object.instId === "number")
                    message.instId = object.instId;
                else if (typeof object.instId === "object")
                    message.instId = new $util.LongBits(object.instId.low >>> 0, object.instId.high >>> 0).toNumber();
            if (object.card != null)
                message.card = object.card | 0;
            if (object.routes) {
                if (!Array.isArray(object.routes))
                    throw TypeError(".battle.CSendCommand.routes: array expected");
                message.routes = [];
                for (var i = 0; i < object.routes.length; ++i) {
                    if (typeof object.routes[i] !== "object")
                        throw TypeError(".battle.CSendCommand.routes: object expected");
                    message.routes[i] = $root.common.RouteInfo.fromObject(object.routes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CSendCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CSendCommand
         * @static
         * @param {battle.CSendCommand} message CSendCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSendCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.routes = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instId = options.longs === String ? "0" : 0;
                object.card = 0;
            }
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (typeof message.instId === "number")
                    object.instId = options.longs === String ? String(message.instId) : message.instId;
                else
                    object.instId = options.longs === String ? $util.Long.prototype.toString.call(message.instId) : options.longs === Number ? new $util.LongBits(message.instId.low >>> 0, message.instId.high >>> 0).toNumber() : message.instId;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            if (message.routes && message.routes.length) {
                object.routes = [];
                for (var j = 0; j < message.routes.length; ++j)
                    object.routes[j] = $root.common.RouteInfo.toObject(message.routes[j], options);
            }
            return object;
        };

        /**
         * Converts this CSendCommand to JSON.
         * @function toJSON
         * @memberof battle.CSendCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSendCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CSendCommand
         * @function getTypeUrl
         * @memberof battle.CSendCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSendCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CSendCommand";
        };

        return CSendCommand;
    })();

    battle.SSendCommand = (function() {

        /**
         * Properties of a SSendCommand.
         * @memberof battle
         * @interface ISSendCommand
         */

        /**
         * Constructs a new SSendCommand.
         * @memberof battle
         * @classdesc Represents a SSendCommand.
         * @implements ISSendCommand
         * @constructor
         * @param {battle.ISSendCommand=} [properties] Properties to set
         */
        function SSendCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SSendCommand instance using the specified properties.
         * @function create
         * @memberof battle.SSendCommand
         * @static
         * @param {battle.ISSendCommand=} [properties] Properties to set
         * @returns {battle.SSendCommand} SSendCommand instance
         */
        SSendCommand.create = function create(properties) {
            return new SSendCommand(properties);
        };

        /**
         * Encodes the specified SSendCommand message. Does not implicitly {@link battle.SSendCommand.verify|verify} messages.
         * @function encode
         * @memberof battle.SSendCommand
         * @static
         * @param {battle.ISSendCommand} message SSendCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSendCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SSendCommand message, length delimited. Does not implicitly {@link battle.SSendCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SSendCommand
         * @static
         * @param {battle.ISSendCommand} message SSendCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSendCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SSendCommand message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SSendCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SSendCommand} SSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSendCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SSendCommand();
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
         * Decodes a SSendCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SSendCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SSendCommand} SSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSendCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SSendCommand message.
         * @function verify
         * @memberof battle.SSendCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SSendCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SSendCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SSendCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SSendCommand} SSendCommand
         */
        SSendCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SSendCommand)
                return object;
            return new $root.battle.SSendCommand();
        };

        /**
         * Creates a plain object from a SSendCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SSendCommand
         * @static
         * @param {battle.SSendCommand} message SSendCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SSendCommand.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SSendCommand to JSON.
         * @function toJSON
         * @memberof battle.SSendCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SSendCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SSendCommand
         * @function getTypeUrl
         * @memberof battle.SSendCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SSendCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SSendCommand";
        };

        return SSendCommand;
    })();

    battle.CResLoadComplete = (function() {

        /**
         * Properties of a CResLoadComplete.
         * @memberof battle
         * @interface ICResLoadComplete
         */

        /**
         * Constructs a new CResLoadComplete.
         * @memberof battle
         * @classdesc Represents a CResLoadComplete.
         * @implements ICResLoadComplete
         * @constructor
         * @param {battle.ICResLoadComplete=} [properties] Properties to set
         */
        function CResLoadComplete(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CResLoadComplete instance using the specified properties.
         * @function create
         * @memberof battle.CResLoadComplete
         * @static
         * @param {battle.ICResLoadComplete=} [properties] Properties to set
         * @returns {battle.CResLoadComplete} CResLoadComplete instance
         */
        CResLoadComplete.create = function create(properties) {
            return new CResLoadComplete(properties);
        };

        /**
         * Encodes the specified CResLoadComplete message. Does not implicitly {@link battle.CResLoadComplete.verify|verify} messages.
         * @function encode
         * @memberof battle.CResLoadComplete
         * @static
         * @param {battle.ICResLoadComplete} message CResLoadComplete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CResLoadComplete.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CResLoadComplete message, length delimited. Does not implicitly {@link battle.CResLoadComplete.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CResLoadComplete
         * @static
         * @param {battle.ICResLoadComplete} message CResLoadComplete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CResLoadComplete.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CResLoadComplete message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CResLoadComplete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CResLoadComplete} CResLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CResLoadComplete.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CResLoadComplete();
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
         * Decodes a CResLoadComplete message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CResLoadComplete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CResLoadComplete} CResLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CResLoadComplete.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CResLoadComplete message.
         * @function verify
         * @memberof battle.CResLoadComplete
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CResLoadComplete.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CResLoadComplete message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CResLoadComplete
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CResLoadComplete} CResLoadComplete
         */
        CResLoadComplete.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CResLoadComplete)
                return object;
            return new $root.battle.CResLoadComplete();
        };

        /**
         * Creates a plain object from a CResLoadComplete message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CResLoadComplete
         * @static
         * @param {battle.CResLoadComplete} message CResLoadComplete
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CResLoadComplete.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CResLoadComplete to JSON.
         * @function toJSON
         * @memberof battle.CResLoadComplete
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CResLoadComplete.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CResLoadComplete
         * @function getTypeUrl
         * @memberof battle.CResLoadComplete
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CResLoadComplete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CResLoadComplete";
        };

        return CResLoadComplete;
    })();

    battle.SResLoadComplete = (function() {

        /**
         * Properties of a SResLoadComplete.
         * @memberof battle
         * @interface ISResLoadComplete
         */

        /**
         * Constructs a new SResLoadComplete.
         * @memberof battle
         * @classdesc Represents a SResLoadComplete.
         * @implements ISResLoadComplete
         * @constructor
         * @param {battle.ISResLoadComplete=} [properties] Properties to set
         */
        function SResLoadComplete(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SResLoadComplete instance using the specified properties.
         * @function create
         * @memberof battle.SResLoadComplete
         * @static
         * @param {battle.ISResLoadComplete=} [properties] Properties to set
         * @returns {battle.SResLoadComplete} SResLoadComplete instance
         */
        SResLoadComplete.create = function create(properties) {
            return new SResLoadComplete(properties);
        };

        /**
         * Encodes the specified SResLoadComplete message. Does not implicitly {@link battle.SResLoadComplete.verify|verify} messages.
         * @function encode
         * @memberof battle.SResLoadComplete
         * @static
         * @param {battle.ISResLoadComplete} message SResLoadComplete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SResLoadComplete.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SResLoadComplete message, length delimited. Does not implicitly {@link battle.SResLoadComplete.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SResLoadComplete
         * @static
         * @param {battle.ISResLoadComplete} message SResLoadComplete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SResLoadComplete.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SResLoadComplete message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SResLoadComplete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SResLoadComplete} SResLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SResLoadComplete.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SResLoadComplete();
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
         * Decodes a SResLoadComplete message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SResLoadComplete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SResLoadComplete} SResLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SResLoadComplete.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SResLoadComplete message.
         * @function verify
         * @memberof battle.SResLoadComplete
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SResLoadComplete.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SResLoadComplete message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SResLoadComplete
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SResLoadComplete} SResLoadComplete
         */
        SResLoadComplete.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SResLoadComplete)
                return object;
            return new $root.battle.SResLoadComplete();
        };

        /**
         * Creates a plain object from a SResLoadComplete message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SResLoadComplete
         * @static
         * @param {battle.SResLoadComplete} message SResLoadComplete
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SResLoadComplete.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SResLoadComplete to JSON.
         * @function toJSON
         * @memberof battle.SResLoadComplete
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SResLoadComplete.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SResLoadComplete
         * @function getTypeUrl
         * @memberof battle.SResLoadComplete
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SResLoadComplete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SResLoadComplete";
        };

        return SResLoadComplete;
    })();

    battle.CRemoveCard = (function() {

        /**
         * Properties of a CRemoveCard.
         * @memberof battle
         * @interface ICRemoveCard
         * @property {number|Long|null} [instId] CRemoveCard instId
         */

        /**
         * Constructs a new CRemoveCard.
         * @memberof battle
         * @classdesc Represents a CRemoveCard.
         * @implements ICRemoveCard
         * @constructor
         * @param {battle.ICRemoveCard=} [properties] Properties to set
         */
        function CRemoveCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CRemoveCard instId.
         * @member {number|Long} instId
         * @memberof battle.CRemoveCard
         * @instance
         */
        CRemoveCard.prototype.instId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CRemoveCard instance using the specified properties.
         * @function create
         * @memberof battle.CRemoveCard
         * @static
         * @param {battle.ICRemoveCard=} [properties] Properties to set
         * @returns {battle.CRemoveCard} CRemoveCard instance
         */
        CRemoveCard.create = function create(properties) {
            return new CRemoveCard(properties);
        };

        /**
         * Encodes the specified CRemoveCard message. Does not implicitly {@link battle.CRemoveCard.verify|verify} messages.
         * @function encode
         * @memberof battle.CRemoveCard
         * @static
         * @param {battle.ICRemoveCard} message CRemoveCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoveCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.instId);
            return writer;
        };

        /**
         * Encodes the specified CRemoveCard message, length delimited. Does not implicitly {@link battle.CRemoveCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CRemoveCard
         * @static
         * @param {battle.ICRemoveCard} message CRemoveCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoveCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CRemoveCard message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CRemoveCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CRemoveCard} CRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoveCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CRemoveCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.instId = reader.int64();
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
         * Decodes a CRemoveCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CRemoveCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CRemoveCard} CRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoveCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CRemoveCard message.
         * @function verify
         * @memberof battle.CRemoveCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoveCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (!$util.isInteger(message.instId) && !(message.instId && $util.isInteger(message.instId.low) && $util.isInteger(message.instId.high)))
                    return "instId: integer|Long expected";
            return null;
        };

        /**
         * Creates a CRemoveCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CRemoveCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CRemoveCard} CRemoveCard
         */
        CRemoveCard.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CRemoveCard)
                return object;
            var message = new $root.battle.CRemoveCard();
            if (object.instId != null)
                if ($util.Long)
                    (message.instId = $util.Long.fromValue(object.instId)).unsigned = false;
                else if (typeof object.instId === "string")
                    message.instId = parseInt(object.instId, 10);
                else if (typeof object.instId === "number")
                    message.instId = object.instId;
                else if (typeof object.instId === "object")
                    message.instId = new $util.LongBits(object.instId.low >>> 0, object.instId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CRemoveCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CRemoveCard
         * @static
         * @param {battle.CRemoveCard} message CRemoveCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoveCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instId = options.longs === String ? "0" : 0;
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (typeof message.instId === "number")
                    object.instId = options.longs === String ? String(message.instId) : message.instId;
                else
                    object.instId = options.longs === String ? $util.Long.prototype.toString.call(message.instId) : options.longs === Number ? new $util.LongBits(message.instId.low >>> 0, message.instId.high >>> 0).toNumber() : message.instId;
            return object;
        };

        /**
         * Converts this CRemoveCard to JSON.
         * @function toJSON
         * @memberof battle.CRemoveCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoveCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CRemoveCard
         * @function getTypeUrl
         * @memberof battle.CRemoveCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CRemoveCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CRemoveCard";
        };

        return CRemoveCard;
    })();

    battle.SRemoveCard = (function() {

        /**
         * Properties of a SRemoveCard.
         * @memberof battle
         * @interface ISRemoveCard
         */

        /**
         * Constructs a new SRemoveCard.
         * @memberof battle
         * @classdesc Represents a SRemoveCard.
         * @implements ISRemoveCard
         * @constructor
         * @param {battle.ISRemoveCard=} [properties] Properties to set
         */
        function SRemoveCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SRemoveCard instance using the specified properties.
         * @function create
         * @memberof battle.SRemoveCard
         * @static
         * @param {battle.ISRemoveCard=} [properties] Properties to set
         * @returns {battle.SRemoveCard} SRemoveCard instance
         */
        SRemoveCard.create = function create(properties) {
            return new SRemoveCard(properties);
        };

        /**
         * Encodes the specified SRemoveCard message. Does not implicitly {@link battle.SRemoveCard.verify|verify} messages.
         * @function encode
         * @memberof battle.SRemoveCard
         * @static
         * @param {battle.ISRemoveCard} message SRemoveCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SRemoveCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SRemoveCard message, length delimited. Does not implicitly {@link battle.SRemoveCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SRemoveCard
         * @static
         * @param {battle.ISRemoveCard} message SRemoveCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SRemoveCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SRemoveCard message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SRemoveCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SRemoveCard} SRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SRemoveCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SRemoveCard();
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
         * Decodes a SRemoveCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SRemoveCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SRemoveCard} SRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SRemoveCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SRemoveCard message.
         * @function verify
         * @memberof battle.SRemoveCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SRemoveCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SRemoveCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SRemoveCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SRemoveCard} SRemoveCard
         */
        SRemoveCard.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SRemoveCard)
                return object;
            return new $root.battle.SRemoveCard();
        };

        /**
         * Creates a plain object from a SRemoveCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SRemoveCard
         * @static
         * @param {battle.SRemoveCard} message SRemoveCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SRemoveCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SRemoveCard to JSON.
         * @function toJSON
         * @memberof battle.SRemoveCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SRemoveCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SRemoveCard
         * @function getTypeUrl
         * @memberof battle.SRemoveCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SRemoveCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SRemoveCard";
        };

        return SRemoveCard;
    })();

    battle.CBattleOver = (function() {

        /**
         * Properties of a CBattleOver.
         * @memberof battle
         * @interface ICBattleOver
         * @property {string|null} [winner] CBattleOver winner
         * @property {Array.<number>|null} [cups] CBattleOver cups
         * @property {Array.<number>|null} [crowns] CBattleOver crowns
         * @property {number|null} [turnTheTile] CBattleOver turnTheTile
         * @property {number|null} [endFrame] CBattleOver endFrame
         */

        /**
         * Constructs a new CBattleOver.
         * @memberof battle
         * @classdesc Represents a CBattleOver.
         * @implements ICBattleOver
         * @constructor
         * @param {battle.ICBattleOver=} [properties] Properties to set
         */
        function CBattleOver(properties) {
            this.cups = [];
            this.crowns = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CBattleOver winner.
         * @member {string} winner
         * @memberof battle.CBattleOver
         * @instance
         */
        CBattleOver.prototype.winner = "";

        /**
         * CBattleOver cups.
         * @member {Array.<number>} cups
         * @memberof battle.CBattleOver
         * @instance
         */
        CBattleOver.prototype.cups = $util.emptyArray;

        /**
         * CBattleOver crowns.
         * @member {Array.<number>} crowns
         * @memberof battle.CBattleOver
         * @instance
         */
        CBattleOver.prototype.crowns = $util.emptyArray;

        /**
         * CBattleOver turnTheTile.
         * @member {number} turnTheTile
         * @memberof battle.CBattleOver
         * @instance
         */
        CBattleOver.prototype.turnTheTile = 0;

        /**
         * CBattleOver endFrame.
         * @member {number} endFrame
         * @memberof battle.CBattleOver
         * @instance
         */
        CBattleOver.prototype.endFrame = 0;

        /**
         * Creates a new CBattleOver instance using the specified properties.
         * @function create
         * @memberof battle.CBattleOver
         * @static
         * @param {battle.ICBattleOver=} [properties] Properties to set
         * @returns {battle.CBattleOver} CBattleOver instance
         */
        CBattleOver.create = function create(properties) {
            return new CBattleOver(properties);
        };

        /**
         * Encodes the specified CBattleOver message. Does not implicitly {@link battle.CBattleOver.verify|verify} messages.
         * @function encode
         * @memberof battle.CBattleOver
         * @static
         * @param {battle.ICBattleOver} message CBattleOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBattleOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winner != null && Object.hasOwnProperty.call(message, "winner"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.winner);
            if (message.cups != null && message.cups.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.cups.length; ++i)
                    writer.int32(message.cups[i]);
                writer.ldelim();
            }
            if (message.crowns != null && message.crowns.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.crowns.length; ++i)
                    writer.int32(message.crowns[i]);
                writer.ldelim();
            }
            if (message.turnTheTile != null && Object.hasOwnProperty.call(message, "turnTheTile"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.turnTheTile);
            if (message.endFrame != null && Object.hasOwnProperty.call(message, "endFrame"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.endFrame);
            return writer;
        };

        /**
         * Encodes the specified CBattleOver message, length delimited. Does not implicitly {@link battle.CBattleOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CBattleOver
         * @static
         * @param {battle.ICBattleOver} message CBattleOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBattleOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CBattleOver message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CBattleOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CBattleOver} CBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBattleOver.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CBattleOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.winner = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.cups && message.cups.length))
                            message.cups = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cups.push(reader.int32());
                        } else
                            message.cups.push(reader.int32());
                        break;
                    }
                case 3: {
                        if (!(message.crowns && message.crowns.length))
                            message.crowns = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.crowns.push(reader.int32());
                        } else
                            message.crowns.push(reader.int32());
                        break;
                    }
                case 4: {
                        message.turnTheTile = reader.int32();
                        break;
                    }
                case 5: {
                        message.endFrame = reader.int32();
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
         * Decodes a CBattleOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CBattleOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CBattleOver} CBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBattleOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CBattleOver message.
         * @function verify
         * @memberof battle.CBattleOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CBattleOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winner != null && message.hasOwnProperty("winner"))
                if (!$util.isString(message.winner))
                    return "winner: string expected";
            if (message.cups != null && message.hasOwnProperty("cups")) {
                if (!Array.isArray(message.cups))
                    return "cups: array expected";
                for (var i = 0; i < message.cups.length; ++i)
                    if (!$util.isInteger(message.cups[i]))
                        return "cups: integer[] expected";
            }
            if (message.crowns != null && message.hasOwnProperty("crowns")) {
                if (!Array.isArray(message.crowns))
                    return "crowns: array expected";
                for (var i = 0; i < message.crowns.length; ++i)
                    if (!$util.isInteger(message.crowns[i]))
                        return "crowns: integer[] expected";
            }
            if (message.turnTheTile != null && message.hasOwnProperty("turnTheTile"))
                if (!$util.isInteger(message.turnTheTile))
                    return "turnTheTile: integer expected";
            if (message.endFrame != null && message.hasOwnProperty("endFrame"))
                if (!$util.isInteger(message.endFrame))
                    return "endFrame: integer expected";
            return null;
        };

        /**
         * Creates a CBattleOver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CBattleOver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CBattleOver} CBattleOver
         */
        CBattleOver.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CBattleOver)
                return object;
            var message = new $root.battle.CBattleOver();
            if (object.winner != null)
                message.winner = String(object.winner);
            if (object.cups) {
                if (!Array.isArray(object.cups))
                    throw TypeError(".battle.CBattleOver.cups: array expected");
                message.cups = [];
                for (var i = 0; i < object.cups.length; ++i)
                    message.cups[i] = object.cups[i] | 0;
            }
            if (object.crowns) {
                if (!Array.isArray(object.crowns))
                    throw TypeError(".battle.CBattleOver.crowns: array expected");
                message.crowns = [];
                for (var i = 0; i < object.crowns.length; ++i)
                    message.crowns[i] = object.crowns[i] | 0;
            }
            if (object.turnTheTile != null)
                message.turnTheTile = object.turnTheTile | 0;
            if (object.endFrame != null)
                message.endFrame = object.endFrame | 0;
            return message;
        };

        /**
         * Creates a plain object from a CBattleOver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CBattleOver
         * @static
         * @param {battle.CBattleOver} message CBattleOver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CBattleOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cups = [];
                object.crowns = [];
            }
            if (options.defaults) {
                object.winner = "";
                object.turnTheTile = 0;
                object.endFrame = 0;
            }
            if (message.winner != null && message.hasOwnProperty("winner"))
                object.winner = message.winner;
            if (message.cups && message.cups.length) {
                object.cups = [];
                for (var j = 0; j < message.cups.length; ++j)
                    object.cups[j] = message.cups[j];
            }
            if (message.crowns && message.crowns.length) {
                object.crowns = [];
                for (var j = 0; j < message.crowns.length; ++j)
                    object.crowns[j] = message.crowns[j];
            }
            if (message.turnTheTile != null && message.hasOwnProperty("turnTheTile"))
                object.turnTheTile = message.turnTheTile;
            if (message.endFrame != null && message.hasOwnProperty("endFrame"))
                object.endFrame = message.endFrame;
            return object;
        };

        /**
         * Converts this CBattleOver to JSON.
         * @function toJSON
         * @memberof battle.CBattleOver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CBattleOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CBattleOver
         * @function getTypeUrl
         * @memberof battle.CBattleOver
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CBattleOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CBattleOver";
        };

        return CBattleOver;
    })();

    battle.SBattleOver = (function() {

        /**
         * Properties of a SBattleOver.
         * @memberof battle
         * @interface ISBattleOver
         */

        /**
         * Constructs a new SBattleOver.
         * @memberof battle
         * @classdesc Represents a SBattleOver.
         * @implements ISBattleOver
         * @constructor
         * @param {battle.ISBattleOver=} [properties] Properties to set
         */
        function SBattleOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SBattleOver instance using the specified properties.
         * @function create
         * @memberof battle.SBattleOver
         * @static
         * @param {battle.ISBattleOver=} [properties] Properties to set
         * @returns {battle.SBattleOver} SBattleOver instance
         */
        SBattleOver.create = function create(properties) {
            return new SBattleOver(properties);
        };

        /**
         * Encodes the specified SBattleOver message. Does not implicitly {@link battle.SBattleOver.verify|verify} messages.
         * @function encode
         * @memberof battle.SBattleOver
         * @static
         * @param {battle.ISBattleOver} message SBattleOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBattleOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SBattleOver message, length delimited. Does not implicitly {@link battle.SBattleOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SBattleOver
         * @static
         * @param {battle.ISBattleOver} message SBattleOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBattleOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SBattleOver message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SBattleOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SBattleOver} SBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBattleOver.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SBattleOver();
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
         * Decodes a SBattleOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SBattleOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SBattleOver} SBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBattleOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SBattleOver message.
         * @function verify
         * @memberof battle.SBattleOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBattleOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SBattleOver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SBattleOver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SBattleOver} SBattleOver
         */
        SBattleOver.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SBattleOver)
                return object;
            return new $root.battle.SBattleOver();
        };

        /**
         * Creates a plain object from a SBattleOver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SBattleOver
         * @static
         * @param {battle.SBattleOver} message SBattleOver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBattleOver.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SBattleOver to JSON.
         * @function toJSON
         * @memberof battle.SBattleOver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBattleOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SBattleOver
         * @function getTypeUrl
         * @memberof battle.SBattleOver
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SBattleOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SBattleOver";
        };

        return SBattleOver;
    })();

    battle.CDrawCard = (function() {

        /**
         * Properties of a CDrawCard.
         * @memberof battle
         * @interface ICDrawCard
         */

        /**
         * Constructs a new CDrawCard.
         * @memberof battle
         * @classdesc Represents a CDrawCard.
         * @implements ICDrawCard
         * @constructor
         * @param {battle.ICDrawCard=} [properties] Properties to set
         */
        function CDrawCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CDrawCard instance using the specified properties.
         * @function create
         * @memberof battle.CDrawCard
         * @static
         * @param {battle.ICDrawCard=} [properties] Properties to set
         * @returns {battle.CDrawCard} CDrawCard instance
         */
        CDrawCard.create = function create(properties) {
            return new CDrawCard(properties);
        };

        /**
         * Encodes the specified CDrawCard message. Does not implicitly {@link battle.CDrawCard.verify|verify} messages.
         * @function encode
         * @memberof battle.CDrawCard
         * @static
         * @param {battle.ICDrawCard} message CDrawCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDrawCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CDrawCard message, length delimited. Does not implicitly {@link battle.CDrawCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CDrawCard
         * @static
         * @param {battle.ICDrawCard} message CDrawCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDrawCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CDrawCard message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CDrawCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CDrawCard} CDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDrawCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CDrawCard();
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
         * Decodes a CDrawCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CDrawCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CDrawCard} CDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDrawCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CDrawCard message.
         * @function verify
         * @memberof battle.CDrawCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDrawCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CDrawCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CDrawCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CDrawCard} CDrawCard
         */
        CDrawCard.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CDrawCard)
                return object;
            return new $root.battle.CDrawCard();
        };

        /**
         * Creates a plain object from a CDrawCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CDrawCard
         * @static
         * @param {battle.CDrawCard} message CDrawCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDrawCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CDrawCard to JSON.
         * @function toJSON
         * @memberof battle.CDrawCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDrawCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CDrawCard
         * @function getTypeUrl
         * @memberof battle.CDrawCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDrawCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CDrawCard";
        };

        return CDrawCard;
    })();

    battle.SDrawCard = (function() {

        /**
         * Properties of a SDrawCard.
         * @memberof battle
         * @interface ISDrawCard
         * @property {number|Long|null} [instId] SDrawCard instId
         * @property {number|null} [cardId] SDrawCard cardId
         */

        /**
         * Constructs a new SDrawCard.
         * @memberof battle
         * @classdesc Represents a SDrawCard.
         * @implements ISDrawCard
         * @constructor
         * @param {battle.ISDrawCard=} [properties] Properties to set
         */
        function SDrawCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SDrawCard instId.
         * @member {number|Long} instId
         * @memberof battle.SDrawCard
         * @instance
         */
        SDrawCard.prototype.instId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SDrawCard cardId.
         * @member {number} cardId
         * @memberof battle.SDrawCard
         * @instance
         */
        SDrawCard.prototype.cardId = 0;

        /**
         * Creates a new SDrawCard instance using the specified properties.
         * @function create
         * @memberof battle.SDrawCard
         * @static
         * @param {battle.ISDrawCard=} [properties] Properties to set
         * @returns {battle.SDrawCard} SDrawCard instance
         */
        SDrawCard.create = function create(properties) {
            return new SDrawCard(properties);
        };

        /**
         * Encodes the specified SDrawCard message. Does not implicitly {@link battle.SDrawCard.verify|verify} messages.
         * @function encode
         * @memberof battle.SDrawCard
         * @static
         * @param {battle.ISDrawCard} message SDrawCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SDrawCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.instId);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardId);
            return writer;
        };

        /**
         * Encodes the specified SDrawCard message, length delimited. Does not implicitly {@link battle.SDrawCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SDrawCard
         * @static
         * @param {battle.ISDrawCard} message SDrawCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SDrawCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SDrawCard message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SDrawCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SDrawCard} SDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SDrawCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SDrawCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.instId = reader.int64();
                        break;
                    }
                case 2: {
                        message.cardId = reader.int32();
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
         * Decodes a SDrawCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SDrawCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SDrawCard} SDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SDrawCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SDrawCard message.
         * @function verify
         * @memberof battle.SDrawCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SDrawCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (!$util.isInteger(message.instId) && !(message.instId && $util.isInteger(message.instId.low) && $util.isInteger(message.instId.high)))
                    return "instId: integer|Long expected";
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                if (!$util.isInteger(message.cardId))
                    return "cardId: integer expected";
            return null;
        };

        /**
         * Creates a SDrawCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SDrawCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SDrawCard} SDrawCard
         */
        SDrawCard.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SDrawCard)
                return object;
            var message = new $root.battle.SDrawCard();
            if (object.instId != null)
                if ($util.Long)
                    (message.instId = $util.Long.fromValue(object.instId)).unsigned = false;
                else if (typeof object.instId === "string")
                    message.instId = parseInt(object.instId, 10);
                else if (typeof object.instId === "number")
                    message.instId = object.instId;
                else if (typeof object.instId === "object")
                    message.instId = new $util.LongBits(object.instId.low >>> 0, object.instId.high >>> 0).toNumber();
            if (object.cardId != null)
                message.cardId = object.cardId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SDrawCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SDrawCard
         * @static
         * @param {battle.SDrawCard} message SDrawCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SDrawCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instId = options.longs === String ? "0" : 0;
                object.cardId = 0;
            }
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (typeof message.instId === "number")
                    object.instId = options.longs === String ? String(message.instId) : message.instId;
                else
                    object.instId = options.longs === String ? $util.Long.prototype.toString.call(message.instId) : options.longs === Number ? new $util.LongBits(message.instId.low >>> 0, message.instId.high >>> 0).toNumber() : message.instId;
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                object.cardId = message.cardId;
            return object;
        };

        /**
         * Converts this SDrawCard to JSON.
         * @function toJSON
         * @memberof battle.SDrawCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SDrawCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SDrawCard
         * @function getTypeUrl
         * @memberof battle.SDrawCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SDrawCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SDrawCard";
        };

        return SDrawCard;
    })();

    battle.CGetLocalWinAwards = (function() {

        /**
         * Properties of a CGetLocalWinAwards.
         * @memberof battle
         * @interface ICGetLocalWinAwards
         */

        /**
         * Constructs a new CGetLocalWinAwards.
         * @memberof battle
         * @classdesc Represents a CGetLocalWinAwards.
         * @implements ICGetLocalWinAwards
         * @constructor
         * @param {battle.ICGetLocalWinAwards=} [properties] Properties to set
         */
        function CGetLocalWinAwards(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CGetLocalWinAwards instance using the specified properties.
         * @function create
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {battle.ICGetLocalWinAwards=} [properties] Properties to set
         * @returns {battle.CGetLocalWinAwards} CGetLocalWinAwards instance
         */
        CGetLocalWinAwards.create = function create(properties) {
            return new CGetLocalWinAwards(properties);
        };

        /**
         * Encodes the specified CGetLocalWinAwards message. Does not implicitly {@link battle.CGetLocalWinAwards.verify|verify} messages.
         * @function encode
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {battle.ICGetLocalWinAwards} message CGetLocalWinAwards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetLocalWinAwards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CGetLocalWinAwards message, length delimited. Does not implicitly {@link battle.CGetLocalWinAwards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {battle.ICGetLocalWinAwards} message CGetLocalWinAwards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetLocalWinAwards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGetLocalWinAwards message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CGetLocalWinAwards} CGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetLocalWinAwards.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CGetLocalWinAwards();
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
         * Decodes a CGetLocalWinAwards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CGetLocalWinAwards} CGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetLocalWinAwards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGetLocalWinAwards message.
         * @function verify
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetLocalWinAwards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CGetLocalWinAwards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CGetLocalWinAwards} CGetLocalWinAwards
         */
        CGetLocalWinAwards.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CGetLocalWinAwards)
                return object;
            return new $root.battle.CGetLocalWinAwards();
        };

        /**
         * Creates a plain object from a CGetLocalWinAwards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {battle.CGetLocalWinAwards} message CGetLocalWinAwards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetLocalWinAwards.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CGetLocalWinAwards to JSON.
         * @function toJSON
         * @memberof battle.CGetLocalWinAwards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetLocalWinAwards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CGetLocalWinAwards
         * @function getTypeUrl
         * @memberof battle.CGetLocalWinAwards
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGetLocalWinAwards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CGetLocalWinAwards";
        };

        return CGetLocalWinAwards;
    })();

    battle.SGetLocalWinAwards = (function() {

        /**
         * Properties of a SGetLocalWinAwards.
         * @memberof battle
         * @interface ISGetLocalWinAwards
         * @property {Array.<common.IReward>|null} [awards] SGetLocalWinAwards awards
         */

        /**
         * Constructs a new SGetLocalWinAwards.
         * @memberof battle
         * @classdesc Represents a SGetLocalWinAwards.
         * @implements ISGetLocalWinAwards
         * @constructor
         * @param {battle.ISGetLocalWinAwards=} [properties] Properties to set
         */
        function SGetLocalWinAwards(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGetLocalWinAwards awards.
         * @member {Array.<common.IReward>} awards
         * @memberof battle.SGetLocalWinAwards
         * @instance
         */
        SGetLocalWinAwards.prototype.awards = $util.emptyArray;

        /**
         * Creates a new SGetLocalWinAwards instance using the specified properties.
         * @function create
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {battle.ISGetLocalWinAwards=} [properties] Properties to set
         * @returns {battle.SGetLocalWinAwards} SGetLocalWinAwards instance
         */
        SGetLocalWinAwards.create = function create(properties) {
            return new SGetLocalWinAwards(properties);
        };

        /**
         * Encodes the specified SGetLocalWinAwards message. Does not implicitly {@link battle.SGetLocalWinAwards.verify|verify} messages.
         * @function encode
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {battle.ISGetLocalWinAwards} message SGetLocalWinAwards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetLocalWinAwards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.common.Reward.encode(message.awards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SGetLocalWinAwards message, length delimited. Does not implicitly {@link battle.SGetLocalWinAwards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {battle.ISGetLocalWinAwards} message SGetLocalWinAwards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetLocalWinAwards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGetLocalWinAwards message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SGetLocalWinAwards} SGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetLocalWinAwards.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SGetLocalWinAwards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.awards && message.awards.length))
                            message.awards = [];
                        message.awards.push($root.common.Reward.decode(reader, reader.uint32()));
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
         * Decodes a SGetLocalWinAwards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SGetLocalWinAwards} SGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetLocalWinAwards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGetLocalWinAwards message.
         * @function verify
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGetLocalWinAwards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.common.Reward.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SGetLocalWinAwards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SGetLocalWinAwards} SGetLocalWinAwards
         */
        SGetLocalWinAwards.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SGetLocalWinAwards)
                return object;
            var message = new $root.battle.SGetLocalWinAwards();
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".battle.SGetLocalWinAwards.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".battle.SGetLocalWinAwards.awards: object expected");
                    message.awards[i] = $root.common.Reward.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SGetLocalWinAwards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {battle.SGetLocalWinAwards} message SGetLocalWinAwards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SGetLocalWinAwards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.common.Reward.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this SGetLocalWinAwards to JSON.
         * @function toJSON
         * @memberof battle.SGetLocalWinAwards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SGetLocalWinAwards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SGetLocalWinAwards
         * @function getTypeUrl
         * @memberof battle.SGetLocalWinAwards
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SGetLocalWinAwards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SGetLocalWinAwards";
        };

        return SGetLocalWinAwards;
    })();

    battle.CCheckIsInBattle = (function() {

        /**
         * Properties of a CCheckIsInBattle.
         * @memberof battle
         * @interface ICCheckIsInBattle
         */

        /**
         * Constructs a new CCheckIsInBattle.
         * @memberof battle
         * @classdesc Represents a CCheckIsInBattle.
         * @implements ICCheckIsInBattle
         * @constructor
         * @param {battle.ICCheckIsInBattle=} [properties] Properties to set
         */
        function CCheckIsInBattle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CCheckIsInBattle instance using the specified properties.
         * @function create
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {battle.ICCheckIsInBattle=} [properties] Properties to set
         * @returns {battle.CCheckIsInBattle} CCheckIsInBattle instance
         */
        CCheckIsInBattle.create = function create(properties) {
            return new CCheckIsInBattle(properties);
        };

        /**
         * Encodes the specified CCheckIsInBattle message. Does not implicitly {@link battle.CCheckIsInBattle.verify|verify} messages.
         * @function encode
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {battle.ICCheckIsInBattle} message CCheckIsInBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCheckIsInBattle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CCheckIsInBattle message, length delimited. Does not implicitly {@link battle.CCheckIsInBattle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {battle.ICCheckIsInBattle} message CCheckIsInBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCheckIsInBattle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CCheckIsInBattle message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CCheckIsInBattle} CCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCheckIsInBattle.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CCheckIsInBattle();
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
         * Decodes a CCheckIsInBattle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CCheckIsInBattle} CCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCheckIsInBattle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CCheckIsInBattle message.
         * @function verify
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCheckIsInBattle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CCheckIsInBattle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CCheckIsInBattle} CCheckIsInBattle
         */
        CCheckIsInBattle.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CCheckIsInBattle)
                return object;
            return new $root.battle.CCheckIsInBattle();
        };

        /**
         * Creates a plain object from a CCheckIsInBattle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {battle.CCheckIsInBattle} message CCheckIsInBattle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCheckIsInBattle.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CCheckIsInBattle to JSON.
         * @function toJSON
         * @memberof battle.CCheckIsInBattle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCheckIsInBattle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CCheckIsInBattle
         * @function getTypeUrl
         * @memberof battle.CCheckIsInBattle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCheckIsInBattle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CCheckIsInBattle";
        };

        return CCheckIsInBattle;
    })();

    battle.SCheckIsInBattle = (function() {

        /**
         * Properties of a SCheckIsInBattle.
         * @memberof battle
         * @interface ISCheckIsInBattle
         * @property {common.IBattleFieldData|null} [replayData] SCheckIsInBattle replayData
         */

        /**
         * Constructs a new SCheckIsInBattle.
         * @memberof battle
         * @classdesc Represents a SCheckIsInBattle.
         * @implements ISCheckIsInBattle
         * @constructor
         * @param {battle.ISCheckIsInBattle=} [properties] Properties to set
         */
        function SCheckIsInBattle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCheckIsInBattle replayData.
         * @member {common.IBattleFieldData|null|undefined} replayData
         * @memberof battle.SCheckIsInBattle
         * @instance
         */
        SCheckIsInBattle.prototype.replayData = null;

        /**
         * Creates a new SCheckIsInBattle instance using the specified properties.
         * @function create
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {battle.ISCheckIsInBattle=} [properties] Properties to set
         * @returns {battle.SCheckIsInBattle} SCheckIsInBattle instance
         */
        SCheckIsInBattle.create = function create(properties) {
            return new SCheckIsInBattle(properties);
        };

        /**
         * Encodes the specified SCheckIsInBattle message. Does not implicitly {@link battle.SCheckIsInBattle.verify|verify} messages.
         * @function encode
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {battle.ISCheckIsInBattle} message SCheckIsInBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCheckIsInBattle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.replayData != null && Object.hasOwnProperty.call(message, "replayData"))
                $root.common.BattleFieldData.encode(message.replayData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SCheckIsInBattle message, length delimited. Does not implicitly {@link battle.SCheckIsInBattle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {battle.ISCheckIsInBattle} message SCheckIsInBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCheckIsInBattle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCheckIsInBattle message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SCheckIsInBattle} SCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCheckIsInBattle.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SCheckIsInBattle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.replayData = $root.common.BattleFieldData.decode(reader, reader.uint32());
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
         * Decodes a SCheckIsInBattle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SCheckIsInBattle} SCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCheckIsInBattle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCheckIsInBattle message.
         * @function verify
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCheckIsInBattle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.replayData != null && message.hasOwnProperty("replayData")) {
                var error = $root.common.BattleFieldData.verify(message.replayData);
                if (error)
                    return "replayData." + error;
            }
            return null;
        };

        /**
         * Creates a SCheckIsInBattle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SCheckIsInBattle} SCheckIsInBattle
         */
        SCheckIsInBattle.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SCheckIsInBattle)
                return object;
            var message = new $root.battle.SCheckIsInBattle();
            if (object.replayData != null) {
                if (typeof object.replayData !== "object")
                    throw TypeError(".battle.SCheckIsInBattle.replayData: object expected");
                message.replayData = $root.common.BattleFieldData.fromObject(object.replayData);
            }
            return message;
        };

        /**
         * Creates a plain object from a SCheckIsInBattle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {battle.SCheckIsInBattle} message SCheckIsInBattle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCheckIsInBattle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.replayData = null;
            if (message.replayData != null && message.hasOwnProperty("replayData"))
                object.replayData = $root.common.BattleFieldData.toObject(message.replayData, options);
            return object;
        };

        /**
         * Converts this SCheckIsInBattle to JSON.
         * @function toJSON
         * @memberof battle.SCheckIsInBattle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCheckIsInBattle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SCheckIsInBattle
         * @function getTypeUrl
         * @memberof battle.SCheckIsInBattle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SCheckIsInBattle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SCheckIsInBattle";
        };

        return SCheckIsInBattle;
    })();

    battle.CRequestFrameData = (function() {

        /**
         * Properties of a CRequestFrameData.
         * @memberof battle
         * @interface ICRequestFrameData
         */

        /**
         * Constructs a new CRequestFrameData.
         * @memberof battle
         * @classdesc Represents a CRequestFrameData.
         * @implements ICRequestFrameData
         * @constructor
         * @param {battle.ICRequestFrameData=} [properties] Properties to set
         */
        function CRequestFrameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CRequestFrameData instance using the specified properties.
         * @function create
         * @memberof battle.CRequestFrameData
         * @static
         * @param {battle.ICRequestFrameData=} [properties] Properties to set
         * @returns {battle.CRequestFrameData} CRequestFrameData instance
         */
        CRequestFrameData.create = function create(properties) {
            return new CRequestFrameData(properties);
        };

        /**
         * Encodes the specified CRequestFrameData message. Does not implicitly {@link battle.CRequestFrameData.verify|verify} messages.
         * @function encode
         * @memberof battle.CRequestFrameData
         * @static
         * @param {battle.ICRequestFrameData} message CRequestFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRequestFrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CRequestFrameData message, length delimited. Does not implicitly {@link battle.CRequestFrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.CRequestFrameData
         * @static
         * @param {battle.ICRequestFrameData} message CRequestFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRequestFrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CRequestFrameData message from the specified reader or buffer.
         * @function decode
         * @memberof battle.CRequestFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.CRequestFrameData} CRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRequestFrameData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.CRequestFrameData();
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
         * Decodes a CRequestFrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.CRequestFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.CRequestFrameData} CRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRequestFrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CRequestFrameData message.
         * @function verify
         * @memberof battle.CRequestFrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRequestFrameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CRequestFrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.CRequestFrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.CRequestFrameData} CRequestFrameData
         */
        CRequestFrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.CRequestFrameData)
                return object;
            return new $root.battle.CRequestFrameData();
        };

        /**
         * Creates a plain object from a CRequestFrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.CRequestFrameData
         * @static
         * @param {battle.CRequestFrameData} message CRequestFrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRequestFrameData.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CRequestFrameData to JSON.
         * @function toJSON
         * @memberof battle.CRequestFrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRequestFrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CRequestFrameData
         * @function getTypeUrl
         * @memberof battle.CRequestFrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CRequestFrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.CRequestFrameData";
        };

        return CRequestFrameData;
    })();

    battle.SRequestFrameData = (function() {

        /**
         * Properties of a SRequestFrameData.
         * @memberof battle
         * @interface ISRequestFrameData
         * @property {number|null} [curFrame] SRequestFrameData curFrame
         * @property {Object.<string,common.IFrameData>|null} [frameData] SRequestFrameData frameData
         */

        /**
         * Constructs a new SRequestFrameData.
         * @memberof battle
         * @classdesc Represents a SRequestFrameData.
         * @implements ISRequestFrameData
         * @constructor
         * @param {battle.ISRequestFrameData=} [properties] Properties to set
         */
        function SRequestFrameData(properties) {
            this.frameData = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SRequestFrameData curFrame.
         * @member {number} curFrame
         * @memberof battle.SRequestFrameData
         * @instance
         */
        SRequestFrameData.prototype.curFrame = 0;

        /**
         * SRequestFrameData frameData.
         * @member {Object.<string,common.IFrameData>} frameData
         * @memberof battle.SRequestFrameData
         * @instance
         */
        SRequestFrameData.prototype.frameData = $util.emptyObject;

        /**
         * Creates a new SRequestFrameData instance using the specified properties.
         * @function create
         * @memberof battle.SRequestFrameData
         * @static
         * @param {battle.ISRequestFrameData=} [properties] Properties to set
         * @returns {battle.SRequestFrameData} SRequestFrameData instance
         */
        SRequestFrameData.create = function create(properties) {
            return new SRequestFrameData(properties);
        };

        /**
         * Encodes the specified SRequestFrameData message. Does not implicitly {@link battle.SRequestFrameData.verify|verify} messages.
         * @function encode
         * @memberof battle.SRequestFrameData
         * @static
         * @param {battle.ISRequestFrameData} message SRequestFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SRequestFrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.curFrame != null && Object.hasOwnProperty.call(message, "curFrame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.curFrame);
            if (message.frameData != null && Object.hasOwnProperty.call(message, "frameData"))
                for (var keys = Object.keys(message.frameData), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.common.FrameData.encode(message.frameData[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified SRequestFrameData message, length delimited. Does not implicitly {@link battle.SRequestFrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.SRequestFrameData
         * @static
         * @param {battle.ISRequestFrameData} message SRequestFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SRequestFrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SRequestFrameData message from the specified reader or buffer.
         * @function decode
         * @memberof battle.SRequestFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.SRequestFrameData} SRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SRequestFrameData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.SRequestFrameData(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.curFrame = reader.int32();
                        break;
                    }
                case 2: {
                        if (message.frameData === $util.emptyObject)
                            message.frameData = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.common.FrameData.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.frameData[key] = value;
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
         * Decodes a SRequestFrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.SRequestFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.SRequestFrameData} SRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SRequestFrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SRequestFrameData message.
         * @function verify
         * @memberof battle.SRequestFrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SRequestFrameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.curFrame != null && message.hasOwnProperty("curFrame"))
                if (!$util.isInteger(message.curFrame))
                    return "curFrame: integer expected";
            if (message.frameData != null && message.hasOwnProperty("frameData")) {
                if (!$util.isObject(message.frameData))
                    return "frameData: object expected";
                var key = Object.keys(message.frameData);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "frameData: integer key{k:int32} expected";
                    {
                        var error = $root.common.FrameData.verify(message.frameData[key[i]]);
                        if (error)
                            return "frameData." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a SRequestFrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.SRequestFrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.SRequestFrameData} SRequestFrameData
         */
        SRequestFrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.SRequestFrameData)
                return object;
            var message = new $root.battle.SRequestFrameData();
            if (object.curFrame != null)
                message.curFrame = object.curFrame | 0;
            if (object.frameData) {
                if (typeof object.frameData !== "object")
                    throw TypeError(".battle.SRequestFrameData.frameData: object expected");
                message.frameData = {};
                for (var keys = Object.keys(object.frameData), i = 0; i < keys.length; ++i) {
                    if (typeof object.frameData[keys[i]] !== "object")
                        throw TypeError(".battle.SRequestFrameData.frameData: object expected");
                    message.frameData[keys[i]] = $root.common.FrameData.fromObject(object.frameData[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SRequestFrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.SRequestFrameData
         * @static
         * @param {battle.SRequestFrameData} message SRequestFrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SRequestFrameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.frameData = {};
            if (options.defaults)
                object.curFrame = 0;
            if (message.curFrame != null && message.hasOwnProperty("curFrame"))
                object.curFrame = message.curFrame;
            var keys2;
            if (message.frameData && (keys2 = Object.keys(message.frameData)).length) {
                object.frameData = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.frameData[keys2[j]] = $root.common.FrameData.toObject(message.frameData[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this SRequestFrameData to JSON.
         * @function toJSON
         * @memberof battle.SRequestFrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SRequestFrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SRequestFrameData
         * @function getTypeUrl
         * @memberof battle.SRequestFrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SRequestFrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.SRequestFrameData";
        };

        return SRequestFrameData;
    })();

    battle.PNotifyBattleInit = (function() {

        /**
         * Properties of a PNotifyBattleInit.
         * @memberof battle
         * @interface IPNotifyBattleInit
         */

        /**
         * Constructs a new PNotifyBattleInit.
         * @memberof battle
         * @classdesc Represents a PNotifyBattleInit.
         * @implements IPNotifyBattleInit
         * @constructor
         * @param {battle.IPNotifyBattleInit=} [properties] Properties to set
         */
        function PNotifyBattleInit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PNotifyBattleInit instance using the specified properties.
         * @function create
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {battle.IPNotifyBattleInit=} [properties] Properties to set
         * @returns {battle.PNotifyBattleInit} PNotifyBattleInit instance
         */
        PNotifyBattleInit.create = function create(properties) {
            return new PNotifyBattleInit(properties);
        };

        /**
         * Encodes the specified PNotifyBattleInit message. Does not implicitly {@link battle.PNotifyBattleInit.verify|verify} messages.
         * @function encode
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {battle.IPNotifyBattleInit} message PNotifyBattleInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyBattleInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PNotifyBattleInit message, length delimited. Does not implicitly {@link battle.PNotifyBattleInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {battle.IPNotifyBattleInit} message PNotifyBattleInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyBattleInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PNotifyBattleInit message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PNotifyBattleInit} PNotifyBattleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyBattleInit.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PNotifyBattleInit();
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
         * Decodes a PNotifyBattleInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PNotifyBattleInit} PNotifyBattleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyBattleInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PNotifyBattleInit message.
         * @function verify
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PNotifyBattleInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PNotifyBattleInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PNotifyBattleInit} PNotifyBattleInit
         */
        PNotifyBattleInit.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PNotifyBattleInit)
                return object;
            return new $root.battle.PNotifyBattleInit();
        };

        /**
         * Creates a plain object from a PNotifyBattleInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {battle.PNotifyBattleInit} message PNotifyBattleInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PNotifyBattleInit.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PNotifyBattleInit to JSON.
         * @function toJSON
         * @memberof battle.PNotifyBattleInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PNotifyBattleInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PNotifyBattleInit
         * @function getTypeUrl
         * @memberof battle.PNotifyBattleInit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PNotifyBattleInit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PNotifyBattleInit";
        };

        return PNotifyBattleInit;
    })();

    battle.PNotifyBattleStart = (function() {

        /**
         * Properties of a PNotifyBattleStart.
         * @memberof battle
         * @interface IPNotifyBattleStart
         */

        /**
         * Constructs a new PNotifyBattleStart.
         * @memberof battle
         * @classdesc Represents a PNotifyBattleStart.
         * @implements IPNotifyBattleStart
         * @constructor
         * @param {battle.IPNotifyBattleStart=} [properties] Properties to set
         */
        function PNotifyBattleStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PNotifyBattleStart instance using the specified properties.
         * @function create
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {battle.IPNotifyBattleStart=} [properties] Properties to set
         * @returns {battle.PNotifyBattleStart} PNotifyBattleStart instance
         */
        PNotifyBattleStart.create = function create(properties) {
            return new PNotifyBattleStart(properties);
        };

        /**
         * Encodes the specified PNotifyBattleStart message. Does not implicitly {@link battle.PNotifyBattleStart.verify|verify} messages.
         * @function encode
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {battle.IPNotifyBattleStart} message PNotifyBattleStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyBattleStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PNotifyBattleStart message, length delimited. Does not implicitly {@link battle.PNotifyBattleStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {battle.IPNotifyBattleStart} message PNotifyBattleStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyBattleStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PNotifyBattleStart message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PNotifyBattleStart} PNotifyBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyBattleStart.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PNotifyBattleStart();
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
         * Decodes a PNotifyBattleStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PNotifyBattleStart} PNotifyBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyBattleStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PNotifyBattleStart message.
         * @function verify
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PNotifyBattleStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PNotifyBattleStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PNotifyBattleStart} PNotifyBattleStart
         */
        PNotifyBattleStart.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PNotifyBattleStart)
                return object;
            return new $root.battle.PNotifyBattleStart();
        };

        /**
         * Creates a plain object from a PNotifyBattleStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {battle.PNotifyBattleStart} message PNotifyBattleStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PNotifyBattleStart.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PNotifyBattleStart to JSON.
         * @function toJSON
         * @memberof battle.PNotifyBattleStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PNotifyBattleStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PNotifyBattleStart
         * @function getTypeUrl
         * @memberof battle.PNotifyBattleStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PNotifyBattleStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PNotifyBattleStart";
        };

        return PNotifyBattleStart;
    })();

    battle.PSyncFrameData = (function() {

        /**
         * Properties of a PSyncFrameData.
         * @memberof battle
         * @interface IPSyncFrameData
         */

        /**
         * Constructs a new PSyncFrameData.
         * @memberof battle
         * @classdesc Represents a PSyncFrameData.
         * @implements IPSyncFrameData
         * @constructor
         * @param {battle.IPSyncFrameData=} [properties] Properties to set
         */
        function PSyncFrameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PSyncFrameData instance using the specified properties.
         * @function create
         * @memberof battle.PSyncFrameData
         * @static
         * @param {battle.IPSyncFrameData=} [properties] Properties to set
         * @returns {battle.PSyncFrameData} PSyncFrameData instance
         */
        PSyncFrameData.create = function create(properties) {
            return new PSyncFrameData(properties);
        };

        /**
         * Encodes the specified PSyncFrameData message. Does not implicitly {@link battle.PSyncFrameData.verify|verify} messages.
         * @function encode
         * @memberof battle.PSyncFrameData
         * @static
         * @param {battle.IPSyncFrameData} message PSyncFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PSyncFrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PSyncFrameData message, length delimited. Does not implicitly {@link battle.PSyncFrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PSyncFrameData
         * @static
         * @param {battle.IPSyncFrameData} message PSyncFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PSyncFrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PSyncFrameData message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PSyncFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PSyncFrameData} PSyncFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PSyncFrameData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PSyncFrameData();
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
         * Decodes a PSyncFrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PSyncFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PSyncFrameData} PSyncFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PSyncFrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PSyncFrameData message.
         * @function verify
         * @memberof battle.PSyncFrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PSyncFrameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PSyncFrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PSyncFrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PSyncFrameData} PSyncFrameData
         */
        PSyncFrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PSyncFrameData)
                return object;
            return new $root.battle.PSyncFrameData();
        };

        /**
         * Creates a plain object from a PSyncFrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PSyncFrameData
         * @static
         * @param {battle.PSyncFrameData} message PSyncFrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PSyncFrameData.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PSyncFrameData to JSON.
         * @function toJSON
         * @memberof battle.PSyncFrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PSyncFrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PSyncFrameData
         * @function getTypeUrl
         * @memberof battle.PSyncFrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PSyncFrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PSyncFrameData";
        };

        return PSyncFrameData;
    })();

    battle.PNotifyNewCard = (function() {

        /**
         * Properties of a PNotifyNewCard.
         * @memberof battle
         * @interface IPNotifyNewCard
         */

        /**
         * Constructs a new PNotifyNewCard.
         * @memberof battle
         * @classdesc Represents a PNotifyNewCard.
         * @implements IPNotifyNewCard
         * @constructor
         * @param {battle.IPNotifyNewCard=} [properties] Properties to set
         */
        function PNotifyNewCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PNotifyNewCard instance using the specified properties.
         * @function create
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {battle.IPNotifyNewCard=} [properties] Properties to set
         * @returns {battle.PNotifyNewCard} PNotifyNewCard instance
         */
        PNotifyNewCard.create = function create(properties) {
            return new PNotifyNewCard(properties);
        };

        /**
         * Encodes the specified PNotifyNewCard message. Does not implicitly {@link battle.PNotifyNewCard.verify|verify} messages.
         * @function encode
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {battle.IPNotifyNewCard} message PNotifyNewCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyNewCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PNotifyNewCard message, length delimited. Does not implicitly {@link battle.PNotifyNewCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {battle.IPNotifyNewCard} message PNotifyNewCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyNewCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PNotifyNewCard message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PNotifyNewCard} PNotifyNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyNewCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PNotifyNewCard();
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
         * Decodes a PNotifyNewCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PNotifyNewCard} PNotifyNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyNewCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PNotifyNewCard message.
         * @function verify
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PNotifyNewCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PNotifyNewCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PNotifyNewCard} PNotifyNewCard
         */
        PNotifyNewCard.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PNotifyNewCard)
                return object;
            return new $root.battle.PNotifyNewCard();
        };

        /**
         * Creates a plain object from a PNotifyNewCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {battle.PNotifyNewCard} message PNotifyNewCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PNotifyNewCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PNotifyNewCard to JSON.
         * @function toJSON
         * @memberof battle.PNotifyNewCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PNotifyNewCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PNotifyNewCard
         * @function getTypeUrl
         * @memberof battle.PNotifyNewCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PNotifyNewCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PNotifyNewCard";
        };

        return PNotifyNewCard;
    })();

    battle.PNotifyPowerRecover = (function() {

        /**
         * Properties of a PNotifyPowerRecover.
         * @memberof battle
         * @interface IPNotifyPowerRecover
         */

        /**
         * Constructs a new PNotifyPowerRecover.
         * @memberof battle
         * @classdesc Represents a PNotifyPowerRecover.
         * @implements IPNotifyPowerRecover
         * @constructor
         * @param {battle.IPNotifyPowerRecover=} [properties] Properties to set
         */
        function PNotifyPowerRecover(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PNotifyPowerRecover instance using the specified properties.
         * @function create
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {battle.IPNotifyPowerRecover=} [properties] Properties to set
         * @returns {battle.PNotifyPowerRecover} PNotifyPowerRecover instance
         */
        PNotifyPowerRecover.create = function create(properties) {
            return new PNotifyPowerRecover(properties);
        };

        /**
         * Encodes the specified PNotifyPowerRecover message. Does not implicitly {@link battle.PNotifyPowerRecover.verify|verify} messages.
         * @function encode
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {battle.IPNotifyPowerRecover} message PNotifyPowerRecover message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyPowerRecover.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PNotifyPowerRecover message, length delimited. Does not implicitly {@link battle.PNotifyPowerRecover.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {battle.IPNotifyPowerRecover} message PNotifyPowerRecover message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyPowerRecover.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PNotifyPowerRecover message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PNotifyPowerRecover} PNotifyPowerRecover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyPowerRecover.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PNotifyPowerRecover();
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
         * Decodes a PNotifyPowerRecover message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PNotifyPowerRecover} PNotifyPowerRecover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyPowerRecover.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PNotifyPowerRecover message.
         * @function verify
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PNotifyPowerRecover.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PNotifyPowerRecover message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PNotifyPowerRecover} PNotifyPowerRecover
         */
        PNotifyPowerRecover.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PNotifyPowerRecover)
                return object;
            return new $root.battle.PNotifyPowerRecover();
        };

        /**
         * Creates a plain object from a PNotifyPowerRecover message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {battle.PNotifyPowerRecover} message PNotifyPowerRecover
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PNotifyPowerRecover.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PNotifyPowerRecover to JSON.
         * @function toJSON
         * @memberof battle.PNotifyPowerRecover
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PNotifyPowerRecover.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PNotifyPowerRecover
         * @function getTypeUrl
         * @memberof battle.PNotifyPowerRecover
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PNotifyPowerRecover.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PNotifyPowerRecover";
        };

        return PNotifyPowerRecover;
    })();

    battle.PNotifyBattleOver = (function() {

        /**
         * Properties of a PNotifyBattleOver.
         * @memberof battle
         * @interface IPNotifyBattleOver
         */

        /**
         * Constructs a new PNotifyBattleOver.
         * @memberof battle
         * @classdesc Represents a PNotifyBattleOver.
         * @implements IPNotifyBattleOver
         * @constructor
         * @param {battle.IPNotifyBattleOver=} [properties] Properties to set
         */
        function PNotifyBattleOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PNotifyBattleOver instance using the specified properties.
         * @function create
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {battle.IPNotifyBattleOver=} [properties] Properties to set
         * @returns {battle.PNotifyBattleOver} PNotifyBattleOver instance
         */
        PNotifyBattleOver.create = function create(properties) {
            return new PNotifyBattleOver(properties);
        };

        /**
         * Encodes the specified PNotifyBattleOver message. Does not implicitly {@link battle.PNotifyBattleOver.verify|verify} messages.
         * @function encode
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {battle.IPNotifyBattleOver} message PNotifyBattleOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyBattleOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PNotifyBattleOver message, length delimited. Does not implicitly {@link battle.PNotifyBattleOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {battle.IPNotifyBattleOver} message PNotifyBattleOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyBattleOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PNotifyBattleOver message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PNotifyBattleOver} PNotifyBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyBattleOver.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PNotifyBattleOver();
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
         * Decodes a PNotifyBattleOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PNotifyBattleOver} PNotifyBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyBattleOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PNotifyBattleOver message.
         * @function verify
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PNotifyBattleOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PNotifyBattleOver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PNotifyBattleOver} PNotifyBattleOver
         */
        PNotifyBattleOver.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PNotifyBattleOver)
                return object;
            return new $root.battle.PNotifyBattleOver();
        };

        /**
         * Creates a plain object from a PNotifyBattleOver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {battle.PNotifyBattleOver} message PNotifyBattleOver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PNotifyBattleOver.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PNotifyBattleOver to JSON.
         * @function toJSON
         * @memberof battle.PNotifyBattleOver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PNotifyBattleOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PNotifyBattleOver
         * @function getTypeUrl
         * @memberof battle.PNotifyBattleOver
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PNotifyBattleOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PNotifyBattleOver";
        };

        return PNotifyBattleOver;
    })();

    battle.PNotifyEnemyCardNum = (function() {

        /**
         * Properties of a PNotifyEnemyCardNum.
         * @memberof battle
         * @interface IPNotifyEnemyCardNum
         */

        /**
         * Constructs a new PNotifyEnemyCardNum.
         * @memberof battle
         * @classdesc Represents a PNotifyEnemyCardNum.
         * @implements IPNotifyEnemyCardNum
         * @constructor
         * @param {battle.IPNotifyEnemyCardNum=} [properties] Properties to set
         */
        function PNotifyEnemyCardNum(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PNotifyEnemyCardNum instance using the specified properties.
         * @function create
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {battle.IPNotifyEnemyCardNum=} [properties] Properties to set
         * @returns {battle.PNotifyEnemyCardNum} PNotifyEnemyCardNum instance
         */
        PNotifyEnemyCardNum.create = function create(properties) {
            return new PNotifyEnemyCardNum(properties);
        };

        /**
         * Encodes the specified PNotifyEnemyCardNum message. Does not implicitly {@link battle.PNotifyEnemyCardNum.verify|verify} messages.
         * @function encode
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {battle.IPNotifyEnemyCardNum} message PNotifyEnemyCardNum message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyEnemyCardNum.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PNotifyEnemyCardNum message, length delimited. Does not implicitly {@link battle.PNotifyEnemyCardNum.verify|verify} messages.
         * @function encodeDelimited
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {battle.IPNotifyEnemyCardNum} message PNotifyEnemyCardNum message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PNotifyEnemyCardNum.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PNotifyEnemyCardNum message from the specified reader or buffer.
         * @function decode
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {battle.PNotifyEnemyCardNum} PNotifyEnemyCardNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyEnemyCardNum.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle.PNotifyEnemyCardNum();
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
         * Decodes a PNotifyEnemyCardNum message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {battle.PNotifyEnemyCardNum} PNotifyEnemyCardNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PNotifyEnemyCardNum.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PNotifyEnemyCardNum message.
         * @function verify
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PNotifyEnemyCardNum.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PNotifyEnemyCardNum message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {battle.PNotifyEnemyCardNum} PNotifyEnemyCardNum
         */
        PNotifyEnemyCardNum.fromObject = function fromObject(object) {
            if (object instanceof $root.battle.PNotifyEnemyCardNum)
                return object;
            return new $root.battle.PNotifyEnemyCardNum();
        };

        /**
         * Creates a plain object from a PNotifyEnemyCardNum message. Also converts values to other types if specified.
         * @function toObject
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {battle.PNotifyEnemyCardNum} message PNotifyEnemyCardNum
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PNotifyEnemyCardNum.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PNotifyEnemyCardNum to JSON.
         * @function toJSON
         * @memberof battle.PNotifyEnemyCardNum
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PNotifyEnemyCardNum.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PNotifyEnemyCardNum
         * @function getTypeUrl
         * @memberof battle.PNotifyEnemyCardNum
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PNotifyEnemyCardNum.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/battle.PNotifyEnemyCardNum";
        };

        return PNotifyEnemyCardNum;
    })();

    return battle;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * BattleState enum.
     * @name common.BattleState
     * @enum {number}
     * @property {number} BATTLE_STATE_UNKNOWN=0 BATTLE_STATE_UNKNOWN value
     * @property {number} BATTLE_STATE_INIT=1 BATTLE_STATE_INIT value
     * @property {number} BATTLE_STATE_LOADING=2 BATTLE_STATE_LOADING value
     * @property {number} BATTLE_STATE_COUNT_DOWN=3 BATTLE_STATE_COUNT_DOWN value
     * @property {number} BATTLE_STATE_FIGHTING=4 BATTLE_STATE_FIGHTING value
     * @property {number} BATTLE_STATE_OVER=5 BATTLE_STATE_OVER value
     * @property {number} BATTLE_STATE_DELETE=6 BATTLE_STATE_DELETE value
     */
    common.BattleState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BATTLE_STATE_UNKNOWN"] = 0;
        values[valuesById[1] = "BATTLE_STATE_INIT"] = 1;
        values[valuesById[2] = "BATTLE_STATE_LOADING"] = 2;
        values[valuesById[3] = "BATTLE_STATE_COUNT_DOWN"] = 3;
        values[valuesById[4] = "BATTLE_STATE_FIGHTING"] = 4;
        values[valuesById[5] = "BATTLE_STATE_OVER"] = 5;
        values[valuesById[6] = "BATTLE_STATE_DELETE"] = 6;
        return values;
    })();

    /**
     * BattleFieldType enum.
     * @name common.BattleFieldType
     * @enum {number}
     * @property {number} BATTLE_FIELD_INVALID=0 BATTLE_FIELD_INVALID value
     * @property {number} BATTLE_FIELD_NORMAL=1 BATTLE_FIELD_NORMAL value
     * @property {number} BATTLE_FIELD_REPLAY=2 BATTLE_FIELD_REPLAY value
     * @property {number} BATTLE_FIELD_CHECK_RESULT=3 BATTLE_FIELD_CHECK_RESULT value
     */
    common.BattleFieldType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BATTLE_FIELD_INVALID"] = 0;
        values[valuesById[1] = "BATTLE_FIELD_NORMAL"] = 1;
        values[valuesById[2] = "BATTLE_FIELD_REPLAY"] = 2;
        values[valuesById[3] = "BATTLE_FIELD_CHECK_RESULT"] = 3;
        return values;
    })();

    /**
     * BattleSide enum.
     * @name common.BattleSide
     * @enum {number}
     * @property {number} LEFT=0 LEFT value
     * @property {number} RIGHT=1 RIGHT value
     * @property {number} MAX=3 MAX value
     */
    common.BattleSide = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEFT"] = 0;
        values[valuesById[1] = "RIGHT"] = 1;
        values[valuesById[3] = "MAX"] = 3;
        return values;
    })();

    /**
     * RouteType enum.
     * @name common.RouteType
     * @enum {number}
     * @property {number} DOWN=0 DOWN value
     * @property {number} MIDDLE=1 MIDDLE value
     * @property {number} UP=2 UP value
     */
    common.RouteType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOWN"] = 0;
        values[valuesById[1] = "MIDDLE"] = 1;
        values[valuesById[2] = "UP"] = 2;
        return values;
    })();

    /**
     * HeroState enum.
     * @name common.HeroState
     * @enum {number}
     * @property {number} HERO_STATE_INIT=0 HERO_STATE_INIT value
     * @property {number} HERO_STATE_SEARCH=1 HERO_STATE_SEARCH value
     * @property {number} HERO_STATE_MOVE=2 HERO_STATE_MOVE value
     * @property {number} HERO_STATE_ATTACK=3 HERO_STATE_ATTACK value
     * @property {number} HERO_STATE_DELETE=4 HERO_STATE_DELETE value
     * @property {number} HERO_STATE_OVER=888 HERO_STATE_OVER value
     * @property {number} HERO_STATE_DEAD=999 HERO_STATE_DEAD value
     * @property {number} HERO_STATE_ERROR=1888 HERO_STATE_ERROR value
     */
    common.HeroState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HERO_STATE_INIT"] = 0;
        values[valuesById[1] = "HERO_STATE_SEARCH"] = 1;
        values[valuesById[2] = "HERO_STATE_MOVE"] = 2;
        values[valuesById[3] = "HERO_STATE_ATTACK"] = 3;
        values[valuesById[4] = "HERO_STATE_DELETE"] = 4;
        values[valuesById[888] = "HERO_STATE_OVER"] = 888;
        values[valuesById[999] = "HERO_STATE_DEAD"] = 999;
        values[valuesById[1888] = "HERO_STATE_ERROR"] = 1888;
        return values;
    })();

    /**
     * BulletState enum.
     * @name common.BulletState
     * @enum {number}
     * @property {number} BULLET_STATE_NORMAL=0 BULLET_STATE_NORMAL value
     * @property {number} BULLET_STATE_DEAD=1 BULLET_STATE_DEAD value
     * @property {number} BULLET_STATE_DELETE=2 BULLET_STATE_DELETE value
     */
    common.BulletState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BULLET_STATE_NORMAL"] = 0;
        values[valuesById[1] = "BULLET_STATE_DEAD"] = 1;
        values[valuesById[2] = "BULLET_STATE_DELETE"] = 2;
        return values;
    })();

    /**
     * TargetType enum.
     * @name common.TargetType
     * @enum {number}
     * @property {number} TARGET_TYPE_All=0 TARGET_TYPE_All value
     * @property {number} TARGET_TYPE_FRIEND=1 TARGET_TYPE_FRIEND value
     * @property {number} TARGET_TYPE_ENEMY=2 TARGET_TYPE_ENEMY value
     */
    common.TargetType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TARGET_TYPE_All"] = 0;
        values[valuesById[1] = "TARGET_TYPE_FRIEND"] = 1;
        values[valuesById[2] = "TARGET_TYPE_ENEMY"] = 2;
        return values;
    })();

    /**
     * BuffEffectType enum.
     * @name common.BuffEffectType
     * @enum {number}
     * @property {number} EFFECT_TYPE_UNKNOWN=0 EFFECT_TYPE_UNKNOWN value
     * @property {number} BAN_MOVE=1 BAN_MOVE value
     * @property {number} BAN_ATTACK=2 BAN_ATTACK value
     * @property {number} IMMUNE_CONTROL=3 IMMUNE_CONTROL value
     * @property {number} IMMUNE_DAMAGE=4 IMMUNE_DAMAGE value
     * @property {number} INVINCIBLE=5 INVINCIBLE value
     */
    common.BuffEffectType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EFFECT_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "BAN_MOVE"] = 1;
        values[valuesById[2] = "BAN_ATTACK"] = 2;
        values[valuesById[3] = "IMMUNE_CONTROL"] = 3;
        values[valuesById[4] = "IMMUNE_DAMAGE"] = 4;
        values[valuesById[5] = "INVINCIBLE"] = 5;
        return values;
    })();

    /**
     * SkillFindTargetWay enum.
     * @name common.SkillFindTargetWay
     * @enum {number}
     * @property {number} SINGLE=0 SINGLE value
     */
    common.SkillFindTargetWay = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SINGLE"] = 0;
        return values;
    })();

    /**
     * DamageAttrIndex enum.
     * @name common.DamageAttrIndex
     * @enum {number}
     * @property {number} Damage=0 Damage value
     * @property {number} Healing=1 Healing value
     * @property {number} CritPer=2 CritPer value
     * @property {number} BlockPer=3 BlockPer value
     * @property {number} DodgePer=4 DodgePer value
     * @property {number} CritDmgPer=5 CritDmgPer value
     * @property {number} SuckBloodPer=6 SuckBloodPer value
     */
    common.DamageAttrIndex = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Damage"] = 0;
        values[valuesById[1] = "Healing"] = 1;
        values[valuesById[2] = "CritPer"] = 2;
        values[valuesById[3] = "BlockPer"] = 3;
        values[valuesById[4] = "DodgePer"] = 4;
        values[valuesById[5] = "CritDmgPer"] = 5;
        values[valuesById[6] = "SuckBloodPer"] = 6;
        return values;
    })();

    /**
     * DamageType enum.
     * @name common.DamageType
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} DODGE=1 DODGE value
     * @property {number} BLOCK=2 BLOCK value
     * @property {number} CRIT=3 CRIT value
     * @property {number} IMMUNE=999 IMMUNE value
     */
    common.DamageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "DODGE"] = 1;
        values[valuesById[2] = "BLOCK"] = 2;
        values[valuesById[3] = "CRIT"] = 3;
        values[valuesById[999] = "IMMUNE"] = 999;
        return values;
    })();

    /**
     * CardRemoveType enum.
     * @name common.CardRemoveType
     * @enum {number}
     * @property {number} REMOVE_TYPE_UNKNOWN=0 REMOVE_TYPE_UNKNOWN value
     * @property {number} REPLAY=1 REPLAY value
     * @property {number} COMMAND=2 COMMAND value
     * @property {number} DROP=3 DROP value
     */
    common.CardRemoveType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "REMOVE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "REPLAY"] = 1;
        values[valuesById[2] = "COMMAND"] = 2;
        values[valuesById[3] = "DROP"] = 3;
        return values;
    })();

    common.RouteInfo = (function() {

        /**
         * Properties of a RouteInfo.
         * @memberof common
         * @interface IRouteInfo
         * @property {number|null} [route] RouteInfo route
         * @property {number|null} [posX] RouteInfo posX
         * @property {number|null} [posY] RouteInfo posY
         */

        /**
         * Constructs a new RouteInfo.
         * @memberof common
         * @classdesc Represents a RouteInfo.
         * @implements IRouteInfo
         * @constructor
         * @param {common.IRouteInfo=} [properties] Properties to set
         */
        function RouteInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteInfo route.
         * @member {number} route
         * @memberof common.RouteInfo
         * @instance
         */
        RouteInfo.prototype.route = 0;

        /**
         * RouteInfo posX.
         * @member {number} posX
         * @memberof common.RouteInfo
         * @instance
         */
        RouteInfo.prototype.posX = 0;

        /**
         * RouteInfo posY.
         * @member {number} posY
         * @memberof common.RouteInfo
         * @instance
         */
        RouteInfo.prototype.posY = 0;

        /**
         * Creates a new RouteInfo instance using the specified properties.
         * @function create
         * @memberof common.RouteInfo
         * @static
         * @param {common.IRouteInfo=} [properties] Properties to set
         * @returns {common.RouteInfo} RouteInfo instance
         */
        RouteInfo.create = function create(properties) {
            return new RouteInfo(properties);
        };

        /**
         * Encodes the specified RouteInfo message. Does not implicitly {@link common.RouteInfo.verify|verify} messages.
         * @function encode
         * @memberof common.RouteInfo
         * @static
         * @param {common.IRouteInfo} message RouteInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.route);
            if (message.posX != null && Object.hasOwnProperty.call(message, "posX"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.posX);
            if (message.posY != null && Object.hasOwnProperty.call(message, "posY"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.posY);
            return writer;
        };

        /**
         * Encodes the specified RouteInfo message, length delimited. Does not implicitly {@link common.RouteInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RouteInfo
         * @static
         * @param {common.IRouteInfo} message RouteInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.RouteInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RouteInfo} RouteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RouteInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.route = reader.int32();
                        break;
                    }
                case 2: {
                        message.posX = reader.int32();
                        break;
                    }
                case 3: {
                        message.posY = reader.int32();
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
         * Decodes a RouteInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RouteInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RouteInfo} RouteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteInfo message.
         * @function verify
         * @memberof common.RouteInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isInteger(message.route))
                    return "route: integer expected";
            if (message.posX != null && message.hasOwnProperty("posX"))
                if (!$util.isInteger(message.posX))
                    return "posX: integer expected";
            if (message.posY != null && message.hasOwnProperty("posY"))
                if (!$util.isInteger(message.posY))
                    return "posY: integer expected";
            return null;
        };

        /**
         * Creates a RouteInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RouteInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RouteInfo} RouteInfo
         */
        RouteInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RouteInfo)
                return object;
            var message = new $root.common.RouteInfo();
            if (object.route != null)
                message.route = object.route | 0;
            if (object.posX != null)
                message.posX = object.posX | 0;
            if (object.posY != null)
                message.posY = object.posY | 0;
            return message;
        };

        /**
         * Creates a plain object from a RouteInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RouteInfo
         * @static
         * @param {common.RouteInfo} message RouteInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.route = 0;
                object.posX = 0;
                object.posY = 0;
            }
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.posX != null && message.hasOwnProperty("posX"))
                object.posX = message.posX;
            if (message.posY != null && message.hasOwnProperty("posY"))
                object.posY = message.posY;
            return object;
        };

        /**
         * Converts this RouteInfo to JSON.
         * @function toJSON
         * @memberof common.RouteInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteInfo
         * @function getTypeUrl
         * @memberof common.RouteInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RouteInfo";
        };

        return RouteInfo;
    })();

    common.CommandRoute = (function() {

        /**
         * Properties of a CommandRoute.
         * @memberof common
         * @interface ICommandRoute
         * @property {number|null} [route] CommandRoute route
         * @property {number|null} [posX] CommandRoute posX
         * @property {number|null} [posY] CommandRoute posY
         * @property {boolean|null} [front] CommandRoute front
         */

        /**
         * Constructs a new CommandRoute.
         * @memberof common
         * @classdesc Represents a CommandRoute.
         * @implements ICommandRoute
         * @constructor
         * @param {common.ICommandRoute=} [properties] Properties to set
         */
        function CommandRoute(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommandRoute route.
         * @member {number} route
         * @memberof common.CommandRoute
         * @instance
         */
        CommandRoute.prototype.route = 0;

        /**
         * CommandRoute posX.
         * @member {number} posX
         * @memberof common.CommandRoute
         * @instance
         */
        CommandRoute.prototype.posX = 0;

        /**
         * CommandRoute posY.
         * @member {number} posY
         * @memberof common.CommandRoute
         * @instance
         */
        CommandRoute.prototype.posY = 0;

        /**
         * CommandRoute front.
         * @member {boolean} front
         * @memberof common.CommandRoute
         * @instance
         */
        CommandRoute.prototype.front = false;

        /**
         * Creates a new CommandRoute instance using the specified properties.
         * @function create
         * @memberof common.CommandRoute
         * @static
         * @param {common.ICommandRoute=} [properties] Properties to set
         * @returns {common.CommandRoute} CommandRoute instance
         */
        CommandRoute.create = function create(properties) {
            return new CommandRoute(properties);
        };

        /**
         * Encodes the specified CommandRoute message. Does not implicitly {@link common.CommandRoute.verify|verify} messages.
         * @function encode
         * @memberof common.CommandRoute
         * @static
         * @param {common.ICommandRoute} message CommandRoute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandRoute.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.route);
            if (message.posX != null && Object.hasOwnProperty.call(message, "posX"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.posX);
            if (message.posY != null && Object.hasOwnProperty.call(message, "posY"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.posY);
            if (message.front != null && Object.hasOwnProperty.call(message, "front"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.front);
            return writer;
        };

        /**
         * Encodes the specified CommandRoute message, length delimited. Does not implicitly {@link common.CommandRoute.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.CommandRoute
         * @static
         * @param {common.ICommandRoute} message CommandRoute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandRoute.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommandRoute message from the specified reader or buffer.
         * @function decode
         * @memberof common.CommandRoute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.CommandRoute} CommandRoute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandRoute.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.CommandRoute();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.route = reader.int32();
                        break;
                    }
                case 2: {
                        message.posX = reader.int32();
                        break;
                    }
                case 3: {
                        message.posY = reader.int32();
                        break;
                    }
                case 4: {
                        message.front = reader.bool();
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
         * Decodes a CommandRoute message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.CommandRoute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.CommandRoute} CommandRoute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandRoute.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommandRoute message.
         * @function verify
         * @memberof common.CommandRoute
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandRoute.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isInteger(message.route))
                    return "route: integer expected";
            if (message.posX != null && message.hasOwnProperty("posX"))
                if (!$util.isInteger(message.posX))
                    return "posX: integer expected";
            if (message.posY != null && message.hasOwnProperty("posY"))
                if (!$util.isInteger(message.posY))
                    return "posY: integer expected";
            if (message.front != null && message.hasOwnProperty("front"))
                if (typeof message.front !== "boolean")
                    return "front: boolean expected";
            return null;
        };

        /**
         * Creates a CommandRoute message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.CommandRoute
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.CommandRoute} CommandRoute
         */
        CommandRoute.fromObject = function fromObject(object) {
            if (object instanceof $root.common.CommandRoute)
                return object;
            var message = new $root.common.CommandRoute();
            if (object.route != null)
                message.route = object.route | 0;
            if (object.posX != null)
                message.posX = object.posX | 0;
            if (object.posY != null)
                message.posY = object.posY | 0;
            if (object.front != null)
                message.front = Boolean(object.front);
            return message;
        };

        /**
         * Creates a plain object from a CommandRoute message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.CommandRoute
         * @static
         * @param {common.CommandRoute} message CommandRoute
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandRoute.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.route = 0;
                object.posX = 0;
                object.posY = 0;
                object.front = false;
            }
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.posX != null && message.hasOwnProperty("posX"))
                object.posX = message.posX;
            if (message.posY != null && message.hasOwnProperty("posY"))
                object.posY = message.posY;
            if (message.front != null && message.hasOwnProperty("front"))
                object.front = message.front;
            return object;
        };

        /**
         * Converts this CommandRoute to JSON.
         * @function toJSON
         * @memberof common.CommandRoute
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandRoute.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommandRoute
         * @function getTypeUrl
         * @memberof common.CommandRoute
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommandRoute.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.CommandRoute";
        };

        return CommandRoute;
    })();

    common.Command = (function() {

        /**
         * Properties of a Command.
         * @memberof common
         * @interface ICommand
         * @property {number|Long|null} [instId] Command instId
         * @property {number|null} [card] Command card
         * @property {Array.<common.ICommandRoute>|null} [routes] Command routes
         */

        /**
         * Constructs a new Command.
         * @memberof common
         * @classdesc Represents a Command.
         * @implements ICommand
         * @constructor
         * @param {common.ICommand=} [properties] Properties to set
         */
        function Command(properties) {
            this.routes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Command instId.
         * @member {number|Long} instId
         * @memberof common.Command
         * @instance
         */
        Command.prototype.instId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Command card.
         * @member {number} card
         * @memberof common.Command
         * @instance
         */
        Command.prototype.card = 0;

        /**
         * Command routes.
         * @member {Array.<common.ICommandRoute>} routes
         * @memberof common.Command
         * @instance
         */
        Command.prototype.routes = $util.emptyArray;

        /**
         * Creates a new Command instance using the specified properties.
         * @function create
         * @memberof common.Command
         * @static
         * @param {common.ICommand=} [properties] Properties to set
         * @returns {common.Command} Command instance
         */
        Command.create = function create(properties) {
            return new Command(properties);
        };

        /**
         * Encodes the specified Command message. Does not implicitly {@link common.Command.verify|verify} messages.
         * @function encode
         * @memberof common.Command
         * @static
         * @param {common.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.instId);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
            if (message.routes != null && message.routes.length)
                for (var i = 0; i < message.routes.length; ++i)
                    $root.common.CommandRoute.encode(message.routes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link common.Command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Command
         * @static
         * @param {common.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @function decode
         * @memberof common.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Command();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.instId = reader.int64();
                        break;
                    }
                case 2: {
                        message.card = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.routes && message.routes.length))
                            message.routes = [];
                        message.routes.push($root.common.CommandRoute.decode(reader, reader.uint32()));
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
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Command message.
         * @function verify
         * @memberof common.Command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (!$util.isInteger(message.instId) && !(message.instId && $util.isInteger(message.instId.low) && $util.isInteger(message.instId.high)))
                    return "instId: integer|Long expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            if (message.routes != null && message.hasOwnProperty("routes")) {
                if (!Array.isArray(message.routes))
                    return "routes: array expected";
                for (var i = 0; i < message.routes.length; ++i) {
                    var error = $root.common.CommandRoute.verify(message.routes[i]);
                    if (error)
                        return "routes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Command} Command
         */
        Command.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Command)
                return object;
            var message = new $root.common.Command();
            if (object.instId != null)
                if ($util.Long)
                    (message.instId = $util.Long.fromValue(object.instId)).unsigned = false;
                else if (typeof object.instId === "string")
                    message.instId = parseInt(object.instId, 10);
                else if (typeof object.instId === "number")
                    message.instId = object.instId;
                else if (typeof object.instId === "object")
                    message.instId = new $util.LongBits(object.instId.low >>> 0, object.instId.high >>> 0).toNumber();
            if (object.card != null)
                message.card = object.card | 0;
            if (object.routes) {
                if (!Array.isArray(object.routes))
                    throw TypeError(".common.Command.routes: array expected");
                message.routes = [];
                for (var i = 0; i < object.routes.length; ++i) {
                    if (typeof object.routes[i] !== "object")
                        throw TypeError(".common.Command.routes: object expected");
                    message.routes[i] = $root.common.CommandRoute.fromObject(object.routes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Command
         * @static
         * @param {common.Command} message Command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.routes = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instId = options.longs === String ? "0" : 0;
                object.card = 0;
            }
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (typeof message.instId === "number")
                    object.instId = options.longs === String ? String(message.instId) : message.instId;
                else
                    object.instId = options.longs === String ? $util.Long.prototype.toString.call(message.instId) : options.longs === Number ? new $util.LongBits(message.instId.low >>> 0, message.instId.high >>> 0).toNumber() : message.instId;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            if (message.routes && message.routes.length) {
                object.routes = [];
                for (var j = 0; j < message.routes.length; ++j)
                    object.routes[j] = $root.common.CommandRoute.toObject(message.routes[j], options);
            }
            return object;
        };

        /**
         * Converts this Command to JSON.
         * @function toJSON
         * @memberof common.Command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Command
         * @function getTypeUrl
         * @memberof common.Command
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Command.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Command";
        };

        return Command;
    })();

    common.RemoveCardCommand = (function() {

        /**
         * Properties of a RemoveCardCommand.
         * @memberof common
         * @interface IRemoveCardCommand
         * @property {number|null} [instId] RemoveCardCommand instId
         */

        /**
         * Constructs a new RemoveCardCommand.
         * @memberof common
         * @classdesc Represents a RemoveCardCommand.
         * @implements IRemoveCardCommand
         * @constructor
         * @param {common.IRemoveCardCommand=} [properties] Properties to set
         */
        function RemoveCardCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveCardCommand instId.
         * @member {number} instId
         * @memberof common.RemoveCardCommand
         * @instance
         */
        RemoveCardCommand.prototype.instId = 0;

        /**
         * Creates a new RemoveCardCommand instance using the specified properties.
         * @function create
         * @memberof common.RemoveCardCommand
         * @static
         * @param {common.IRemoveCardCommand=} [properties] Properties to set
         * @returns {common.RemoveCardCommand} RemoveCardCommand instance
         */
        RemoveCardCommand.create = function create(properties) {
            return new RemoveCardCommand(properties);
        };

        /**
         * Encodes the specified RemoveCardCommand message. Does not implicitly {@link common.RemoveCardCommand.verify|verify} messages.
         * @function encode
         * @memberof common.RemoveCardCommand
         * @static
         * @param {common.IRemoveCardCommand} message RemoveCardCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveCardCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.instId);
            return writer;
        };

        /**
         * Encodes the specified RemoveCardCommand message, length delimited. Does not implicitly {@link common.RemoveCardCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RemoveCardCommand
         * @static
         * @param {common.IRemoveCardCommand} message RemoveCardCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveCardCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveCardCommand message from the specified reader or buffer.
         * @function decode
         * @memberof common.RemoveCardCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RemoveCardCommand} RemoveCardCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveCardCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RemoveCardCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.instId = reader.int32();
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
         * Decodes a RemoveCardCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RemoveCardCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RemoveCardCommand} RemoveCardCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveCardCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveCardCommand message.
         * @function verify
         * @memberof common.RemoveCardCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveCardCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (!$util.isInteger(message.instId))
                    return "instId: integer expected";
            return null;
        };

        /**
         * Creates a RemoveCardCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RemoveCardCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RemoveCardCommand} RemoveCardCommand
         */
        RemoveCardCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RemoveCardCommand)
                return object;
            var message = new $root.common.RemoveCardCommand();
            if (object.instId != null)
                message.instId = object.instId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RemoveCardCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RemoveCardCommand
         * @static
         * @param {common.RemoveCardCommand} message RemoveCardCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveCardCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.instId = 0;
            if (message.instId != null && message.hasOwnProperty("instId"))
                object.instId = message.instId;
            return object;
        };

        /**
         * Converts this RemoveCardCommand to JSON.
         * @function toJSON
         * @memberof common.RemoveCardCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveCardCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveCardCommand
         * @function getTypeUrl
         * @memberof common.RemoveCardCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveCardCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RemoveCardCommand";
        };

        return RemoveCardCommand;
    })();

    common.Equip = (function() {

        /**
         * Properties of an Equip.
         * @memberof common
         * @interface IEquip
         * @property {number|Long|null} [id] Equip id
         */

        /**
         * Constructs a new Equip.
         * @memberof common
         * @classdesc Represents an Equip.
         * @implements IEquip
         * @constructor
         * @param {common.IEquip=} [properties] Properties to set
         */
        function Equip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Equip id.
         * @member {number|Long} id
         * @memberof common.Equip
         * @instance
         */
        Equip.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Equip instance using the specified properties.
         * @function create
         * @memberof common.Equip
         * @static
         * @param {common.IEquip=} [properties] Properties to set
         * @returns {common.Equip} Equip instance
         */
        Equip.create = function create(properties) {
            return new Equip(properties);
        };

        /**
         * Encodes the specified Equip message. Does not implicitly {@link common.Equip.verify|verify} messages.
         * @function encode
         * @memberof common.Equip
         * @static
         * @param {common.IEquip} message Equip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Equip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified Equip message, length delimited. Does not implicitly {@link common.Equip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Equip
         * @static
         * @param {common.IEquip} message Equip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Equip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Equip message from the specified reader or buffer.
         * @function decode
         * @memberof common.Equip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Equip} Equip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Equip.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Equip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
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
         * Decodes an Equip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Equip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Equip} Equip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Equip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Equip message.
         * @function verify
         * @memberof common.Equip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Equip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates an Equip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Equip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Equip} Equip
         */
        Equip.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Equip)
                return object;
            var message = new $root.common.Equip();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Equip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Equip
         * @static
         * @param {common.Equip} message Equip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Equip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this Equip to JSON.
         * @function toJSON
         * @memberof common.Equip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Equip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Equip
         * @function getTypeUrl
         * @memberof common.Equip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Equip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Equip";
        };

        return Equip;
    })();

    common.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof common
         * @interface ICard
         * @property {number|null} [id] Card id
         * @property {number|null} [level] Card level
         * @property {Array.<common.IEquip>|null} [equips] Card equips
         * @property {number|null} [modelId] Card modelId
         */

        /**
         * Constructs a new Card.
         * @memberof common
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {common.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            this.equips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card id.
         * @member {number} id
         * @memberof common.Card
         * @instance
         */
        Card.prototype.id = 0;

        /**
         * Card level.
         * @member {number} level
         * @memberof common.Card
         * @instance
         */
        Card.prototype.level = 0;

        /**
         * Card equips.
         * @member {Array.<common.IEquip>} equips
         * @memberof common.Card
         * @instance
         */
        Card.prototype.equips = $util.emptyArray;

        /**
         * Card modelId.
         * @member {number} modelId
         * @memberof common.Card
         * @instance
         */
        Card.prototype.modelId = 0;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof common.Card
         * @static
         * @param {common.ICard=} [properties] Properties to set
         * @returns {common.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link common.Card.verify|verify} messages.
         * @function encode
         * @memberof common.Card
         * @static
         * @param {common.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
            if (message.equips != null && message.equips.length)
                for (var i = 0; i < message.equips.length; ++i)
                    $root.common.Equip.encode(message.equips[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.modelId != null && Object.hasOwnProperty.call(message, "modelId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.modelId);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link common.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Card
         * @static
         * @param {common.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof common.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.level = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.equips && message.equips.length))
                            message.equips = [];
                        message.equips.push($root.common.Equip.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.modelId = reader.int32();
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
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof common.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.equips != null && message.hasOwnProperty("equips")) {
                if (!Array.isArray(message.equips))
                    return "equips: array expected";
                for (var i = 0; i < message.equips.length; ++i) {
                    var error = $root.common.Equip.verify(message.equips[i]);
                    if (error)
                        return "equips." + error;
                }
            }
            if (message.modelId != null && message.hasOwnProperty("modelId"))
                if (!$util.isInteger(message.modelId))
                    return "modelId: integer expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Card)
                return object;
            var message = new $root.common.Card();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.equips) {
                if (!Array.isArray(object.equips))
                    throw TypeError(".common.Card.equips: array expected");
                message.equips = [];
                for (var i = 0; i < object.equips.length; ++i) {
                    if (typeof object.equips[i] !== "object")
                        throw TypeError(".common.Card.equips: object expected");
                    message.equips[i] = $root.common.Equip.fromObject(object.equips[i]);
                }
            }
            if (object.modelId != null)
                message.modelId = object.modelId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Card
         * @static
         * @param {common.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.equips = [];
            if (options.defaults) {
                object.id = 0;
                object.level = 0;
                object.modelId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.equips && message.equips.length) {
                object.equips = [];
                for (var j = 0; j < message.equips.length; ++j)
                    object.equips[j] = $root.common.Equip.toObject(message.equips[j], options);
            }
            if (message.modelId != null && message.hasOwnProperty("modelId"))
                object.modelId = message.modelId;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof common.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Card
         * @function getTypeUrl
         * @memberof common.Card
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Card.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Card";
        };

        return Card;
    })();

    common.HandCardInst = (function() {

        /**
         * Properties of a HandCardInst.
         * @memberof common
         * @interface IHandCardInst
         * @property {number|Long|null} [id] HandCardInst id
         * @property {number|null} [cardId] HandCardInst cardId
         */

        /**
         * Constructs a new HandCardInst.
         * @memberof common
         * @classdesc Represents a HandCardInst.
         * @implements IHandCardInst
         * @constructor
         * @param {common.IHandCardInst=} [properties] Properties to set
         */
        function HandCardInst(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandCardInst id.
         * @member {number|Long} id
         * @memberof common.HandCardInst
         * @instance
         */
        HandCardInst.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HandCardInst cardId.
         * @member {number} cardId
         * @memberof common.HandCardInst
         * @instance
         */
        HandCardInst.prototype.cardId = 0;

        /**
         * Creates a new HandCardInst instance using the specified properties.
         * @function create
         * @memberof common.HandCardInst
         * @static
         * @param {common.IHandCardInst=} [properties] Properties to set
         * @returns {common.HandCardInst} HandCardInst instance
         */
        HandCardInst.create = function create(properties) {
            return new HandCardInst(properties);
        };

        /**
         * Encodes the specified HandCardInst message. Does not implicitly {@link common.HandCardInst.verify|verify} messages.
         * @function encode
         * @memberof common.HandCardInst
         * @static
         * @param {common.IHandCardInst} message HandCardInst message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandCardInst.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardId);
            return writer;
        };

        /**
         * Encodes the specified HandCardInst message, length delimited. Does not implicitly {@link common.HandCardInst.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.HandCardInst
         * @static
         * @param {common.IHandCardInst} message HandCardInst message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandCardInst.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandCardInst message from the specified reader or buffer.
         * @function decode
         * @memberof common.HandCardInst
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.HandCardInst} HandCardInst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandCardInst.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.HandCardInst();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.cardId = reader.int32();
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
         * Decodes a HandCardInst message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.HandCardInst
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.HandCardInst} HandCardInst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandCardInst.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandCardInst message.
         * @function verify
         * @memberof common.HandCardInst
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandCardInst.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                if (!$util.isInteger(message.cardId))
                    return "cardId: integer expected";
            return null;
        };

        /**
         * Creates a HandCardInst message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.HandCardInst
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.HandCardInst} HandCardInst
         */
        HandCardInst.fromObject = function fromObject(object) {
            if (object instanceof $root.common.HandCardInst)
                return object;
            var message = new $root.common.HandCardInst();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.cardId != null)
                message.cardId = object.cardId | 0;
            return message;
        };

        /**
         * Creates a plain object from a HandCardInst message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.HandCardInst
         * @static
         * @param {common.HandCardInst} message HandCardInst
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandCardInst.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.cardId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                object.cardId = message.cardId;
            return object;
        };

        /**
         * Converts this HandCardInst to JSON.
         * @function toJSON
         * @memberof common.HandCardInst
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandCardInst.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandCardInst
         * @function getTypeUrl
         * @memberof common.HandCardInst
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandCardInst.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.HandCardInst";
        };

        return HandCardInst;
    })();

    common.BattlePlayerData = (function() {

        /**
         * Properties of a BattlePlayerData.
         * @memberof common
         * @interface IBattlePlayerData
         * @property {string|null} [uid] BattlePlayerData uid
         * @property {string|null} [nick] BattlePlayerData nick
         * @property {number|null} [avatar] BattlePlayerData avatar
         * @property {number|null} [level] BattlePlayerData level
         * @property {string|null} [country] BattlePlayerData country
         * @property {number|null} [cup] BattlePlayerData cup
         * @property {string|null} [guildName] BattlePlayerData guildName
         * @property {number|Long|null} [guildFlag] BattlePlayerData guildFlag
         * @property {Array.<common.ICard>|null} [cards] BattlePlayerData cards
         * @property {Array.<common.IHandCardInst>|null} [initCards] BattlePlayerData initCards
         * @property {number|null} [initEnergy] BattlePlayerData initEnergy
         * @property {number|null} [nextFrame] BattlePlayerData nextFrame
         * @property {number|null} [cardNum] BattlePlayerData cardNum
         * @property {number|null} [dealTimes] BattlePlayerData dealTimes
         */

        /**
         * Constructs a new BattlePlayerData.
         * @memberof common
         * @classdesc Represents a BattlePlayerData.
         * @implements IBattlePlayerData
         * @constructor
         * @param {common.IBattlePlayerData=} [properties] Properties to set
         */
        function BattlePlayerData(properties) {
            this.cards = [];
            this.initCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattlePlayerData uid.
         * @member {string} uid
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.uid = "";

        /**
         * BattlePlayerData nick.
         * @member {string} nick
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.nick = "";

        /**
         * BattlePlayerData avatar.
         * @member {number} avatar
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.avatar = 0;

        /**
         * BattlePlayerData level.
         * @member {number} level
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.level = 0;

        /**
         * BattlePlayerData country.
         * @member {string} country
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.country = "";

        /**
         * BattlePlayerData cup.
         * @member {number} cup
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.cup = 0;

        /**
         * BattlePlayerData guildName.
         * @member {string} guildName
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.guildName = "";

        /**
         * BattlePlayerData guildFlag.
         * @member {number|Long} guildFlag
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.guildFlag = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattlePlayerData cards.
         * @member {Array.<common.ICard>} cards
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.cards = $util.emptyArray;

        /**
         * BattlePlayerData initCards.
         * @member {Array.<common.IHandCardInst>} initCards
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.initCards = $util.emptyArray;

        /**
         * BattlePlayerData initEnergy.
         * @member {number} initEnergy
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.initEnergy = 0;

        /**
         * BattlePlayerData nextFrame.
         * @member {number} nextFrame
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.nextFrame = 0;

        /**
         * BattlePlayerData cardNum.
         * @member {number} cardNum
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.cardNum = 0;

        /**
         * BattlePlayerData dealTimes.
         * @member {number} dealTimes
         * @memberof common.BattlePlayerData
         * @instance
         */
        BattlePlayerData.prototype.dealTimes = 0;

        /**
         * Creates a new BattlePlayerData instance using the specified properties.
         * @function create
         * @memberof common.BattlePlayerData
         * @static
         * @param {common.IBattlePlayerData=} [properties] Properties to set
         * @returns {common.BattlePlayerData} BattlePlayerData instance
         */
        BattlePlayerData.create = function create(properties) {
            return new BattlePlayerData(properties);
        };

        /**
         * Encodes the specified BattlePlayerData message. Does not implicitly {@link common.BattlePlayerData.verify|verify} messages.
         * @function encode
         * @memberof common.BattlePlayerData
         * @static
         * @param {common.IBattlePlayerData} message BattlePlayerData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattlePlayerData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.avatar);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
            if (message.cup != null && Object.hasOwnProperty.call(message, "cup"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cup);
            if (message.guildName != null && Object.hasOwnProperty.call(message, "guildName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.guildName);
            if (message.guildFlag != null && Object.hasOwnProperty.call(message, "guildFlag"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.guildFlag);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.common.Card.encode(message.cards[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.initCards != null && message.initCards.length)
                for (var i = 0; i < message.initCards.length; ++i)
                    $root.common.HandCardInst.encode(message.initCards[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.initEnergy != null && Object.hasOwnProperty.call(message, "initEnergy"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.initEnergy);
            if (message.nextFrame != null && Object.hasOwnProperty.call(message, "nextFrame"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nextFrame);
            if (message.cardNum != null && Object.hasOwnProperty.call(message, "cardNum"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.cardNum);
            if (message.dealTimes != null && Object.hasOwnProperty.call(message, "dealTimes"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.dealTimes);
            return writer;
        };

        /**
         * Encodes the specified BattlePlayerData message, length delimited. Does not implicitly {@link common.BattlePlayerData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.BattlePlayerData
         * @static
         * @param {common.IBattlePlayerData} message BattlePlayerData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattlePlayerData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattlePlayerData message from the specified reader or buffer.
         * @function decode
         * @memberof common.BattlePlayerData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.BattlePlayerData} BattlePlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattlePlayerData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.BattlePlayerData();
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
                        message.nick = reader.string();
                        break;
                    }
                case 3: {
                        message.avatar = reader.int32();
                        break;
                    }
                case 4: {
                        message.level = reader.int32();
                        break;
                    }
                case 5: {
                        message.country = reader.string();
                        break;
                    }
                case 6: {
                        message.cup = reader.int32();
                        break;
                    }
                case 7: {
                        message.guildName = reader.string();
                        break;
                    }
                case 8: {
                        message.guildFlag = reader.int64();
                        break;
                    }
                case 9: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.common.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 10: {
                        if (!(message.initCards && message.initCards.length))
                            message.initCards = [];
                        message.initCards.push($root.common.HandCardInst.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        message.initEnergy = reader.int32();
                        break;
                    }
                case 12: {
                        message.nextFrame = reader.int32();
                        break;
                    }
                case 13: {
                        message.cardNum = reader.int32();
                        break;
                    }
                case 14: {
                        message.dealTimes = reader.int32();
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
         * Decodes a BattlePlayerData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.BattlePlayerData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.BattlePlayerData} BattlePlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattlePlayerData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattlePlayerData message.
         * @function verify
         * @memberof common.BattlePlayerData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattlePlayerData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isInteger(message.avatar))
                    return "avatar: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.cup != null && message.hasOwnProperty("cup"))
                if (!$util.isInteger(message.cup))
                    return "cup: integer expected";
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                if (!$util.isString(message.guildName))
                    return "guildName: string expected";
            if (message.guildFlag != null && message.hasOwnProperty("guildFlag"))
                if (!$util.isInteger(message.guildFlag) && !(message.guildFlag && $util.isInteger(message.guildFlag.low) && $util.isInteger(message.guildFlag.high)))
                    return "guildFlag: integer|Long expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.common.Card.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            if (message.initCards != null && message.hasOwnProperty("initCards")) {
                if (!Array.isArray(message.initCards))
                    return "initCards: array expected";
                for (var i = 0; i < message.initCards.length; ++i) {
                    var error = $root.common.HandCardInst.verify(message.initCards[i]);
                    if (error)
                        return "initCards." + error;
                }
            }
            if (message.initEnergy != null && message.hasOwnProperty("initEnergy"))
                if (!$util.isInteger(message.initEnergy))
                    return "initEnergy: integer expected";
            if (message.nextFrame != null && message.hasOwnProperty("nextFrame"))
                if (!$util.isInteger(message.nextFrame))
                    return "nextFrame: integer expected";
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                if (!$util.isInteger(message.cardNum))
                    return "cardNum: integer expected";
            if (message.dealTimes != null && message.hasOwnProperty("dealTimes"))
                if (!$util.isInteger(message.dealTimes))
                    return "dealTimes: integer expected";
            return null;
        };

        /**
         * Creates a BattlePlayerData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.BattlePlayerData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.BattlePlayerData} BattlePlayerData
         */
        BattlePlayerData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.BattlePlayerData)
                return object;
            var message = new $root.common.BattlePlayerData();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.avatar != null)
                message.avatar = object.avatar | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.country != null)
                message.country = String(object.country);
            if (object.cup != null)
                message.cup = object.cup | 0;
            if (object.guildName != null)
                message.guildName = String(object.guildName);
            if (object.guildFlag != null)
                if ($util.Long)
                    (message.guildFlag = $util.Long.fromValue(object.guildFlag)).unsigned = false;
                else if (typeof object.guildFlag === "string")
                    message.guildFlag = parseInt(object.guildFlag, 10);
                else if (typeof object.guildFlag === "number")
                    message.guildFlag = object.guildFlag;
                else if (typeof object.guildFlag === "object")
                    message.guildFlag = new $util.LongBits(object.guildFlag.low >>> 0, object.guildFlag.high >>> 0).toNumber();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".common.BattlePlayerData.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i) {
                    if (typeof object.cards[i] !== "object")
                        throw TypeError(".common.BattlePlayerData.cards: object expected");
                    message.cards[i] = $root.common.Card.fromObject(object.cards[i]);
                }
            }
            if (object.initCards) {
                if (!Array.isArray(object.initCards))
                    throw TypeError(".common.BattlePlayerData.initCards: array expected");
                message.initCards = [];
                for (var i = 0; i < object.initCards.length; ++i) {
                    if (typeof object.initCards[i] !== "object")
                        throw TypeError(".common.BattlePlayerData.initCards: object expected");
                    message.initCards[i] = $root.common.HandCardInst.fromObject(object.initCards[i]);
                }
            }
            if (object.initEnergy != null)
                message.initEnergy = object.initEnergy | 0;
            if (object.nextFrame != null)
                message.nextFrame = object.nextFrame | 0;
            if (object.cardNum != null)
                message.cardNum = object.cardNum | 0;
            if (object.dealTimes != null)
                message.dealTimes = object.dealTimes | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattlePlayerData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.BattlePlayerData
         * @static
         * @param {common.BattlePlayerData} message BattlePlayerData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattlePlayerData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cards = [];
                object.initCards = [];
            }
            if (options.defaults) {
                object.uid = "";
                object.nick = "";
                object.avatar = 0;
                object.level = 0;
                object.country = "";
                object.cup = 0;
                object.guildName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.guildFlag = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildFlag = options.longs === String ? "0" : 0;
                object.initEnergy = 0;
                object.nextFrame = 0;
                object.cardNum = 0;
                object.dealTimes = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.cup != null && message.hasOwnProperty("cup"))
                object.cup = message.cup;
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                object.guildName = message.guildName;
            if (message.guildFlag != null && message.hasOwnProperty("guildFlag"))
                if (typeof message.guildFlag === "number")
                    object.guildFlag = options.longs === String ? String(message.guildFlag) : message.guildFlag;
                else
                    object.guildFlag = options.longs === String ? $util.Long.prototype.toString.call(message.guildFlag) : options.longs === Number ? new $util.LongBits(message.guildFlag.low >>> 0, message.guildFlag.high >>> 0).toNumber() : message.guildFlag;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = $root.common.Card.toObject(message.cards[j], options);
            }
            if (message.initCards && message.initCards.length) {
                object.initCards = [];
                for (var j = 0; j < message.initCards.length; ++j)
                    object.initCards[j] = $root.common.HandCardInst.toObject(message.initCards[j], options);
            }
            if (message.initEnergy != null && message.hasOwnProperty("initEnergy"))
                object.initEnergy = message.initEnergy;
            if (message.nextFrame != null && message.hasOwnProperty("nextFrame"))
                object.nextFrame = message.nextFrame;
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                object.cardNum = message.cardNum;
            if (message.dealTimes != null && message.hasOwnProperty("dealTimes"))
                object.dealTimes = message.dealTimes;
            return object;
        };

        /**
         * Converts this BattlePlayerData to JSON.
         * @function toJSON
         * @memberof common.BattlePlayerData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattlePlayerData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattlePlayerData
         * @function getTypeUrl
         * @memberof common.BattlePlayerData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattlePlayerData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.BattlePlayerData";
        };

        return BattlePlayerData;
    })();

    common.BattleResult = (function() {

        /**
         * Properties of a BattleResult.
         * @memberof common
         * @interface IBattleResult
         * @property {string|null} [winner] BattleResult winner
         * @property {Array.<number>|null} [cups] BattleResult cups
         * @property {Array.<number>|null} [crowns] BattleResult crowns
         * @property {number|null} [turnTheTile] BattleResult turnTheTile
         * @property {number|null} [endFrame] BattleResult endFrame
         */

        /**
         * Constructs a new BattleResult.
         * @memberof common
         * @classdesc Represents a BattleResult.
         * @implements IBattleResult
         * @constructor
         * @param {common.IBattleResult=} [properties] Properties to set
         */
        function BattleResult(properties) {
            this.cups = [];
            this.crowns = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleResult winner.
         * @member {string} winner
         * @memberof common.BattleResult
         * @instance
         */
        BattleResult.prototype.winner = "";

        /**
         * BattleResult cups.
         * @member {Array.<number>} cups
         * @memberof common.BattleResult
         * @instance
         */
        BattleResult.prototype.cups = $util.emptyArray;

        /**
         * BattleResult crowns.
         * @member {Array.<number>} crowns
         * @memberof common.BattleResult
         * @instance
         */
        BattleResult.prototype.crowns = $util.emptyArray;

        /**
         * BattleResult turnTheTile.
         * @member {number} turnTheTile
         * @memberof common.BattleResult
         * @instance
         */
        BattleResult.prototype.turnTheTile = 0;

        /**
         * BattleResult endFrame.
         * @member {number} endFrame
         * @memberof common.BattleResult
         * @instance
         */
        BattleResult.prototype.endFrame = 0;

        /**
         * Creates a new BattleResult instance using the specified properties.
         * @function create
         * @memberof common.BattleResult
         * @static
         * @param {common.IBattleResult=} [properties] Properties to set
         * @returns {common.BattleResult} BattleResult instance
         */
        BattleResult.create = function create(properties) {
            return new BattleResult(properties);
        };

        /**
         * Encodes the specified BattleResult message. Does not implicitly {@link common.BattleResult.verify|verify} messages.
         * @function encode
         * @memberof common.BattleResult
         * @static
         * @param {common.IBattleResult} message BattleResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winner != null && Object.hasOwnProperty.call(message, "winner"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.winner);
            if (message.cups != null && message.cups.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.cups.length; ++i)
                    writer.int32(message.cups[i]);
                writer.ldelim();
            }
            if (message.crowns != null && message.crowns.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.crowns.length; ++i)
                    writer.int32(message.crowns[i]);
                writer.ldelim();
            }
            if (message.turnTheTile != null && Object.hasOwnProperty.call(message, "turnTheTile"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.turnTheTile);
            if (message.endFrame != null && Object.hasOwnProperty.call(message, "endFrame"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.endFrame);
            return writer;
        };

        /**
         * Encodes the specified BattleResult message, length delimited. Does not implicitly {@link common.BattleResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.BattleResult
         * @static
         * @param {common.IBattleResult} message BattleResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleResult message from the specified reader or buffer.
         * @function decode
         * @memberof common.BattleResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.BattleResult} BattleResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleResult.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.BattleResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.winner = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.cups && message.cups.length))
                            message.cups = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cups.push(reader.int32());
                        } else
                            message.cups.push(reader.int32());
                        break;
                    }
                case 3: {
                        if (!(message.crowns && message.crowns.length))
                            message.crowns = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.crowns.push(reader.int32());
                        } else
                            message.crowns.push(reader.int32());
                        break;
                    }
                case 4: {
                        message.turnTheTile = reader.int32();
                        break;
                    }
                case 5: {
                        message.endFrame = reader.int32();
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
         * Decodes a BattleResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.BattleResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.BattleResult} BattleResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleResult message.
         * @function verify
         * @memberof common.BattleResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winner != null && message.hasOwnProperty("winner"))
                if (!$util.isString(message.winner))
                    return "winner: string expected";
            if (message.cups != null && message.hasOwnProperty("cups")) {
                if (!Array.isArray(message.cups))
                    return "cups: array expected";
                for (var i = 0; i < message.cups.length; ++i)
                    if (!$util.isInteger(message.cups[i]))
                        return "cups: integer[] expected";
            }
            if (message.crowns != null && message.hasOwnProperty("crowns")) {
                if (!Array.isArray(message.crowns))
                    return "crowns: array expected";
                for (var i = 0; i < message.crowns.length; ++i)
                    if (!$util.isInteger(message.crowns[i]))
                        return "crowns: integer[] expected";
            }
            if (message.turnTheTile != null && message.hasOwnProperty("turnTheTile"))
                if (!$util.isInteger(message.turnTheTile))
                    return "turnTheTile: integer expected";
            if (message.endFrame != null && message.hasOwnProperty("endFrame"))
                if (!$util.isInteger(message.endFrame))
                    return "endFrame: integer expected";
            return null;
        };

        /**
         * Creates a BattleResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.BattleResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.BattleResult} BattleResult
         */
        BattleResult.fromObject = function fromObject(object) {
            if (object instanceof $root.common.BattleResult)
                return object;
            var message = new $root.common.BattleResult();
            if (object.winner != null)
                message.winner = String(object.winner);
            if (object.cups) {
                if (!Array.isArray(object.cups))
                    throw TypeError(".common.BattleResult.cups: array expected");
                message.cups = [];
                for (var i = 0; i < object.cups.length; ++i)
                    message.cups[i] = object.cups[i] | 0;
            }
            if (object.crowns) {
                if (!Array.isArray(object.crowns))
                    throw TypeError(".common.BattleResult.crowns: array expected");
                message.crowns = [];
                for (var i = 0; i < object.crowns.length; ++i)
                    message.crowns[i] = object.crowns[i] | 0;
            }
            if (object.turnTheTile != null)
                message.turnTheTile = object.turnTheTile | 0;
            if (object.endFrame != null)
                message.endFrame = object.endFrame | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.BattleResult
         * @static
         * @param {common.BattleResult} message BattleResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cups = [];
                object.crowns = [];
            }
            if (options.defaults) {
                object.winner = "";
                object.turnTheTile = 0;
                object.endFrame = 0;
            }
            if (message.winner != null && message.hasOwnProperty("winner"))
                object.winner = message.winner;
            if (message.cups && message.cups.length) {
                object.cups = [];
                for (var j = 0; j < message.cups.length; ++j)
                    object.cups[j] = message.cups[j];
            }
            if (message.crowns && message.crowns.length) {
                object.crowns = [];
                for (var j = 0; j < message.crowns.length; ++j)
                    object.crowns[j] = message.crowns[j];
            }
            if (message.turnTheTile != null && message.hasOwnProperty("turnTheTile"))
                object.turnTheTile = message.turnTheTile;
            if (message.endFrame != null && message.hasOwnProperty("endFrame"))
                object.endFrame = message.endFrame;
            return object;
        };

        /**
         * Converts this BattleResult to JSON.
         * @function toJSON
         * @memberof common.BattleResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattleResult
         * @function getTypeUrl
         * @memberof common.BattleResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.BattleResult";
        };

        return BattleResult;
    })();

    common.CardInstData = (function() {

        /**
         * Properties of a CardInstData.
         * @memberof common
         * @interface ICardInstData
         * @property {number|null} [level] CardInstData level
         * @property {number|null} [modelId] CardInstData modelId
         */

        /**
         * Constructs a new CardInstData.
         * @memberof common
         * @classdesc Represents a CardInstData.
         * @implements ICardInstData
         * @constructor
         * @param {common.ICardInstData=} [properties] Properties to set
         */
        function CardInstData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardInstData level.
         * @member {number} level
         * @memberof common.CardInstData
         * @instance
         */
        CardInstData.prototype.level = 0;

        /**
         * CardInstData modelId.
         * @member {number} modelId
         * @memberof common.CardInstData
         * @instance
         */
        CardInstData.prototype.modelId = 0;

        /**
         * Creates a new CardInstData instance using the specified properties.
         * @function create
         * @memberof common.CardInstData
         * @static
         * @param {common.ICardInstData=} [properties] Properties to set
         * @returns {common.CardInstData} CardInstData instance
         */
        CardInstData.create = function create(properties) {
            return new CardInstData(properties);
        };

        /**
         * Encodes the specified CardInstData message. Does not implicitly {@link common.CardInstData.verify|verify} messages.
         * @function encode
         * @memberof common.CardInstData
         * @static
         * @param {common.ICardInstData} message CardInstData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInstData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
            if (message.modelId != null && Object.hasOwnProperty.call(message, "modelId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.modelId);
            return writer;
        };

        /**
         * Encodes the specified CardInstData message, length delimited. Does not implicitly {@link common.CardInstData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.CardInstData
         * @static
         * @param {common.ICardInstData} message CardInstData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInstData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardInstData message from the specified reader or buffer.
         * @function decode
         * @memberof common.CardInstData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.CardInstData} CardInstData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInstData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.CardInstData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.level = reader.int32();
                        break;
                    }
                case 2: {
                        message.modelId = reader.int32();
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
         * Decodes a CardInstData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.CardInstData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.CardInstData} CardInstData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInstData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardInstData message.
         * @function verify
         * @memberof common.CardInstData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardInstData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.modelId != null && message.hasOwnProperty("modelId"))
                if (!$util.isInteger(message.modelId))
                    return "modelId: integer expected";
            return null;
        };

        /**
         * Creates a CardInstData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.CardInstData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.CardInstData} CardInstData
         */
        CardInstData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.CardInstData)
                return object;
            var message = new $root.common.CardInstData();
            if (object.level != null)
                message.level = object.level | 0;
            if (object.modelId != null)
                message.modelId = object.modelId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CardInstData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.CardInstData
         * @static
         * @param {common.CardInstData} message CardInstData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardInstData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.level = 0;
                object.modelId = 0;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.modelId != null && message.hasOwnProperty("modelId"))
                object.modelId = message.modelId;
            return object;
        };

        /**
         * Converts this CardInstData to JSON.
         * @function toJSON
         * @memberof common.CardInstData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardInstData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CardInstData
         * @function getTypeUrl
         * @memberof common.CardInstData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CardInstData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.CardInstData";
        };

        return CardInstData;
    })();

    common.ClientCommand = (function() {

        /**
         * Properties of a ClientCommand.
         * @memberof common
         * @interface IClientCommand
         * @property {string|null} [uid] ClientCommand uid
         * @property {number|null} [frame] ClientCommand frame
         * @property {number|null} [instId] ClientCommand instId
         * @property {number|null} [card] ClientCommand card
         * @property {Array.<common.ICommandRoute>|null} [routes] ClientCommand routes
         */

        /**
         * Constructs a new ClientCommand.
         * @memberof common
         * @classdesc Represents a ClientCommand.
         * @implements IClientCommand
         * @constructor
         * @param {common.IClientCommand=} [properties] Properties to set
         */
        function ClientCommand(properties) {
            this.routes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientCommand uid.
         * @member {string} uid
         * @memberof common.ClientCommand
         * @instance
         */
        ClientCommand.prototype.uid = "";

        /**
         * ClientCommand frame.
         * @member {number} frame
         * @memberof common.ClientCommand
         * @instance
         */
        ClientCommand.prototype.frame = 0;

        /**
         * ClientCommand instId.
         * @member {number} instId
         * @memberof common.ClientCommand
         * @instance
         */
        ClientCommand.prototype.instId = 0;

        /**
         * ClientCommand card.
         * @member {number} card
         * @memberof common.ClientCommand
         * @instance
         */
        ClientCommand.prototype.card = 0;

        /**
         * ClientCommand routes.
         * @member {Array.<common.ICommandRoute>} routes
         * @memberof common.ClientCommand
         * @instance
         */
        ClientCommand.prototype.routes = $util.emptyArray;

        /**
         * Creates a new ClientCommand instance using the specified properties.
         * @function create
         * @memberof common.ClientCommand
         * @static
         * @param {common.IClientCommand=} [properties] Properties to set
         * @returns {common.ClientCommand} ClientCommand instance
         */
        ClientCommand.create = function create(properties) {
            return new ClientCommand(properties);
        };

        /**
         * Encodes the specified ClientCommand message. Does not implicitly {@link common.ClientCommand.verify|verify} messages.
         * @function encode
         * @memberof common.ClientCommand
         * @static
         * @param {common.IClientCommand} message ClientCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.frame != null && Object.hasOwnProperty.call(message, "frame"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.frame);
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.instId);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.card);
            if (message.routes != null && message.routes.length)
                for (var i = 0; i < message.routes.length; ++i)
                    $root.common.CommandRoute.encode(message.routes[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientCommand message, length delimited. Does not implicitly {@link common.ClientCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ClientCommand
         * @static
         * @param {common.IClientCommand} message ClientCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientCommand message from the specified reader or buffer.
         * @function decode
         * @memberof common.ClientCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ClientCommand} ClientCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ClientCommand();
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
                        message.frame = reader.int32();
                        break;
                    }
                case 3: {
                        message.instId = reader.int32();
                        break;
                    }
                case 4: {
                        message.card = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.routes && message.routes.length))
                            message.routes = [];
                        message.routes.push($root.common.CommandRoute.decode(reader, reader.uint32()));
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
         * Decodes a ClientCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ClientCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ClientCommand} ClientCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientCommand message.
         * @function verify
         * @memberof common.ClientCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.frame != null && message.hasOwnProperty("frame"))
                if (!$util.isInteger(message.frame))
                    return "frame: integer expected";
            if (message.instId != null && message.hasOwnProperty("instId"))
                if (!$util.isInteger(message.instId))
                    return "instId: integer expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            if (message.routes != null && message.hasOwnProperty("routes")) {
                if (!Array.isArray(message.routes))
                    return "routes: array expected";
                for (var i = 0; i < message.routes.length; ++i) {
                    var error = $root.common.CommandRoute.verify(message.routes[i]);
                    if (error)
                        return "routes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClientCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ClientCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ClientCommand} ClientCommand
         */
        ClientCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ClientCommand)
                return object;
            var message = new $root.common.ClientCommand();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.frame != null)
                message.frame = object.frame | 0;
            if (object.instId != null)
                message.instId = object.instId | 0;
            if (object.card != null)
                message.card = object.card | 0;
            if (object.routes) {
                if (!Array.isArray(object.routes))
                    throw TypeError(".common.ClientCommand.routes: array expected");
                message.routes = [];
                for (var i = 0; i < object.routes.length; ++i) {
                    if (typeof object.routes[i] !== "object")
                        throw TypeError(".common.ClientCommand.routes: object expected");
                    message.routes[i] = $root.common.CommandRoute.fromObject(object.routes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ClientCommand
         * @static
         * @param {common.ClientCommand} message ClientCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.routes = [];
            if (options.defaults) {
                object.uid = "";
                object.frame = 0;
                object.instId = 0;
                object.card = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = message.frame;
            if (message.instId != null && message.hasOwnProperty("instId"))
                object.instId = message.instId;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            if (message.routes && message.routes.length) {
                object.routes = [];
                for (var j = 0; j < message.routes.length; ++j)
                    object.routes[j] = $root.common.CommandRoute.toObject(message.routes[j], options);
            }
            return object;
        };

        /**
         * Converts this ClientCommand to JSON.
         * @function toJSON
         * @memberof common.ClientCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientCommand
         * @function getTypeUrl
         * @memberof common.ClientCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ClientCommand";
        };

        return ClientCommand;
    })();

    common.FrameData = (function() {

        /**
         * Properties of a FrameData.
         * @memberof common
         * @interface IFrameData
         * @property {number|null} [frame] FrameData frame
         * @property {Array.<common.IClientCommand>|null} [commands] FrameData commands
         * @property {Array.<common.IReplayPower>|null} [addPower] FrameData addPower
         * @property {Array.<common.IReplayHandCard>|null} [addCards] FrameData addCards
         */

        /**
         * Constructs a new FrameData.
         * @memberof common
         * @classdesc Represents a FrameData.
         * @implements IFrameData
         * @constructor
         * @param {common.IFrameData=} [properties] Properties to set
         */
        function FrameData(properties) {
            this.commands = [];
            this.addPower = [];
            this.addCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FrameData frame.
         * @member {number} frame
         * @memberof common.FrameData
         * @instance
         */
        FrameData.prototype.frame = 0;

        /**
         * FrameData commands.
         * @member {Array.<common.IClientCommand>} commands
         * @memberof common.FrameData
         * @instance
         */
        FrameData.prototype.commands = $util.emptyArray;

        /**
         * FrameData addPower.
         * @member {Array.<common.IReplayPower>} addPower
         * @memberof common.FrameData
         * @instance
         */
        FrameData.prototype.addPower = $util.emptyArray;

        /**
         * FrameData addCards.
         * @member {Array.<common.IReplayHandCard>} addCards
         * @memberof common.FrameData
         * @instance
         */
        FrameData.prototype.addCards = $util.emptyArray;

        /**
         * Creates a new FrameData instance using the specified properties.
         * @function create
         * @memberof common.FrameData
         * @static
         * @param {common.IFrameData=} [properties] Properties to set
         * @returns {common.FrameData} FrameData instance
         */
        FrameData.create = function create(properties) {
            return new FrameData(properties);
        };

        /**
         * Encodes the specified FrameData message. Does not implicitly {@link common.FrameData.verify|verify} messages.
         * @function encode
         * @memberof common.FrameData
         * @static
         * @param {common.IFrameData} message FrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frame != null && Object.hasOwnProperty.call(message, "frame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.frame);
            if (message.commands != null && message.commands.length)
                for (var i = 0; i < message.commands.length; ++i)
                    $root.common.ClientCommand.encode(message.commands[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.addPower != null && message.addPower.length)
                for (var i = 0; i < message.addPower.length; ++i)
                    $root.common.ReplayPower.encode(message.addPower[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.addCards != null && message.addCards.length)
                for (var i = 0; i < message.addCards.length; ++i)
                    $root.common.ReplayHandCard.encode(message.addCards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FrameData message, length delimited. Does not implicitly {@link common.FrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.FrameData
         * @static
         * @param {common.IFrameData} message FrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FrameData message from the specified reader or buffer.
         * @function decode
         * @memberof common.FrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.FrameData} FrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.FrameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.frame = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.commands && message.commands.length))
                            message.commands = [];
                        message.commands.push($root.common.ClientCommand.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.addPower && message.addPower.length))
                            message.addPower = [];
                        message.addPower.push($root.common.ReplayPower.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.addCards && message.addCards.length))
                            message.addCards = [];
                        message.addCards.push($root.common.ReplayHandCard.decode(reader, reader.uint32()));
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
         * Decodes a FrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.FrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.FrameData} FrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FrameData message.
         * @function verify
         * @memberof common.FrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FrameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frame != null && message.hasOwnProperty("frame"))
                if (!$util.isInteger(message.frame))
                    return "frame: integer expected";
            if (message.commands != null && message.hasOwnProperty("commands")) {
                if (!Array.isArray(message.commands))
                    return "commands: array expected";
                for (var i = 0; i < message.commands.length; ++i) {
                    var error = $root.common.ClientCommand.verify(message.commands[i]);
                    if (error)
                        return "commands." + error;
                }
            }
            if (message.addPower != null && message.hasOwnProperty("addPower")) {
                if (!Array.isArray(message.addPower))
                    return "addPower: array expected";
                for (var i = 0; i < message.addPower.length; ++i) {
                    var error = $root.common.ReplayPower.verify(message.addPower[i]);
                    if (error)
                        return "addPower." + error;
                }
            }
            if (message.addCards != null && message.hasOwnProperty("addCards")) {
                if (!Array.isArray(message.addCards))
                    return "addCards: array expected";
                for (var i = 0; i < message.addCards.length; ++i) {
                    var error = $root.common.ReplayHandCard.verify(message.addCards[i]);
                    if (error)
                        return "addCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.FrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.FrameData} FrameData
         */
        FrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.FrameData)
                return object;
            var message = new $root.common.FrameData();
            if (object.frame != null)
                message.frame = object.frame | 0;
            if (object.commands) {
                if (!Array.isArray(object.commands))
                    throw TypeError(".common.FrameData.commands: array expected");
                message.commands = [];
                for (var i = 0; i < object.commands.length; ++i) {
                    if (typeof object.commands[i] !== "object")
                        throw TypeError(".common.FrameData.commands: object expected");
                    message.commands[i] = $root.common.ClientCommand.fromObject(object.commands[i]);
                }
            }
            if (object.addPower) {
                if (!Array.isArray(object.addPower))
                    throw TypeError(".common.FrameData.addPower: array expected");
                message.addPower = [];
                for (var i = 0; i < object.addPower.length; ++i) {
                    if (typeof object.addPower[i] !== "object")
                        throw TypeError(".common.FrameData.addPower: object expected");
                    message.addPower[i] = $root.common.ReplayPower.fromObject(object.addPower[i]);
                }
            }
            if (object.addCards) {
                if (!Array.isArray(object.addCards))
                    throw TypeError(".common.FrameData.addCards: array expected");
                message.addCards = [];
                for (var i = 0; i < object.addCards.length; ++i) {
                    if (typeof object.addCards[i] !== "object")
                        throw TypeError(".common.FrameData.addCards: object expected");
                    message.addCards[i] = $root.common.ReplayHandCard.fromObject(object.addCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.FrameData
         * @static
         * @param {common.FrameData} message FrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FrameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.commands = [];
                object.addPower = [];
                object.addCards = [];
            }
            if (options.defaults)
                object.frame = 0;
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = message.frame;
            if (message.commands && message.commands.length) {
                object.commands = [];
                for (var j = 0; j < message.commands.length; ++j)
                    object.commands[j] = $root.common.ClientCommand.toObject(message.commands[j], options);
            }
            if (message.addPower && message.addPower.length) {
                object.addPower = [];
                for (var j = 0; j < message.addPower.length; ++j)
                    object.addPower[j] = $root.common.ReplayPower.toObject(message.addPower[j], options);
            }
            if (message.addCards && message.addCards.length) {
                object.addCards = [];
                for (var j = 0; j < message.addCards.length; ++j)
                    object.addCards[j] = $root.common.ReplayHandCard.toObject(message.addCards[j], options);
            }
            return object;
        };

        /**
         * Converts this FrameData to JSON.
         * @function toJSON
         * @memberof common.FrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FrameData
         * @function getTypeUrl
         * @memberof common.FrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.FrameData";
        };

        return FrameData;
    })();

    common.BattleFieldData = (function() {

        /**
         * Properties of a BattleFieldData.
         * @memberof common
         * @interface IBattleFieldData
         * @property {number|null} [curFrame] BattleFieldData curFrame
         * @property {number|Long|null} [seed] BattleFieldData seed
         * @property {Array.<common.IBattlePlayerData>|null} [playerData] BattleFieldData playerData
         * @property {Object.<string,common.IFrameData>|null} [frameData] BattleFieldData frameData
         * @property {number|null} [battleConfigId] BattleFieldData battleConfigId
         */

        /**
         * Constructs a new BattleFieldData.
         * @memberof common
         * @classdesc Represents a BattleFieldData.
         * @implements IBattleFieldData
         * @constructor
         * @param {common.IBattleFieldData=} [properties] Properties to set
         */
        function BattleFieldData(properties) {
            this.playerData = [];
            this.frameData = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleFieldData curFrame.
         * @member {number} curFrame
         * @memberof common.BattleFieldData
         * @instance
         */
        BattleFieldData.prototype.curFrame = 0;

        /**
         * BattleFieldData seed.
         * @member {number|Long} seed
         * @memberof common.BattleFieldData
         * @instance
         */
        BattleFieldData.prototype.seed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleFieldData playerData.
         * @member {Array.<common.IBattlePlayerData>} playerData
         * @memberof common.BattleFieldData
         * @instance
         */
        BattleFieldData.prototype.playerData = $util.emptyArray;

        /**
         * BattleFieldData frameData.
         * @member {Object.<string,common.IFrameData>} frameData
         * @memberof common.BattleFieldData
         * @instance
         */
        BattleFieldData.prototype.frameData = $util.emptyObject;

        /**
         * BattleFieldData battleConfigId.
         * @member {number} battleConfigId
         * @memberof common.BattleFieldData
         * @instance
         */
        BattleFieldData.prototype.battleConfigId = 0;

        /**
         * Creates a new BattleFieldData instance using the specified properties.
         * @function create
         * @memberof common.BattleFieldData
         * @static
         * @param {common.IBattleFieldData=} [properties] Properties to set
         * @returns {common.BattleFieldData} BattleFieldData instance
         */
        BattleFieldData.create = function create(properties) {
            return new BattleFieldData(properties);
        };

        /**
         * Encodes the specified BattleFieldData message. Does not implicitly {@link common.BattleFieldData.verify|verify} messages.
         * @function encode
         * @memberof common.BattleFieldData
         * @static
         * @param {common.IBattleFieldData} message BattleFieldData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFieldData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.curFrame != null && Object.hasOwnProperty.call(message, "curFrame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.curFrame);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seed);
            if (message.playerData != null && message.playerData.length)
                for (var i = 0; i < message.playerData.length; ++i)
                    $root.common.BattlePlayerData.encode(message.playerData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.frameData != null && Object.hasOwnProperty.call(message, "frameData"))
                for (var keys = Object.keys(message.frameData), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.common.FrameData.encode(message.frameData[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.battleConfigId != null && Object.hasOwnProperty.call(message, "battleConfigId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.battleConfigId);
            return writer;
        };

        /**
         * Encodes the specified BattleFieldData message, length delimited. Does not implicitly {@link common.BattleFieldData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.BattleFieldData
         * @static
         * @param {common.IBattleFieldData} message BattleFieldData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFieldData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleFieldData message from the specified reader or buffer.
         * @function decode
         * @memberof common.BattleFieldData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.BattleFieldData} BattleFieldData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFieldData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.BattleFieldData(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.curFrame = reader.int32();
                        break;
                    }
                case 2: {
                        message.seed = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.playerData && message.playerData.length))
                            message.playerData = [];
                        message.playerData.push($root.common.BattlePlayerData.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (message.frameData === $util.emptyObject)
                            message.frameData = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.common.FrameData.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.frameData[key] = value;
                        break;
                    }
                case 5: {
                        message.battleConfigId = reader.int32();
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
         * Decodes a BattleFieldData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.BattleFieldData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.BattleFieldData} BattleFieldData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFieldData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleFieldData message.
         * @function verify
         * @memberof common.BattleFieldData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleFieldData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.curFrame != null && message.hasOwnProperty("curFrame"))
                if (!$util.isInteger(message.curFrame))
                    return "curFrame: integer expected";
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (!$util.isInteger(message.seed) && !(message.seed && $util.isInteger(message.seed.low) && $util.isInteger(message.seed.high)))
                    return "seed: integer|Long expected";
            if (message.playerData != null && message.hasOwnProperty("playerData")) {
                if (!Array.isArray(message.playerData))
                    return "playerData: array expected";
                for (var i = 0; i < message.playerData.length; ++i) {
                    var error = $root.common.BattlePlayerData.verify(message.playerData[i]);
                    if (error)
                        return "playerData." + error;
                }
            }
            if (message.frameData != null && message.hasOwnProperty("frameData")) {
                if (!$util.isObject(message.frameData))
                    return "frameData: object expected";
                var key = Object.keys(message.frameData);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "frameData: integer key{k:int32} expected";
                    {
                        var error = $root.common.FrameData.verify(message.frameData[key[i]]);
                        if (error)
                            return "frameData." + error;
                    }
                }
            }
            if (message.battleConfigId != null && message.hasOwnProperty("battleConfigId"))
                if (!$util.isInteger(message.battleConfigId))
                    return "battleConfigId: integer expected";
            return null;
        };

        /**
         * Creates a BattleFieldData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.BattleFieldData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.BattleFieldData} BattleFieldData
         */
        BattleFieldData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.BattleFieldData)
                return object;
            var message = new $root.common.BattleFieldData();
            if (object.curFrame != null)
                message.curFrame = object.curFrame | 0;
            if (object.seed != null)
                if ($util.Long)
                    (message.seed = $util.Long.fromValue(object.seed)).unsigned = false;
                else if (typeof object.seed === "string")
                    message.seed = parseInt(object.seed, 10);
                else if (typeof object.seed === "number")
                    message.seed = object.seed;
                else if (typeof object.seed === "object")
                    message.seed = new $util.LongBits(object.seed.low >>> 0, object.seed.high >>> 0).toNumber();
            if (object.playerData) {
                if (!Array.isArray(object.playerData))
                    throw TypeError(".common.BattleFieldData.playerData: array expected");
                message.playerData = [];
                for (var i = 0; i < object.playerData.length; ++i) {
                    if (typeof object.playerData[i] !== "object")
                        throw TypeError(".common.BattleFieldData.playerData: object expected");
                    message.playerData[i] = $root.common.BattlePlayerData.fromObject(object.playerData[i]);
                }
            }
            if (object.frameData) {
                if (typeof object.frameData !== "object")
                    throw TypeError(".common.BattleFieldData.frameData: object expected");
                message.frameData = {};
                for (var keys = Object.keys(object.frameData), i = 0; i < keys.length; ++i) {
                    if (typeof object.frameData[keys[i]] !== "object")
                        throw TypeError(".common.BattleFieldData.frameData: object expected");
                    message.frameData[keys[i]] = $root.common.FrameData.fromObject(object.frameData[keys[i]]);
                }
            }
            if (object.battleConfigId != null)
                message.battleConfigId = object.battleConfigId | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleFieldData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.BattleFieldData
         * @static
         * @param {common.BattleFieldData} message BattleFieldData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleFieldData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playerData = [];
            if (options.objects || options.defaults)
                object.frameData = {};
            if (options.defaults) {
                object.curFrame = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seed = options.longs === String ? "0" : 0;
                object.battleConfigId = 0;
            }
            if (message.curFrame != null && message.hasOwnProperty("curFrame"))
                object.curFrame = message.curFrame;
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (typeof message.seed === "number")
                    object.seed = options.longs === String ? String(message.seed) : message.seed;
                else
                    object.seed = options.longs === String ? $util.Long.prototype.toString.call(message.seed) : options.longs === Number ? new $util.LongBits(message.seed.low >>> 0, message.seed.high >>> 0).toNumber() : message.seed;
            if (message.playerData && message.playerData.length) {
                object.playerData = [];
                for (var j = 0; j < message.playerData.length; ++j)
                    object.playerData[j] = $root.common.BattlePlayerData.toObject(message.playerData[j], options);
            }
            var keys2;
            if (message.frameData && (keys2 = Object.keys(message.frameData)).length) {
                object.frameData = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.frameData[keys2[j]] = $root.common.FrameData.toObject(message.frameData[keys2[j]], options);
            }
            if (message.battleConfigId != null && message.hasOwnProperty("battleConfigId"))
                object.battleConfigId = message.battleConfigId;
            return object;
        };

        /**
         * Converts this BattleFieldData to JSON.
         * @function toJSON
         * @memberof common.BattleFieldData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleFieldData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattleFieldData
         * @function getTypeUrl
         * @memberof common.BattleFieldData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleFieldData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.BattleFieldData";
        };

        return BattleFieldData;
    })();

    common.ReplayHandCard = (function() {

        /**
         * Properties of a ReplayHandCard.
         * @memberof common
         * @interface IReplayHandCard
         * @property {string|null} [uid] ReplayHandCard uid
         * @property {common.IHandCardInst|null} [card] ReplayHandCard card
         * @property {number|null} [nextFrame] ReplayHandCard nextFrame
         * @property {number|null} [cardNum] ReplayHandCard cardNum
         */

        /**
         * Constructs a new ReplayHandCard.
         * @memberof common
         * @classdesc Represents a ReplayHandCard.
         * @implements IReplayHandCard
         * @constructor
         * @param {common.IReplayHandCard=} [properties] Properties to set
         */
        function ReplayHandCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplayHandCard uid.
         * @member {string} uid
         * @memberof common.ReplayHandCard
         * @instance
         */
        ReplayHandCard.prototype.uid = "";

        /**
         * ReplayHandCard card.
         * @member {common.IHandCardInst|null|undefined} card
         * @memberof common.ReplayHandCard
         * @instance
         */
        ReplayHandCard.prototype.card = null;

        /**
         * ReplayHandCard nextFrame.
         * @member {number} nextFrame
         * @memberof common.ReplayHandCard
         * @instance
         */
        ReplayHandCard.prototype.nextFrame = 0;

        /**
         * ReplayHandCard cardNum.
         * @member {number} cardNum
         * @memberof common.ReplayHandCard
         * @instance
         */
        ReplayHandCard.prototype.cardNum = 0;

        /**
         * Creates a new ReplayHandCard instance using the specified properties.
         * @function create
         * @memberof common.ReplayHandCard
         * @static
         * @param {common.IReplayHandCard=} [properties] Properties to set
         * @returns {common.ReplayHandCard} ReplayHandCard instance
         */
        ReplayHandCard.create = function create(properties) {
            return new ReplayHandCard(properties);
        };

        /**
         * Encodes the specified ReplayHandCard message. Does not implicitly {@link common.ReplayHandCard.verify|verify} messages.
         * @function encode
         * @memberof common.ReplayHandCard
         * @static
         * @param {common.IReplayHandCard} message ReplayHandCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayHandCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.common.HandCardInst.encode(message.card, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nextFrame != null && Object.hasOwnProperty.call(message, "nextFrame"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nextFrame);
            if (message.cardNum != null && Object.hasOwnProperty.call(message, "cardNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cardNum);
            return writer;
        };

        /**
         * Encodes the specified ReplayHandCard message, length delimited. Does not implicitly {@link common.ReplayHandCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ReplayHandCard
         * @static
         * @param {common.IReplayHandCard} message ReplayHandCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayHandCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplayHandCard message from the specified reader or buffer.
         * @function decode
         * @memberof common.ReplayHandCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ReplayHandCard} ReplayHandCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayHandCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ReplayHandCard();
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
                        message.card = $root.common.HandCardInst.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.nextFrame = reader.int32();
                        break;
                    }
                case 4: {
                        message.cardNum = reader.int32();
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
         * Decodes a ReplayHandCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ReplayHandCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ReplayHandCard} ReplayHandCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayHandCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplayHandCard message.
         * @function verify
         * @memberof common.ReplayHandCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplayHandCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.card != null && message.hasOwnProperty("card")) {
                var error = $root.common.HandCardInst.verify(message.card);
                if (error)
                    return "card." + error;
            }
            if (message.nextFrame != null && message.hasOwnProperty("nextFrame"))
                if (!$util.isInteger(message.nextFrame))
                    return "nextFrame: integer expected";
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                if (!$util.isInteger(message.cardNum))
                    return "cardNum: integer expected";
            return null;
        };

        /**
         * Creates a ReplayHandCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ReplayHandCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ReplayHandCard} ReplayHandCard
         */
        ReplayHandCard.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ReplayHandCard)
                return object;
            var message = new $root.common.ReplayHandCard();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.card != null) {
                if (typeof object.card !== "object")
                    throw TypeError(".common.ReplayHandCard.card: object expected");
                message.card = $root.common.HandCardInst.fromObject(object.card);
            }
            if (object.nextFrame != null)
                message.nextFrame = object.nextFrame | 0;
            if (object.cardNum != null)
                message.cardNum = object.cardNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReplayHandCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ReplayHandCard
         * @static
         * @param {common.ReplayHandCard} message ReplayHandCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplayHandCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.card = null;
                object.nextFrame = 0;
                object.cardNum = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = $root.common.HandCardInst.toObject(message.card, options);
            if (message.nextFrame != null && message.hasOwnProperty("nextFrame"))
                object.nextFrame = message.nextFrame;
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                object.cardNum = message.cardNum;
            return object;
        };

        /**
         * Converts this ReplayHandCard to JSON.
         * @function toJSON
         * @memberof common.ReplayHandCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplayHandCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplayHandCard
         * @function getTypeUrl
         * @memberof common.ReplayHandCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplayHandCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ReplayHandCard";
        };

        return ReplayHandCard;
    })();

    common.ReplayPower = (function() {

        /**
         * Properties of a ReplayPower.
         * @memberof common
         * @interface IReplayPower
         * @property {string|null} [uid] ReplayPower uid
         * @property {number|null} [power] ReplayPower power
         * @property {number|null} [nextFrame] ReplayPower nextFrame
         */

        /**
         * Constructs a new ReplayPower.
         * @memberof common
         * @classdesc Represents a ReplayPower.
         * @implements IReplayPower
         * @constructor
         * @param {common.IReplayPower=} [properties] Properties to set
         */
        function ReplayPower(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplayPower uid.
         * @member {string} uid
         * @memberof common.ReplayPower
         * @instance
         */
        ReplayPower.prototype.uid = "";

        /**
         * ReplayPower power.
         * @member {number} power
         * @memberof common.ReplayPower
         * @instance
         */
        ReplayPower.prototype.power = 0;

        /**
         * ReplayPower nextFrame.
         * @member {number} nextFrame
         * @memberof common.ReplayPower
         * @instance
         */
        ReplayPower.prototype.nextFrame = 0;

        /**
         * Creates a new ReplayPower instance using the specified properties.
         * @function create
         * @memberof common.ReplayPower
         * @static
         * @param {common.IReplayPower=} [properties] Properties to set
         * @returns {common.ReplayPower} ReplayPower instance
         */
        ReplayPower.create = function create(properties) {
            return new ReplayPower(properties);
        };

        /**
         * Encodes the specified ReplayPower message. Does not implicitly {@link common.ReplayPower.verify|verify} messages.
         * @function encode
         * @memberof common.ReplayPower
         * @static
         * @param {common.IReplayPower} message ReplayPower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayPower.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.power != null && Object.hasOwnProperty.call(message, "power"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.power);
            if (message.nextFrame != null && Object.hasOwnProperty.call(message, "nextFrame"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nextFrame);
            return writer;
        };

        /**
         * Encodes the specified ReplayPower message, length delimited. Does not implicitly {@link common.ReplayPower.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ReplayPower
         * @static
         * @param {common.IReplayPower} message ReplayPower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayPower.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplayPower message from the specified reader or buffer.
         * @function decode
         * @memberof common.ReplayPower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ReplayPower} ReplayPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayPower.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ReplayPower();
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
                        message.power = reader.int32();
                        break;
                    }
                case 3: {
                        message.nextFrame = reader.int32();
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
         * Decodes a ReplayPower message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ReplayPower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ReplayPower} ReplayPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayPower.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplayPower message.
         * @function verify
         * @memberof common.ReplayPower
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplayPower.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.power != null && message.hasOwnProperty("power"))
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            if (message.nextFrame != null && message.hasOwnProperty("nextFrame"))
                if (!$util.isInteger(message.nextFrame))
                    return "nextFrame: integer expected";
            return null;
        };

        /**
         * Creates a ReplayPower message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ReplayPower
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ReplayPower} ReplayPower
         */
        ReplayPower.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ReplayPower)
                return object;
            var message = new $root.common.ReplayPower();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.power != null)
                message.power = object.power | 0;
            if (object.nextFrame != null)
                message.nextFrame = object.nextFrame | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReplayPower message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ReplayPower
         * @static
         * @param {common.ReplayPower} message ReplayPower
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplayPower.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.power = 0;
                object.nextFrame = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            if (message.nextFrame != null && message.hasOwnProperty("nextFrame"))
                object.nextFrame = message.nextFrame;
            return object;
        };

        /**
         * Converts this ReplayPower to JSON.
         * @function toJSON
         * @memberof common.ReplayPower
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplayPower.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplayPower
         * @function getTypeUrl
         * @memberof common.ReplayPower
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplayPower.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ReplayPower";
        };

        return ReplayPower;
    })();

    common.ReplayData = (function() {

        /**
         * Properties of a ReplayData.
         * @memberof common
         * @interface IReplayData
         * @property {string|null} [key] ReplayData key
         * @property {number|Long|null} [seed] ReplayData seed
         * @property {number|null} [time] ReplayData time
         * @property {Array.<common.IBattlePlayerData>|null} [playerData] ReplayData playerData
         * @property {Object.<string,common.IFrameData>|null} [frameList] ReplayData frameList
         * @property {common.IBattleResult|null} [result] ReplayData result
         * @property {string|null} [version] ReplayData version
         */

        /**
         * Constructs a new ReplayData.
         * @memberof common
         * @classdesc Represents a ReplayData.
         * @implements IReplayData
         * @constructor
         * @param {common.IReplayData=} [properties] Properties to set
         */
        function ReplayData(properties) {
            this.playerData = [];
            this.frameList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplayData key.
         * @member {string} key
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.key = "";

        /**
         * ReplayData seed.
         * @member {number|Long} seed
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.seed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReplayData time.
         * @member {number} time
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.time = 0;

        /**
         * ReplayData playerData.
         * @member {Array.<common.IBattlePlayerData>} playerData
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.playerData = $util.emptyArray;

        /**
         * ReplayData frameList.
         * @member {Object.<string,common.IFrameData>} frameList
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.frameList = $util.emptyObject;

        /**
         * ReplayData result.
         * @member {common.IBattleResult|null|undefined} result
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.result = null;

        /**
         * ReplayData version.
         * @member {string} version
         * @memberof common.ReplayData
         * @instance
         */
        ReplayData.prototype.version = "";

        /**
         * Creates a new ReplayData instance using the specified properties.
         * @function create
         * @memberof common.ReplayData
         * @static
         * @param {common.IReplayData=} [properties] Properties to set
         * @returns {common.ReplayData} ReplayData instance
         */
        ReplayData.create = function create(properties) {
            return new ReplayData(properties);
        };

        /**
         * Encodes the specified ReplayData message. Does not implicitly {@link common.ReplayData.verify|verify} messages.
         * @function encode
         * @memberof common.ReplayData
         * @static
         * @param {common.IReplayData} message ReplayData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seed);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            if (message.playerData != null && message.playerData.length)
                for (var i = 0; i < message.playerData.length; ++i)
                    $root.common.BattlePlayerData.encode(message.playerData[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.frameList != null && Object.hasOwnProperty.call(message, "frameList"))
                for (var keys = Object.keys(message.frameList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.common.FrameData.encode(message.frameList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.common.BattleResult.encode(message.result, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified ReplayData message, length delimited. Does not implicitly {@link common.ReplayData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ReplayData
         * @static
         * @param {common.IReplayData} message ReplayData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplayData message from the specified reader or buffer.
         * @function decode
         * @memberof common.ReplayData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ReplayData} ReplayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ReplayData(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.seed = reader.int64();
                        break;
                    }
                case 3: {
                        message.time = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.playerData && message.playerData.length))
                            message.playerData = [];
                        message.playerData.push($root.common.BattlePlayerData.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (message.frameList === $util.emptyObject)
                            message.frameList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.common.FrameData.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.frameList[key] = value;
                        break;
                    }
                case 6: {
                        message.result = $root.common.BattleResult.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.version = reader.string();
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
         * Decodes a ReplayData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ReplayData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ReplayData} ReplayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplayData message.
         * @function verify
         * @memberof common.ReplayData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplayData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (!$util.isInteger(message.seed) && !(message.seed && $util.isInteger(message.seed.low) && $util.isInteger(message.seed.high)))
                    return "seed: integer|Long expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.playerData != null && message.hasOwnProperty("playerData")) {
                if (!Array.isArray(message.playerData))
                    return "playerData: array expected";
                for (var i = 0; i < message.playerData.length; ++i) {
                    var error = $root.common.BattlePlayerData.verify(message.playerData[i]);
                    if (error)
                        return "playerData." + error;
                }
            }
            if (message.frameList != null && message.hasOwnProperty("frameList")) {
                if (!$util.isObject(message.frameList))
                    return "frameList: object expected";
                var key = Object.keys(message.frameList);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "frameList: integer key{k:int32} expected";
                    {
                        var error = $root.common.FrameData.verify(message.frameList[key[i]]);
                        if (error)
                            return "frameList." + error;
                    }
                }
            }
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.common.BattleResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a ReplayData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ReplayData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ReplayData} ReplayData
         */
        ReplayData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ReplayData)
                return object;
            var message = new $root.common.ReplayData();
            if (object.key != null)
                message.key = String(object.key);
            if (object.seed != null)
                if ($util.Long)
                    (message.seed = $util.Long.fromValue(object.seed)).unsigned = false;
                else if (typeof object.seed === "string")
                    message.seed = parseInt(object.seed, 10);
                else if (typeof object.seed === "number")
                    message.seed = object.seed;
                else if (typeof object.seed === "object")
                    message.seed = new $util.LongBits(object.seed.low >>> 0, object.seed.high >>> 0).toNumber();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.playerData) {
                if (!Array.isArray(object.playerData))
                    throw TypeError(".common.ReplayData.playerData: array expected");
                message.playerData = [];
                for (var i = 0; i < object.playerData.length; ++i) {
                    if (typeof object.playerData[i] !== "object")
                        throw TypeError(".common.ReplayData.playerData: object expected");
                    message.playerData[i] = $root.common.BattlePlayerData.fromObject(object.playerData[i]);
                }
            }
            if (object.frameList) {
                if (typeof object.frameList !== "object")
                    throw TypeError(".common.ReplayData.frameList: object expected");
                message.frameList = {};
                for (var keys = Object.keys(object.frameList), i = 0; i < keys.length; ++i) {
                    if (typeof object.frameList[keys[i]] !== "object")
                        throw TypeError(".common.ReplayData.frameList: object expected");
                    message.frameList[keys[i]] = $root.common.FrameData.fromObject(object.frameList[keys[i]]);
                }
            }
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".common.ReplayData.result: object expected");
                message.result = $root.common.BattleResult.fromObject(object.result);
            }
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a ReplayData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ReplayData
         * @static
         * @param {common.ReplayData} message ReplayData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplayData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playerData = [];
            if (options.objects || options.defaults)
                object.frameList = {};
            if (options.defaults) {
                object.key = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seed = options.longs === String ? "0" : 0;
                object.time = 0;
                object.result = null;
                object.version = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (typeof message.seed === "number")
                    object.seed = options.longs === String ? String(message.seed) : message.seed;
                else
                    object.seed = options.longs === String ? $util.Long.prototype.toString.call(message.seed) : options.longs === Number ? new $util.LongBits(message.seed.low >>> 0, message.seed.high >>> 0).toNumber() : message.seed;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.playerData && message.playerData.length) {
                object.playerData = [];
                for (var j = 0; j < message.playerData.length; ++j)
                    object.playerData[j] = $root.common.BattlePlayerData.toObject(message.playerData[j], options);
            }
            var keys2;
            if (message.frameList && (keys2 = Object.keys(message.frameList)).length) {
                object.frameList = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.frameList[keys2[j]] = $root.common.FrameData.toObject(message.frameList[keys2[j]], options);
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.common.BattleResult.toObject(message.result, options);
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this ReplayData to JSON.
         * @function toJSON
         * @memberof common.ReplayData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplayData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplayData
         * @function getTypeUrl
         * @memberof common.ReplayData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplayData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ReplayData";
        };

        return ReplayData;
    })();

    common.ReplayCard = (function() {

        /**
         * Properties of a ReplayCard.
         * @memberof common
         * @interface IReplayCard
         * @property {number|null} [id] ReplayCard id
         * @property {number|null} [level] ReplayCard level
         */

        /**
         * Constructs a new ReplayCard.
         * @memberof common
         * @classdesc Represents a ReplayCard.
         * @implements IReplayCard
         * @constructor
         * @param {common.IReplayCard=} [properties] Properties to set
         */
        function ReplayCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplayCard id.
         * @member {number} id
         * @memberof common.ReplayCard
         * @instance
         */
        ReplayCard.prototype.id = 0;

        /**
         * ReplayCard level.
         * @member {number} level
         * @memberof common.ReplayCard
         * @instance
         */
        ReplayCard.prototype.level = 0;

        /**
         * Creates a new ReplayCard instance using the specified properties.
         * @function create
         * @memberof common.ReplayCard
         * @static
         * @param {common.IReplayCard=} [properties] Properties to set
         * @returns {common.ReplayCard} ReplayCard instance
         */
        ReplayCard.create = function create(properties) {
            return new ReplayCard(properties);
        };

        /**
         * Encodes the specified ReplayCard message. Does not implicitly {@link common.ReplayCard.verify|verify} messages.
         * @function encode
         * @memberof common.ReplayCard
         * @static
         * @param {common.IReplayCard} message ReplayCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
            return writer;
        };

        /**
         * Encodes the specified ReplayCard message, length delimited. Does not implicitly {@link common.ReplayCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ReplayCard
         * @static
         * @param {common.IReplayCard} message ReplayCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplayCard message from the specified reader or buffer.
         * @function decode
         * @memberof common.ReplayCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ReplayCard} ReplayCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayCard.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ReplayCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.level = reader.int32();
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
         * Decodes a ReplayCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ReplayCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ReplayCard} ReplayCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplayCard message.
         * @function verify
         * @memberof common.ReplayCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplayCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            return null;
        };

        /**
         * Creates a ReplayCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ReplayCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ReplayCard} ReplayCard
         */
        ReplayCard.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ReplayCard)
                return object;
            var message = new $root.common.ReplayCard();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.level != null)
                message.level = object.level | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReplayCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ReplayCard
         * @static
         * @param {common.ReplayCard} message ReplayCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplayCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.level = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this ReplayCard to JSON.
         * @function toJSON
         * @memberof common.ReplayCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplayCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplayCard
         * @function getTypeUrl
         * @memberof common.ReplayCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplayCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ReplayCard";
        };

        return ReplayCard;
    })();

    common.ReplayPlayerSummary = (function() {

        /**
         * Properties of a ReplayPlayerSummary.
         * @memberof common
         * @interface IReplayPlayerSummary
         * @property {string|null} [uid] ReplayPlayerSummary uid
         * @property {string|null} [nick] ReplayPlayerSummary nick
         * @property {string|null} [avatar] ReplayPlayerSummary avatar
         * @property {number|null} [level] ReplayPlayerSummary level
         * @property {string|null} [country] ReplayPlayerSummary country
         * @property {number|null} [cup] ReplayPlayerSummary cup
         * @property {string|null} [guildName] ReplayPlayerSummary guildName
         * @property {number|Long|null} [guildFlag] ReplayPlayerSummary guildFlag
         * @property {Array.<common.IReplayCard>|null} [cards] ReplayPlayerSummary cards
         */

        /**
         * Constructs a new ReplayPlayerSummary.
         * @memberof common
         * @classdesc Represents a ReplayPlayerSummary.
         * @implements IReplayPlayerSummary
         * @constructor
         * @param {common.IReplayPlayerSummary=} [properties] Properties to set
         */
        function ReplayPlayerSummary(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplayPlayerSummary uid.
         * @member {string} uid
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.uid = "";

        /**
         * ReplayPlayerSummary nick.
         * @member {string} nick
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.nick = "";

        /**
         * ReplayPlayerSummary avatar.
         * @member {string} avatar
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.avatar = "";

        /**
         * ReplayPlayerSummary level.
         * @member {number} level
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.level = 0;

        /**
         * ReplayPlayerSummary country.
         * @member {string} country
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.country = "";

        /**
         * ReplayPlayerSummary cup.
         * @member {number} cup
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.cup = 0;

        /**
         * ReplayPlayerSummary guildName.
         * @member {string} guildName
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.guildName = "";

        /**
         * ReplayPlayerSummary guildFlag.
         * @member {number|Long} guildFlag
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.guildFlag = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReplayPlayerSummary cards.
         * @member {Array.<common.IReplayCard>} cards
         * @memberof common.ReplayPlayerSummary
         * @instance
         */
        ReplayPlayerSummary.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ReplayPlayerSummary instance using the specified properties.
         * @function create
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {common.IReplayPlayerSummary=} [properties] Properties to set
         * @returns {common.ReplayPlayerSummary} ReplayPlayerSummary instance
         */
        ReplayPlayerSummary.create = function create(properties) {
            return new ReplayPlayerSummary(properties);
        };

        /**
         * Encodes the specified ReplayPlayerSummary message. Does not implicitly {@link common.ReplayPlayerSummary.verify|verify} messages.
         * @function encode
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {common.IReplayPlayerSummary} message ReplayPlayerSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayPlayerSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
            if (message.cup != null && Object.hasOwnProperty.call(message, "cup"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cup);
            if (message.guildName != null && Object.hasOwnProperty.call(message, "guildName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.guildName);
            if (message.guildFlag != null && Object.hasOwnProperty.call(message, "guildFlag"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.guildFlag);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.common.ReplayCard.encode(message.cards[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReplayPlayerSummary message, length delimited. Does not implicitly {@link common.ReplayPlayerSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {common.IReplayPlayerSummary} message ReplayPlayerSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayPlayerSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplayPlayerSummary message from the specified reader or buffer.
         * @function decode
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ReplayPlayerSummary} ReplayPlayerSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayPlayerSummary.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ReplayPlayerSummary();
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
                        message.nick = reader.string();
                        break;
                    }
                case 3: {
                        message.avatar = reader.string();
                        break;
                    }
                case 4: {
                        message.level = reader.int32();
                        break;
                    }
                case 5: {
                        message.country = reader.string();
                        break;
                    }
                case 6: {
                        message.cup = reader.int32();
                        break;
                    }
                case 7: {
                        message.guildName = reader.string();
                        break;
                    }
                case 8: {
                        message.guildFlag = reader.int64();
                        break;
                    }
                case 9: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.common.ReplayCard.decode(reader, reader.uint32()));
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
         * Decodes a ReplayPlayerSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ReplayPlayerSummary} ReplayPlayerSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayPlayerSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplayPlayerSummary message.
         * @function verify
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplayPlayerSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.cup != null && message.hasOwnProperty("cup"))
                if (!$util.isInteger(message.cup))
                    return "cup: integer expected";
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                if (!$util.isString(message.guildName))
                    return "guildName: string expected";
            if (message.guildFlag != null && message.hasOwnProperty("guildFlag"))
                if (!$util.isInteger(message.guildFlag) && !(message.guildFlag && $util.isInteger(message.guildFlag.low) && $util.isInteger(message.guildFlag.high)))
                    return "guildFlag: integer|Long expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.common.ReplayCard.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReplayPlayerSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ReplayPlayerSummary} ReplayPlayerSummary
         */
        ReplayPlayerSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ReplayPlayerSummary)
                return object;
            var message = new $root.common.ReplayPlayerSummary();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.country != null)
                message.country = String(object.country);
            if (object.cup != null)
                message.cup = object.cup | 0;
            if (object.guildName != null)
                message.guildName = String(object.guildName);
            if (object.guildFlag != null)
                if ($util.Long)
                    (message.guildFlag = $util.Long.fromValue(object.guildFlag)).unsigned = false;
                else if (typeof object.guildFlag === "string")
                    message.guildFlag = parseInt(object.guildFlag, 10);
                else if (typeof object.guildFlag === "number")
                    message.guildFlag = object.guildFlag;
                else if (typeof object.guildFlag === "object")
                    message.guildFlag = new $util.LongBits(object.guildFlag.low >>> 0, object.guildFlag.high >>> 0).toNumber();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".common.ReplayPlayerSummary.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i) {
                    if (typeof object.cards[i] !== "object")
                        throw TypeError(".common.ReplayPlayerSummary.cards: object expected");
                    message.cards[i] = $root.common.ReplayCard.fromObject(object.cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReplayPlayerSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {common.ReplayPlayerSummary} message ReplayPlayerSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplayPlayerSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (options.defaults) {
                object.uid = "";
                object.nick = "";
                object.avatar = "";
                object.level = 0;
                object.country = "";
                object.cup = 0;
                object.guildName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.guildFlag = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildFlag = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.cup != null && message.hasOwnProperty("cup"))
                object.cup = message.cup;
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                object.guildName = message.guildName;
            if (message.guildFlag != null && message.hasOwnProperty("guildFlag"))
                if (typeof message.guildFlag === "number")
                    object.guildFlag = options.longs === String ? String(message.guildFlag) : message.guildFlag;
                else
                    object.guildFlag = options.longs === String ? $util.Long.prototype.toString.call(message.guildFlag) : options.longs === Number ? new $util.LongBits(message.guildFlag.low >>> 0, message.guildFlag.high >>> 0).toNumber() : message.guildFlag;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = $root.common.ReplayCard.toObject(message.cards[j], options);
            }
            return object;
        };

        /**
         * Converts this ReplayPlayerSummary to JSON.
         * @function toJSON
         * @memberof common.ReplayPlayerSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplayPlayerSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplayPlayerSummary
         * @function getTypeUrl
         * @memberof common.ReplayPlayerSummary
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplayPlayerSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ReplayPlayerSummary";
        };

        return ReplayPlayerSummary;
    })();

    common.ReplaySummaryData = (function() {

        /**
         * Properties of a ReplaySummaryData.
         * @memberof common
         * @interface IReplaySummaryData
         * @property {string|null} [key] ReplaySummaryData key
         * @property {number|null} [time] ReplaySummaryData time
         * @property {common.IBattleResult|null} [result] ReplaySummaryData result
         * @property {Array.<common.IReplayPlayerSummary>|null} [playerData] ReplaySummaryData playerData
         * @property {string|null} [version] ReplaySummaryData version
         * @property {boolean|null} [play] ReplaySummaryData play
         */

        /**
         * Constructs a new ReplaySummaryData.
         * @memberof common
         * @classdesc Represents a ReplaySummaryData.
         * @implements IReplaySummaryData
         * @constructor
         * @param {common.IReplaySummaryData=} [properties] Properties to set
         */
        function ReplaySummaryData(properties) {
            this.playerData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplaySummaryData key.
         * @member {string} key
         * @memberof common.ReplaySummaryData
         * @instance
         */
        ReplaySummaryData.prototype.key = "";

        /**
         * ReplaySummaryData time.
         * @member {number} time
         * @memberof common.ReplaySummaryData
         * @instance
         */
        ReplaySummaryData.prototype.time = 0;

        /**
         * ReplaySummaryData result.
         * @member {common.IBattleResult|null|undefined} result
         * @memberof common.ReplaySummaryData
         * @instance
         */
        ReplaySummaryData.prototype.result = null;

        /**
         * ReplaySummaryData playerData.
         * @member {Array.<common.IReplayPlayerSummary>} playerData
         * @memberof common.ReplaySummaryData
         * @instance
         */
        ReplaySummaryData.prototype.playerData = $util.emptyArray;

        /**
         * ReplaySummaryData version.
         * @member {string} version
         * @memberof common.ReplaySummaryData
         * @instance
         */
        ReplaySummaryData.prototype.version = "";

        /**
         * ReplaySummaryData play.
         * @member {boolean} play
         * @memberof common.ReplaySummaryData
         * @instance
         */
        ReplaySummaryData.prototype.play = false;

        /**
         * Creates a new ReplaySummaryData instance using the specified properties.
         * @function create
         * @memberof common.ReplaySummaryData
         * @static
         * @param {common.IReplaySummaryData=} [properties] Properties to set
         * @returns {common.ReplaySummaryData} ReplaySummaryData instance
         */
        ReplaySummaryData.create = function create(properties) {
            return new ReplaySummaryData(properties);
        };

        /**
         * Encodes the specified ReplaySummaryData message. Does not implicitly {@link common.ReplaySummaryData.verify|verify} messages.
         * @function encode
         * @memberof common.ReplaySummaryData
         * @static
         * @param {common.IReplaySummaryData} message ReplaySummaryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplaySummaryData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.common.BattleResult.encode(message.result, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.playerData != null && message.playerData.length)
                for (var i = 0; i < message.playerData.length; ++i)
                    $root.common.ReplayPlayerSummary.encode(message.playerData[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.version);
            if (message.play != null && Object.hasOwnProperty.call(message, "play"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.play);
            return writer;
        };

        /**
         * Encodes the specified ReplaySummaryData message, length delimited. Does not implicitly {@link common.ReplaySummaryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ReplaySummaryData
         * @static
         * @param {common.IReplaySummaryData} message ReplaySummaryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplaySummaryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplaySummaryData message from the specified reader or buffer.
         * @function decode
         * @memberof common.ReplaySummaryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ReplaySummaryData} ReplaySummaryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplaySummaryData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ReplaySummaryData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.time = reader.int32();
                        break;
                    }
                case 3: {
                        message.result = $root.common.BattleResult.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.playerData && message.playerData.length))
                            message.playerData = [];
                        message.playerData.push($root.common.ReplayPlayerSummary.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.version = reader.string();
                        break;
                    }
                case 6: {
                        message.play = reader.bool();
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
         * Decodes a ReplaySummaryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ReplaySummaryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ReplaySummaryData} ReplaySummaryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplaySummaryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplaySummaryData message.
         * @function verify
         * @memberof common.ReplaySummaryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplaySummaryData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.common.BattleResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.playerData != null && message.hasOwnProperty("playerData")) {
                if (!Array.isArray(message.playerData))
                    return "playerData: array expected";
                for (var i = 0; i < message.playerData.length; ++i) {
                    var error = $root.common.ReplayPlayerSummary.verify(message.playerData[i]);
                    if (error)
                        return "playerData." + error;
                }
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.play != null && message.hasOwnProperty("play"))
                if (typeof message.play !== "boolean")
                    return "play: boolean expected";
            return null;
        };

        /**
         * Creates a ReplaySummaryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ReplaySummaryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ReplaySummaryData} ReplaySummaryData
         */
        ReplaySummaryData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ReplaySummaryData)
                return object;
            var message = new $root.common.ReplaySummaryData();
            if (object.key != null)
                message.key = String(object.key);
            if (object.time != null)
                message.time = object.time | 0;
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".common.ReplaySummaryData.result: object expected");
                message.result = $root.common.BattleResult.fromObject(object.result);
            }
            if (object.playerData) {
                if (!Array.isArray(object.playerData))
                    throw TypeError(".common.ReplaySummaryData.playerData: array expected");
                message.playerData = [];
                for (var i = 0; i < object.playerData.length; ++i) {
                    if (typeof object.playerData[i] !== "object")
                        throw TypeError(".common.ReplaySummaryData.playerData: object expected");
                    message.playerData[i] = $root.common.ReplayPlayerSummary.fromObject(object.playerData[i]);
                }
            }
            if (object.version != null)
                message.version = String(object.version);
            if (object.play != null)
                message.play = Boolean(object.play);
            return message;
        };

        /**
         * Creates a plain object from a ReplaySummaryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ReplaySummaryData
         * @static
         * @param {common.ReplaySummaryData} message ReplaySummaryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplaySummaryData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playerData = [];
            if (options.defaults) {
                object.key = "";
                object.time = 0;
                object.result = null;
                object.version = "";
                object.play = false;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.common.BattleResult.toObject(message.result, options);
            if (message.playerData && message.playerData.length) {
                object.playerData = [];
                for (var j = 0; j < message.playerData.length; ++j)
                    object.playerData[j] = $root.common.ReplayPlayerSummary.toObject(message.playerData[j], options);
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.play != null && message.hasOwnProperty("play"))
                object.play = message.play;
            return object;
        };

        /**
         * Converts this ReplaySummaryData to JSON.
         * @function toJSON
         * @memberof common.ReplaySummaryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplaySummaryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplaySummaryData
         * @function getTypeUrl
         * @memberof common.ReplaySummaryData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplaySummaryData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ReplaySummaryData";
        };

        return ReplaySummaryData;
    })();

    common.DamageLabelData = (function() {

        /**
         * Properties of a DamageLabelData.
         * @memberof common
         * @interface IDamageLabelData
         * @property {number|null} [flag] DamageLabelData flag
         * @property {number|null} [val] DamageLabelData val
         * @property {number|null} [posX] DamageLabelData posX
         * @property {number|null} [posY] DamageLabelData posY
         */

        /**
         * Constructs a new DamageLabelData.
         * @memberof common
         * @classdesc Represents a DamageLabelData.
         * @implements IDamageLabelData
         * @constructor
         * @param {common.IDamageLabelData=} [properties] Properties to set
         */
        function DamageLabelData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DamageLabelData flag.
         * @member {number} flag
         * @memberof common.DamageLabelData
         * @instance
         */
        DamageLabelData.prototype.flag = 0;

        /**
         * DamageLabelData val.
         * @member {number} val
         * @memberof common.DamageLabelData
         * @instance
         */
        DamageLabelData.prototype.val = 0;

        /**
         * DamageLabelData posX.
         * @member {number} posX
         * @memberof common.DamageLabelData
         * @instance
         */
        DamageLabelData.prototype.posX = 0;

        /**
         * DamageLabelData posY.
         * @member {number} posY
         * @memberof common.DamageLabelData
         * @instance
         */
        DamageLabelData.prototype.posY = 0;

        /**
         * Creates a new DamageLabelData instance using the specified properties.
         * @function create
         * @memberof common.DamageLabelData
         * @static
         * @param {common.IDamageLabelData=} [properties] Properties to set
         * @returns {common.DamageLabelData} DamageLabelData instance
         */
        DamageLabelData.create = function create(properties) {
            return new DamageLabelData(properties);
        };

        /**
         * Encodes the specified DamageLabelData message. Does not implicitly {@link common.DamageLabelData.verify|verify} messages.
         * @function encode
         * @memberof common.DamageLabelData
         * @static
         * @param {common.IDamageLabelData} message DamageLabelData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DamageLabelData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flag);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.val);
            if (message.posX != null && Object.hasOwnProperty.call(message, "posX"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.posX);
            if (message.posY != null && Object.hasOwnProperty.call(message, "posY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.posY);
            return writer;
        };

        /**
         * Encodes the specified DamageLabelData message, length delimited. Does not implicitly {@link common.DamageLabelData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.DamageLabelData
         * @static
         * @param {common.IDamageLabelData} message DamageLabelData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DamageLabelData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DamageLabelData message from the specified reader or buffer.
         * @function decode
         * @memberof common.DamageLabelData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.DamageLabelData} DamageLabelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DamageLabelData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.DamageLabelData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.flag = reader.int32();
                        break;
                    }
                case 2: {
                        message.val = reader.int32();
                        break;
                    }
                case 3: {
                        message.posX = reader.int32();
                        break;
                    }
                case 4: {
                        message.posY = reader.int32();
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
         * Decodes a DamageLabelData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.DamageLabelData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.DamageLabelData} DamageLabelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DamageLabelData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DamageLabelData message.
         * @function verify
         * @memberof common.DamageLabelData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DamageLabelData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (!$util.isInteger(message.flag))
                    return "flag: integer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val))
                    return "val: integer expected";
            if (message.posX != null && message.hasOwnProperty("posX"))
                if (!$util.isInteger(message.posX))
                    return "posX: integer expected";
            if (message.posY != null && message.hasOwnProperty("posY"))
                if (!$util.isInteger(message.posY))
                    return "posY: integer expected";
            return null;
        };

        /**
         * Creates a DamageLabelData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.DamageLabelData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.DamageLabelData} DamageLabelData
         */
        DamageLabelData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.DamageLabelData)
                return object;
            var message = new $root.common.DamageLabelData();
            if (object.flag != null)
                message.flag = object.flag | 0;
            if (object.val != null)
                message.val = object.val | 0;
            if (object.posX != null)
                message.posX = object.posX | 0;
            if (object.posY != null)
                message.posY = object.posY | 0;
            return message;
        };

        /**
         * Creates a plain object from a DamageLabelData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.DamageLabelData
         * @static
         * @param {common.DamageLabelData} message DamageLabelData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DamageLabelData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.flag = 0;
                object.val = 0;
                object.posX = 0;
                object.posY = 0;
            }
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.val != null && message.hasOwnProperty("val"))
                object.val = message.val;
            if (message.posX != null && message.hasOwnProperty("posX"))
                object.posX = message.posX;
            if (message.posY != null && message.hasOwnProperty("posY"))
                object.posY = message.posY;
            return object;
        };

        /**
         * Converts this DamageLabelData to JSON.
         * @function toJSON
         * @memberof common.DamageLabelData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DamageLabelData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DamageLabelData
         * @function getTypeUrl
         * @memberof common.DamageLabelData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DamageLabelData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.DamageLabelData";
        };

        return DamageLabelData;
    })();

    common.Reward = (function() {

        /**
         * Properties of a Reward.
         * @memberof common
         * @interface IReward
         * @property {string|null} [type] Reward type
         * @property {string|null} [id] Reward id
         * @property {number|Long|null} [count] Reward count
         * @property {boolean|null} [tradable] Reward tradable
         * @property {boolean|null} [isBoxAward] Reward isBoxAward
         * @property {number|null} [boxId] Reward boxId
         */

        /**
         * Constructs a new Reward.
         * @memberof common
         * @classdesc Represents a Reward.
         * @implements IReward
         * @constructor
         * @param {common.IReward=} [properties] Properties to set
         */
        function Reward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reward type.
         * @member {string} type
         * @memberof common.Reward
         * @instance
         */
        Reward.prototype.type = "";

        /**
         * Reward id.
         * @member {string} id
         * @memberof common.Reward
         * @instance
         */
        Reward.prototype.id = "";

        /**
         * Reward count.
         * @member {number|Long} count
         * @memberof common.Reward
         * @instance
         */
        Reward.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Reward tradable.
         * @member {boolean} tradable
         * @memberof common.Reward
         * @instance
         */
        Reward.prototype.tradable = false;

        /**
         * Reward isBoxAward.
         * @member {boolean} isBoxAward
         * @memberof common.Reward
         * @instance
         */
        Reward.prototype.isBoxAward = false;

        /**
         * Reward boxId.
         * @member {number} boxId
         * @memberof common.Reward
         * @instance
         */
        Reward.prototype.boxId = 0;

        /**
         * Creates a new Reward instance using the specified properties.
         * @function create
         * @memberof common.Reward
         * @static
         * @param {common.IReward=} [properties] Properties to set
         * @returns {common.Reward} Reward instance
         */
        Reward.create = function create(properties) {
            return new Reward(properties);
        };

        /**
         * Encodes the specified Reward message. Does not implicitly {@link common.Reward.verify|verify} messages.
         * @function encode
         * @memberof common.Reward
         * @static
         * @param {common.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.count);
            if (message.tradable != null && Object.hasOwnProperty.call(message, "tradable"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.tradable);
            if (message.isBoxAward != null && Object.hasOwnProperty.call(message, "isBoxAward"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isBoxAward);
            if (message.boxId != null && Object.hasOwnProperty.call(message, "boxId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.boxId);
            return writer;
        };

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link common.Reward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Reward
         * @static
         * @param {common.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @function decode
         * @memberof common.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Reward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.string();
                        break;
                    }
                case 3: {
                        message.count = reader.int64();
                        break;
                    }
                case 4: {
                        message.tradable = reader.bool();
                        break;
                    }
                case 5: {
                        message.isBoxAward = reader.bool();
                        break;
                    }
                case 6: {
                        message.boxId = reader.int32();
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
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reward message.
         * @function verify
         * @memberof common.Reward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            if (message.tradable != null && message.hasOwnProperty("tradable"))
                if (typeof message.tradable !== "boolean")
                    return "tradable: boolean expected";
            if (message.isBoxAward != null && message.hasOwnProperty("isBoxAward"))
                if (typeof message.isBoxAward !== "boolean")
                    return "isBoxAward: boolean expected";
            if (message.boxId != null && message.hasOwnProperty("boxId"))
                if (!$util.isInteger(message.boxId))
                    return "boxId: integer expected";
            return null;
        };

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Reward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Reward} Reward
         */
        Reward.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Reward)
                return object;
            var message = new $root.common.Reward();
            if (object.type != null)
                message.type = String(object.type);
            if (object.id != null)
                message.id = String(object.id);
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            if (object.tradable != null)
                message.tradable = Boolean(object.tradable);
            if (object.isBoxAward != null)
                message.isBoxAward = Boolean(object.isBoxAward);
            if (object.boxId != null)
                message.boxId = object.boxId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Reward
         * @static
         * @param {common.Reward} message Reward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
                object.tradable = false;
                object.isBoxAward = false;
                object.boxId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            if (message.tradable != null && message.hasOwnProperty("tradable"))
                object.tradable = message.tradable;
            if (message.isBoxAward != null && message.hasOwnProperty("isBoxAward"))
                object.isBoxAward = message.isBoxAward;
            if (message.boxId != null && message.hasOwnProperty("boxId"))
                object.boxId = message.boxId;
            return object;
        };

        /**
         * Converts this Reward to JSON.
         * @function toJSON
         * @memberof common.Reward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Reward
         * @function getTypeUrl
         * @memberof common.Reward
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Reward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Reward";
        };

        return Reward;
    })();

    return common;
})();

module.exports = $root;
