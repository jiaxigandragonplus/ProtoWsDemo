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

        /** SGuildList guilds */
        guilds?: (common.IGuildData[]|null);
    }

    /** Represents a SGuildList. */
    class SGuildList implements ISGuildList {

        /**
         * Constructs a new SGuildList.
         * @param [properties] Properties to set
         */
        constructor(properties?: guild.ISGuildList);

        /** SGuildList guilds. */
        public guilds: common.IGuildData[];

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

    /** Properties of a GuildData. */
    interface IGuildData {

        /** GuildData id */
        id?: (number|Long|null);

        /** GuildData name */
        name?: (string|null);
    }

    /** Represents a GuildData. */
    class GuildData implements IGuildData {

        /**
         * Constructs a new GuildData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuildData);

        /** GuildData id. */
        public id: (number|Long);

        /** GuildData name. */
        public name: string;

        /**
         * Creates a new GuildData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildData instance
         */
        public static create(properties?: common.IGuildData): common.GuildData;

        /**
         * Encodes the specified GuildData message. Does not implicitly {@link common.GuildData.verify|verify} messages.
         * @param message GuildData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuildData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildData message, length delimited. Does not implicitly {@link common.GuildData.verify|verify} messages.
         * @param message GuildData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuildData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuildData;

        /**
         * Decodes a GuildData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuildData;

        /**
         * Verifies a GuildData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildData
         */
        public static fromObject(object: { [k: string]: any }): common.GuildData;

        /**
         * Creates a plain object from a GuildData message. Also converts values to other types if specified.
         * @param message GuildData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuildData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
