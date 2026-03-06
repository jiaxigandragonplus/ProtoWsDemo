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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

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
            return new $root.guild.SGuildList();
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
        SGuildList.toObject = function toObject() {
            return {};
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

    /**
     * GuildEventType enum.
     * @name common.GuildEventType
     * @enum {number}
     * @property {number} GUILD_EVENT_UNKNOWN=0 GUILD_EVENT_UNKNOWN value
     * @property {number} GUILD_EVENT_CREATE=1 GUILD_EVENT_CREATE value
     * @property {number} GUILD_EVENT_JOIN=2 GUILD_EVENT_JOIN value
     * @property {number} GUILD_EVENT_LEAVE=3 GUILD_EVENT_LEAVE value
     * @property {number} GUILD_EVENT_KICK=4 GUILD_EVENT_KICK value
     * @property {number} GUILD_EVENT_MODIFY_NOTICE=5 GUILD_EVENT_MODIFY_NOTICE value
     * @property {number} GUILD_EVENT_MODIFY_FLAG=6 GUILD_EVENT_MODIFY_FLAG value
     * @property {number} GUILD_EVENT_MODIFY_NAME=7 GUILD_EVENT_MODIFY_NAME value
     * @property {number} GUILD_EVENT_TRANSFER=8 GUILD_EVENT_TRANSFER value
     */
    common.GuildEventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GUILD_EVENT_UNKNOWN"] = 0;
        values[valuesById[1] = "GUILD_EVENT_CREATE"] = 1;
        values[valuesById[2] = "GUILD_EVENT_JOIN"] = 2;
        values[valuesById[3] = "GUILD_EVENT_LEAVE"] = 3;
        values[valuesById[4] = "GUILD_EVENT_KICK"] = 4;
        values[valuesById[5] = "GUILD_EVENT_MODIFY_NOTICE"] = 5;
        values[valuesById[6] = "GUILD_EVENT_MODIFY_FLAG"] = 6;
        values[valuesById[7] = "GUILD_EVENT_MODIFY_NAME"] = 7;
        values[valuesById[8] = "GUILD_EVENT_TRANSFER"] = 8;
        return values;
    })();

    /**
     * GuildMemberType enum.
     * @name common.GuildMemberType
     * @enum {number}
     * @property {number} GUILD_ROLE_NORMAL=0 GUILD_ROLE_NORMAL value
     * @property {number} GUILD_ROLE_ELITE=1 GUILD_ROLE_ELITE value
     * @property {number} GUILD_ROLE_DEPUTY=2 GUILD_ROLE_DEPUTY value
     * @property {number} GUILD_ROLE_LEADER=3 GUILD_ROLE_LEADER value
     */
    common.GuildMemberType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GUILD_ROLE_NORMAL"] = 0;
        values[valuesById[1] = "GUILD_ROLE_ELITE"] = 1;
        values[valuesById[2] = "GUILD_ROLE_DEPUTY"] = 2;
        values[valuesById[3] = "GUILD_ROLE_LEADER"] = 3;
        return values;
    })();

    /**
     * GuildPermissionType enum.
     * @name common.GuildPermissionType
     * @enum {number}
     * @property {number} GUILD_PERMISSION_UNKNOWN=0 GUILD_PERMISSION_UNKNOWN value
     * @property {number} GUILD_PERMISSION_HANDLE_APPLY=1 GUILD_PERMISSION_HANDLE_APPLY value
     * @property {number} GUILD_PERMISSION_LEAVE=2 GUILD_PERMISSION_LEAVE value
     * @property {number} GUILD_PERMISSION_OPEN_SETTING=3 GUILD_PERMISSION_OPEN_SETTING value
     * @property {number} GUILD_PERMISSION_MODIFY_NAME=4 GUILD_PERMISSION_MODIFY_NAME value
     * @property {number} GUILD_PERMISSION_MODIFY_FLAG=5 GUILD_PERMISSION_MODIFY_FLAG value
     * @property {number} GUILD_PERMISSION_MODIFY_NOTICE=6 GUILD_PERMISSION_MODIFY_NOTICE value
     * @property {number} GUILD_PERMISSION_SET_DUTY=7 GUILD_PERMISSION_SET_DUTY value
     * @property {number} GUILD_PERMISSION_TRANSFER_LEADER=8 GUILD_PERMISSION_TRANSFER_LEADER value
     */
    common.GuildPermissionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GUILD_PERMISSION_UNKNOWN"] = 0;
        values[valuesById[1] = "GUILD_PERMISSION_HANDLE_APPLY"] = 1;
        values[valuesById[2] = "GUILD_PERMISSION_LEAVE"] = 2;
        values[valuesById[3] = "GUILD_PERMISSION_OPEN_SETTING"] = 3;
        values[valuesById[4] = "GUILD_PERMISSION_MODIFY_NAME"] = 4;
        values[valuesById[5] = "GUILD_PERMISSION_MODIFY_FLAG"] = 5;
        values[valuesById[6] = "GUILD_PERMISSION_MODIFY_NOTICE"] = 6;
        values[valuesById[7] = "GUILD_PERMISSION_SET_DUTY"] = 7;
        values[valuesById[8] = "GUILD_PERMISSION_TRANSFER_LEADER"] = 8;
        return values;
    })();

    common.GuildUserInfo = (function() {

        /**
         * Properties of a GuildUserInfo.
         * @memberof common
         * @interface IGuildUserInfo
         * @property {string|null} [uid] GuildUserInfo uid
         * @property {string|null} [name] GuildUserInfo name
         * @property {number|null} [avatar] GuildUserInfo avatar
         * @property {string|null} [country] GuildUserInfo country
         * @property {number|null} [level] GuildUserInfo level
         * @property {number|null} [cups] GuildUserInfo cups
         */

        /**
         * Constructs a new GuildUserInfo.
         * @memberof common
         * @classdesc Represents a GuildUserInfo.
         * @implements IGuildUserInfo
         * @constructor
         * @param {common.IGuildUserInfo=} [properties] Properties to set
         */
        function GuildUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildUserInfo uid.
         * @member {string} uid
         * @memberof common.GuildUserInfo
         * @instance
         */
        GuildUserInfo.prototype.uid = "";

        /**
         * GuildUserInfo name.
         * @member {string} name
         * @memberof common.GuildUserInfo
         * @instance
         */
        GuildUserInfo.prototype.name = "";

        /**
         * GuildUserInfo avatar.
         * @member {number} avatar
         * @memberof common.GuildUserInfo
         * @instance
         */
        GuildUserInfo.prototype.avatar = 0;

        /**
         * GuildUserInfo country.
         * @member {string} country
         * @memberof common.GuildUserInfo
         * @instance
         */
        GuildUserInfo.prototype.country = "";

        /**
         * GuildUserInfo level.
         * @member {number} level
         * @memberof common.GuildUserInfo
         * @instance
         */
        GuildUserInfo.prototype.level = 0;

        /**
         * GuildUserInfo cups.
         * @member {number} cups
         * @memberof common.GuildUserInfo
         * @instance
         */
        GuildUserInfo.prototype.cups = 0;

        /**
         * Creates a new GuildUserInfo instance using the specified properties.
         * @function create
         * @memberof common.GuildUserInfo
         * @static
         * @param {common.IGuildUserInfo=} [properties] Properties to set
         * @returns {common.GuildUserInfo} GuildUserInfo instance
         */
        GuildUserInfo.create = function create(properties) {
            return new GuildUserInfo(properties);
        };

        /**
         * Encodes the specified GuildUserInfo message. Does not implicitly {@link common.GuildUserInfo.verify|verify} messages.
         * @function encode
         * @memberof common.GuildUserInfo
         * @static
         * @param {common.IGuildUserInfo} message GuildUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.avatar);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.country);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.level);
            if (message.cups != null && Object.hasOwnProperty.call(message, "cups"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cups);
            return writer;
        };

        /**
         * Encodes the specified GuildUserInfo message, length delimited. Does not implicitly {@link common.GuildUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildUserInfo
         * @static
         * @param {common.IGuildUserInfo} message GuildUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildUserInfo} GuildUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildUserInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildUserInfo();
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
                        message.avatar = reader.int32();
                        break;
                    }
                case 4: {
                        message.country = reader.string();
                        break;
                    }
                case 5: {
                        message.level = reader.int32();
                        break;
                    }
                case 6: {
                        message.cups = reader.int32();
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
         * Decodes a GuildUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildUserInfo} GuildUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildUserInfo message.
         * @function verify
         * @memberof common.GuildUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isInteger(message.avatar))
                    return "avatar: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.cups != null && message.hasOwnProperty("cups"))
                if (!$util.isInteger(message.cups))
                    return "cups: integer expected";
            return null;
        };

        /**
         * Creates a GuildUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildUserInfo} GuildUserInfo
         */
        GuildUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildUserInfo)
                return object;
            var message = new $root.common.GuildUserInfo();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatar != null)
                message.avatar = object.avatar | 0;
            if (object.country != null)
                message.country = String(object.country);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.cups != null)
                message.cups = object.cups | 0;
            return message;
        };

        /**
         * Creates a plain object from a GuildUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildUserInfo
         * @static
         * @param {common.GuildUserInfo} message GuildUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.name = "";
                object.avatar = 0;
                object.country = "";
                object.level = 0;
                object.cups = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.cups != null && message.hasOwnProperty("cups"))
                object.cups = message.cups;
            return object;
        };

        /**
         * Converts this GuildUserInfo to JSON.
         * @function toJSON
         * @memberof common.GuildUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildUserInfo
         * @function getTypeUrl
         * @memberof common.GuildUserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildUserInfo";
        };

        return GuildUserInfo;
    })();

    common.GuildMemberInfo = (function() {

        /**
         * Properties of a GuildMemberInfo.
         * @memberof common
         * @interface IGuildMemberInfo
         * @property {string|null} [uid] GuildMemberInfo uid
         * @property {string|null} [name] GuildMemberInfo name
         * @property {string|null} [avatar] GuildMemberInfo avatar
         * @property {number|null} [level] GuildMemberInfo level
         * @property {string|null} [country] GuildMemberInfo country
         * @property {number|null} [cups] GuildMemberInfo cups
         * @property {common.GuildMemberType|null} [role] GuildMemberInfo role
         * @property {number|null} [joinTime] GuildMemberInfo joinTime
         * @property {number|null} [offlineTime] GuildMemberInfo offlineTime
         * @property {number|null} [weekContribute] GuildMemberInfo weekContribute
         * @property {string|null} [extra] GuildMemberInfo extra
         */

        /**
         * Constructs a new GuildMemberInfo.
         * @memberof common
         * @classdesc Represents a GuildMemberInfo.
         * @implements IGuildMemberInfo
         * @constructor
         * @param {common.IGuildMemberInfo=} [properties] Properties to set
         */
        function GuildMemberInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildMemberInfo uid.
         * @member {string} uid
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.uid = "";

        /**
         * GuildMemberInfo name.
         * @member {string} name
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.name = "";

        /**
         * GuildMemberInfo avatar.
         * @member {string} avatar
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.avatar = "";

        /**
         * GuildMemberInfo level.
         * @member {number} level
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.level = 0;

        /**
         * GuildMemberInfo country.
         * @member {string} country
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.country = "";

        /**
         * GuildMemberInfo cups.
         * @member {number} cups
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.cups = 0;

        /**
         * GuildMemberInfo role.
         * @member {common.GuildMemberType} role
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.role = 0;

        /**
         * GuildMemberInfo joinTime.
         * @member {number} joinTime
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.joinTime = 0;

        /**
         * GuildMemberInfo offlineTime.
         * @member {number} offlineTime
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.offlineTime = 0;

        /**
         * GuildMemberInfo weekContribute.
         * @member {number} weekContribute
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.weekContribute = 0;

        /**
         * GuildMemberInfo extra.
         * @member {string} extra
         * @memberof common.GuildMemberInfo
         * @instance
         */
        GuildMemberInfo.prototype.extra = "";

        /**
         * Creates a new GuildMemberInfo instance using the specified properties.
         * @function create
         * @memberof common.GuildMemberInfo
         * @static
         * @param {common.IGuildMemberInfo=} [properties] Properties to set
         * @returns {common.GuildMemberInfo} GuildMemberInfo instance
         */
        GuildMemberInfo.create = function create(properties) {
            return new GuildMemberInfo(properties);
        };

        /**
         * Encodes the specified GuildMemberInfo message. Does not implicitly {@link common.GuildMemberInfo.verify|verify} messages.
         * @function encode
         * @memberof common.GuildMemberInfo
         * @static
         * @param {common.IGuildMemberInfo} message GuildMemberInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildMemberInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
            if (message.cups != null && Object.hasOwnProperty.call(message, "cups"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cups);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.role);
            if (message.joinTime != null && Object.hasOwnProperty.call(message, "joinTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.joinTime);
            if (message.offlineTime != null && Object.hasOwnProperty.call(message, "offlineTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.offlineTime);
            if (message.weekContribute != null && Object.hasOwnProperty.call(message, "weekContribute"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.weekContribute);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified GuildMemberInfo message, length delimited. Does not implicitly {@link common.GuildMemberInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildMemberInfo
         * @static
         * @param {common.IGuildMemberInfo} message GuildMemberInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildMemberInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildMemberInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildMemberInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildMemberInfo} GuildMemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildMemberInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildMemberInfo();
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
                        message.level = reader.int32();
                        break;
                    }
                case 5: {
                        message.country = reader.string();
                        break;
                    }
                case 6: {
                        message.cups = reader.int32();
                        break;
                    }
                case 7: {
                        message.role = reader.int32();
                        break;
                    }
                case 8: {
                        message.joinTime = reader.uint32();
                        break;
                    }
                case 9: {
                        message.offlineTime = reader.uint32();
                        break;
                    }
                case 10: {
                        message.weekContribute = reader.int32();
                        break;
                    }
                case 11: {
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
         * Decodes a GuildMemberInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildMemberInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildMemberInfo} GuildMemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildMemberInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildMemberInfo message.
         * @function verify
         * @memberof common.GuildMemberInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildMemberInfo.verify = function verify(message) {
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
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.cups != null && message.hasOwnProperty("cups"))
                if (!$util.isInteger(message.cups))
                    return "cups: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (!$util.isInteger(message.joinTime))
                    return "joinTime: integer expected";
            if (message.offlineTime != null && message.hasOwnProperty("offlineTime"))
                if (!$util.isInteger(message.offlineTime))
                    return "offlineTime: integer expected";
            if (message.weekContribute != null && message.hasOwnProperty("weekContribute"))
                if (!$util.isInteger(message.weekContribute))
                    return "weekContribute: integer expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a GuildMemberInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildMemberInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildMemberInfo} GuildMemberInfo
         */
        GuildMemberInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildMemberInfo)
                return object;
            var message = new $root.common.GuildMemberInfo();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.country != null)
                message.country = String(object.country);
            if (object.cups != null)
                message.cups = object.cups | 0;
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "GUILD_ROLE_NORMAL":
            case 0:
                message.role = 0;
                break;
            case "GUILD_ROLE_ELITE":
            case 1:
                message.role = 1;
                break;
            case "GUILD_ROLE_DEPUTY":
            case 2:
                message.role = 2;
                break;
            case "GUILD_ROLE_LEADER":
            case 3:
                message.role = 3;
                break;
            }
            if (object.joinTime != null)
                message.joinTime = object.joinTime >>> 0;
            if (object.offlineTime != null)
                message.offlineTime = object.offlineTime >>> 0;
            if (object.weekContribute != null)
                message.weekContribute = object.weekContribute | 0;
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a GuildMemberInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildMemberInfo
         * @static
         * @param {common.GuildMemberInfo} message GuildMemberInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildMemberInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.name = "";
                object.avatar = "";
                object.level = 0;
                object.country = "";
                object.cups = 0;
                object.role = options.enums === String ? "GUILD_ROLE_NORMAL" : 0;
                object.joinTime = 0;
                object.offlineTime = 0;
                object.weekContribute = 0;
                object.extra = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.cups != null && message.hasOwnProperty("cups"))
                object.cups = message.cups;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.common.GuildMemberType[message.role] === undefined ? message.role : $root.common.GuildMemberType[message.role] : message.role;
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                object.joinTime = message.joinTime;
            if (message.offlineTime != null && message.hasOwnProperty("offlineTime"))
                object.offlineTime = message.offlineTime;
            if (message.weekContribute != null && message.hasOwnProperty("weekContribute"))
                object.weekContribute = message.weekContribute;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this GuildMemberInfo to JSON.
         * @function toJSON
         * @memberof common.GuildMemberInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildMemberInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildMemberInfo
         * @function getTypeUrl
         * @memberof common.GuildMemberInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildMemberInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildMemberInfo";
        };

        return GuildMemberInfo;
    })();

    common.GuildApplyInfo = (function() {

        /**
         * Properties of a GuildApplyInfo.
         * @memberof common
         * @interface IGuildApplyInfo
         * @property {string|null} [uid] GuildApplyInfo uid
         * @property {string|null} [name] GuildApplyInfo name
         * @property {number|null} [avatar] GuildApplyInfo avatar
         * @property {number|null} [level] GuildApplyInfo level
         * @property {string|null} [country] GuildApplyInfo country
         * @property {string|null} [msg] GuildApplyInfo msg
         * @property {number|null} [applyTime] GuildApplyInfo applyTime
         * @property {number|null} [cups] GuildApplyInfo cups
         */

        /**
         * Constructs a new GuildApplyInfo.
         * @memberof common
         * @classdesc Represents a GuildApplyInfo.
         * @implements IGuildApplyInfo
         * @constructor
         * @param {common.IGuildApplyInfo=} [properties] Properties to set
         */
        function GuildApplyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildApplyInfo uid.
         * @member {string} uid
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.uid = "";

        /**
         * GuildApplyInfo name.
         * @member {string} name
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.name = "";

        /**
         * GuildApplyInfo avatar.
         * @member {number} avatar
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.avatar = 0;

        /**
         * GuildApplyInfo level.
         * @member {number} level
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.level = 0;

        /**
         * GuildApplyInfo country.
         * @member {string} country
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.country = "";

        /**
         * GuildApplyInfo msg.
         * @member {string} msg
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.msg = "";

        /**
         * GuildApplyInfo applyTime.
         * @member {number} applyTime
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.applyTime = 0;

        /**
         * GuildApplyInfo cups.
         * @member {number} cups
         * @memberof common.GuildApplyInfo
         * @instance
         */
        GuildApplyInfo.prototype.cups = 0;

        /**
         * Creates a new GuildApplyInfo instance using the specified properties.
         * @function create
         * @memberof common.GuildApplyInfo
         * @static
         * @param {common.IGuildApplyInfo=} [properties] Properties to set
         * @returns {common.GuildApplyInfo} GuildApplyInfo instance
         */
        GuildApplyInfo.create = function create(properties) {
            return new GuildApplyInfo(properties);
        };

        /**
         * Encodes the specified GuildApplyInfo message. Does not implicitly {@link common.GuildApplyInfo.verify|verify} messages.
         * @function encode
         * @memberof common.GuildApplyInfo
         * @static
         * @param {common.IGuildApplyInfo} message GuildApplyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildApplyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.avatar);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.msg);
            if (message.applyTime != null && Object.hasOwnProperty.call(message, "applyTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.applyTime);
            if (message.cups != null && Object.hasOwnProperty.call(message, "cups"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cups);
            return writer;
        };

        /**
         * Encodes the specified GuildApplyInfo message, length delimited. Does not implicitly {@link common.GuildApplyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildApplyInfo
         * @static
         * @param {common.IGuildApplyInfo} message GuildApplyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildApplyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildApplyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildApplyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildApplyInfo} GuildApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildApplyInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildApplyInfo();
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
                        message.msg = reader.string();
                        break;
                    }
                case 7: {
                        message.applyTime = reader.uint32();
                        break;
                    }
                case 8: {
                        message.cups = reader.int32();
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
         * Decodes a GuildApplyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildApplyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildApplyInfo} GuildApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildApplyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildApplyInfo message.
         * @function verify
         * @memberof common.GuildApplyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildApplyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isInteger(message.avatar))
                    return "avatar: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.cups != null && message.hasOwnProperty("cups"))
                if (!$util.isInteger(message.cups))
                    return "cups: integer expected";
            return null;
        };

        /**
         * Creates a GuildApplyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildApplyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildApplyInfo} GuildApplyInfo
         */
        GuildApplyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildApplyInfo)
                return object;
            var message = new $root.common.GuildApplyInfo();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatar != null)
                message.avatar = object.avatar | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.country != null)
                message.country = String(object.country);
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.applyTime != null)
                message.applyTime = object.applyTime >>> 0;
            if (object.cups != null)
                message.cups = object.cups | 0;
            return message;
        };

        /**
         * Creates a plain object from a GuildApplyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildApplyInfo
         * @static
         * @param {common.GuildApplyInfo} message GuildApplyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildApplyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.name = "";
                object.avatar = 0;
                object.level = 0;
                object.country = "";
                object.msg = "";
                object.applyTime = 0;
                object.cups = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.cups != null && message.hasOwnProperty("cups"))
                object.cups = message.cups;
            return object;
        };

        /**
         * Converts this GuildApplyInfo to JSON.
         * @function toJSON
         * @memberof common.GuildApplyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildApplyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildApplyInfo
         * @function getTypeUrl
         * @memberof common.GuildApplyInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildApplyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildApplyInfo";
        };

        return GuildApplyInfo;
    })();

    common.GuildSimpleInfo = (function() {

        /**
         * Properties of a GuildSimpleInfo.
         * @memberof common
         * @interface IGuildSimpleInfo
         * @property {string|null} [gid] GuildSimpleInfo gid
         * @property {string|null} [name] GuildSimpleInfo name
         * @property {number|null} [flag] GuildSimpleInfo flag
         * @property {string|null} [location] GuildSimpleInfo location
         * @property {number|null} [joinType] GuildSimpleInfo joinType
         * @property {number|null} [requireCups] GuildSimpleInfo requireCups
         */

        /**
         * Constructs a new GuildSimpleInfo.
         * @memberof common
         * @classdesc Represents a GuildSimpleInfo.
         * @implements IGuildSimpleInfo
         * @constructor
         * @param {common.IGuildSimpleInfo=} [properties] Properties to set
         */
        function GuildSimpleInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildSimpleInfo gid.
         * @member {string} gid
         * @memberof common.GuildSimpleInfo
         * @instance
         */
        GuildSimpleInfo.prototype.gid = "";

        /**
         * GuildSimpleInfo name.
         * @member {string} name
         * @memberof common.GuildSimpleInfo
         * @instance
         */
        GuildSimpleInfo.prototype.name = "";

        /**
         * GuildSimpleInfo flag.
         * @member {number} flag
         * @memberof common.GuildSimpleInfo
         * @instance
         */
        GuildSimpleInfo.prototype.flag = 0;

        /**
         * GuildSimpleInfo location.
         * @member {string} location
         * @memberof common.GuildSimpleInfo
         * @instance
         */
        GuildSimpleInfo.prototype.location = "";

        /**
         * GuildSimpleInfo joinType.
         * @member {number} joinType
         * @memberof common.GuildSimpleInfo
         * @instance
         */
        GuildSimpleInfo.prototype.joinType = 0;

        /**
         * GuildSimpleInfo requireCups.
         * @member {number} requireCups
         * @memberof common.GuildSimpleInfo
         * @instance
         */
        GuildSimpleInfo.prototype.requireCups = 0;

        /**
         * Creates a new GuildSimpleInfo instance using the specified properties.
         * @function create
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {common.IGuildSimpleInfo=} [properties] Properties to set
         * @returns {common.GuildSimpleInfo} GuildSimpleInfo instance
         */
        GuildSimpleInfo.create = function create(properties) {
            return new GuildSimpleInfo(properties);
        };

        /**
         * Encodes the specified GuildSimpleInfo message. Does not implicitly {@link common.GuildSimpleInfo.verify|verify} messages.
         * @function encode
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {common.IGuildSimpleInfo} message GuildSimpleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildSimpleInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gid != null && Object.hasOwnProperty.call(message, "gid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.flag);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.location);
            if (message.joinType != null && Object.hasOwnProperty.call(message, "joinType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.joinType);
            if (message.requireCups != null && Object.hasOwnProperty.call(message, "requireCups"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.requireCups);
            return writer;
        };

        /**
         * Encodes the specified GuildSimpleInfo message, length delimited. Does not implicitly {@link common.GuildSimpleInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {common.IGuildSimpleInfo} message GuildSimpleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildSimpleInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildSimpleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildSimpleInfo} GuildSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildSimpleInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildSimpleInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gid = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.flag = reader.uint32();
                        break;
                    }
                case 4: {
                        message.location = reader.string();
                        break;
                    }
                case 5: {
                        message.joinType = reader.int32();
                        break;
                    }
                case 6: {
                        message.requireCups = reader.int32();
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
         * Decodes a GuildSimpleInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildSimpleInfo} GuildSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildSimpleInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildSimpleInfo message.
         * @function verify
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildSimpleInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isString(message.gid))
                    return "gid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (!$util.isInteger(message.flag))
                    return "flag: integer expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.joinType != null && message.hasOwnProperty("joinType"))
                if (!$util.isInteger(message.joinType))
                    return "joinType: integer expected";
            if (message.requireCups != null && message.hasOwnProperty("requireCups"))
                if (!$util.isInteger(message.requireCups))
                    return "requireCups: integer expected";
            return null;
        };

        /**
         * Creates a GuildSimpleInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildSimpleInfo} GuildSimpleInfo
         */
        GuildSimpleInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildSimpleInfo)
                return object;
            var message = new $root.common.GuildSimpleInfo();
            if (object.gid != null)
                message.gid = String(object.gid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.flag != null)
                message.flag = object.flag >>> 0;
            if (object.location != null)
                message.location = String(object.location);
            if (object.joinType != null)
                message.joinType = object.joinType | 0;
            if (object.requireCups != null)
                message.requireCups = object.requireCups | 0;
            return message;
        };

        /**
         * Creates a plain object from a GuildSimpleInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {common.GuildSimpleInfo} message GuildSimpleInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildSimpleInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gid = "";
                object.name = "";
                object.flag = 0;
                object.location = "";
                object.joinType = 0;
                object.requireCups = 0;
            }
            if (message.gid != null && message.hasOwnProperty("gid"))
                object.gid = message.gid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.joinType != null && message.hasOwnProperty("joinType"))
                object.joinType = message.joinType;
            if (message.requireCups != null && message.hasOwnProperty("requireCups"))
                object.requireCups = message.requireCups;
            return object;
        };

        /**
         * Converts this GuildSimpleInfo to JSON.
         * @function toJSON
         * @memberof common.GuildSimpleInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildSimpleInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildSimpleInfo
         * @function getTypeUrl
         * @memberof common.GuildSimpleInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildSimpleInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildSimpleInfo";
        };

        return GuildSimpleInfo;
    })();

    common.GuildInfo = (function() {

        /**
         * Properties of a GuildInfo.
         * @memberof common
         * @interface IGuildInfo
         * @property {string|null} [gid] GuildInfo gid
         * @property {string|null} [name] GuildInfo name
         * @property {number|null} [flag] GuildInfo flag
         * @property {string|null} [location] GuildInfo location
         * @property {number|null} [joinType] GuildInfo joinType
         * @property {number|null} [requireCups] GuildInfo requireCups
         * @property {string|null} [notice] GuildInfo notice
         * @property {number|null} [weekContribute] GuildInfo weekContribute
         * @property {number|null} [totalCups] GuildInfo totalCups
         * @property {number|Long|null} [offlineTimestamp] GuildInfo offlineTimestamp
         * @property {string|null} [leaderId] GuildInfo leaderId
         * @property {Object.<string,common.IGuildMemberInfo>|null} [members] GuildInfo members
         */

        /**
         * Constructs a new GuildInfo.
         * @memberof common
         * @classdesc Represents a GuildInfo.
         * @implements IGuildInfo
         * @constructor
         * @param {common.IGuildInfo=} [properties] Properties to set
         */
        function GuildInfo(properties) {
            this.members = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildInfo gid.
         * @member {string} gid
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.gid = "";

        /**
         * GuildInfo name.
         * @member {string} name
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.name = "";

        /**
         * GuildInfo flag.
         * @member {number} flag
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.flag = 0;

        /**
         * GuildInfo location.
         * @member {string} location
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.location = "";

        /**
         * GuildInfo joinType.
         * @member {number} joinType
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.joinType = 0;

        /**
         * GuildInfo requireCups.
         * @member {number} requireCups
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.requireCups = 0;

        /**
         * GuildInfo notice.
         * @member {string} notice
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.notice = "";

        /**
         * GuildInfo weekContribute.
         * @member {number} weekContribute
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.weekContribute = 0;

        /**
         * GuildInfo totalCups.
         * @member {number} totalCups
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.totalCups = 0;

        /**
         * GuildInfo offlineTimestamp.
         * @member {number|Long} offlineTimestamp
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.offlineTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GuildInfo leaderId.
         * @member {string} leaderId
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.leaderId = "";

        /**
         * GuildInfo members.
         * @member {Object.<string,common.IGuildMemberInfo>} members
         * @memberof common.GuildInfo
         * @instance
         */
        GuildInfo.prototype.members = $util.emptyObject;

        /**
         * Creates a new GuildInfo instance using the specified properties.
         * @function create
         * @memberof common.GuildInfo
         * @static
         * @param {common.IGuildInfo=} [properties] Properties to set
         * @returns {common.GuildInfo} GuildInfo instance
         */
        GuildInfo.create = function create(properties) {
            return new GuildInfo(properties);
        };

        /**
         * Encodes the specified GuildInfo message. Does not implicitly {@link common.GuildInfo.verify|verify} messages.
         * @function encode
         * @memberof common.GuildInfo
         * @static
         * @param {common.IGuildInfo} message GuildInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gid != null && Object.hasOwnProperty.call(message, "gid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.flag);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.location);
            if (message.joinType != null && Object.hasOwnProperty.call(message, "joinType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.joinType);
            if (message.requireCups != null && Object.hasOwnProperty.call(message, "requireCups"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.requireCups);
            if (message.notice != null && Object.hasOwnProperty.call(message, "notice"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.notice);
            if (message.weekContribute != null && Object.hasOwnProperty.call(message, "weekContribute"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.weekContribute);
            if (message.totalCups != null && Object.hasOwnProperty.call(message, "totalCups"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.totalCups);
            if (message.offlineTimestamp != null && Object.hasOwnProperty.call(message, "offlineTimestamp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.offlineTimestamp);
            if (message.leaderId != null && Object.hasOwnProperty.call(message, "leaderId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.leaderId);
            if (message.members != null && Object.hasOwnProperty.call(message, "members"))
                for (var keys = Object.keys(message.members), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.common.GuildMemberInfo.encode(message.members[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GuildInfo message, length delimited. Does not implicitly {@link common.GuildInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildInfo
         * @static
         * @param {common.IGuildInfo} message GuildInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildInfo} GuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gid = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.flag = reader.uint32();
                        break;
                    }
                case 4: {
                        message.location = reader.string();
                        break;
                    }
                case 5: {
                        message.joinType = reader.int32();
                        break;
                    }
                case 6: {
                        message.requireCups = reader.int32();
                        break;
                    }
                case 7: {
                        message.notice = reader.string();
                        break;
                    }
                case 8: {
                        message.weekContribute = reader.int32();
                        break;
                    }
                case 9: {
                        message.totalCups = reader.int32();
                        break;
                    }
                case 10: {
                        message.offlineTimestamp = reader.int64();
                        break;
                    }
                case 11: {
                        message.leaderId = reader.string();
                        break;
                    }
                case 12: {
                        if (message.members === $util.emptyObject)
                            message.members = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.common.GuildMemberInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.members[key] = value;
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
         * Decodes a GuildInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildInfo} GuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildInfo message.
         * @function verify
         * @memberof common.GuildInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isString(message.gid))
                    return "gid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (!$util.isInteger(message.flag))
                    return "flag: integer expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.joinType != null && message.hasOwnProperty("joinType"))
                if (!$util.isInteger(message.joinType))
                    return "joinType: integer expected";
            if (message.requireCups != null && message.hasOwnProperty("requireCups"))
                if (!$util.isInteger(message.requireCups))
                    return "requireCups: integer expected";
            if (message.notice != null && message.hasOwnProperty("notice"))
                if (!$util.isString(message.notice))
                    return "notice: string expected";
            if (message.weekContribute != null && message.hasOwnProperty("weekContribute"))
                if (!$util.isInteger(message.weekContribute))
                    return "weekContribute: integer expected";
            if (message.totalCups != null && message.hasOwnProperty("totalCups"))
                if (!$util.isInteger(message.totalCups))
                    return "totalCups: integer expected";
            if (message.offlineTimestamp != null && message.hasOwnProperty("offlineTimestamp"))
                if (!$util.isInteger(message.offlineTimestamp) && !(message.offlineTimestamp && $util.isInteger(message.offlineTimestamp.low) && $util.isInteger(message.offlineTimestamp.high)))
                    return "offlineTimestamp: integer|Long expected";
            if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                if (!$util.isString(message.leaderId))
                    return "leaderId: string expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!$util.isObject(message.members))
                    return "members: object expected";
                var key = Object.keys(message.members);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.common.GuildMemberInfo.verify(message.members[key[i]]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GuildInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildInfo} GuildInfo
         */
        GuildInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildInfo)
                return object;
            var message = new $root.common.GuildInfo();
            if (object.gid != null)
                message.gid = String(object.gid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.flag != null)
                message.flag = object.flag >>> 0;
            if (object.location != null)
                message.location = String(object.location);
            if (object.joinType != null)
                message.joinType = object.joinType | 0;
            if (object.requireCups != null)
                message.requireCups = object.requireCups | 0;
            if (object.notice != null)
                message.notice = String(object.notice);
            if (object.weekContribute != null)
                message.weekContribute = object.weekContribute | 0;
            if (object.totalCups != null)
                message.totalCups = object.totalCups | 0;
            if (object.offlineTimestamp != null)
                if ($util.Long)
                    (message.offlineTimestamp = $util.Long.fromValue(object.offlineTimestamp)).unsigned = false;
                else if (typeof object.offlineTimestamp === "string")
                    message.offlineTimestamp = parseInt(object.offlineTimestamp, 10);
                else if (typeof object.offlineTimestamp === "number")
                    message.offlineTimestamp = object.offlineTimestamp;
                else if (typeof object.offlineTimestamp === "object")
                    message.offlineTimestamp = new $util.LongBits(object.offlineTimestamp.low >>> 0, object.offlineTimestamp.high >>> 0).toNumber();
            if (object.leaderId != null)
                message.leaderId = String(object.leaderId);
            if (object.members) {
                if (typeof object.members !== "object")
                    throw TypeError(".common.GuildInfo.members: object expected");
                message.members = {};
                for (var keys = Object.keys(object.members), i = 0; i < keys.length; ++i) {
                    if (typeof object.members[keys[i]] !== "object")
                        throw TypeError(".common.GuildInfo.members: object expected");
                    message.members[keys[i]] = $root.common.GuildMemberInfo.fromObject(object.members[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GuildInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildInfo
         * @static
         * @param {common.GuildInfo} message GuildInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.members = {};
            if (options.defaults) {
                object.gid = "";
                object.name = "";
                object.flag = 0;
                object.location = "";
                object.joinType = 0;
                object.requireCups = 0;
                object.notice = "";
                object.weekContribute = 0;
                object.totalCups = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.offlineTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.offlineTimestamp = options.longs === String ? "0" : 0;
                object.leaderId = "";
            }
            if (message.gid != null && message.hasOwnProperty("gid"))
                object.gid = message.gid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.joinType != null && message.hasOwnProperty("joinType"))
                object.joinType = message.joinType;
            if (message.requireCups != null && message.hasOwnProperty("requireCups"))
                object.requireCups = message.requireCups;
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = message.notice;
            if (message.weekContribute != null && message.hasOwnProperty("weekContribute"))
                object.weekContribute = message.weekContribute;
            if (message.totalCups != null && message.hasOwnProperty("totalCups"))
                object.totalCups = message.totalCups;
            if (message.offlineTimestamp != null && message.hasOwnProperty("offlineTimestamp"))
                if (typeof message.offlineTimestamp === "number")
                    object.offlineTimestamp = options.longs === String ? String(message.offlineTimestamp) : message.offlineTimestamp;
                else
                    object.offlineTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.offlineTimestamp) : options.longs === Number ? new $util.LongBits(message.offlineTimestamp.low >>> 0, message.offlineTimestamp.high >>> 0).toNumber() : message.offlineTimestamp;
            if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                object.leaderId = message.leaderId;
            var keys2;
            if (message.members && (keys2 = Object.keys(message.members)).length) {
                object.members = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.members[keys2[j]] = $root.common.GuildMemberInfo.toObject(message.members[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this GuildInfo to JSON.
         * @function toJSON
         * @memberof common.GuildInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildInfo
         * @function getTypeUrl
         * @memberof common.GuildInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildInfo";
        };

        return GuildInfo;
    })();

    common.GuildLogInfo = (function() {

        /**
         * Properties of a GuildLogInfo.
         * @memberof common
         * @interface IGuildLogInfo
         * @property {number|null} [event] GuildLogInfo event
         * @property {Array.<string>|null} [params] GuildLogInfo params
         */

        /**
         * Constructs a new GuildLogInfo.
         * @memberof common
         * @classdesc Represents a GuildLogInfo.
         * @implements IGuildLogInfo
         * @constructor
         * @param {common.IGuildLogInfo=} [properties] Properties to set
         */
        function GuildLogInfo(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildLogInfo event.
         * @member {number} event
         * @memberof common.GuildLogInfo
         * @instance
         */
        GuildLogInfo.prototype.event = 0;

        /**
         * GuildLogInfo params.
         * @member {Array.<string>} params
         * @memberof common.GuildLogInfo
         * @instance
         */
        GuildLogInfo.prototype.params = $util.emptyArray;

        /**
         * Creates a new GuildLogInfo instance using the specified properties.
         * @function create
         * @memberof common.GuildLogInfo
         * @static
         * @param {common.IGuildLogInfo=} [properties] Properties to set
         * @returns {common.GuildLogInfo} GuildLogInfo instance
         */
        GuildLogInfo.create = function create(properties) {
            return new GuildLogInfo(properties);
        };

        /**
         * Encodes the specified GuildLogInfo message. Does not implicitly {@link common.GuildLogInfo.verify|verify} messages.
         * @function encode
         * @memberof common.GuildLogInfo
         * @static
         * @param {common.IGuildLogInfo} message GuildLogInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildLogInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.params[i]);
            return writer;
        };

        /**
         * Encodes the specified GuildLogInfo message, length delimited. Does not implicitly {@link common.GuildLogInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GuildLogInfo
         * @static
         * @param {common.IGuildLogInfo} message GuildLogInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildLogInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildLogInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.GuildLogInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GuildLogInfo} GuildLogInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildLogInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GuildLogInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.event = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.params && message.params.length))
                            message.params = [];
                        message.params.push(reader.string());
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
         * Decodes a GuildLogInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GuildLogInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GuildLogInfo} GuildLogInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildLogInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildLogInfo message.
         * @function verify
         * @memberof common.GuildLogInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildLogInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                if (!$util.isInteger(message.event))
                    return "event: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isString(message.params[i]))
                        return "params: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GuildLogInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GuildLogInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GuildLogInfo} GuildLogInfo
         */
        GuildLogInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GuildLogInfo)
                return object;
            var message = new $root.common.GuildLogInfo();
            if (object.event != null)
                message.event = object.event | 0;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".common.GuildLogInfo.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i)
                    message.params[i] = String(object.params[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GuildLogInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GuildLogInfo
         * @static
         * @param {common.GuildLogInfo} message GuildLogInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildLogInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (options.defaults)
                object.event = 0;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = message.params[j];
            }
            return object;
        };

        /**
         * Converts this GuildLogInfo to JSON.
         * @function toJSON
         * @memberof common.GuildLogInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildLogInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildLogInfo
         * @function getTypeUrl
         * @memberof common.GuildLogInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildLogInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.GuildLogInfo";
        };

        return GuildLogInfo;
    })();

    return common;
})();

module.exports = $root;
