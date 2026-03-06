import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace guild. */
export namespace guild {

    /** Properties of a CGetGuildList. */
    interface ICGetGuildList {
    }

    /** Represents a CGetGuildList. */
    class CGetGuildList implements ICGetGuildList {

        /**
         * Constructs a new CGetGuildList.
         * @param [properties] Properties to set
         */
        constructor(properties?: guild.ICGetGuildList);

        /**
         * Creates a new CGetGuildList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGetGuildList instance
         */
        public static create(properties?: guild.ICGetGuildList): guild.CGetGuildList;

        /**
         * Encodes the specified CGetGuildList message. Does not implicitly {@link guild.CGetGuildList.verify|verify} messages.
         * @param message CGetGuildList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: guild.ICGetGuildList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGetGuildList message, length delimited. Does not implicitly {@link guild.CGetGuildList.verify|verify} messages.
         * @param message CGetGuildList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: guild.ICGetGuildList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGetGuildList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGetGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): guild.CGetGuildList;

        /**
         * Decodes a CGetGuildList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGetGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): guild.CGetGuildList;

        /**
         * Verifies a CGetGuildList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGetGuildList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGetGuildList
         */
        public static fromObject(object: { [k: string]: any }): guild.CGetGuildList;

        /**
         * Creates a plain object from a CGetGuildList message. Also converts values to other types if specified.
         * @param message CGetGuildList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: guild.CGetGuildList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGetGuildList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CGetGuildList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SGuildList. */
    interface ISGuildList {
    }

    /** Represents a SGuildList. */
    class SGuildList implements ISGuildList {

        /**
         * Constructs a new SGuildList.
         * @param [properties] Properties to set
         */
        constructor(properties?: guild.ISGuildList);

        /**
         * Creates a new SGuildList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SGuildList instance
         */
        public static create(properties?: guild.ISGuildList): guild.SGuildList;

        /**
         * Encodes the specified SGuildList message. Does not implicitly {@link guild.SGuildList.verify|verify} messages.
         * @param message SGuildList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: guild.ISGuildList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SGuildList message, length delimited. Does not implicitly {@link guild.SGuildList.verify|verify} messages.
         * @param message SGuildList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: guild.ISGuildList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SGuildList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): guild.SGuildList;

        /**
         * Decodes a SGuildList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): guild.SGuildList;

        /**
         * Verifies a SGuildList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SGuildList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SGuildList
         */
        public static fromObject(object: { [k: string]: any }): guild.SGuildList;

        /**
         * Creates a plain object from a SGuildList message. Also converts values to other types if specified.
         * @param message SGuildList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: guild.SGuildList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SGuildList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SGuildList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** GuildEventType enum. */
    enum GuildEventType {
        GUILD_EVENT_UNKNOWN = 0,
        GUILD_EVENT_CREATE = 1,
        GUILD_EVENT_JOIN = 2,
        GUILD_EVENT_LEAVE = 3,
        GUILD_EVENT_KICK = 4,
        GUILD_EVENT_MODIFY_NOTICE = 5,
        GUILD_EVENT_MODIFY_FLAG = 6,
        GUILD_EVENT_MODIFY_NAME = 7,
        GUILD_EVENT_TRANSFER = 8
    }

    /** GuildMemberType enum. */
    enum GuildMemberType {
        GUILD_ROLE_NORMAL = 0,
        GUILD_ROLE_ELITE = 1,
        GUILD_ROLE_DEPUTY = 2,
        GUILD_ROLE_LEADER = 3
    }

    /** GuildPermissionType enum. */
    enum GuildPermissionType {
        GUILD_PERMISSION_UNKNOWN = 0,
        GUILD_PERMISSION_HANDLE_APPLY = 1,
        GUILD_PERMISSION_LEAVE = 2,
        GUILD_PERMISSION_OPEN_SETTING = 3,
        GUILD_PERMISSION_MODIFY_NAME = 4,
        GUILD_PERMISSION_MODIFY_FLAG = 5,
        GUILD_PERMISSION_MODIFY_NOTICE = 6,
        GUILD_PERMISSION_SET_DUTY = 7,
        GUILD_PERMISSION_TRANSFER_LEADER = 8
    }

