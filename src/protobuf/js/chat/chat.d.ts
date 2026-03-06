import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace chat. */
export namespace chat {

    /** Properties of a CSendMessage. */
    interface ICSendMessage {

        /** CSendMessage channelId */
        channelId?: (string|null);

        /** CSendMessage message */
        message?: (string|null);
    }

    /** Represents a CSendMessage. */
    class CSendMessage implements ICSendMessage {

        /**
         * Constructs a new CSendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ICSendMessage);

        /** CSendMessage channelId. */
        public channelId: string;

        /** CSendMessage message. */
        public message: string;

        /**
         * Creates a new CSendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CSendMessage instance
         */
        public static create(properties?: chat.ICSendMessage): chat.CSendMessage;

        /**
         * Encodes the specified CSendMessage message. Does not implicitly {@link chat.CSendMessage.verify|verify} messages.
         * @param message CSendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ICSendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CSendMessage message, length delimited. Does not implicitly {@link chat.CSendMessage.verify|verify} messages.
         * @param message CSendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ICSendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.CSendMessage;

        /**
         * Decodes a CSendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.CSendMessage;

        /**
         * Verifies a CSendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CSendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CSendMessage
         */
        public static fromObject(object: { [k: string]: any }): chat.CSendMessage;

        /**
         * Creates a plain object from a CSendMessage message. Also converts values to other types if specified.
         * @param message CSendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.CSendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CSendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CSendMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SSendMessage. */
    interface ISSendMessage {

        /** SSendMessage addedMessages */
        addedMessages?: (common.IChatMessageInfo[]|null);
    }

    /** Represents a SSendMessage. */
    class SSendMessage implements ISSendMessage {

        /**
         * Constructs a new SSendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ISSendMessage);

        /** SSendMessage addedMessages. */
        public addedMessages: common.IChatMessageInfo[];

        /**
         * Creates a new SSendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SSendMessage instance
         */
        public static create(properties?: chat.ISSendMessage): chat.SSendMessage;

        /**
         * Encodes the specified SSendMessage message. Does not implicitly {@link chat.SSendMessage.verify|verify} messages.
         * @param message SSendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ISSendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SSendMessage message, length delimited. Does not implicitly {@link chat.SSendMessage.verify|verify} messages.
         * @param message SSendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ISSendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.SSendMessage;

        /**
         * Decodes a SSendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.SSendMessage;

        /**
         * Verifies a SSendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SSendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SSendMessage
         */
        public static fromObject(object: { [k: string]: any }): chat.SSendMessage;

        /**
         * Creates a plain object from a SSendMessage message. Also converts values to other types if specified.
         * @param message SSendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.SSendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SSendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SSendMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CGetChatLog. */
    interface ICGetChatLog {

        /** CGetChatLog channelId */
        channelId?: (string|null);

        /** CGetChatLog minMessageId */
        minMessageId?: (number|null);

        /** CGetChatLog maxMessageId */
        maxMessageId?: (number|null);

        /** CGetChatLog lastLoadTimestamp */
        lastLoadTimestamp?: (number|Long|null);

        /** CGetChatLog loadType */
        loadType?: (number|null);
    }

    /** Represents a CGetChatLog. */
    class CGetChatLog implements ICGetChatLog {

        /**
         * Constructs a new CGetChatLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ICGetChatLog);

        /** CGetChatLog channelId. */
        public channelId: string;

        /** CGetChatLog minMessageId. */
        public minMessageId: number;

        /** CGetChatLog maxMessageId. */
        public maxMessageId: number;

        /** CGetChatLog lastLoadTimestamp. */
        public lastLoadTimestamp: (number|Long);

        /** CGetChatLog loadType. */
        public loadType: number;

        /**
         * Creates a new CGetChatLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGetChatLog instance
         */
        public static create(properties?: chat.ICGetChatLog): chat.CGetChatLog;

        /**
         * Encodes the specified CGetChatLog message. Does not implicitly {@link chat.CGetChatLog.verify|verify} messages.
         * @param message CGetChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ICGetChatLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGetChatLog message, length delimited. Does not implicitly {@link chat.CGetChatLog.verify|verify} messages.
         * @param message CGetChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ICGetChatLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGetChatLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.CGetChatLog;

        /**
         * Decodes a CGetChatLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.CGetChatLog;

        /**
         * Verifies a CGetChatLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGetChatLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGetChatLog
         */
        public static fromObject(object: { [k: string]: any }): chat.CGetChatLog;

        /**
         * Creates a plain object from a CGetChatLog message. Also converts values to other types if specified.
         * @param message CGetChatLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.CGetChatLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGetChatLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CGetChatLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SGetChatLog. */
    interface ISGetChatLog {

        /** SGetChatLog messages */
        messages?: (common.IChatMessageInfo[]|null);
    }

