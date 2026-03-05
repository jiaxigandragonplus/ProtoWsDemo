import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace game. */
export namespace game {

    /** Properties of a CLogin. */
    interface ICLogin {

        /** CLogin name */
        name?: (string|null);

        /** CLogin password */
        password?: (string|null);
    }

    /** Represents a CLogin. */
    class CLogin implements ICLogin {

        /**
         * Constructs a new CLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICLogin);

        /** CLogin name. */
        public name: string;

        /** CLogin password. */
        public password: string;

        /**
         * Creates a new CLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CLogin instance
         */
        public static create(properties?: game.ICLogin): game.CLogin;

        /**
         * Encodes the specified CLogin message. Does not implicitly {@link game.CLogin.verify|verify} messages.
         * @param message CLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CLogin message, length delimited. Does not implicitly {@link game.CLogin.verify|verify} messages.
         * @param message CLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.CLogin;

        /**
         * Decodes a CLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.CLogin;

        /**
         * Verifies a CLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CLogin
         */
        public static fromObject(object: { [k: string]: any }): game.CLogin;

        /**
         * Creates a plain object from a CLogin message. Also converts values to other types if specified.
         * @param message CLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SLogin. */
    interface ISLogin {

        /** SLogin playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a SLogin. */
    class SLogin implements ISLogin {

        /**
         * Constructs a new SLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISLogin);

        /** SLogin playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new SLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SLogin instance
         */
        public static create(properties?: game.ISLogin): game.SLogin;

        /**
         * Encodes the specified SLogin message. Does not implicitly {@link game.SLogin.verify|verify} messages.
         * @param message SLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SLogin message, length delimited. Does not implicitly {@link game.SLogin.verify|verify} messages.
         * @param message SLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.SLogin;

        /**
         * Decodes a SLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.SLogin;

        /**
         * Verifies a SLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SLogin
         */
        public static fromObject(object: { [k: string]: any }): game.SLogin;

        /**
         * Creates a plain object from a SLogin message. Also converts values to other types if specified.
         * @param message SLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CEcho. */
    interface ICEcho {

        /** CEcho msg */
        msg?: (string|null);
    }

    /** Represents a CEcho. */
    class CEcho implements ICEcho {

        /**
         * Constructs a new CEcho.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICEcho);

        /** CEcho msg. */
        public msg: string;

        /**
         * Creates a new CEcho instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CEcho instance
         */
        public static create(properties?: game.ICEcho): game.CEcho;

        /**
         * Encodes the specified CEcho message. Does not implicitly {@link game.CEcho.verify|verify} messages.
         * @param message CEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CEcho message, length delimited. Does not implicitly {@link game.CEcho.verify|verify} messages.
         * @param message CEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CEcho message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.CEcho;

        /**
         * Decodes a CEcho message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.CEcho;

        /**
         * Verifies a CEcho message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CEcho message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CEcho
         */
        public static fromObject(object: { [k: string]: any }): game.CEcho;

        /**
         * Creates a plain object from a CEcho message. Also converts values to other types if specified.
         * @param message CEcho
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CEcho to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CEcho
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SEcho. */
    interface ISEcho {

        /** SEcho msg */
        msg?: (string|null);
    }

    /** Represents a SEcho. */
    class SEcho implements ISEcho {

        /**
         * Constructs a new SEcho.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISEcho);

        /** SEcho msg. */
        public msg: string;

        /**
         * Creates a new SEcho instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SEcho instance
         */
        public static create(properties?: game.ISEcho): game.SEcho;

        /**
         * Encodes the specified SEcho message. Does not implicitly {@link game.SEcho.verify|verify} messages.
         * @param message SEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SEcho message, length delimited. Does not implicitly {@link game.SEcho.verify|verify} messages.
         * @param message SEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SEcho message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.SEcho;

        /**
         * Decodes a SEcho message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.SEcho;

        /**
         * Verifies a SEcho message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SEcho message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SEcho
         */
        public static fromObject(object: { [k: string]: any }): game.SEcho;

        /**
         * Creates a plain object from a SEcho message. Also converts values to other types if specified.
         * @param message SEcho
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SEcho to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SEcho
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CKickPlayers. */
    interface ICKickPlayers {

        /** CKickPlayers playerIds */
        playerIds?: ((number|Long)[]|null);

        /** CKickPlayers reason */
        reason?: (common.KickPlayerReason|null);
    }

    /** Represents a CKickPlayers. */
    class CKickPlayers implements ICKickPlayers {

        /**
         * Constructs a new CKickPlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICKickPlayers);

        /** CKickPlayers playerIds. */
        public playerIds: (number|Long)[];

        /** CKickPlayers reason. */
        public reason: common.KickPlayerReason;