    /** Properties of a GuildUserInfo. */
    interface IGuildUserInfo {

        /** GuildUserInfo uid */
        uid?: (string|null);

        /** GuildUserInfo name */
        name?: (string|null);

        /** GuildUserInfo avatar */
        avatar?: (number|null);

        /** GuildUserInfo country */
        country?: (string|null);

        /** GuildUserInfo level */
        level?: (number|null);

        /** GuildUserInfo cups */
        cups?: (number|null);
    }

    /** Represents a GuildUserInfo. */
    class GuildUserInfo implements IGuildUserInfo {

        /**
         * Constructs a new GuildUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildUserInfo);

        /** GuildUserInfo uid. */
        public uid: string;

        /** GuildUserInfo name. */
        public name: string;

        /** GuildUserInfo avatar. */
        public avatar: number;

        /** GuildUserInfo country. */
        public country: string;

        /** GuildUserInfo level. */
        public level: number;

        /** GuildUserInfo cups. */
        public cups: number;

        /**
         * Creates a new GuildUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildUserInfo instance
         */
        public static create(properties?: common.IGuildUserInfo): common.GuildUserInfo;

        /**
         * Encodes the specified GuildUserInfo message. Does not implicitly {@link common.GuildUserInfo.verify|verify} messages.
         * @param message GuildUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildUserInfo message, length delimited. Does not implicitly {@link common.GuildUserInfo.verify|verify} messages.
         * @param message GuildUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildUserInfo;

        /**
         * Decodes a GuildUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildUserInfo;

        /**
         * Verifies a GuildUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildUserInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuildUserInfo;

        /**
         * Creates a plain object from a GuildUserInfo message. Also converts values to other types if specified.
         * @param message GuildUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildUserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildMemberInfo. */
    interface IGuildMemberInfo {

        /** GuildMemberInfo uid */
        uid?: (string|null);

        /** GuildMemberInfo name */
        name?: (string|null);

        /** GuildMemberInfo avatar */
        avatar?: (string|null);

        /** GuildMemberInfo level */
        level?: (number|null);

        /** GuildMemberInfo country */
        country?: (string|null);

        /** GuildMemberInfo cups */
        cups?: (number|null);

        /** GuildMemberInfo role */
        role?: (common.GuildMemberType|null);

        /** GuildMemberInfo joinTime */
        joinTime?: (number|null);

        /** GuildMemberInfo offlineTime */
        offlineTime?: (number|null);

        /** GuildMemberInfo weekContribute */
        weekContribute?: (number|null);

        /** GuildMemberInfo extra */
        extra?: (string|null);
    }

    /** Represents a GuildMemberInfo. */
    class GuildMemberInfo implements IGuildMemberInfo {

        /**
         * Constructs a new GuildMemberInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildMemberInfo);

        /** GuildMemberInfo uid. */
        public uid: string;

        /** GuildMemberInfo name. */
        public name: string;

        /** GuildMemberInfo avatar. */
        public avatar: string;

        /** GuildMemberInfo level. */
        public level: number;

        /** GuildMemberInfo country. */
        public country: string;

        /** GuildMemberInfo cups. */
        public cups: number;

        /** GuildMemberInfo role. */
        public role: common.GuildMemberType;

        /** GuildMemberInfo joinTime. */
        public joinTime: number;

        /** GuildMemberInfo offlineTime. */
        public offlineTime: number;

        /** GuildMemberInfo weekContribute. */
        public weekContribute: number;

        /** GuildMemberInfo extra. */
        public extra: string;

        /**
         * Creates a new GuildMemberInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildMemberInfo instance
         */
        public static create(properties?: common.IGuildMemberInfo): common.GuildMemberInfo;

        /**
         * Encodes the specified GuildMemberInfo message. Does not implicitly {@link common.GuildMemberInfo.verify|verify} messages.
         * @param message GuildMemberInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildMemberInfo message, length delimited. Does not implicitly {@link common.GuildMemberInfo.verify|verify} messages.
         * @param message GuildMemberInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildMemberInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildMemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildMemberInfo;

        /**
         * Decodes a GuildMemberInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildMemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildMemberInfo;

        /**
         * Verifies a GuildMemberInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildMemberInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildMemberInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuildMemberInfo;

        /**
         * Creates a plain object from a GuildMemberInfo message. Also converts values to other types if specified.
         * @param message GuildMemberInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildMemberInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildMemberInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildMemberInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildApplyInfo. */
    interface IGuildApplyInfo {