    /** Represents a SGetChatLog. */
    class SGetChatLog implements ISGetChatLog {

        /**
         * Constructs a new SGetChatLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ISGetChatLog);

        /** SGetChatLog messages. */
        public messages: common.IChatMessageInfo[];

        /**
         * Creates a new SGetChatLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SGetChatLog instance
         */
        public static create(properties?: chat.ISGetChatLog): chat.SGetChatLog;

        /**
         * Encodes the specified SGetChatLog message. Does not implicitly {@link chat.SGetChatLog.verify|verify} messages.
         * @param message SGetChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ISGetChatLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SGetChatLog message, length delimited. Does not implicitly {@link chat.SGetChatLog.verify|verify} messages.
         * @param message SGetChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ISGetChatLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SGetChatLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.SGetChatLog;

        /**
         * Decodes a SGetChatLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.SGetChatLog;

        /**
         * Verifies a SGetChatLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SGetChatLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SGetChatLog
         */
        public static fromObject(object: { [k: string]: any }): chat.SGetChatLog;

        /**
         * Creates a plain object from a SGetChatLog message. Also converts values to other types if specified.
         * @param message SGetChatLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.SGetChatLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SGetChatLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SGetChatLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CGetChatTips. */
    interface ICGetChatTips {

        /** CGetChatTips params */
        params?: (common.IGetChatTipsParam[]|null);
    }

    /** Represents a CGetChatTips. */
    class CGetChatTips implements ICGetChatTips {

        /**
         * Constructs a new CGetChatTips.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ICGetChatTips);

        /** CGetChatTips params. */
        public params: common.IGetChatTipsParam[];

        /**
         * Creates a new CGetChatTips instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGetChatTips instance
         */
        public static create(properties?: chat.ICGetChatTips): chat.CGetChatTips;

        /**
         * Encodes the specified CGetChatTips message. Does not implicitly {@link chat.CGetChatTips.verify|verify} messages.
         * @param message CGetChatTips message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ICGetChatTips, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGetChatTips message, length delimited. Does not implicitly {@link chat.CGetChatTips.verify|verify} messages.
         * @param message CGetChatTips message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ICGetChatTips, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGetChatTips message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.CGetChatTips;

        /**
         * Decodes a CGetChatTips message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.CGetChatTips;

        /**
         * Verifies a CGetChatTips message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGetChatTips message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGetChatTips
         */
        public static fromObject(object: { [k: string]: any }): chat.CGetChatTips;

        /**
         * Creates a plain object from a CGetChatTips message. Also converts values to other types if specified.
         * @param message CGetChatTips
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.CGetChatTips, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGetChatTips to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CGetChatTips
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SGetChatTips. */
    interface ISGetChatTips {

        /** SGetChatTips tips */
        tips?: (common.IChatTipsInfo[]|null);
    }

    /** Represents a SGetChatTips. */
    class SGetChatTips implements ISGetChatTips {

        /**
         * Constructs a new SGetChatTips.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ISGetChatTips);

        /** SGetChatTips tips. */
        public tips: common.IChatTipsInfo[];

        /**
         * Creates a new SGetChatTips instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SGetChatTips instance
         */
        public static create(properties?: chat.ISGetChatTips): chat.SGetChatTips;

        /**
         * Encodes the specified SGetChatTips message. Does not implicitly {@link chat.SGetChatTips.verify|verify} messages.
         * @param message SGetChatTips message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ISGetChatTips, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SGetChatTips message, length delimited. Does not implicitly {@link chat.SGetChatTips.verify|verify} messages.
         * @param message SGetChatTips message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ISGetChatTips, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SGetChatTips message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.SGetChatTips;

        /**
         * Decodes a SGetChatTips message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SGetChatTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.SGetChatTips;

        /**
         * Verifies a SGetChatTips message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SGetChatTips message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SGetChatTips
         */
        public static fromObject(object: { [k: string]: any }): chat.SGetChatTips;

        /**
         * Creates a plain object from a SGetChatTips message. Also converts values to other types if specified.
         * @param message SGetChatTips
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.SGetChatTips, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SGetChatTips to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SGetChatTips
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** ChannelType enum. */
    enum ChannelType {
        CHANNEL_INVALID = 0,
        CHANNEL_PRIVATE = 1,
        CHANNEL_GUILD = 2,
        CHANNEL_TEAM = 3,
        CHANNEL_WORLD = 4
    }

    /** ContentType enum. */
    enum ContentType {
        CONTENT_INVALID = 0,
        CONTENT_TEXT = 1,
        CONTENT_IMAGE = 2,
        CONTENT_CARD = 3,
        CONTENT_AUDIO = 4,
        CONTENT_VIDEO = 5,
        CONTENT_EMOJI = 6
    }