        /**
         * Creates a new CKickPlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CKickPlayers instance
         */
        public static create(properties?: game.ICKickPlayers): game.CKickPlayers;

        /**
         * Encodes the specified CKickPlayers message. Does not implicitly {@link game.CKickPlayers.verify|verify} messages.
         * @param message CKickPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICKickPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CKickPlayers message, length delimited. Does not implicitly {@link game.CKickPlayers.verify|verify} messages.
         * @param message CKickPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICKickPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CKickPlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.CKickPlayers;

        /**
         * Decodes a CKickPlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.CKickPlayers;

        /**
         * Verifies a CKickPlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CKickPlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CKickPlayers
         */
        public static fromObject(object: { [k: string]: any }): game.CKickPlayers;

        /**
         * Creates a plain object from a CKickPlayers message. Also converts values to other types if specified.
         * @param message CKickPlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CKickPlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CKickPlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CKickPlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SKickPlayers. */
    interface ISKickPlayers {
    }

    /** Represents a SKickPlayers. */
    class SKickPlayers implements ISKickPlayers {

        /**
         * Constructs a new SKickPlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISKickPlayers);

        /**
         * Creates a new SKickPlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SKickPlayers instance
         */
        public static create(properties?: game.ISKickPlayers): game.SKickPlayers;

        /**
         * Encodes the specified SKickPlayers message. Does not implicitly {@link game.SKickPlayers.verify|verify} messages.
         * @param message SKickPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISKickPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SKickPlayers message, length delimited. Does not implicitly {@link game.SKickPlayers.verify|verify} messages.
         * @param message SKickPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISKickPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SKickPlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.SKickPlayers;

        /**
         * Decodes a SKickPlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SKickPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.SKickPlayers;

        /**
         * Verifies a SKickPlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SKickPlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SKickPlayers
         */
        public static fromObject(object: { [k: string]: any }): game.SKickPlayers;

        /**
         * Creates a plain object from a SKickPlayers message. Also converts values to other types if specified.
         * @param message SKickPlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SKickPlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SKickPlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SKickPlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CKickAllPlayers. */
    interface ICKickAllPlayers {

        /** CKickAllPlayers reason */
        reason?: (common.KickPlayerReason|null);
    }

    /** Represents a CKickAllPlayers. */
    class CKickAllPlayers implements ICKickAllPlayers {

        /**
         * Constructs a new CKickAllPlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICKickAllPlayers);

        /** CKickAllPlayers reason. */
        public reason: common.KickPlayerReason;

        /**
         * Creates a new CKickAllPlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CKickAllPlayers instance
         */
        public static create(properties?: game.ICKickAllPlayers): game.CKickAllPlayers;

        /**
         * Encodes the specified CKickAllPlayers message. Does not implicitly {@link game.CKickAllPlayers.verify|verify} messages.
         * @param message CKickAllPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICKickAllPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CKickAllPlayers message, length delimited. Does not implicitly {@link game.CKickAllPlayers.verify|verify} messages.
         * @param message CKickAllPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICKickAllPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CKickAllPlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.CKickAllPlayers;

        /**
         * Decodes a CKickAllPlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.CKickAllPlayers;

        /**
         * Verifies a CKickAllPlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CKickAllPlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CKickAllPlayers
         */
        public static fromObject(object: { [k: string]: any }): game.CKickAllPlayers;

        /**
         * Creates a plain object from a CKickAllPlayers message. Also converts values to other types if specified.
         * @param message CKickAllPlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CKickAllPlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CKickAllPlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CKickAllPlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SKickAllPlayers. */
    interface ISKickAllPlayers {
    }

    /** Represents a SKickAllPlayers. */
    class SKickAllPlayers implements ISKickAllPlayers {

        /**
         * Constructs a new SKickAllPlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISKickAllPlayers);

        /**
         * Creates a new SKickAllPlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SKickAllPlayers instance
         */
        public static create(properties?: game.ISKickAllPlayers): game.SKickAllPlayers;

        /**
         * Encodes the specified SKickAllPlayers message. Does not implicitly {@link game.SKickAllPlayers.verify|verify} messages.
         * @param message SKickAllPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISKickAllPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SKickAllPlayers message, length delimited. Does not implicitly {@link game.SKickAllPlayers.verify|verify} messages.
         * @param message SKickAllPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISKickAllPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SKickAllPlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.SKickAllPlayers;

        /**
         * Decodes a SKickAllPlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SKickAllPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.SKickAllPlayers;

        /**
         * Verifies a SKickAllPlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SKickAllPlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SKickAllPlayers
         */
        public static fromObject(object: { [k: string]: any }): game.SKickAllPlayers;

        /**
         * Creates a plain object from a SKickAllPlayers message. Also converts values to other types if specified.
         * @param message SKickAllPlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SKickAllPlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SKickAllPlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SKickAllPlayers
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