        /** GuildApplyInfo uid */
        uid?: (string|null);

        /** GuildApplyInfo name */
        name?: (string|null);

        /** GuildApplyInfo avatar */
        avatar?: (number|null);

        /** GuildApplyInfo level */
        level?: (number|null);

        /** GuildApplyInfo country */
        country?: (string|null);

        /** GuildApplyInfo msg */
        msg?: (string|null);

        /** GuildApplyInfo applyTime */
        applyTime?: (number|null);

        /** GuildApplyInfo cups */
        cups?: (number|null);
    }

    /** Represents a GuildApplyInfo. */
    class GuildApplyInfo implements IGuildApplyInfo {

        /**
         * Constructs a new GuildApplyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildApplyInfo);

        /** GuildApplyInfo uid. */
        public uid: string;

        /** GuildApplyInfo name. */
        public name: string;

        /** GuildApplyInfo avatar. */
        public avatar: number;

        /** GuildApplyInfo level. */
        public level: number;

        /** GuildApplyInfo country. */
        public country: string;

        /** GuildApplyInfo msg. */
        public msg: string;

        /** GuildApplyInfo applyTime. */
        public applyTime: number;

        /** GuildApplyInfo cups. */
        public cups: number;

        /**
         * Creates a new GuildApplyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildApplyInfo instance
         */
        public static create(properties?: common.IGuildApplyInfo): common.GuildApplyInfo;

        /**
         * Encodes the specified GuildApplyInfo message. Does not implicitly {@link common.GuildApplyInfo.verify|verify} messages.
         * @param message GuildApplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildApplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildApplyInfo message, length delimited. Does not implicitly {@link common.GuildApplyInfo.verify|verify} messages.
         * @param message GuildApplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildApplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildApplyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildApplyInfo;

        /**
         * Decodes a GuildApplyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildApplyInfo;

        /**
         * Verifies a GuildApplyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildApplyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildApplyInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuildApplyInfo;

        /**
         * Creates a plain object from a GuildApplyInfo message. Also converts values to other types if specified.
         * @param message GuildApplyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildApplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildApplyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildApplyInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildSimpleInfo. */
    interface IGuildSimpleInfo {

        /** GuildSimpleInfo gid */
        gid?: (string|null);

        /** GuildSimpleInfo name */
        name?: (string|null);

        /** GuildSimpleInfo flag */
        flag?: (number|null);

        /** GuildSimpleInfo location */
        location?: (string|null);

        /** GuildSimpleInfo joinType */
        joinType?: (number|null);

        /** GuildSimpleInfo requireCups */
        requireCups?: (number|null);
    }

    /** Represents a GuildSimpleInfo. */
    class GuildSimpleInfo implements IGuildSimpleInfo {

        /**
         * Constructs a new GuildSimpleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildSimpleInfo);

        /** GuildSimpleInfo gid. */
        public gid: string;

        /** GuildSimpleInfo name. */
        public name: string;

        /** GuildSimpleInfo flag. */
        public flag: number;

        /** GuildSimpleInfo location. */
        public location: string;

        /** GuildSimpleInfo joinType. */
        public joinType: number;

        /** GuildSimpleInfo requireCups. */
        public requireCups: number;

        /**
         * Creates a new GuildSimpleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildSimpleInfo instance
         */
        public static create(properties?: common.IGuildSimpleInfo): common.GuildSimpleInfo;

        /**
         * Encodes the specified GuildSimpleInfo message. Does not implicitly {@link common.GuildSimpleInfo.verify|verify} messages.
         * @param message GuildSimpleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildSimpleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildSimpleInfo message, length delimited. Does not implicitly {@link common.GuildSimpleInfo.verify|verify} messages.
         * @param message GuildSimpleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildSimpleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildSimpleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildSimpleInfo;

        /**
         * Decodes a GuildSimpleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildSimpleInfo;

        /**
         * Verifies a GuildSimpleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildSimpleInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildSimpleInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuildSimpleInfo;

        /**
         * Creates a plain object from a GuildSimpleInfo message. Also converts values to other types if specified.
         * @param message GuildSimpleInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildSimpleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildSimpleInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildSimpleInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildInfo. */
    interface IGuildInfo {

