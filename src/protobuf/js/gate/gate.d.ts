import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace gate. */
export namespace gate {

    /** Properties of a CKickPlayer. */
    interface ICKickPlayer {

        /** CKickPlayer playerId */
        playerId?: (number|Long|null);

        /** CKickPlayer reason */
        reason?: (common.KickPlayerReason|null);
    }

    /** Represents a CKickPlayer. */
    class CKickPlayer implements ICKickPlayer {

        /**
         * Constructs a new CKickPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ICKickPlayer);

        /** CKickPlayer playerId. */
        public playerId: (number|Long);

        /** CKickPlayer reason. */
        public reason: common.KickPlayerReason;

        /**
         * Creates a new CKickPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CKickPlayer instance
         */
        public static create(properties?: gate.ICKickPlayer): gate.CKickPlayer;

        /**
         * Encodes the specified CKickPlayer message. Does not implicitly {@link gate.CKickPlayer.verify|verify} messages.
         * @param message CKickPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ICKickPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CKickPlayer message, length delimited. Does not implicitly {@link gate.CKickPlayer.verify|verify} messages.
         * @param message CKickPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ICKickPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CKickPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.CKickPlayer;

        /**
         * Decodes a CKickPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.CKickPlayer;

        /**
         * Verifies a CKickPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CKickPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CKickPlayer
         */
        public static fromObject(object: { [k: string]: any }): gate.CKickPlayer;

        /**
         * Creates a plain object from a CKickPlayer message. Also converts values to other types if specified.
         * @param message CKickPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.CKickPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CKickPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CKickPlayer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SKickPlayer. */
    interface ISKickPlayer {
    }

    /** Represents a SKickPlayer. */
    class SKickPlayer implements ISKickPlayer {

        /**
         * Constructs a new SKickPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ISKickPlayer);

        /**
         * Creates a new SKickPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SKickPlayer instance
         */
        public static create(properties?: gate.ISKickPlayer): gate.SKickPlayer;

        /**
         * Encodes the specified SKickPlayer message. Does not implicitly {@link gate.SKickPlayer.verify|verify} messages.
         * @param message SKickPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ISKickPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SKickPlayer message, length delimited. Does not implicitly {@link gate.SKickPlayer.verify|verify} messages.
         * @param message SKickPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ISKickPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SKickPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.SKickPlayer;

        /**
         * Decodes a SKickPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SKickPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.SKickPlayer;

        /**
         * Verifies a SKickPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SKickPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SKickPlayer
         */
        public static fromObject(object: { [k: string]: any }): gate.SKickPlayer;

        /**
         * Creates a plain object from a SKickPlayer message. Also converts values to other types if specified.
         * @param message SKickPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.SKickPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SKickPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SKickPlayer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CKickGamePlayers. */
    interface ICKickGamePlayers {

        /** CKickGamePlayers serverId */
        serverId?: (number|null);

        /** CKickGamePlayers reason */
        reason?: (common.KickPlayerReason|null);
    }

    /** Represents a CKickGamePlayers. */
    class CKickGamePlayers implements ICKickGamePlayers {

        /**
         * Constructs a new CKickGamePlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ICKickGamePlayers);

        /** CKickGamePlayers serverId. */
        public serverId: number;

        /** CKickGamePlayers reason. */
        public reason: common.KickPlayerReason;

        /**
         * Creates a new CKickGamePlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CKickGamePlayers instance
         */
        public static create(properties?: gate.ICKickGamePlayers): gate.CKickGamePlayers;

        /**
         * Encodes the specified CKickGamePlayers message. Does not implicitly {@link gate.CKickGamePlayers.verify|verify} messages.
         * @param message CKickGamePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ICKickGamePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CKickGamePlayers message, length delimited. Does not implicitly {@link gate.CKickGamePlayers.verify|verify} messages.
         * @param message CKickGamePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ICKickGamePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CKickGamePlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.CKickGamePlayers;

        /**
         * Decodes a CKickGamePlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.CKickGamePlayers;

        /**
         * Verifies a CKickGamePlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CKickGamePlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CKickGamePlayers
         */
        public static fromObject(object: { [k: string]: any }): gate.CKickGamePlayers;

