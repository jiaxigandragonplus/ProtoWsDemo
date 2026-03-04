/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.guild = (function() {

    /**
     * Namespace guild.
     * @exports guild
     * @namespace
     */
    var guild = {};

    guild.CGetGuildList = (function() {

        /**
         * Properties of a CGetGuildList.
         * @memberof guild
         * @interface ICGetGuildList
         */

        /**
         * Constructs a new CGetGuildList.
         * @memberof guild
         * @classdesc Represents a CGetGuildList.
         * @implements ICGetGuildList
         * @constructor
         * @param {guild.ICGetGuildList=} [properties] Properties to set
         */
        function CGetGuildList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CGetGuildList instance using the specified properties.
         * @function create
         * @memberof guild.CGetGuildList
         * @static
         * @param {guild.ICGetGuildList=} [properties] Properties to set
         * @returns {guild.CGetGuildList} CGetGuildList instance
         */
        CGetGuildList.create = function create(properties) {
            return new CGetGuildList(properties);
        };

        /**
         * Encodes the specified CGetGuildList message. Does not implicitly {@link guild.CGetGuildList.verify|verify} messages.
         * @function encode
         * @memberof guild.CGetGuildList
         * @static
         * @param {guild.ICGetGuildList} message CGetGuildList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetGuildList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CGetGuildList message, length delimited. Does not implicitly {@link guild.CGetGuildList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof guild.CGetGuildList
         * @static
         * @param {guild.ICGetGuildList} message CGetGuildList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetGuildList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGetGuildList message from the specified reader or buffer.
         * @function decode
         * @memberof guild.CGetGuildList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {guild.CGetGuildList} CGetGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetGuildList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.guild.CGetGuildList();
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
         * Decodes a CGetGuildList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof guild.CGetGuildList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {guild.CGetGuildList} CGetGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetGuildList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGetGuildList message.
         * @function verify
         * @memberof guild.CGetGuildList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetGuildList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CGetGuildList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof guild.CGetGuildList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {guild.CGetGuildList} CGetGuildList
         */
        CGetGuildList.fromObject = function fromObject(object) {
            if (object instanceof $root.guild.CGetGuildList)
                return object;
            return new $root.guild.CGetGuildList();
        };

        /**
         * Creates a plain object from a CGetGuildList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof guild.CGetGuildList
         * @static
         * @param {guild.CGetGuildList} message CGetGuildList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetGuildList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CGetGuildList to JSON.
         * @function toJSON
         * @memberof guild.CGetGuildList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetGuildList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CGetGuildList
         * @function getTypeUrl
         * @memberof guild.CGetGuildList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGetGuildList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/guild.CGetGuildList";
        };

        return CGetGuildList;
    })();

    guild.SGuildList = (function() {

        /**
         * Properties of a SGuildList.
         * @memberof guild
         * @interface ISGuildList
         * @property {Array.<common.IGuildData>|null} [guilds] SGuildList guilds
         */

        /**
         * Constructs a new SGuildList.
         * @memberof guild
         * @classdesc Represents a SGuildList.
         * @implements ISGuildList
         * @constructor
         * @param {guild.ISGuildList=} [properties] Properties to set
         */
        function SGuildList(properties) {
            this.guilds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGuildList guilds.
         * @member {Array.<common.IGuildData>} guilds
         * @memberof guild.SGuildList
         * @instance
         */
        SGuildList.prototype.guilds = $util.emptyArray;

        /**
         * Creates a new SGuildList instance using the specified properties.
         * @function create
         * @memberof guild.SGuildList
         * @static
         * @param {guild.ISGuildList=} [properties] Properties to set
         * @returns {guild.SGuildList} SGuildList instance
         */
        SGuildList.create = function create(properties) {
            return new SGuildList(properties);
        };

        /**
         * Encodes the specified SGuildList message. Does not implicitly {@link guild.SGuildList.verify|verify} messages.
         * @function encode
         * @memberof guild.SGuildList
         * @static
         * @param {guild.ISGuildList} message SGuildList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGuildList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guilds != null && message.guilds.length)
                for (var i = 0; i < message.guilds.length; ++i)
                    $root.common.GuildData.encode(message.guilds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SGuildList message, length delimited. Does not implicitly {@link guild.SGuildList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof guild.SGuildList
         * @static
         * @param {guild.ISGuildList} message SGuildList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGuildList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGuildList message from the specified reader or buffer.
         * @function decode
         * @memberof guild.SGuildList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {guild.SGuildList} SGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGuildList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.guild.SGuildList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.guilds && message.guilds.length))
                            message.guilds = [];
                        message.guilds.push($root.common.GuildData.decode(reader, reader.uint32()));
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
         * Decodes a SGuildList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof guild.SGuildList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {guild.SGuildList} SGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGuildList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGuildList message.
         * @function verify
         * @memberof guild.SGuildList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGuildList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guilds != null && message.hasOwnProperty("guilds")) {
                if (!Array.isArray(message.guilds))
                    return "guilds: array expected";
                for (var i = 0; i < message.guilds.length; ++i) {
                    var error = $root.common.GuildData.verify(message.guilds[i]);
                    if (error)
                        return "guilds." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SGuildList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof guild.SGuildList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {guild.SGuildList} SGuildList
         */
        SGuildList.fromObject = function fromObject(object) {
            if (object instanceof $root.guild.SGuildList)
                return object;
            var message = new $root.guild.SGuildList();
            if (object.guilds) {
                if (!Array.isArray(object.guilds))
                    throw TypeError(".guild.SGuildList.guilds: array expected");
                message.guilds = [];
                for (var i = 0; i < object.guilds.length; ++i) {
                    if (typeof object.guilds[i] !== "object")
                        throw TypeError(".guild.SGuildList.guilds: object expected");
                    message.guilds[i] = $root.common.GuildData.fromObject(object.guilds[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SGuildList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof guild.SGuildList
         * @static
         * @param {guild.SGuildList} message SGuildList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SGuildList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guilds = [];
            if (message.guilds && message.guilds.length) {
                object.guilds = [];
                for (var j = 0; j < message.guilds.length; ++j)
                    object.guilds[j] = $root.common.GuildData.toObject(message.guilds[j], options);
            }
            return object;
        };

        /**
         * Converts this SGuildList to JSON.
         * @function toJSON
         * @memberof guild.SGuildList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SGuildList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SGuildList
         * @function getTypeUrl
         * @memberof guild.SGuildList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SGuildList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/guild.SGuildList";
        };

        return SGuildList;
    })();

    return guild;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.GuildData = (function() {

        /**
         * Properties of a GuildData.
         * @memberof common
         * @interface IGuildData
         * @property {number|Long|null} [id] GuildData id
         * @property {string|null} [name] GuildData name
         */

        /**
         * Constructs a new GuildData.
         * @memberof common
         * @classdesc Represents a GuildData.
         * @implements IGuildData
         * @constructor
         * @param {common.IGuildData=} [properties] Properties to set
         */
        function GuildData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildData id.
         * @member {number|Long} id
         * @memberof common.GuildData
         * @instance
         */
        GuildData.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GuildData name.
         * @member {string} name
         * @memberof common.GuildData
         * @instance
         */
        GuildData.prototype.name = "";

        /**
         * Creates a new GuildData instance using the specified properties.
         * @function create
         * @memberof common.GuildData
         * @static
         * @param {common.IGuildData=} [properties] Properties to set
         * @returns {common.GuildData} GuildData instance
         */
        GuildData.create = function create(properties) {
            return new GuildData(properties);
        };

        /**
         * Encodes the specified GuildData message. Does not implicitly {@link common.GuildData.verify|verify} messages.
         * @function encode
         * @memberof common.GuildData
         * @static
         * @param {common.IGuildData} message GuildData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified GuildData message, length delimited. Does not implicitly {@link common.GuildData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildData
         * @static
         * @param {common.IGuildData} message GuildData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildData message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildData} GuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildData();
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
                        message.name = reader.string();
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
         * Decodes a GuildData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildData} GuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildData message.
         * @function verify
         * @memberof common.GuildData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a GuildData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildData} GuildData
         */
        GuildData.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildData)
                return object;
            var message = new $root.common.GuildData();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GuildData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildData
         * @static
         * @param {common.GuildData} message GuildData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this GuildData to JSON.
         * @function toJSON
         * @memberof common.GuildData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildData
         * @function getTypeUrl
         * @memberof common.GuildData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildData";
        };

        return GuildData;
    })();

    return common;
})();

module.exports = $root;
