import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace common. */
export namespace common {

    /** Properties of a PBPackage. */
    interface IPBPackage {

        /** PBPackage messageType */
        messageType?: (string|null);

        /** PBPackage messagePayload */
        messagePayload?: (Uint8Array|null);
    }

    /** Represents a PBPackage. */
    class PBPackage implements IPBPackage {

        /**
         * Constructs a new PBPackage.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPBPackage);

        /** PBPackage messageType. */
        public messageType: string;

        /** PBPackage messagePayload. */
        public messagePayload: Uint8Array;

        /**
         * Creates a new PBPackage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PBPackage instance
         */
        public static create(properties?: common.IPBPackage): common.PBPackage;

        /**
         * Encodes the specified PBPackage message. Does not implicitly {@link common.PBPackage.verify|verify} messages.
         * @param message PBPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPBPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PBPackage message, length delimited. Does not implicitly {@link common.PBPackage.verify|verify} messages.
         * @param message PBPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPBPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PBPackage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PBPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PBPackage;

        /**
         * Decodes a PBPackage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PBPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PBPackage;

        /**
         * Verifies a PBPackage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PBPackage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PBPackage
         */
        public static fromObject(object: { [k: string]: any }): common.PBPackage;

        /**
         * Creates a plain object from a PBPackage message. Also converts values to other types if specified.
         * @param message PBPackage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PBPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PBPackage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PBPackage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WebsocketMessage. */
    interface IWebsocketMessage {

        /** WebsocketMessage uri */
        uri?: (string|null);

        /** WebsocketMessage method */
        method?: (string|null);

        /** WebsocketMessage messageType */
        messageType?: (string|null);

        /** WebsocketMessage messagePayload */
        messagePayload?: (Uint8Array|null);

        /** WebsocketMessage uuid */
        uuid?: (string|null);

        /** WebsocketMessage errno */
        errno?: (number|null);

        /** WebsocketMessage errmsg */
        errmsg?: (string|null);
    }

    /** Represents a WebsocketMessage. */
    class WebsocketMessage implements IWebsocketMessage {

        /**
         * Constructs a new WebsocketMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWebsocketMessage);

        /** WebsocketMessage uri. */
        public uri: string;

        /** WebsocketMessage method. */
        public method: string;

        /** WebsocketMessage messageType. */
        public messageType: string;

        /** WebsocketMessage messagePayload. */
        public messagePayload: Uint8Array;

        /** WebsocketMessage uuid. */
        public uuid: string;

        /** WebsocketMessage errno. */
        public errno: number;

        /** WebsocketMessage errmsg. */
        public errmsg: string;

        /**
         * Creates a new WebsocketMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebsocketMessage instance
         */
        public static create(properties?: common.IWebsocketMessage): common.WebsocketMessage;

        /**
         * Encodes the specified WebsocketMessage message. Does not implicitly {@link common.WebsocketMessage.verify|verify} messages.
         * @param message WebsocketMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWebsocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebsocketMessage message, length delimited. Does not implicitly {@link common.WebsocketMessage.verify|verify} messages.
         * @param message WebsocketMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWebsocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebsocketMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WebsocketMessage;

        /**
         * Decodes a WebsocketMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WebsocketMessage;

        /**
         * Verifies a WebsocketMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebsocketMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebsocketMessage
         */
        public static fromObject(object: { [k: string]: any }): common.WebsocketMessage;

        /**
         * Creates a plain object from a WebsocketMessage message. Also converts values to other types if specified.
         * @param message WebsocketMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WebsocketMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebsocketMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WebsocketMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** KickPlayerReason enum. */
    enum KickPlayerReason {
        ClientLeave = 0,
        DuplicateLogin = 1,
        ServerShutdown = 2,
        GMKick = 3,
        Banned = 4
    }

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