        /**
         * Creates a plain object from a CKickGamePlayers message. Also converts values to other types if specified.
         * @param message CKickGamePlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.CKickGamePlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CKickGamePlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CKickGamePlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SKickGamePlayers. */
    interface ISKickGamePlayers {
    }

    /** Represents a SKickGamePlayers. */
    class SKickGamePlayers implements ISKickGamePlayers {

        /**
         * Constructs a new SKickGamePlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ISKickGamePlayers);

        /**
         * Creates a new SKickGamePlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SKickGamePlayers instance
         */
        public static create(properties?: gate.ISKickGamePlayers): gate.SKickGamePlayers;

        /**
         * Encodes the specified SKickGamePlayers message. Does not implicitly {@link gate.SKickGamePlayers.verify|verify} messages.
         * @param message SKickGamePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ISKickGamePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SKickGamePlayers message, length delimited. Does not implicitly {@link gate.SKickGamePlayers.verify|verify} messages.
         * @param message SKickGamePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ISKickGamePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SKickGamePlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.SKickGamePlayers;

        /**
         * Decodes a SKickGamePlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SKickGamePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.SKickGamePlayers;

        /**
         * Verifies a SKickGamePlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SKickGamePlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SKickGamePlayers
         */
        public static fromObject(object: { [k: string]: any }): gate.SKickGamePlayers;

        /**
         * Creates a plain object from a SKickGamePlayers message. Also converts values to other types if specified.
         * @param message SKickGamePlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.SKickGamePlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SKickGamePlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SKickGamePlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CBroadcastMessage. */
    interface ICBroadcastMessage {

        /** CBroadcastMessage msgType */
        msgType?: (string|null);

        /** CBroadcastMessage msgBody */
        msgBody?: (Uint8Array|null);
    }

    /** Represents a CBroadcastMessage. */
    class CBroadcastMessage implements ICBroadcastMessage {

        /**
         * Constructs a new CBroadcastMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ICBroadcastMessage);

        /** CBroadcastMessage msgType. */
        public msgType: string;

        /** CBroadcastMessage msgBody. */
        public msgBody: Uint8Array;

        /**
         * Creates a new CBroadcastMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CBroadcastMessage instance
         */
        public static create(properties?: gate.ICBroadcastMessage): gate.CBroadcastMessage;

        /**
         * Encodes the specified CBroadcastMessage message. Does not implicitly {@link gate.CBroadcastMessage.verify|verify} messages.
         * @param message CBroadcastMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ICBroadcastMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CBroadcastMessage message, length delimited. Does not implicitly {@link gate.CBroadcastMessage.verify|verify} messages.
         * @param message CBroadcastMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ICBroadcastMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CBroadcastMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.CBroadcastMessage;

        /**
         * Decodes a CBroadcastMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.CBroadcastMessage;

        /**
         * Verifies a CBroadcastMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CBroadcastMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CBroadcastMessage
         */
        public static fromObject(object: { [k: string]: any }): gate.CBroadcastMessage;

        /**
         * Creates a plain object from a CBroadcastMessage message. Also converts values to other types if specified.
         * @param message CBroadcastMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.CBroadcastMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CBroadcastMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CBroadcastMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SBroadcastMessage. */
    interface ISBroadcastMessage {
    }

    /** Represents a SBroadcastMessage. */
    class SBroadcastMessage implements ISBroadcastMessage {

        /**
         * Constructs a new SBroadcastMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ISBroadcastMessage);

        /**
         * Creates a new SBroadcastMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SBroadcastMessage instance
         */
        public static create(properties?: gate.ISBroadcastMessage): gate.SBroadcastMessage;

        /**
         * Encodes the specified SBroadcastMessage message. Does not implicitly {@link gate.SBroadcastMessage.verify|verify} messages.
         * @param message SBroadcastMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ISBroadcastMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SBroadcastMessage message, length delimited. Does not implicitly {@link gate.SBroadcastMessage.verify|verify} messages.
         * @param message SBroadcastMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ISBroadcastMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SBroadcastMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.SBroadcastMessage;

        /**
         * Decodes a SBroadcastMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SBroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.SBroadcastMessage;

        /**
         * Verifies a SBroadcastMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SBroadcastMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SBroadcastMessage
         */
        public static fromObject(object: { [k: string]: any }): gate.SBroadcastMessage;

