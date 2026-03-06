/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mail = (function() {

    /**
     * Namespace mail.
     * @exports mail
     * @namespace
     */
    var mail = {};

    mail.CGetMailList = (function() {

        /**
         * Properties of a CGetMailList.
         * @memberof mail
         * @interface ICGetMailList
         * @property {Array.<number>|null} [mailIds] CGetMailList mailIds
         */

        /**
         * Constructs a new CGetMailList.
         * @memberof mail
         * @classdesc Represents a CGetMailList.
         * @implements ICGetMailList
         * @constructor
         * @param {mail.ICGetMailList=} [properties] Properties to set
         */
        function CGetMailList(properties) {
            this.mailIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CGetMailList mailIds.
         * @member {Array.<number>} mailIds
         * @memberof mail.CGetMailList
         * @instance
         */
        CGetMailList.prototype.mailIds = $util.emptyArray;

        /**
         * Creates a new CGetMailList instance using the specified properties.
         * @function create
         * @memberof mail.CGetMailList
         * @static
         * @param {mail.ICGetMailList=} [properties] Properties to set
         * @returns {mail.CGetMailList} CGetMailList instance
         */
        CGetMailList.create = function create(properties) {
            return new CGetMailList(properties);
        };

        /**
         * Encodes the specified CGetMailList message. Does not implicitly {@link mail.CGetMailList.verify|verify} messages.
         * @function encode
         * @memberof mail.CGetMailList
         * @static
         * @param {mail.ICGetMailList} message CGetMailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetMailList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailIds != null && message.mailIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.mailIds.length; ++i)
                    writer.uint32(message.mailIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified CGetMailList message, length delimited. Does not implicitly {@link mail.CGetMailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.CGetMailList
         * @static
         * @param {mail.ICGetMailList} message CGetMailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetMailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGetMailList message from the specified reader or buffer.
         * @function decode
         * @memberof mail.CGetMailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.CGetMailList} CGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetMailList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.CGetMailList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.mailIds && message.mailIds.length))
                            message.mailIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.mailIds.push(reader.uint32());
                        } else
                            message.mailIds.push(reader.uint32());
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
         * Decodes a CGetMailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.CGetMailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.CGetMailList} CGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetMailList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGetMailList message.
         * @function verify
         * @memberof mail.CGetMailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetMailList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailIds != null && message.hasOwnProperty("mailIds")) {
                if (!Array.isArray(message.mailIds))
                    return "mailIds: array expected";
                for (var i = 0; i < message.mailIds.length; ++i)
                    if (!$util.isInteger(message.mailIds[i]))
                        return "mailIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a CGetMailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.CGetMailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.CGetMailList} CGetMailList
         */
        CGetMailList.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.CGetMailList)
                return object;
            var message = new $root.mail.CGetMailList();
            if (object.mailIds) {
                if (!Array.isArray(object.mailIds))
                    throw TypeError(".mail.CGetMailList.mailIds: array expected");
                message.mailIds = [];
                for (var i = 0; i < object.mailIds.length; ++i)
                    message.mailIds[i] = object.mailIds[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a CGetMailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.CGetMailList
         * @static
         * @param {mail.CGetMailList} message CGetMailList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetMailList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mailIds = [];
            if (message.mailIds && message.mailIds.length) {
                object.mailIds = [];
                for (var j = 0; j < message.mailIds.length; ++j)
                    object.mailIds[j] = message.mailIds[j];
            }
            return object;
        };

        /**
         * Converts this CGetMailList to JSON.
         * @function toJSON
         * @memberof mail.CGetMailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetMailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CGetMailList
         * @function getTypeUrl
         * @memberof mail.CGetMailList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGetMailList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.CGetMailList";
        };

        return CGetMailList;
    })();

    mail.SGetMailList = (function() {

        /**
         * Properties of a SGetMailList.
         * @memberof mail
         * @interface ISGetMailList
         * @property {Array.<common.IMailInfo>|null} [list] SGetMailList list
         */

        /**
         * Constructs a new SGetMailList.
         * @memberof mail
         * @classdesc Represents a SGetMailList.
         * @implements ISGetMailList
         * @constructor
         * @param {mail.ISGetMailList=} [properties] Properties to set
         */
        function SGetMailList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGetMailList list.
         * @member {Array.<common.IMailInfo>} list
         * @memberof mail.SGetMailList
         * @instance
         */
        SGetMailList.prototype.list = $util.emptyArray;

        /**
         * Creates a new SGetMailList instance using the specified properties.
         * @function create
         * @memberof mail.SGetMailList
         * @static
         * @param {mail.ISGetMailList=} [properties] Properties to set
         * @returns {mail.SGetMailList} SGetMailList instance
         */
        SGetMailList.create = function create(properties) {
            return new SGetMailList(properties);
        };

        /**
         * Encodes the specified SGetMailList message. Does not implicitly {@link mail.SGetMailList.verify|verify} messages.
         * @function encode
         * @memberof mail.SGetMailList
         * @static
         * @param {mail.ISGetMailList} message SGetMailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetMailList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.common.MailInfo.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SGetMailList message, length delimited. Does not implicitly {@link mail.SGetMailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.SGetMailList
         * @static
         * @param {mail.ISGetMailList} message SGetMailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGetMailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGetMailList message from the specified reader or buffer.
         * @function decode
         * @memberof mail.SGetMailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.SGetMailList} SGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetMailList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.SGetMailList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.common.MailInfo.decode(reader, reader.uint32()));
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
         * Decodes a SGetMailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.SGetMailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.SGetMailList} SGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGetMailList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGetMailList message.
         * @function verify
         * @memberof mail.SGetMailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGetMailList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.common.MailInfo.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SGetMailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.SGetMailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.SGetMailList} SGetMailList
         */
        SGetMailList.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.SGetMailList)
                return object;
            var message = new $root.mail.SGetMailList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".mail.SGetMailList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".mail.SGetMailList.list: object expected");
                    message.list[i] = $root.common.MailInfo.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SGetMailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.SGetMailList
         * @static
         * @param {mail.SGetMailList} message SGetMailList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SGetMailList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.common.MailInfo.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this SGetMailList to JSON.
         * @function toJSON
         * @memberof mail.SGetMailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SGetMailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SGetMailList
         * @function getTypeUrl
         * @memberof mail.SGetMailList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SGetMailList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.SGetMailList";
        };

        return SGetMailList;
    })();

    mail.CReadMail = (function() {

        /**
         * Properties of a CReadMail.
         * @memberof mail
         * @interface ICReadMail
         * @property {number|null} [mailId] CReadMail mailId
         * @property {common.MailType|null} [mailType] CReadMail mailType
         */

        /**
         * Constructs a new CReadMail.
         * @memberof mail
         * @classdesc Represents a CReadMail.
         * @implements ICReadMail
         * @constructor
         * @param {mail.ICReadMail=} [properties] Properties to set
         */
        function CReadMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CReadMail mailId.
         * @member {number} mailId
         * @memberof mail.CReadMail
         * @instance
         */
        CReadMail.prototype.mailId = 0;

        /**
         * CReadMail mailType.
         * @member {common.MailType} mailType
         * @memberof mail.CReadMail
         * @instance
         */
        CReadMail.prototype.mailType = 0;

        /**
         * Creates a new CReadMail instance using the specified properties.
         * @function create
         * @memberof mail.CReadMail
         * @static
         * @param {mail.ICReadMail=} [properties] Properties to set
         * @returns {mail.CReadMail} CReadMail instance
         */
        CReadMail.create = function create(properties) {
            return new CReadMail(properties);
        };

        /**
         * Encodes the specified CReadMail message. Does not implicitly {@link mail.CReadMail.verify|verify} messages.
         * @function encode
         * @memberof mail.CReadMail
         * @static
         * @param {mail.ICReadMail} message CReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CReadMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailId != null && Object.hasOwnProperty.call(message, "mailId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mailId);
            if (message.mailType != null && Object.hasOwnProperty.call(message, "mailType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mailType);
            return writer;
        };

        /**
         * Encodes the specified CReadMail message, length delimited. Does not implicitly {@link mail.CReadMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.CReadMail
         * @static
         * @param {mail.ICReadMail} message CReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CReadMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CReadMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.CReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.CReadMail} CReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CReadMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.CReadMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.mailId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.mailType = reader.int32();
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
         * Decodes a CReadMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.CReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.CReadMail} CReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CReadMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CReadMail message.
         * @function verify
         * @memberof mail.CReadMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CReadMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (!$util.isInteger(message.mailId))
                    return "mailId: integer expected";
            if (message.mailType != null && message.hasOwnProperty("mailType"))
                switch (message.mailType) {
                default:
                    return "mailType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a CReadMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.CReadMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.CReadMail} CReadMail
         */
        CReadMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.CReadMail)
                return object;
            var message = new $root.mail.CReadMail();
            if (object.mailId != null)
                message.mailId = object.mailId >>> 0;
            switch (object.mailType) {
            default:
                if (typeof object.mailType === "number") {
                    message.mailType = object.mailType;
                    break;
                }
                break;
            case "MAIL_TYPE_INVALID":
            case 0:
                message.mailType = 0;
                break;
            case "MAIL_TYPE_SYSTEM":
            case 1:
                message.mailType = 1;
                break;
            case "MAIL_TYPE_USER":
            case 2:
                message.mailType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CReadMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.CReadMail
         * @static
         * @param {mail.CReadMail} message CReadMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CReadMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mailId = 0;
                object.mailType = options.enums === String ? "MAIL_TYPE_INVALID" : 0;
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            if (message.mailType != null && message.hasOwnProperty("mailType"))
                object.mailType = options.enums === String ? $root.common.MailType[message.mailType] === undefined ? message.mailType : $root.common.MailType[message.mailType] : message.mailType;
            return object;
        };

        /**
         * Converts this CReadMail to JSON.
         * @function toJSON
         * @memberof mail.CReadMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CReadMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CReadMail
         * @function getTypeUrl
         * @memberof mail.CReadMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CReadMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.CReadMail";
        };

        return CReadMail;
    })();

    mail.SReadMail = (function() {

        /**
         * Properties of a SReadMail.
         * @memberof mail
         * @interface ISReadMail
         */

        /**
         * Constructs a new SReadMail.
         * @memberof mail
         * @classdesc Represents a SReadMail.
         * @implements ISReadMail
         * @constructor
         * @param {mail.ISReadMail=} [properties] Properties to set
         */
        function SReadMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SReadMail instance using the specified properties.
         * @function create
         * @memberof mail.SReadMail
         * @static
         * @param {mail.ISReadMail=} [properties] Properties to set
         * @returns {mail.SReadMail} SReadMail instance
         */
        SReadMail.create = function create(properties) {
            return new SReadMail(properties);
        };

        /**
         * Encodes the specified SReadMail message. Does not implicitly {@link mail.SReadMail.verify|verify} messages.
         * @function encode
         * @memberof mail.SReadMail
         * @static
         * @param {mail.ISReadMail} message SReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SReadMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SReadMail message, length delimited. Does not implicitly {@link mail.SReadMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.SReadMail
         * @static
         * @param {mail.ISReadMail} message SReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SReadMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SReadMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.SReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.SReadMail} SReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SReadMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.SReadMail();
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
         * Decodes a SReadMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.SReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.SReadMail} SReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SReadMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SReadMail message.
         * @function verify
         * @memberof mail.SReadMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SReadMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SReadMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.SReadMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.SReadMail} SReadMail
         */
        SReadMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.SReadMail)
                return object;
            return new $root.mail.SReadMail();
        };

        /**
         * Creates a plain object from a SReadMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.SReadMail
         * @static
         * @param {mail.SReadMail} message SReadMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SReadMail.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SReadMail to JSON.
         * @function toJSON
         * @memberof mail.SReadMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SReadMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SReadMail
         * @function getTypeUrl
         * @memberof mail.SReadMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SReadMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.SReadMail";
        };

        return SReadMail;
    })();

    mail.CDeleteMail = (function() {

        /**
         * Properties of a CDeleteMail.
         * @memberof mail
         * @interface ICDeleteMail
         * @property {Array.<number>|null} [mailIds] CDeleteMail mailIds
         */

        /**
         * Constructs a new CDeleteMail.
         * @memberof mail
         * @classdesc Represents a CDeleteMail.
         * @implements ICDeleteMail
         * @constructor
         * @param {mail.ICDeleteMail=} [properties] Properties to set
         */
        function CDeleteMail(properties) {
            this.mailIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CDeleteMail mailIds.
         * @member {Array.<number>} mailIds
         * @memberof mail.CDeleteMail
         * @instance
         */
        CDeleteMail.prototype.mailIds = $util.emptyArray;

        /**
         * Creates a new CDeleteMail instance using the specified properties.
         * @function create
         * @memberof mail.CDeleteMail
         * @static
         * @param {mail.ICDeleteMail=} [properties] Properties to set
         * @returns {mail.CDeleteMail} CDeleteMail instance
         */
        CDeleteMail.create = function create(properties) {
            return new CDeleteMail(properties);
        };

        /**
         * Encodes the specified CDeleteMail message. Does not implicitly {@link mail.CDeleteMail.verify|verify} messages.
         * @function encode
         * @memberof mail.CDeleteMail
         * @static
         * @param {mail.ICDeleteMail} message CDeleteMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDeleteMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailIds != null && message.mailIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.mailIds.length; ++i)
                    writer.uint32(message.mailIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified CDeleteMail message, length delimited. Does not implicitly {@link mail.CDeleteMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.CDeleteMail
         * @static
         * @param {mail.ICDeleteMail} message CDeleteMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDeleteMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CDeleteMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.CDeleteMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.CDeleteMail} CDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDeleteMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.CDeleteMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.mailIds && message.mailIds.length))
                            message.mailIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.mailIds.push(reader.uint32());
                        } else
                            message.mailIds.push(reader.uint32());
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
         * Decodes a CDeleteMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.CDeleteMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.CDeleteMail} CDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDeleteMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CDeleteMail message.
         * @function verify
         * @memberof mail.CDeleteMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDeleteMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailIds != null && message.hasOwnProperty("mailIds")) {
                if (!Array.isArray(message.mailIds))
                    return "mailIds: array expected";
                for (var i = 0; i < message.mailIds.length; ++i)
                    if (!$util.isInteger(message.mailIds[i]))
                        return "mailIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a CDeleteMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.CDeleteMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.CDeleteMail} CDeleteMail
         */
        CDeleteMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.CDeleteMail)
                return object;
            var message = new $root.mail.CDeleteMail();
            if (object.mailIds) {
                if (!Array.isArray(object.mailIds))
                    throw TypeError(".mail.CDeleteMail.mailIds: array expected");
                message.mailIds = [];
                for (var i = 0; i < object.mailIds.length; ++i)
                    message.mailIds[i] = object.mailIds[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a CDeleteMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.CDeleteMail
         * @static
         * @param {mail.CDeleteMail} message CDeleteMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDeleteMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mailIds = [];
            if (message.mailIds && message.mailIds.length) {
                object.mailIds = [];
                for (var j = 0; j < message.mailIds.length; ++j)
                    object.mailIds[j] = message.mailIds[j];
            }
            return object;
        };

        /**
         * Converts this CDeleteMail to JSON.
         * @function toJSON
         * @memberof mail.CDeleteMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDeleteMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CDeleteMail
         * @function getTypeUrl
         * @memberof mail.CDeleteMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDeleteMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.CDeleteMail";
        };

        return CDeleteMail;
    })();

    mail.SDeleteMail = (function() {

        /**
         * Properties of a SDeleteMail.
         * @memberof mail
         * @interface ISDeleteMail
         * @property {Array.<number>|null} [mailIds] SDeleteMail mailIds
         */

        /**
         * Constructs a new SDeleteMail.
         * @memberof mail
         * @classdesc Represents a SDeleteMail.
         * @implements ISDeleteMail
         * @constructor
         * @param {mail.ISDeleteMail=} [properties] Properties to set
         */
        function SDeleteMail(properties) {
            this.mailIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SDeleteMail mailIds.
         * @member {Array.<number>} mailIds
         * @memberof mail.SDeleteMail
         * @instance
         */
        SDeleteMail.prototype.mailIds = $util.emptyArray;

        /**
         * Creates a new SDeleteMail instance using the specified properties.
         * @function create
         * @memberof mail.SDeleteMail
         * @static
         * @param {mail.ISDeleteMail=} [properties] Properties to set
         * @returns {mail.SDeleteMail} SDeleteMail instance
         */
        SDeleteMail.create = function create(properties) {
            return new SDeleteMail(properties);
        };

        /**
         * Encodes the specified SDeleteMail message. Does not implicitly {@link mail.SDeleteMail.verify|verify} messages.
         * @function encode
         * @memberof mail.SDeleteMail
         * @static
         * @param {mail.ISDeleteMail} message SDeleteMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SDeleteMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailIds != null && message.mailIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.mailIds.length; ++i)
                    writer.uint32(message.mailIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SDeleteMail message, length delimited. Does not implicitly {@link mail.SDeleteMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.SDeleteMail
         * @static
         * @param {mail.ISDeleteMail} message SDeleteMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SDeleteMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SDeleteMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.SDeleteMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.SDeleteMail} SDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SDeleteMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.SDeleteMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.mailIds && message.mailIds.length))
                            message.mailIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.mailIds.push(reader.uint32());
                        } else
                            message.mailIds.push(reader.uint32());
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
         * Decodes a SDeleteMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.SDeleteMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.SDeleteMail} SDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SDeleteMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SDeleteMail message.
         * @function verify
         * @memberof mail.SDeleteMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SDeleteMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailIds != null && message.hasOwnProperty("mailIds")) {
                if (!Array.isArray(message.mailIds))
                    return "mailIds: array expected";
                for (var i = 0; i < message.mailIds.length; ++i)
                    if (!$util.isInteger(message.mailIds[i]))
                        return "mailIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a SDeleteMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.SDeleteMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.SDeleteMail} SDeleteMail
         */
        SDeleteMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.SDeleteMail)
                return object;
            var message = new $root.mail.SDeleteMail();
            if (object.mailIds) {
                if (!Array.isArray(object.mailIds))
                    throw TypeError(".mail.SDeleteMail.mailIds: array expected");
                message.mailIds = [];
                for (var i = 0; i < object.mailIds.length; ++i)
                    message.mailIds[i] = object.mailIds[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SDeleteMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.SDeleteMail
         * @static
         * @param {mail.SDeleteMail} message SDeleteMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SDeleteMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mailIds = [];
            if (message.mailIds && message.mailIds.length) {
                object.mailIds = [];
                for (var j = 0; j < message.mailIds.length; ++j)
                    object.mailIds[j] = message.mailIds[j];
            }
            return object;
        };

        /**
         * Converts this SDeleteMail to JSON.
         * @function toJSON
         * @memberof mail.SDeleteMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SDeleteMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SDeleteMail
         * @function getTypeUrl
         * @memberof mail.SDeleteMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SDeleteMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.SDeleteMail";
        };

        return SDeleteMail;
    })();

    mail.CClaimMail = (function() {

        /**
         * Properties of a CClaimMail.
         * @memberof mail
         * @interface ICClaimMail
         * @property {number|null} [mailId] CClaimMail mailId
         * @property {common.MailType|null} [mailType] CClaimMail mailType
         */

        /**
         * Constructs a new CClaimMail.
         * @memberof mail
         * @classdesc Represents a CClaimMail.
         * @implements ICClaimMail
         * @constructor
         * @param {mail.ICClaimMail=} [properties] Properties to set
         */
        function CClaimMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CClaimMail mailId.
         * @member {number} mailId
         * @memberof mail.CClaimMail
         * @instance
         */
        CClaimMail.prototype.mailId = 0;

        /**
         * CClaimMail mailType.
         * @member {common.MailType} mailType
         * @memberof mail.CClaimMail
         * @instance
         */
        CClaimMail.prototype.mailType = 0;

        /**
         * Creates a new CClaimMail instance using the specified properties.
         * @function create
         * @memberof mail.CClaimMail
         * @static
         * @param {mail.ICClaimMail=} [properties] Properties to set
         * @returns {mail.CClaimMail} CClaimMail instance
         */
        CClaimMail.create = function create(properties) {
            return new CClaimMail(properties);
        };

        /**
         * Encodes the specified CClaimMail message. Does not implicitly {@link mail.CClaimMail.verify|verify} messages.
         * @function encode
         * @memberof mail.CClaimMail
         * @static
         * @param {mail.ICClaimMail} message CClaimMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClaimMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailId != null && Object.hasOwnProperty.call(message, "mailId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mailId);
            if (message.mailType != null && Object.hasOwnProperty.call(message, "mailType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mailType);
            return writer;
        };

        /**
         * Encodes the specified CClaimMail message, length delimited. Does not implicitly {@link mail.CClaimMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.CClaimMail
         * @static
         * @param {mail.ICClaimMail} message CClaimMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClaimMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CClaimMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.CClaimMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.CClaimMail} CClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClaimMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.CClaimMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.mailId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.mailType = reader.int32();
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
         * Decodes a CClaimMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.CClaimMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.CClaimMail} CClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClaimMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CClaimMail message.
         * @function verify
         * @memberof mail.CClaimMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClaimMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (!$util.isInteger(message.mailId))
                    return "mailId: integer expected";
            if (message.mailType != null && message.hasOwnProperty("mailType"))
                switch (message.mailType) {
                default:
                    return "mailType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a CClaimMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.CClaimMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.CClaimMail} CClaimMail
         */
        CClaimMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.CClaimMail)
                return object;
            var message = new $root.mail.CClaimMail();
            if (object.mailId != null)
                message.mailId = object.mailId >>> 0;
            switch (object.mailType) {
            default:
                if (typeof object.mailType === "number") {
                    message.mailType = object.mailType;
                    break;
                }
                break;
            case "MAIL_TYPE_INVALID":
            case 0:
                message.mailType = 0;
                break;
            case "MAIL_TYPE_SYSTEM":
            case 1:
                message.mailType = 1;
                break;
            case "MAIL_TYPE_USER":
            case 2:
                message.mailType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CClaimMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.CClaimMail
         * @static
         * @param {mail.CClaimMail} message CClaimMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClaimMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mailId = 0;
                object.mailType = options.enums === String ? "MAIL_TYPE_INVALID" : 0;
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            if (message.mailType != null && message.hasOwnProperty("mailType"))
                object.mailType = options.enums === String ? $root.common.MailType[message.mailType] === undefined ? message.mailType : $root.common.MailType[message.mailType] : message.mailType;
            return object;
        };

        /**
         * Converts this CClaimMail to JSON.
         * @function toJSON
         * @memberof mail.CClaimMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClaimMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CClaimMail
         * @function getTypeUrl
         * @memberof mail.CClaimMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClaimMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.CClaimMail";
        };

        return CClaimMail;
    })();

    mail.SClaimMail = (function() {

        /**
         * Properties of a SClaimMail.
         * @memberof mail
         * @interface ISClaimMail
         * @property {string|null} [extra] SClaimMail extra
         */

        /**
         * Constructs a new SClaimMail.
         * @memberof mail
         * @classdesc Represents a SClaimMail.
         * @implements ISClaimMail
         * @constructor
         * @param {mail.ISClaimMail=} [properties] Properties to set
         */
        function SClaimMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SClaimMail extra.
         * @member {string} extra
         * @memberof mail.SClaimMail
         * @instance
         */
        SClaimMail.prototype.extra = "";

        /**
         * Creates a new SClaimMail instance using the specified properties.
         * @function create
         * @memberof mail.SClaimMail
         * @static
         * @param {mail.ISClaimMail=} [properties] Properties to set
         * @returns {mail.SClaimMail} SClaimMail instance
         */
        SClaimMail.create = function create(properties) {
            return new SClaimMail(properties);
        };

        /**
         * Encodes the specified SClaimMail message. Does not implicitly {@link mail.SClaimMail.verify|verify} messages.
         * @function encode
         * @memberof mail.SClaimMail
         * @static
         * @param {mail.ISClaimMail} message SClaimMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SClaimMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified SClaimMail message, length delimited. Does not implicitly {@link mail.SClaimMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.SClaimMail
         * @static
         * @param {mail.ISClaimMail} message SClaimMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SClaimMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SClaimMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.SClaimMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.SClaimMail} SClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SClaimMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.SClaimMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
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
         * Decodes a SClaimMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.SClaimMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.SClaimMail} SClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SClaimMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SClaimMail message.
         * @function verify
         * @memberof mail.SClaimMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SClaimMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a SClaimMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.SClaimMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.SClaimMail} SClaimMail
         */
        SClaimMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.SClaimMail)
                return object;
            var message = new $root.mail.SClaimMail();
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a SClaimMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.SClaimMail
         * @static
         * @param {mail.SClaimMail} message SClaimMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SClaimMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.extra = "";
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this SClaimMail to JSON.
         * @function toJSON
         * @memberof mail.SClaimMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SClaimMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SClaimMail
         * @function getTypeUrl
         * @memberof mail.SClaimMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SClaimMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.SClaimMail";
        };

        return SClaimMail;
    })();

    mail.CClaimAllMail = (function() {

        /**
         * Properties of a CClaimAllMail.
         * @memberof mail
         * @interface ICClaimAllMail
         */

        /**
         * Constructs a new CClaimAllMail.
         * @memberof mail
         * @classdesc Represents a CClaimAllMail.
         * @implements ICClaimAllMail
         * @constructor
         * @param {mail.ICClaimAllMail=} [properties] Properties to set
         */
        function CClaimAllMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CClaimAllMail instance using the specified properties.
         * @function create
         * @memberof mail.CClaimAllMail
         * @static
         * @param {mail.ICClaimAllMail=} [properties] Properties to set
         * @returns {mail.CClaimAllMail} CClaimAllMail instance
         */
        CClaimAllMail.create = function create(properties) {
            return new CClaimAllMail(properties);
        };

        /**
         * Encodes the specified CClaimAllMail message. Does not implicitly {@link mail.CClaimAllMail.verify|verify} messages.
         * @function encode
         * @memberof mail.CClaimAllMail
         * @static
         * @param {mail.ICClaimAllMail} message CClaimAllMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClaimAllMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CClaimAllMail message, length delimited. Does not implicitly {@link mail.CClaimAllMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.CClaimAllMail
         * @static
         * @param {mail.ICClaimAllMail} message CClaimAllMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClaimAllMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CClaimAllMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.CClaimAllMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.CClaimAllMail} CClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClaimAllMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.CClaimAllMail();
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
         * Decodes a CClaimAllMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.CClaimAllMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.CClaimAllMail} CClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClaimAllMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CClaimAllMail message.
         * @function verify
         * @memberof mail.CClaimAllMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClaimAllMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CClaimAllMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.CClaimAllMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.CClaimAllMail} CClaimAllMail
         */
        CClaimAllMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.CClaimAllMail)
                return object;
            return new $root.mail.CClaimAllMail();
        };

        /**
         * Creates a plain object from a CClaimAllMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.CClaimAllMail
         * @static
         * @param {mail.CClaimAllMail} message CClaimAllMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClaimAllMail.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CClaimAllMail to JSON.
         * @function toJSON
         * @memberof mail.CClaimAllMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClaimAllMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CClaimAllMail
         * @function getTypeUrl
         * @memberof mail.CClaimAllMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClaimAllMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.CClaimAllMail";
        };

        return CClaimAllMail;
    })();

    mail.SClaimAllMail = (function() {

        /**
         * Properties of a SClaimAllMail.
         * @memberof mail
         * @interface ISClaimAllMail
         * @property {Array.<string>|null} [extra] SClaimAllMail extra
         */

        /**
         * Constructs a new SClaimAllMail.
         * @memberof mail
         * @classdesc Represents a SClaimAllMail.
         * @implements ISClaimAllMail
         * @constructor
         * @param {mail.ISClaimAllMail=} [properties] Properties to set
         */
        function SClaimAllMail(properties) {
            this.extra = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SClaimAllMail extra.
         * @member {Array.<string>} extra
         * @memberof mail.SClaimAllMail
         * @instance
         */
        SClaimAllMail.prototype.extra = $util.emptyArray;

        /**
         * Creates a new SClaimAllMail instance using the specified properties.
         * @function create
         * @memberof mail.SClaimAllMail
         * @static
         * @param {mail.ISClaimAllMail=} [properties] Properties to set
         * @returns {mail.SClaimAllMail} SClaimAllMail instance
         */
        SClaimAllMail.create = function create(properties) {
            return new SClaimAllMail(properties);
        };

        /**
         * Encodes the specified SClaimAllMail message. Does not implicitly {@link mail.SClaimAllMail.verify|verify} messages.
         * @function encode
         * @memberof mail.SClaimAllMail
         * @static
         * @param {mail.ISClaimAllMail} message SClaimAllMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SClaimAllMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.extra != null && message.extra.length)
                for (var i = 0; i < message.extra.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.extra[i]);
            return writer;
        };

        /**
         * Encodes the specified SClaimAllMail message, length delimited. Does not implicitly {@link mail.SClaimAllMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mail.SClaimAllMail
         * @static
         * @param {mail.ISClaimAllMail} message SClaimAllMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SClaimAllMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SClaimAllMail message from the specified reader or buffer.
         * @function decode
         * @memberof mail.SClaimAllMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mail.SClaimAllMail} SClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SClaimAllMail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mail.SClaimAllMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.extra && message.extra.length))
                            message.extra = [];
                        message.extra.push(reader.string());
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
         * Decodes a SClaimAllMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mail.SClaimAllMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mail.SClaimAllMail} SClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SClaimAllMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SClaimAllMail message.
         * @function verify
         * @memberof mail.SClaimAllMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SClaimAllMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.extra != null && message.hasOwnProperty("extra")) {
                if (!Array.isArray(message.extra))
                    return "extra: array expected";
                for (var i = 0; i < message.extra.length; ++i)
                    if (!$util.isString(message.extra[i]))
                        return "extra: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SClaimAllMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mail.SClaimAllMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mail.SClaimAllMail} SClaimAllMail
         */
        SClaimAllMail.fromObject = function fromObject(object) {
            if (object instanceof $root.mail.SClaimAllMail)
                return object;
            var message = new $root.mail.SClaimAllMail();
            if (object.extra) {
                if (!Array.isArray(object.extra))
                    throw TypeError(".mail.SClaimAllMail.extra: array expected");
                message.extra = [];
                for (var i = 0; i < object.extra.length; ++i)
                    message.extra[i] = String(object.extra[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SClaimAllMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mail.SClaimAllMail
         * @static
         * @param {mail.SClaimAllMail} message SClaimAllMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SClaimAllMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.extra = [];
            if (message.extra && message.extra.length) {
                object.extra = [];
                for (var j = 0; j < message.extra.length; ++j)
                    object.extra[j] = message.extra[j];
            }
            return object;
        };

        /**
         * Converts this SClaimAllMail to JSON.
         * @function toJSON
         * @memberof mail.SClaimAllMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SClaimAllMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SClaimAllMail
         * @function getTypeUrl
         * @memberof mail.SClaimAllMail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SClaimAllMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mail.SClaimAllMail";
        };

        return SClaimAllMail;
    })();

    return mail;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * MailStatus enum.
     * @name common.MailStatus
     * @enum {number}
     * @property {number} MAIL_STATUS_INVALID=0 MAIL_STATUS_INVALID value
     * @property {number} MAIL_STATUS_NEW=1 MAIL_STATUS_NEW value
     * @property {number} MAIL_STATUS_READED=2 MAIL_STATUS_READED value
     * @property {number} MAIL_STATUS_CLAIMED=3 MAIL_STATUS_CLAIMED value
     * @property {number} MAIL_STATUS_DELETED=4 MAIL_STATUS_DELETED value
     */
    common.MailStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAIL_STATUS_INVALID"] = 0;
        values[valuesById[1] = "MAIL_STATUS_NEW"] = 1;
        values[valuesById[2] = "MAIL_STATUS_READED"] = 2;
        values[valuesById[3] = "MAIL_STATUS_CLAIMED"] = 3;
        values[valuesById[4] = "MAIL_STATUS_DELETED"] = 4;
        return values;
    })();

    /**
     * MailType enum.
     * @name common.MailType
     * @enum {number}
     * @property {number} MAIL_TYPE_INVALID=0 MAIL_TYPE_INVALID value
     * @property {number} MAIL_TYPE_SYSTEM=1 MAIL_TYPE_SYSTEM value
     * @property {number} MAIL_TYPE_USER=2 MAIL_TYPE_USER value
     */
    common.MailType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAIL_TYPE_INVALID"] = 0;
        values[valuesById[1] = "MAIL_TYPE_SYSTEM"] = 1;
        values[valuesById[2] = "MAIL_TYPE_USER"] = 2;
        return values;
    })();

    common.MailInfo = (function() {

        /**
         * Properties of a MailInfo.
         * @memberof common
         * @interface IMailInfo
         * @property {number|null} [id] MailInfo id
         * @property {common.MailType|null} [mailType] MailInfo mailType
         * @property {common.MailStatus|null} [status] MailInfo status
         * @property {string|null} [title] MailInfo title
         * @property {string|null} [message] MailInfo message
         * @property {string|null} [sender] MailInfo sender
         * @property {string|null} [receiver] MailInfo receiver
         * @property {number|Long|null} [expire] MailInfo expire
         * @property {string|null} [extra] MailInfo extra
         * @property {number|Long|null} [timestamp] MailInfo timestamp
         */

        /**
         * Constructs a new MailInfo.
         * @memberof common
         * @classdesc Represents a MailInfo.
         * @implements IMailInfo
         * @constructor
         * @param {common.IMailInfo=} [properties] Properties to set
         */
        function MailInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfo id.
         * @member {number} id
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.id = 0;

        /**
         * MailInfo mailType.
         * @member {common.MailType} mailType
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.mailType = 0;

        /**
         * MailInfo status.
         * @member {common.MailStatus} status
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.status = 0;

        /**
         * MailInfo title.
         * @member {string} title
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.title = "";

        /**
         * MailInfo message.
         * @member {string} message
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.message = "";

        /**
         * MailInfo sender.
         * @member {string} sender
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.sender = "";

        /**
         * MailInfo receiver.
         * @member {string} receiver
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.receiver = "";

        /**
         * MailInfo expire.
         * @member {number|Long} expire
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailInfo extra.
         * @member {string} extra
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.extra = "";

        /**
         * MailInfo timestamp.
         * @member {number|Long} timestamp
         * @memberof common.MailInfo
         * @instance
         */
        MailInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MailInfo instance using the specified properties.
         * @function create
         * @memberof common.MailInfo
         * @static
         * @param {common.IMailInfo=} [properties] Properties to set
         * @returns {common.MailInfo} MailInfo instance
         */
        MailInfo.create = function create(properties) {
            return new MailInfo(properties);
        };

        /**
         * Encodes the specified MailInfo message. Does not implicitly {@link common.MailInfo.verify|verify} messages.
         * @function encode
         * @memberof common.MailInfo
         * @static
         * @param {common.IMailInfo} message MailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.mailType != null && Object.hasOwnProperty.call(message, "mailType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mailType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sender);
            if (message.receiver != null && Object.hasOwnProperty.call(message, "receiver"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.receiver);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.expire);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.extra);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified MailInfo message, length delimited. Does not implicitly {@link common.MailInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.MailInfo
         * @static
         * @param {common.IMailInfo} message MailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.MailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.MailInfo} MailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.MailInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.mailType = reader.int32();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                case 4: {
                        message.title = reader.string();
                        break;
                    }
                case 5: {
                        message.message = reader.string();
                        break;
                    }
                case 6: {
                        message.sender = reader.string();
                        break;
                    }
                case 7: {
                        message.receiver = reader.string();
                        break;
                    }
                case 8: {
                        message.expire = reader.int64();
                        break;
                    }
                case 9: {
                        message.extra = reader.string();
                        break;
                    }
                case 10: {
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
         * Decodes a MailInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.MailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.MailInfo} MailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfo message.
         * @function verify
         * @memberof common.MailInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.mailType != null && message.hasOwnProperty("mailType"))
                switch (message.mailType) {
                default:
                    return "mailType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (!$util.isString(message.sender))
                    return "sender: string expected";
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                if (!$util.isString(message.receiver))
                    return "receiver: string expected";
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a MailInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.MailInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.MailInfo} MailInfo
         */
        MailInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.MailInfo)
                return object;
            var message = new $root.common.MailInfo();
            if (object.id != null)
                message.id = object.id >>> 0;
            switch (object.mailType) {
            default:
                if (typeof object.mailType === "number") {
                    message.mailType = object.mailType;
                    break;
                }
                break;
            case "MAIL_TYPE_INVALID":
            case 0:
                message.mailType = 0;
                break;
            case "MAIL_TYPE_SYSTEM":
            case 1:
                message.mailType = 1;
                break;
            case "MAIL_TYPE_USER":
            case 2:
                message.mailType = 2;
                break;
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "MAIL_STATUS_INVALID":
            case 0:
                message.status = 0;
                break;
            case "MAIL_STATUS_NEW":
            case 1:
                message.status = 1;
                break;
            case "MAIL_STATUS_READED":
            case 2:
                message.status = 2;
                break;
            case "MAIL_STATUS_CLAIMED":
            case 3:
                message.status = 3;
                break;
            case "MAIL_STATUS_DELETED":
            case 4:
                message.status = 4;
                break;
            }
            if (object.title != null)
                message.title = String(object.title);
            if (object.message != null)
                message.message = String(object.message);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.receiver != null)
                message.receiver = String(object.receiver);
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = false;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber();
            if (object.extra != null)
                message.extra = String(object.extra);
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
         * Creates a plain object from a MailInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.MailInfo
         * @static
         * @param {common.MailInfo} message MailInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.mailType = options.enums === String ? "MAIL_TYPE_INVALID" : 0;
                object.status = options.enums === String ? "MAIL_STATUS_INVALID" : 0;
                object.title = "";
                object.message = "";
                object.sender = "";
                object.receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
                object.extra = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.mailType != null && message.hasOwnProperty("mailType"))
                object.mailType = options.enums === String ? $root.common.MailType[message.mailType] === undefined ? message.mailType : $root.common.MailType[message.mailType] : message.mailType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.common.MailStatus[message.status] === undefined ? message.status : $root.common.MailStatus[message.status] : message.status;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                object.receiver = message.receiver;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber() : message.expire;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this MailInfo to JSON.
         * @function toJSON
         * @memberof common.MailInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MailInfo
         * @function getTypeUrl
         * @memberof common.MailInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MailInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.MailInfo";
        };

        return MailInfo;
    })();

    return common;
})();

module.exports = $root;