    /** MessageLoadType enum. */
    enum MessageLoadType {
        BACKWORD = 0,
        FORWORD = 1
    }

    /** ChatType enum. */
    enum ChatType {
        CHAT_TYPE_UNKNOWN = 0,
        CHAT_TYPE_USER_MESSAGE = 1,
        CHAT_TYPE_SYSTEM_MESSAGE = 2,
        CHAT_TYPE_GUILD_NOTICE = 3
    }

    /** ChatChannelType enum. */
    enum ChatChannelType {
        CHAT_CHANNEL_TYPE_UNKNOWN = 0,
        CHAT_CHANNEL_TYPE_WORLD = 1,
        CHAT_CHANNEL_TYPE_PRIVATE = 2,
        CHAT_CHANNEL_TYPE_GUILD = 3
    }

    /** ChatItemType enum. */
    enum ChatItemType {
        CHAT_ITEM_TYPE_UNKNOWN = 0,
        CHAT_ITEM_TYPE_NORMAL = 1,
        CHAT_ITEM_TYPE_NOTICE = 2,
        CHAT_ITEM_TYPE_GUILD_NOTICE = 3
    }

    /** Properties of a GetChatTipsParam. */
    interface IGetChatTipsParam {

        /** GetChatTipsParam channelId */
        channelId?: (string|null);

        /** GetChatTipsParam maxReadMessageId */
        maxReadMessageId?: (number|null);
    }

    /** Represents a GetChatTipsParam. */
    class GetChatTipsParam implements IGetChatTipsParam {

        /**
         * Constructs a new GetChatTipsParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGetChatTipsParam);

        /** GetChatTipsParam channelId. */
        public channelId: string;

        /** GetChatTipsParam maxReadMessageId. */
        public maxReadMessageId: number;

        /**
         * Creates a new GetChatTipsParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChatTipsParam instance
         */
        public static create(properties?: common.IGetChatTipsParam): common.GetChatTipsParam;

        /**
         * Encodes the specified GetChatTipsParam message. Does not implicitly {@link common.GetChatTipsParam.verify|verify} messages.
         * @param message GetChatTipsParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGetChatTipsParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChatTipsParam message, length delimited. Does not implicitly {@link common.GetChatTipsParam.verify|verify} messages.
         * @param message GetChatTipsParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGetChatTipsParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChatTipsParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChatTipsParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GetChatTipsParam;

        /**
         * Decodes a GetChatTipsParam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChatTipsParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GetChatTipsParam;

        /**
         * Verifies a GetChatTipsParam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChatTipsParam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChatTipsParam
         */
        public static fromObject(object: { [k: string]: any }): common.GetChatTipsParam;

        /**
         * Creates a plain object from a GetChatTipsParam message. Also converts values to other types if specified.
         * @param message GetChatTipsParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GetChatTipsParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChatTipsParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetChatTipsParam
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatTipsInfo. */
    interface IChatTipsInfo {

        /** ChatTipsInfo channelId */
        channelId?: (string|null);

        /** ChatTipsInfo newMessageCount */
        newMessageCount?: (number|null);
    }

    /** Represents a ChatTipsInfo. */
    class ChatTipsInfo implements IChatTipsInfo {

        /**
         * Constructs a new ChatTipsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IChatTipsInfo);

        /** ChatTipsInfo channelId. */
        public channelId: string;

        /** ChatTipsInfo newMessageCount. */
        public newMessageCount: number;

        /**
         * Creates a new ChatTipsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatTipsInfo instance
         */
        public static create(properties?: common.IChatTipsInfo): common.ChatTipsInfo;

        /**
         * Encodes the specified ChatTipsInfo message. Does not implicitly {@link common.ChatTipsInfo.verify|verify} messages.
         * @param message ChatTipsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IChatTipsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatTipsInfo message, length delimited. Does not implicitly {@link common.ChatTipsInfo.verify|verify} messages.
         * @param message ChatTipsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IChatTipsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatTipsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatTipsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ChatTipsInfo;

        /**
         * Decodes a ChatTipsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatTipsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ChatTipsInfo;

        /**
         * Verifies a ChatTipsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatTipsInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatTipsInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ChatTipsInfo;

        /**
         * Creates a plain object from a ChatTipsInfo message. Also converts values to other types if specified.
         * @param message ChatTipsInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ChatTipsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatTipsInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatTipsInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatSenderInfo. */
    interface IChatSenderInfo {

        /** ChatSenderInfo uid */
        uid?: (string|null);

        /** ChatSenderInfo name */
        name?: (string|null);

        /** ChatSenderInfo avatar */
        avatar?: (string|null);

        /** ChatSenderInfo extra */
        extra?: (string|null);
    }