        /**
         * Creates a plain object from a SBroadcastMessage message. Also converts values to other types if specified.
         * @param message SBroadcastMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.SBroadcastMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SBroadcastMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SBroadcastMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CBroadcastGameMessage. */
    interface ICBroadcastGameMessage {

        /** CBroadcastGameMessage serverId */
        serverId?: (number|null);

        /** CBroadcastGameMessage msgType */
        msgType?: (string|null);

        /** CBroadcastGameMessage msgBody */
        msgBody?: (Uint8Array|null);
    }

    /** Represents a CBroadcastGameMessage. */
    class CBroadcastGameMessage implements ICBroadcastGameMessage {

        /**
         * Constructs a new CBroadcastGameMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ICBroadcastGameMessage);

        /** CBroadcastGameMessage serverId. */
        public serverId: number;

        /** CBroadcastGameMessage msgType. */
        public msgType: string;

        /** CBroadcastGameMessage msgBody. */
        public msgBody: Uint8Array;

        /**
         * Creates a new CBroadcastGameMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CBroadcastGameMessage instance
         */
        public static create(properties?: gate.ICBroadcastGameMessage): gate.CBroadcastGameMessage;

        /**
         * Encodes the specified CBroadcastGameMessage message. Does not implicitly {@link gate.CBroadcastGameMessage.verify|verify} messages.
         * @param message CBroadcastGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ICBroadcastGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CBroadcastGameMessage message, length delimited. Does not implicitly {@link gate.CBroadcastGameMessage.verify|verify} messages.
         * @param message CBroadcastGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ICBroadcastGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CBroadcastGameMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.CBroadcastGameMessage;

        /**
         * Decodes a CBroadcastGameMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.CBroadcastGameMessage;

        /**
         * Verifies a CBroadcastGameMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CBroadcastGameMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CBroadcastGameMessage
         */
        public static fromObject(object: { [k: string]: any }): gate.CBroadcastGameMessage;

        /**
         * Creates a plain object from a CBroadcastGameMessage message. Also converts values to other types if specified.
         * @param message CBroadcastGameMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.CBroadcastGameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CBroadcastGameMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CBroadcastGameMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SBroadcastGameMessage. */
    interface ISBroadcastGameMessage {
    }

    /** Represents a SBroadcastGameMessage. */
    class SBroadcastGameMessage implements ISBroadcastGameMessage {

        /**
         * Constructs a new SBroadcastGameMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.ISBroadcastGameMessage);

        /**
         * Creates a new SBroadcastGameMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SBroadcastGameMessage instance
         */
        public static create(properties?: gate.ISBroadcastGameMessage): gate.SBroadcastGameMessage;

        /**
         * Encodes the specified SBroadcastGameMessage message. Does not implicitly {@link gate.SBroadcastGameMessage.verify|verify} messages.
         * @param message SBroadcastGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.ISBroadcastGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SBroadcastGameMessage message, length delimited. Does not implicitly {@link gate.SBroadcastGameMessage.verify|verify} messages.
         * @param message SBroadcastGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.ISBroadcastGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SBroadcastGameMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gate.SBroadcastGameMessage;

        /**
         * Decodes a SBroadcastGameMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SBroadcastGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gate.SBroadcastGameMessage;

        /**
         * Verifies a SBroadcastGameMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SBroadcastGameMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SBroadcastGameMessage
         */
        public static fromObject(object: { [k: string]: any }): gate.SBroadcastGameMessage;

        /**
         * Creates a plain object from a SBroadcastGameMessage message. Also converts values to other types if specified.
         * @param message SBroadcastGameMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gate.SBroadcastGameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SBroadcastGameMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SBroadcastGameMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** KickPlayerReason enum. */
    enum KickPlayerReason {
        ClientLeave = 0,
        DuplicateLogin = 1,
        ServerShutdown = 2,
        GMKick = 3,
        Banned = 4
    }
}