        /** GuildInfo gid */
        gid?: (string|null);

        /** GuildInfo name */
        name?: (string|null);

        /** GuildInfo flag */
        flag?: (number|null);

        /** GuildInfo location */
        location?: (string|null);

        /** GuildInfo joinType */
        joinType?: (number|null);

        /** GuildInfo requireCups */
        requireCups?: (number|null);

        /** GuildInfo notice */
        notice?: (string|null);

        /** GuildInfo weekContribute */
        weekContribute?: (number|null);

        /** GuildInfo totalCups */
        totalCups?: (number|null);

        /** GuildInfo offlineTimestamp */
        offlineTimestamp?: (number|Long|null);

        /** GuildInfo leaderId */
        leaderId?: (string|null);

        /** GuildInfo members */
        members?: ({ [k: string]: common.IGuildMemberInfo }|null);
    }

    /** Represents a GuildInfo. */
    class GuildInfo implements IGuildInfo {

        /**
         * Constructs a new GuildInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildInfo);

        /** GuildInfo gid. */
        public gid: string;

        /** GuildInfo name. */
        public name: string;

        /** GuildInfo flag. */
        public flag: number;

        /** GuildInfo location. */
        public location: string;

        /** GuildInfo joinType. */
        public joinType: number;

        /** GuildInfo requireCups. */
        public requireCups: number;

        /** GuildInfo notice. */
        public notice: string;

        /** GuildInfo weekContribute. */
        public weekContribute: number;

        /** GuildInfo totalCups. */
        public totalCups: number;

        /** GuildInfo offlineTimestamp. */
        public offlineTimestamp: (number|Long);

        /** GuildInfo leaderId. */
        public leaderId: string;

        /** GuildInfo members. */
        public members: { [k: string]: common.IGuildMemberInfo };

        /**
         * Creates a new GuildInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildInfo instance
         */
        public static create(properties?: common.IGuildInfo): common.GuildInfo;

        /**
         * Encodes the specified GuildInfo message. Does not implicitly {@link common.GuildInfo.verify|verify} messages.
         * @param message GuildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildInfo message, length delimited. Does not implicitly {@link common.GuildInfo.verify|verify} messages.
         * @param message GuildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildInfo;

        /**
         * Decodes a GuildInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildInfo;

        /**
         * Verifies a GuildInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuildInfo;

        /**
         * Creates a plain object from a GuildInfo message. Also converts values to other types if specified.
         * @param message GuildInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildLogInfo. */
    interface IGuildLogInfo {

        /** GuildLogInfo event */
        event?: (number|null);

        /** GuildLogInfo params */
        params?: (string[]|null);
    }

    /** Represents a GuildLogInfo. */
    class GuildLogInfo implements IGuildLogInfo {

        /**
         * Constructs a new GuildLogInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildLogInfo);

        /** GuildLogInfo event. */
        public event: number;

        /** GuildLogInfo params. */
        public params: string[];

        /**
         * Creates a new GuildLogInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildLogInfo instance
         */
        public static create(properties?: common.IGuildLogInfo): common.GuildLogInfo;

        /**
         * Encodes the specified GuildLogInfo message. Does not implicitly {@link common.GuildLogInfo.verify|verify} messages.
         * @param message GuildLogInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildLogInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildLogInfo message, length delimited. Does not implicitly {@link common.GuildLogInfo.verify|verify} messages.
         * @param message GuildLogInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildLogInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildLogInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildLogInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildLogInfo;

        /**
         * Decodes a GuildLogInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildLogInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildLogInfo;

        /**
         * Verifies a GuildLogInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildLogInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildLogInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuildLogInfo;

        /**
         * Creates a plain object from a GuildLogInfo message. Also converts values to other types if specified.
         * @param message GuildLogInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildLogInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildLogInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildLogInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
