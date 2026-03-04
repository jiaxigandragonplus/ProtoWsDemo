import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace common. */
export namespace common {

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

        /** WebsocketMessage timestamp */
        timestamp?: (number|Long|null);
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

        /** WebsocketMessage timestamp. */
        public timestamp: (number|Long);

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
}
