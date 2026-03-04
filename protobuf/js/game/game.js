/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.CLogin = (function() {

        /**
         * Properties of a CLogin.
         * @memberof game
         * @interface ICLogin
         * @property {string|null} [name] CLogin name
         * @property {string|null} [password] CLogin password
         */

        /**
         * Constructs a new CLogin.
         * @memberof game
         * @classdesc Represents a CLogin.
         * @implements ICLogin
         * @constructor
         * @param {game.ICLogin=} [properties] Properties to set
         */
        function CLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CLogin name.
         * @member {string} name
         * @memberof game.CLogin
         * @instance
         */
        CLogin.prototype.name = "";

        /**
         * CLogin password.
         * @member {string} password
         * @memberof game.CLogin
         * @instance
         */
        CLogin.prototype.password = "";

        /**
         * Creates a new CLogin instance using the specified properties.
         * @function create
         * @memberof game.CLogin
         * @static
         * @param {game.ICLogin=} [properties] Properties to set
         * @returns {game.CLogin} CLogin instance
         */
        CLogin.create = function create(properties) {
            return new CLogin(properties);
        };

        /**
         * Encodes the specified CLogin message. Does not implicitly {@link game.CLogin.verify|verify} messages.
         * @function encode
         * @memberof game.CLogin
         * @static
         * @param {game.ICLogin} message CLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified CLogin message, length delimited. Does not implicitly {@link game.CLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CLogin
         * @static
         * @param {game.ICLogin} message CLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CLogin message from the specified reader or buffer.
         * @function decode
         * @memberof game.CLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CLogin} CLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogin.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
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
         * Decodes a CLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CLogin} CLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CLogin message.
         * @function verify
         * @memberof game.CLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a CLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CLogin} CLogin
         */
        CLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CLogin)
                return object;
            var message = new $root.game.CLogin();
            if (object.name != null)
                message.name = String(object.name);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a CLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CLogin
         * @static
         * @param {game.CLogin} message CLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.password = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this CLogin to JSON.
         * @function toJSON
         * @memberof game.CLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CLogin
         * @function getTypeUrl
         * @memberof game.CLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CLogin";
        };

        return CLogin;
    })();

    game.SLogin = (function() {

        /**
         * Properties of a SLogin.
         * @memberof game
         * @interface ISLogin
         * @property {number|Long|null} [playerId] SLogin playerId
         */

        /**
         * Constructs a new SLogin.
         * @memberof game
         * @classdesc Represents a SLogin.
         * @implements ISLogin
         * @constructor
         * @param {game.ISLogin=} [properties] Properties to set
         */
        function SLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SLogin playerId.
         * @member {number|Long} playerId
         * @memberof game.SLogin
         * @instance
         */
        SLogin.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SLogin instance using the specified properties.
         * @function create
         * @memberof game.SLogin
         * @static
         * @param {game.ISLogin=} [properties] Properties to set
         * @returns {game.SLogin} SLogin instance
         */
        SLogin.create = function create(properties) {
            return new SLogin(properties);
        };

        /**
         * Encodes the specified SLogin message. Does not implicitly {@link game.SLogin.verify|verify} messages.
         * @function encode
         * @memberof game.SLogin
         * @static
         * @param {game.ISLogin} message SLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified SLogin message, length delimited. Does not implicitly {@link game.SLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SLogin
         * @static
         * @param {game.ISLogin} message SLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SLogin message from the specified reader or buffer.
         * @function decode
         * @memberof game.SLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SLogin} SLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLogin.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int64();
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
         * Decodes a SLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SLogin} SLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SLogin message.
         * @function verify
         * @memberof game.SLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a SLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SLogin} SLogin
         */
        SLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SLogin)
                return object;
            var message = new $root.game.SLogin();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SLogin
         * @static
         * @param {game.SLogin} message SLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            return object;
        };

        /**
         * Converts this SLogin to JSON.
         * @function toJSON
         * @memberof game.SLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SLogin
         * @function getTypeUrl
         * @memberof game.SLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SLogin";
        };

        return SLogin;
    })();

    game.CEcho = (function() {

        /**
         * Properties of a CEcho.
         * @memberof game
         * @interface ICEcho
         * @property {string|null} [msg] CEcho msg
         */

        /**
         * Constructs a new CEcho.
         * @memberof game
         * @classdesc Represents a CEcho.
         * @implements ICEcho
         * @constructor
         * @param {game.ICEcho=} [properties] Properties to set
         */
        function CEcho(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CEcho msg.
         * @member {string} msg
         * @memberof game.CEcho
         * @instance
         */
        CEcho.prototype.msg = "";

        /**
         * Creates a new CEcho instance using the specified properties.
         * @function create
         * @memberof game.CEcho
         * @static
         * @param {game.ICEcho=} [properties] Properties to set
         * @returns {game.CEcho} CEcho instance
         */
        CEcho.create = function create(properties) {
            return new CEcho(properties);
        };

        /**
         * Encodes the specified CEcho message. Does not implicitly {@link game.CEcho.verify|verify} messages.
         * @function encode
         * @memberof game.CEcho
         * @static
         * @param {game.ICEcho} message CEcho message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEcho.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified CEcho message, length delimited. Does not implicitly {@link game.CEcho.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CEcho
         * @static
         * @param {game.ICEcho} message CEcho message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEcho.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CEcho message from the specified reader or buffer.
         * @function decode
         * @memberof game.CEcho
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CEcho} CEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEcho.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CEcho();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.string();
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
         * Decodes a CEcho message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CEcho
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CEcho} CEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEcho.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CEcho message.
         * @function verify
         * @memberof game.CEcho
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CEcho.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a CEcho message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CEcho
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CEcho} CEcho
         */
        CEcho.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CEcho)
                return object;
            var message = new $root.game.CEcho();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a CEcho message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CEcho
         * @static
         * @param {game.CEcho} message CEcho
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CEcho.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this CEcho to JSON.
         * @function toJSON
         * @memberof game.CEcho
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CEcho.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CEcho
         * @function getTypeUrl
         * @memberof game.CEcho
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CEcho.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CEcho";
        };

        return CEcho;
    })();

    game.SEcho = (function() {

        /**
         * Properties of a SEcho.
         * @memberof game
         * @interface ISEcho
         * @property {string|null} [msg] SEcho msg
         */

        /**
         * Constructs a new SEcho.
         * @memberof game
         * @classdesc Represents a SEcho.
         * @implements ISEcho
         * @constructor
         * @param {game.ISEcho=} [properties] Properties to set
         */
        function SEcho(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SEcho msg.
         * @member {string} msg
         * @memberof game.SEcho
         * @instance
         */
        SEcho.prototype.msg = "";

        /**
         * Creates a new SEcho instance using the specified properties.
         * @function create
         * @memberof game.SEcho
         * @static
         * @param {game.ISEcho=} [properties] Properties to set
         * @returns {game.SEcho} SEcho instance
         */
        SEcho.create = function create(properties) {
            return new SEcho(properties);
        };

        /**
         * Encodes the specified SEcho message. Does not implicitly {@link game.SEcho.verify|verify} messages.
         * @function encode
         * @memberof game.SEcho
         * @static
         * @param {game.ISEcho} message SEcho message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SEcho.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SEcho message, length delimited. Does not implicitly {@link game.SEcho.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SEcho
         * @static
         * @param {game.ISEcho} message SEcho message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SEcho.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SEcho message from the specified reader or buffer.
         * @function decode
         * @memberof game.SEcho
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SEcho} SEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SEcho.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SEcho();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.string();
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
         * Decodes a SEcho message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SEcho
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SEcho} SEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SEcho.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SEcho message.
         * @function verify
         * @memberof game.SEcho
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SEcho.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SEcho message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SEcho
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SEcho} SEcho
         */
        SEcho.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SEcho)
                return object;
            var message = new $root.game.SEcho();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SEcho message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SEcho
         * @static
         * @param {game.SEcho} message SEcho
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SEcho.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SEcho to JSON.
         * @function toJSON
         * @memberof game.SEcho
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SEcho.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SEcho
         * @function getTypeUrl
         * @memberof game.SEcho
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SEcho.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SEcho";
        };

        return SEcho;
    })();

    game.CKickPlayers = (function() {

        /**
         * Properties of a CKickPlayers.
         * @memberof game
         * @interface ICKickPlayers
         * @property {Array.<number|Long>|null} [playerIds] CKickPlayers playerIds
         * @property {common.KickPlayerReason|null} [reason] CKickPlayers reason
         */

        /**
         * Constructs a new CKickPlayers.
         * @memberof game
         * @classdesc Represents a CKickPlayers.
         * @implements ICKickPlayers
         * @constructor
         * @param {game.ICKickPlayers=} [properties] Properties to set
         */
        function CKickPlayers(properties) {
            this.playerIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CKickPlayers playerIds.
         * @member {Array.<number|Long>} playerIds
         * @memberof game.CKickPlayers
         * @instance
         */
        CKickPlayers.prototype.playerIds = $util.emptyArray;

        /**
         * CKickPlayers reason.
         * @member {common.KickPlayerReason} reason
         * @memberof game.CKickPlayers
         * @instance
         */
        CKickPlayers.prototype.reason = 0;

        /**
         * Creates a new CKickPlayers instance using the specified properties.
         * @function create
         * @memberof game.CKickPlayers
         * @static
         * @param {game.ICKickPlayers=} [properties] Properties to set
         * @returns {game.CKickPlayers} CKickPlayers instance
         */
        CKickPlayers.create = function create(properties) {
            return new CKickPlayers(properties);
        };

        /**
         * Encodes the specified CKickPlayers message. Does not implicitly {@link game.CKickPlayers.verify|verify} messages.
         * @function encode
         * @memberof game.CKickPlayers
         * @static
         * @param {game.ICKickPlayers} message CKickPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickPlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerIds != null && message.playerIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.playerIds.length; ++i)
                    writer.int64(message.playerIds[i]);
                writer.ldelim();
            }
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CKickPlayers message, length delimited. Does not implicitly {@link game.CKickPlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CKickPlayers
         * @static
         * @param {game.ICKickPlayers} message CKickPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickPlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CKickPlayers message from the specified reader or buffer.
         * @function decode
         * @memberof game.CKickPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CKickPlayers} CKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickPlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CKickPlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.playerIds && message.playerIds.length))
                            message.playerIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.playerIds.push(reader.int64());
                        } else
                            message.playerIds.push(reader.int64());
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
         * Decodes a CKickPlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CKickPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CKickPlayers} CKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickPlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CKickPlayers message.
         * @function verify
         * @memberof game.CKickPlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CKickPlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerIds != null && message.hasOwnProperty("playerIds")) {
                if (!Array.isArray(message.playerIds))
                    return "playerIds: array expected";
                for (var i = 0; i < message.playerIds.length; ++i)
                    if (!$util.isInteger(message.playerIds[i]) && !(message.playerIds[i] && $util.isInteger(message.playerIds[i].low) && $util.isInteger(message.playerIds[i].high)))
                        return "playerIds: integer|Long[] expected";
            }
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
         * Creates a CKickPlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CKickPlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CKickPlayers} CKickPlayers
         */
        CKickPlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CKickPlayers)
                return object;
            var message = new $root.game.CKickPlayers();
            if (object.playerIds) {
                if (!Array.isArray(object.playerIds))
                    throw TypeError(".game.CKickPlayers.playerIds: array expected");
                message.playerIds = [];
                for (var i = 0; i < object.playerIds.length; ++i)
                    if ($util.Long)
                        (message.playerIds[i] = $util.Long.fromValue(object.playerIds[i])).unsigned = false;
                    else if (typeof object.playerIds[i] === "string")
                        message.playerIds[i] = parseInt(object.playerIds[i], 10);
                    else if (typeof object.playerIds[i] === "number")
                        message.playerIds[i] = object.playerIds[i];
                    else if (typeof object.playerIds[i] === "object")
                        message.playerIds[i] = new $util.LongBits(object.playerIds[i].low >>> 0, object.playerIds[i].high >>> 0).toNumber();
            }
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
         * Creates a plain object from a CKickPlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CKickPlayers
         * @static
         * @param {game.CKickPlayers} message CKickPlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CKickPlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playerIds = [];
            if (options.defaults)
                object.reason = options.enums === String ? "ClientLeave" : 0;
            if (message.playerIds && message.playerIds.length) {
                object.playerIds = [];
                for (var j = 0; j < message.playerIds.length; ++j)
                    if (typeof message.playerIds[j] === "number")
                        object.playerIds[j] = options.longs === String ? String(message.playerIds[j]) : message.playerIds[j];
                    else
                        object.playerIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.playerIds[j]) : options.longs === Number ? new $util.LongBits(message.playerIds[j].low >>> 0, message.playerIds[j].high >>> 0).toNumber() : message.playerIds[j];
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.common.KickPlayerReason[message.reason] === undefined ? message.reason : $root.common.KickPlayerReason[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this CKickPlayers to JSON.
         * @function toJSON
         * @memberof game.CKickPlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CKickPlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CKickPlayers
         * @function getTypeUrl
         * @memberof game.CKickPlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CKickPlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CKickPlayers";
        };

        return CKickPlayers;
    })();

    game.SKickPlayers = (function() {

        /**
         * Properties of a SKickPlayers.
         * @memberof game
         * @interface ISKickPlayers
         */

        /**
         * Constructs a new SKickPlayers.
         * @memberof game
         * @classdesc Represents a SKickPlayers.
         * @implements ISKickPlayers
         * @constructor
         * @param {game.ISKickPlayers=} [properties] Properties to set
         */
        function SKickPlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SKickPlayers instance using the specified properties.
         * @function create
         * @memberof game.SKickPlayers
         * @static
         * @param {game.ISKickPlayers=} [properties] Properties to set
         * @returns {game.SKickPlayers} SKickPlayers instance
         */
        SKickPlayers.create = function create(properties) {
            return new SKickPlayers(properties);
        };

        /**
         * Encodes the specified SKickPlayers message. Does not implicitly {@link game.SKickPlayers.verify|verify} messages.
         * @function encode
         * @memberof game.SKickPlayers
         * @static
         * @param {game.ISKickPlayers} message SKickPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickPlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SKickPlayers message, length delimited. Does not implicitly {@link game.SKickPlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SKickPlayers
         * @static
         * @param {game.ISKickPlayers} message SKickPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickPlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SKickPlayers message from the specified reader or buffer.
         * @function decode
         * @memberof game.SKickPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SKickPlayers} SKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickPlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SKickPlayers();
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
         * Decodes a SKickPlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SKickPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SKickPlayers} SKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickPlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SKickPlayers message.
         * @function verify
         * @memberof game.SKickPlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SKickPlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SKickPlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SKickPlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SKickPlayers} SKickPlayers
         */
        SKickPlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SKickPlayers)
                return object;
            return new $root.game.SKickPlayers();
        };

        /**
         * Creates a plain object from a SKickPlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SKickPlayers
         * @static
         * @param {game.SKickPlayers} message SKickPlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SKickPlayers.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SKickPlayers to JSON.
         * @function toJSON
         * @memberof game.SKickPlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SKickPlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SKickPlayers
         * @function getTypeUrl
         * @memberof game.SKickPlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SKickPlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SKickPlayers";
        };

        return SKickPlayers;
    })();

    game.CKickAllPlayers = (function() {

        /**
         * Properties of a CKickAllPlayers.
         * @memberof game
         * @interface ICKickAllPlayers
         * @property {common.KickPlayerReason|null} [reason] CKickAllPlayers reason
         */

        /**
         * Constructs a new CKickAllPlayers.
         * @memberof game
         * @classdesc Represents a CKickAllPlayers.
         * @implements ICKickAllPlayers
         * @constructor
         * @param {game.ICKickAllPlayers=} [properties] Properties to set
         */
        function CKickAllPlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CKickAllPlayers reason.
         * @member {common.KickPlayerReason} reason
         * @memberof game.CKickAllPlayers
         * @instance
         */
        CKickAllPlayers.prototype.reason = 0;

        /**
         * Creates a new CKickAllPlayers instance using the specified properties.
         * @function create
         * @memberof game.CKickAllPlayers
         * @static
         * @param {game.ICKickAllPlayers=} [properties] Properties to set
         * @returns {game.CKickAllPlayers} CKickAllPlayers instance
         */
        CKickAllPlayers.create = function create(properties) {
            return new CKickAllPlayers(properties);
        };

        /**
         * Encodes the specified CKickAllPlayers message. Does not implicitly {@link game.CKickAllPlayers.verify|verify} messages.
         * @function encode
         * @memberof game.CKickAllPlayers
         * @static
         * @param {game.ICKickAllPlayers} message CKickAllPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickAllPlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CKickAllPlayers message, length delimited. Does not implicitly {@link game.CKickAllPlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CKickAllPlayers
         * @static
         * @param {game.ICKickAllPlayers} message CKickAllPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKickAllPlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CKickAllPlayers message from the specified reader or buffer.
         * @function decode
         * @memberof game.CKickAllPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CKickAllPlayers} CKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickAllPlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CKickAllPlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
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
         * Decodes a CKickAllPlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CKickAllPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CKickAllPlayers} CKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKickAllPlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CKickAllPlayers message.
         * @function verify
         * @memberof game.CKickAllPlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CKickAllPlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * Creates a CKickAllPlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CKickAllPlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CKickAllPlayers} CKickAllPlayers
         */
        CKickAllPlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CKickAllPlayers)
                return object;
            var message = new $root.game.CKickAllPlayers();
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
         * Creates a plain object from a CKickAllPlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CKickAllPlayers
         * @static
         * @param {game.CKickAllPlayers} message CKickAllPlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CKickAllPlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = options.enums === String ? "ClientLeave" : 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.common.KickPlayerReason[message.reason] === undefined ? message.reason : $root.common.KickPlayerReason[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this CKickAllPlayers to JSON.
         * @function toJSON
         * @memberof game.CKickAllPlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CKickAllPlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CKickAllPlayers
         * @function getTypeUrl
         * @memberof game.CKickAllPlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CKickAllPlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CKickAllPlayers";
        };

        return CKickAllPlayers;
    })();

    game.SKickAllPlayers = (function() {

        /**
         * Properties of a SKickAllPlayers.
         * @memberof game
         * @interface ISKickAllPlayers
         */

        /**
         * Constructs a new SKickAllPlayers.
         * @memberof game
         * @classdesc Represents a SKickAllPlayers.
         * @implements ISKickAllPlayers
         * @constructor
         * @param {game.ISKickAllPlayers=} [properties] Properties to set
         */
        function SKickAllPlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SKickAllPlayers instance using the specified properties.
         * @function create
         * @memberof game.SKickAllPlayers
         * @static
         * @param {game.ISKickAllPlayers=} [properties] Properties to set
         * @returns {game.SKickAllPlayers} SKickAllPlayers instance
         */
        SKickAllPlayers.create = function create(properties) {
            return new SKickAllPlayers(properties);
        };

        /**
         * Encodes the specified SKickAllPlayers message. Does not implicitly {@link game.SKickAllPlayers.verify|verify} messages.
         * @function encode
         * @memberof game.SKickAllPlayers
         * @static
         * @param {game.ISKickAllPlayers} message SKickAllPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickAllPlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SKickAllPlayers message, length delimited. Does not implicitly {@link game.SKickAllPlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SKickAllPlayers
         * @static
         * @param {game.ISKickAllPlayers} message SKickAllPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickAllPlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SKickAllPlayers message from the specified reader or buffer.
         * @function decode
         * @memberof game.SKickAllPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SKickAllPlayers} SKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickAllPlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SKickAllPlayers();
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
         * Decodes a SKickAllPlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SKickAllPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SKickAllPlayers} SKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickAllPlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SKickAllPlayers message.
         * @function verify
         * @memberof game.SKickAllPlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SKickAllPlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SKickAllPlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SKickAllPlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SKickAllPlayers} SKickAllPlayers
         */
        SKickAllPlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SKickAllPlayers)
                return object;
            return new $root.game.SKickAllPlayers();
        };

        /**
         * Creates a plain object from a SKickAllPlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SKickAllPlayers
         * @static
         * @param {game.SKickAllPlayers} message SKickAllPlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SKickAllPlayers.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SKickAllPlayers to JSON.
         * @function toJSON
         * @memberof game.SKickAllPlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SKickAllPlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SKickAllPlayers
         * @function getTypeUrl
         * @memberof game.SKickAllPlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SKickAllPlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SKickAllPlayers";
        };

        return SKickAllPlayers;
    })();

    return game;
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