    /** Represents a ChatSenderInfo. */
    class ChatSenderInfo implements IChatSenderInfo {

        /**
         * Constructs a new ChatSenderInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IChatSenderInfo);

        /** ChatSenderInfo uid. */
        public uid: string;

        /** ChatSenderInfo name. */
        public name: string;

        /** ChatSenderInfo avatar. */
        public avatar: string;

        /** ChatSenderInfo extra. */
        public extra: string;

        /**
         * Creates a new ChatSenderInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatSenderInfo instance
         */
        public static create(properties?: common.IChatSenderInfo): common.ChatSenderInfo;

        /**
         * Encodes the specified ChatSenderInfo message. Does not implicitly {@link common.ChatSenderInfo.verify|verify} messages.
         * @param message ChatSenderInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IChatSenderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatSenderInfo message, length delimited. Does not implicitly {@link common.ChatSenderInfo.verify|verify} messages.
         * @param message ChatSenderInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IChatSenderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatSenderInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatSenderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ChatSenderInfo;

        /**
         * Decodes a ChatSenderInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatSenderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ChatSenderInfo;

        /**
         * Verifies a ChatSenderInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatSenderInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatSenderInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ChatSenderInfo;

        /**
         * Creates a plain object from a ChatSenderInfo message. Also converts values to other types if specified.
         * @param message ChatSenderInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ChatSenderInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatSenderInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatSenderInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatContentInfo. */
    interface IChatContentInfo {

        /** ChatContentInfo type */
        type?: (common.ContentType|null);

        /** ChatContentInfo content */
        content?: (string|null);
    }

    /** Represents a ChatContentInfo. */
    class ChatContentInfo implements IChatContentInfo {

        /**
         * Constructs a new ChatContentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IChatContentInfo);

        /** ChatContentInfo type. */
        public type: common.ContentType;

        /** ChatContentInfo content. */
        public content: string;

        /**
         * Creates a new ChatContentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatContentInfo instance
         */
        public static create(properties?: common.IChatContentInfo): common.ChatContentInfo;

        /**
         * Encodes the specified ChatContentInfo message. Does not implicitly {@link common.ChatContentInfo.verify|verify} messages.
         * @param message ChatContentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IChatContentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatContentInfo message, length delimited. Does not implicitly {@link common.ChatContentInfo.verify|verify} messages.
         * @param message ChatContentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IChatContentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatContentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatContentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ChatContentInfo;

        /**
         * Decodes a ChatContentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatContentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ChatContentInfo;

        /**
         * Verifies a ChatContentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatContentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatContentInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ChatContentInfo;

        /**
         * Creates a plain object from a ChatContentInfo message. Also converts values to other types if specified.
         * @param message ChatContentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ChatContentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatContentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatContentInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatMessageInfo. */
    interface IChatMessageInfo {

        /** ChatMessageInfo messageId */
        messageId?: (number|null);

        /** ChatMessageInfo sender */
        sender?: (common.IChatSenderInfo|null);

        /** ChatMessageInfo content */
        content?: (common.IChatContentInfo|null);

        /** ChatMessageInfo timestamp */
        timestamp?: (number|null);

        /** ChatMessageInfo chatType */
        chatType?: (common.ChatType|null);

        /** ChatMessageInfo channelId */
        channelId?: (string|null);
    }

    /** Represents a ChatMessageInfo. */
    class ChatMessageInfo implements IChatMessageInfo {

        /**
         * Constructs a new ChatMessageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IChatMessageInfo);

        /** ChatMessageInfo messageId. */
        public messageId: number;

        /** ChatMessageInfo sender. */
        public sender?: (common.IChatSenderInfo|null);

        /** ChatMessageInfo content. */
        public content?: (common.IChatContentInfo|null);

        /** ChatMessageInfo timestamp. */
        public timestamp: number;

        /** ChatMessageInfo chatType. */
        public chatType: common.ChatType;

        /** ChatMessageInfo channelId. */
        public channelId: string;

        /**
         * Creates a new ChatMessageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessageInfo instance
         */
        public static create(properties?: common.IChatMessageInfo): common.ChatMessageInfo;

        /**
         * Encodes the specified ChatMessageInfo message. Does not implicitly {@link common.ChatMessageInfo.verify|verify} messages.
         * @param message ChatMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IChatMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessageInfo message, length delimited. Does not implicitly {@link common.ChatMessageInfo.verify|verify} messages.
         * @param message ChatMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IChatMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ChatMessageInfo;

        /**
         * Decodes a ChatMessageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ChatMessageInfo;

        /**
         * Verifies a ChatMessageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessageInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ChatMessageInfo;

        /**
         * Creates a plain object from a ChatMessageInfo message. Also converts values to other types if specified.
         * @param message ChatMessageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ChatMessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatMessageInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
