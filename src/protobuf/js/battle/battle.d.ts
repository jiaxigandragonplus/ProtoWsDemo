import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace battle. */
export namespace battle {

    /** Properties of a CSendCommand. */
    interface ICSendCommand {

        /** CSendCommand instId */
        instId?: (number|Long|null);

        /** CSendCommand card */
        card?: (number|null);

        /** CSendCommand routes */
        routes?: (common.IRouteInfo[]|null);
    }

    /** Represents a CSendCommand. */
    class CSendCommand implements ICSendCommand {

        /**
         * Constructs a new CSendCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICSendCommand);

        /** CSendCommand instId. */
        public instId: (number|Long);

        /** CSendCommand card. */
        public card: number;

        /** CSendCommand routes. */
        public routes: common.IRouteInfo[];

        /**
         * Creates a new CSendCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CSendCommand instance
         */
        public static create(properties?: battle.ICSendCommand): battle.CSendCommand;

        /**
         * Encodes the specified CSendCommand message. Does not implicitly {@link battle.CSendCommand.verify|verify} messages.
         * @param message CSendCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICSendCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CSendCommand message, length delimited. Does not implicitly {@link battle.CSendCommand.verify|verify} messages.
         * @param message CSendCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICSendCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSendCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CSendCommand;

        /**
         * Decodes a CSendCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CSendCommand;

        /**
         * Verifies a CSendCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CSendCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CSendCommand
         */
        public static fromObject(object: { [k: string]: any }): battle.CSendCommand;

        /**
         * Creates a plain object from a CSendCommand message. Also converts values to other types if specified.
         * @param message CSendCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CSendCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CSendCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CSendCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SSendCommand. */
    interface ISSendCommand {
    }

    /** Represents a SSendCommand. */
    class SSendCommand implements ISSendCommand {

        /**
         * Constructs a new SSendCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISSendCommand);

        /**
         * Creates a new SSendCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SSendCommand instance
         */
        public static create(properties?: battle.ISSendCommand): battle.SSendCommand;

        /**
         * Encodes the specified SSendCommand message. Does not implicitly {@link battle.SSendCommand.verify|verify} messages.
         * @param message SSendCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISSendCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SSendCommand message, length delimited. Does not implicitly {@link battle.SSendCommand.verify|verify} messages.
         * @param message SSendCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISSendCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSendCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SSendCommand;

        /**
         * Decodes a SSendCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SSendCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SSendCommand;

        /**
         * Verifies a SSendCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SSendCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SSendCommand
         */
        public static fromObject(object: { [k: string]: any }): battle.SSendCommand;

        /**
         * Creates a plain object from a SSendCommand message. Also converts values to other types if specified.
         * @param message SSendCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SSendCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SSendCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SSendCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CResLoadCommpelte. */
    interface ICResLoadCommpelte {
    }

    /** Represents a CResLoadCommpelte. */
    class CResLoadCommpelte implements ICResLoadCommpelte {

        /**
         * Constructs a new CResLoadCommpelte.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICResLoadCommpelte);

        /**
         * Creates a new CResLoadCommpelte instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CResLoadCommpelte instance
         */
        public static create(properties?: battle.ICResLoadCommpelte): battle.CResLoadCommpelte;

        /**
         * Encodes the specified CResLoadCommpelte message. Does not implicitly {@link battle.CResLoadCommpelte.verify|verify} messages.
         * @param message CResLoadCommpelte message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICResLoadCommpelte, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CResLoadCommpelte message, length delimited. Does not implicitly {@link battle.CResLoadCommpelte.verify|verify} messages.
         * @param message CResLoadCommpelte message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICResLoadCommpelte, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CResLoadCommpelte message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CResLoadCommpelte
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CResLoadCommpelte;

        /**
         * Decodes a CResLoadCommpelte message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CResLoadCommpelte
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CResLoadCommpelte;

        /**
         * Verifies a CResLoadCommpelte message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CResLoadCommpelte message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CResLoadCommpelte
         */
        public static fromObject(object: { [k: string]: any }): battle.CResLoadCommpelte;

        /**
         * Creates a plain object from a CResLoadCommpelte message. Also converts values to other types if specified.
         * @param message CResLoadCommpelte
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CResLoadCommpelte, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CResLoadCommpelte to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CResLoadCommpelte
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SResLoadComplete. */
    interface ISResLoadComplete {
    }

    /** Represents a SResLoadComplete. */
    class SResLoadComplete implements ISResLoadComplete {

        /**
         * Constructs a new SResLoadComplete.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISResLoadComplete);

        /**
         * Creates a new SResLoadComplete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SResLoadComplete instance
         */
        public static create(properties?: battle.ISResLoadComplete): battle.SResLoadComplete;

        /**
         * Encodes the specified SResLoadComplete message. Does not implicitly {@link battle.SResLoadComplete.verify|verify} messages.
         * @param message SResLoadComplete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISResLoadComplete, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SResLoadComplete message, length delimited. Does not implicitly {@link battle.SResLoadComplete.verify|verify} messages.
         * @param message SResLoadComplete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISResLoadComplete, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SResLoadComplete message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SResLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SResLoadComplete;

        /**
         * Decodes a SResLoadComplete message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SResLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SResLoadComplete;

        /**
         * Verifies a SResLoadComplete message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SResLoadComplete message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SResLoadComplete
         */
        public static fromObject(object: { [k: string]: any }): battle.SResLoadComplete;

        /**
         * Creates a plain object from a SResLoadComplete message. Also converts values to other types if specified.
         * @param message SResLoadComplete
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SResLoadComplete, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SResLoadComplete to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SResLoadComplete
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CRemoveCard. */
    interface ICRemoveCard {

        /** CRemoveCard instId */
        instId?: (number|Long|null);
    }

    /** Represents a CRemoveCard. */
    class CRemoveCard implements ICRemoveCard {

        /**
         * Constructs a new CRemoveCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICRemoveCard);

        /** CRemoveCard instId. */
        public instId: (number|Long);

        /**
         * Creates a new CRemoveCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRemoveCard instance
         */
        public static create(properties?: battle.ICRemoveCard): battle.CRemoveCard;

        /**
         * Encodes the specified CRemoveCard message. Does not implicitly {@link battle.CRemoveCard.verify|verify} messages.
         * @param message CRemoveCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICRemoveCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRemoveCard message, length delimited. Does not implicitly {@link battle.CRemoveCard.verify|verify} messages.
         * @param message CRemoveCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICRemoveCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRemoveCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CRemoveCard;

        /**
         * Decodes a CRemoveCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CRemoveCard;

        /**
         * Verifies a CRemoveCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRemoveCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRemoveCard
         */
        public static fromObject(object: { [k: string]: any }): battle.CRemoveCard;

        /**
         * Creates a plain object from a CRemoveCard message. Also converts values to other types if specified.
         * @param message CRemoveCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CRemoveCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRemoveCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CRemoveCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SRemoveCard. */
    interface ISRemoveCard {
    }

    /** Represents a SRemoveCard. */
    class SRemoveCard implements ISRemoveCard {

        /**
         * Constructs a new SRemoveCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISRemoveCard);

        /**
         * Creates a new SRemoveCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SRemoveCard instance
         */
        public static create(properties?: battle.ISRemoveCard): battle.SRemoveCard;

        /**
         * Encodes the specified SRemoveCard message. Does not implicitly {@link battle.SRemoveCard.verify|verify} messages.
         * @param message SRemoveCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISRemoveCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SRemoveCard message, length delimited. Does not implicitly {@link battle.SRemoveCard.verify|verify} messages.
         * @param message SRemoveCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISRemoveCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SRemoveCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SRemoveCard;

        /**
         * Decodes a SRemoveCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SRemoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SRemoveCard;

        /**
         * Verifies a SRemoveCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SRemoveCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SRemoveCard
         */
        public static fromObject(object: { [k: string]: any }): battle.SRemoveCard;

        /**
         * Creates a plain object from a SRemoveCard message. Also converts values to other types if specified.
         * @param message SRemoveCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SRemoveCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SRemoveCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SRemoveCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CBattleOver. */
    interface ICBattleOver {

        /** CBattleOver winner */
        winner?: (string|null);

        /** CBattleOver cups */
        cups?: (number[]|null);

        /** CBattleOver crowns */
        crowns?: (number[]|null);

        /** CBattleOver turnTheTile */
        turnTheTile?: (number|null);

        /** CBattleOver endFrame */
        endFrame?: (number|null);
    }

    /** Represents a CBattleOver. */
    class CBattleOver implements ICBattleOver {

        /**
         * Constructs a new CBattleOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICBattleOver);

        /** CBattleOver winner. */
        public winner: string;

        /** CBattleOver cups. */
        public cups: number[];

        /** CBattleOver crowns. */
        public crowns: number[];

        /** CBattleOver turnTheTile. */
        public turnTheTile: number;

        /** CBattleOver endFrame. */
        public endFrame: number;

        /**
         * Creates a new CBattleOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CBattleOver instance
         */
        public static create(properties?: battle.ICBattleOver): battle.CBattleOver;

        /**
         * Encodes the specified CBattleOver message. Does not implicitly {@link battle.CBattleOver.verify|verify} messages.
         * @param message CBattleOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICBattleOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CBattleOver message, length delimited. Does not implicitly {@link battle.CBattleOver.verify|verify} messages.
         * @param message CBattleOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICBattleOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CBattleOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CBattleOver;

        /**
         * Decodes a CBattleOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CBattleOver;

        /**
         * Verifies a CBattleOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CBattleOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CBattleOver
         */
        public static fromObject(object: { [k: string]: any }): battle.CBattleOver;

        /**
         * Creates a plain object from a CBattleOver message. Also converts values to other types if specified.
         * @param message CBattleOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CBattleOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CBattleOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CBattleOver
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SBattleOver. */
    interface ISBattleOver {
    }

    /** Represents a SBattleOver. */
    class SBattleOver implements ISBattleOver {

        /**
         * Constructs a new SBattleOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISBattleOver);

        /**
         * Creates a new SBattleOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SBattleOver instance
         */
        public static create(properties?: battle.ISBattleOver): battle.SBattleOver;

        /**
         * Encodes the specified SBattleOver message. Does not implicitly {@link battle.SBattleOver.verify|verify} messages.
         * @param message SBattleOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISBattleOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SBattleOver message, length delimited. Does not implicitly {@link battle.SBattleOver.verify|verify} messages.
         * @param message SBattleOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISBattleOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SBattleOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SBattleOver;

        /**
         * Decodes a SBattleOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SBattleOver;

        /**
         * Verifies a SBattleOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SBattleOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SBattleOver
         */
        public static fromObject(object: { [k: string]: any }): battle.SBattleOver;

        /**
         * Creates a plain object from a SBattleOver message. Also converts values to other types if specified.
         * @param message SBattleOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SBattleOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SBattleOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SBattleOver
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CDrawCard. */
    interface ICDrawCard {
    }

    /** Represents a CDrawCard. */
    class CDrawCard implements ICDrawCard {

        /**
         * Constructs a new CDrawCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICDrawCard);

        /**
         * Creates a new CDrawCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CDrawCard instance
         */
        public static create(properties?: battle.ICDrawCard): battle.CDrawCard;

        /**
         * Encodes the specified CDrawCard message. Does not implicitly {@link battle.CDrawCard.verify|verify} messages.
         * @param message CDrawCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICDrawCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CDrawCard message, length delimited. Does not implicitly {@link battle.CDrawCard.verify|verify} messages.
         * @param message CDrawCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICDrawCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CDrawCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CDrawCard;

        /**
         * Decodes a CDrawCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CDrawCard;

        /**
         * Verifies a CDrawCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CDrawCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CDrawCard
         */
        public static fromObject(object: { [k: string]: any }): battle.CDrawCard;

        /**
         * Creates a plain object from a CDrawCard message. Also converts values to other types if specified.
         * @param message CDrawCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CDrawCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CDrawCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CDrawCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SDrawCard. */
    interface ISDrawCard {

        /** SDrawCard instId */
        instId?: (number|Long|null);

        /** SDrawCard cardId */
        cardId?: (number|null);
    }

    /** Represents a SDrawCard. */
    class SDrawCard implements ISDrawCard {

        /**
         * Constructs a new SDrawCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISDrawCard);

        /** SDrawCard instId. */
        public instId: (number|Long);

        /** SDrawCard cardId. */
        public cardId: number;

        /**
         * Creates a new SDrawCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SDrawCard instance
         */
        public static create(properties?: battle.ISDrawCard): battle.SDrawCard;

        /**
         * Encodes the specified SDrawCard message. Does not implicitly {@link battle.SDrawCard.verify|verify} messages.
         * @param message SDrawCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISDrawCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SDrawCard message, length delimited. Does not implicitly {@link battle.SDrawCard.verify|verify} messages.
         * @param message SDrawCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISDrawCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SDrawCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SDrawCard;

        /**
         * Decodes a SDrawCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SDrawCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SDrawCard;

        /**
         * Verifies a SDrawCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SDrawCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SDrawCard
         */
        public static fromObject(object: { [k: string]: any }): battle.SDrawCard;

        /**
         * Creates a plain object from a SDrawCard message. Also converts values to other types if specified.
         * @param message SDrawCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SDrawCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SDrawCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SDrawCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CGetLocalWinAwards. */
    interface ICGetLocalWinAwards {
    }

    /** Represents a CGetLocalWinAwards. */
    class CGetLocalWinAwards implements ICGetLocalWinAwards {

        /**
         * Constructs a new CGetLocalWinAwards.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICGetLocalWinAwards);

        /**
         * Creates a new CGetLocalWinAwards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGetLocalWinAwards instance
         */
        public static create(properties?: battle.ICGetLocalWinAwards): battle.CGetLocalWinAwards;

        /**
         * Encodes the specified CGetLocalWinAwards message. Does not implicitly {@link battle.CGetLocalWinAwards.verify|verify} messages.
         * @param message CGetLocalWinAwards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICGetLocalWinAwards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGetLocalWinAwards message, length delimited. Does not implicitly {@link battle.CGetLocalWinAwards.verify|verify} messages.
         * @param message CGetLocalWinAwards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICGetLocalWinAwards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGetLocalWinAwards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CGetLocalWinAwards;

        /**
         * Decodes a CGetLocalWinAwards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CGetLocalWinAwards;

        /**
         * Verifies a CGetLocalWinAwards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGetLocalWinAwards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGetLocalWinAwards
         */
        public static fromObject(object: { [k: string]: any }): battle.CGetLocalWinAwards;

        /**
         * Creates a plain object from a CGetLocalWinAwards message. Also converts values to other types if specified.
         * @param message CGetLocalWinAwards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CGetLocalWinAwards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGetLocalWinAwards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CGetLocalWinAwards
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SGetLocalWinAwards. */
    interface ISGetLocalWinAwards {

        /** SGetLocalWinAwards awards */
        awards?: (common.IReward[]|null);
    }

    /** Represents a SGetLocalWinAwards. */
    class SGetLocalWinAwards implements ISGetLocalWinAwards {

        /**
         * Constructs a new SGetLocalWinAwards.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISGetLocalWinAwards);

        /** SGetLocalWinAwards awards. */
        public awards: common.IReward[];

        /**
         * Creates a new SGetLocalWinAwards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SGetLocalWinAwards instance
         */
        public static create(properties?: battle.ISGetLocalWinAwards): battle.SGetLocalWinAwards;

        /**
         * Encodes the specified SGetLocalWinAwards message. Does not implicitly {@link battle.SGetLocalWinAwards.verify|verify} messages.
         * @param message SGetLocalWinAwards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISGetLocalWinAwards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SGetLocalWinAwards message, length delimited. Does not implicitly {@link battle.SGetLocalWinAwards.verify|verify} messages.
         * @param message SGetLocalWinAwards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISGetLocalWinAwards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SGetLocalWinAwards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SGetLocalWinAwards;

        /**
         * Decodes a SGetLocalWinAwards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SGetLocalWinAwards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SGetLocalWinAwards;

        /**
         * Verifies a SGetLocalWinAwards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SGetLocalWinAwards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SGetLocalWinAwards
         */
        public static fromObject(object: { [k: string]: any }): battle.SGetLocalWinAwards;

        /**
         * Creates a plain object from a SGetLocalWinAwards message. Also converts values to other types if specified.
         * @param message SGetLocalWinAwards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SGetLocalWinAwards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SGetLocalWinAwards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SGetLocalWinAwards
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CCheckIsInBattle. */
    interface ICCheckIsInBattle {
    }

    /** Represents a CCheckIsInBattle. */
    class CCheckIsInBattle implements ICCheckIsInBattle {

        /**
         * Constructs a new CCheckIsInBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICCheckIsInBattle);

        /**
         * Creates a new CCheckIsInBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CCheckIsInBattle instance
         */
        public static create(properties?: battle.ICCheckIsInBattle): battle.CCheckIsInBattle;

        /**
         * Encodes the specified CCheckIsInBattle message. Does not implicitly {@link battle.CCheckIsInBattle.verify|verify} messages.
         * @param message CCheckIsInBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICCheckIsInBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CCheckIsInBattle message, length delimited. Does not implicitly {@link battle.CCheckIsInBattle.verify|verify} messages.
         * @param message CCheckIsInBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICCheckIsInBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CCheckIsInBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CCheckIsInBattle;

        /**
         * Decodes a CCheckIsInBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CCheckIsInBattle;

        /**
         * Verifies a CCheckIsInBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CCheckIsInBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CCheckIsInBattle
         */
        public static fromObject(object: { [k: string]: any }): battle.CCheckIsInBattle;

        /**
         * Creates a plain object from a CCheckIsInBattle message. Also converts values to other types if specified.
         * @param message CCheckIsInBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CCheckIsInBattle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CCheckIsInBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CCheckIsInBattle
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SCheckIsInBattle. */
    interface ISCheckIsInBattle {

        /** SCheckIsInBattle replayData */
        replayData?: (common.IBattleFieldData|null);
    }

    /** Represents a SCheckIsInBattle. */
    class SCheckIsInBattle implements ISCheckIsInBattle {

        /**
         * Constructs a new SCheckIsInBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISCheckIsInBattle);

        /** SCheckIsInBattle replayData. */
        public replayData?: (common.IBattleFieldData|null);

        /**
         * Creates a new SCheckIsInBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SCheckIsInBattle instance
         */
        public static create(properties?: battle.ISCheckIsInBattle): battle.SCheckIsInBattle;

        /**
         * Encodes the specified SCheckIsInBattle message. Does not implicitly {@link battle.SCheckIsInBattle.verify|verify} messages.
         * @param message SCheckIsInBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISCheckIsInBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SCheckIsInBattle message, length delimited. Does not implicitly {@link battle.SCheckIsInBattle.verify|verify} messages.
         * @param message SCheckIsInBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISCheckIsInBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCheckIsInBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SCheckIsInBattle;

        /**
         * Decodes a SCheckIsInBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SCheckIsInBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SCheckIsInBattle;

        /**
         * Verifies a SCheckIsInBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SCheckIsInBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SCheckIsInBattle
         */
        public static fromObject(object: { [k: string]: any }): battle.SCheckIsInBattle;

        /**
         * Creates a plain object from a SCheckIsInBattle message. Also converts values to other types if specified.
         * @param message SCheckIsInBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SCheckIsInBattle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SCheckIsInBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SCheckIsInBattle
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CRequestFrameData. */
    interface ICRequestFrameData {
    }

    /** Represents a CRequestFrameData. */
    class CRequestFrameData implements ICRequestFrameData {

        /**
         * Constructs a new CRequestFrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ICRequestFrameData);

        /**
         * Creates a new CRequestFrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRequestFrameData instance
         */
        public static create(properties?: battle.ICRequestFrameData): battle.CRequestFrameData;

        /**
         * Encodes the specified CRequestFrameData message. Does not implicitly {@link battle.CRequestFrameData.verify|verify} messages.
         * @param message CRequestFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ICRequestFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRequestFrameData message, length delimited. Does not implicitly {@link battle.CRequestFrameData.verify|verify} messages.
         * @param message CRequestFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ICRequestFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRequestFrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.CRequestFrameData;

        /**
         * Decodes a CRequestFrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.CRequestFrameData;

        /**
         * Verifies a CRequestFrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRequestFrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRequestFrameData
         */
        public static fromObject(object: { [k: string]: any }): battle.CRequestFrameData;

        /**
         * Creates a plain object from a CRequestFrameData message. Also converts values to other types if specified.
         * @param message CRequestFrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.CRequestFrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRequestFrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CRequestFrameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SRequestFrameData. */
    interface ISRequestFrameData {

        /** SRequestFrameData curFrame */
        curFrame?: (number|null);

        /** SRequestFrameData frameData */
        frameData?: ({ [k: string]: common.IFrameData }|null);
    }

    /** Represents a SRequestFrameData. */
    class SRequestFrameData implements ISRequestFrameData {

        /**
         * Constructs a new SRequestFrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.ISRequestFrameData);

        /** SRequestFrameData curFrame. */
        public curFrame: number;

        /** SRequestFrameData frameData. */
        public frameData: { [k: string]: common.IFrameData };

        /**
         * Creates a new SRequestFrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SRequestFrameData instance
         */
        public static create(properties?: battle.ISRequestFrameData): battle.SRequestFrameData;

        /**
         * Encodes the specified SRequestFrameData message. Does not implicitly {@link battle.SRequestFrameData.verify|verify} messages.
         * @param message SRequestFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.ISRequestFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SRequestFrameData message, length delimited. Does not implicitly {@link battle.SRequestFrameData.verify|verify} messages.
         * @param message SRequestFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.ISRequestFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SRequestFrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.SRequestFrameData;

        /**
         * Decodes a SRequestFrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SRequestFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.SRequestFrameData;

        /**
         * Verifies a SRequestFrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SRequestFrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SRequestFrameData
         */
        public static fromObject(object: { [k: string]: any }): battle.SRequestFrameData;

        /**
         * Creates a plain object from a SRequestFrameData message. Also converts values to other types if specified.
         * @param message SRequestFrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.SRequestFrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SRequestFrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SRequestFrameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PNotifyBattleInit. */
    interface IPNotifyBattleInit {
    }

    /** Represents a PNotifyBattleInit. */
    class PNotifyBattleInit implements IPNotifyBattleInit {

        /**
         * Constructs a new PNotifyBattleInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPNotifyBattleInit);

        /**
         * Creates a new PNotifyBattleInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PNotifyBattleInit instance
         */
        public static create(properties?: battle.IPNotifyBattleInit): battle.PNotifyBattleInit;

        /**
         * Encodes the specified PNotifyBattleInit message. Does not implicitly {@link battle.PNotifyBattleInit.verify|verify} messages.
         * @param message PNotifyBattleInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPNotifyBattleInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PNotifyBattleInit message, length delimited. Does not implicitly {@link battle.PNotifyBattleInit.verify|verify} messages.
         * @param message PNotifyBattleInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPNotifyBattleInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PNotifyBattleInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PNotifyBattleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PNotifyBattleInit;

        /**
         * Decodes a PNotifyBattleInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PNotifyBattleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PNotifyBattleInit;

        /**
         * Verifies a PNotifyBattleInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PNotifyBattleInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PNotifyBattleInit
         */
        public static fromObject(object: { [k: string]: any }): battle.PNotifyBattleInit;

        /**
         * Creates a plain object from a PNotifyBattleInit message. Also converts values to other types if specified.
         * @param message PNotifyBattleInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PNotifyBattleInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PNotifyBattleInit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PNotifyBattleInit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PNotifyBattleStart. */
    interface IPNotifyBattleStart {
    }

    /** Represents a PNotifyBattleStart. */
    class PNotifyBattleStart implements IPNotifyBattleStart {

        /**
         * Constructs a new PNotifyBattleStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPNotifyBattleStart);

        /**
         * Creates a new PNotifyBattleStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PNotifyBattleStart instance
         */
        public static create(properties?: battle.IPNotifyBattleStart): battle.PNotifyBattleStart;

        /**
         * Encodes the specified PNotifyBattleStart message. Does not implicitly {@link battle.PNotifyBattleStart.verify|verify} messages.
         * @param message PNotifyBattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPNotifyBattleStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PNotifyBattleStart message, length delimited. Does not implicitly {@link battle.PNotifyBattleStart.verify|verify} messages.
         * @param message PNotifyBattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPNotifyBattleStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PNotifyBattleStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PNotifyBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PNotifyBattleStart;

        /**
         * Decodes a PNotifyBattleStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PNotifyBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PNotifyBattleStart;

        /**
         * Verifies a PNotifyBattleStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PNotifyBattleStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PNotifyBattleStart
         */
        public static fromObject(object: { [k: string]: any }): battle.PNotifyBattleStart;

        /**
         * Creates a plain object from a PNotifyBattleStart message. Also converts values to other types if specified.
         * @param message PNotifyBattleStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PNotifyBattleStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PNotifyBattleStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PNotifyBattleStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PSyncFrameData. */
    interface IPSyncFrameData {
    }

    /** Represents a PSyncFrameData. */
    class PSyncFrameData implements IPSyncFrameData {

        /**
         * Constructs a new PSyncFrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPSyncFrameData);

        /**
         * Creates a new PSyncFrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PSyncFrameData instance
         */
        public static create(properties?: battle.IPSyncFrameData): battle.PSyncFrameData;

        /**
         * Encodes the specified PSyncFrameData message. Does not implicitly {@link battle.PSyncFrameData.verify|verify} messages.
         * @param message PSyncFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPSyncFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PSyncFrameData message, length delimited. Does not implicitly {@link battle.PSyncFrameData.verify|verify} messages.
         * @param message PSyncFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPSyncFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PSyncFrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PSyncFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PSyncFrameData;

        /**
         * Decodes a PSyncFrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PSyncFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PSyncFrameData;

        /**
         * Verifies a PSyncFrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PSyncFrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PSyncFrameData
         */
        public static fromObject(object: { [k: string]: any }): battle.PSyncFrameData;

        /**
         * Creates a plain object from a PSyncFrameData message. Also converts values to other types if specified.
         * @param message PSyncFrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PSyncFrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PSyncFrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PSyncFrameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PNotifyNewCard. */
    interface IPNotifyNewCard {
    }

    /** Represents a PNotifyNewCard. */
    class PNotifyNewCard implements IPNotifyNewCard {

        /**
         * Constructs a new PNotifyNewCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPNotifyNewCard);

        /**
         * Creates a new PNotifyNewCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PNotifyNewCard instance
         */
        public static create(properties?: battle.IPNotifyNewCard): battle.PNotifyNewCard;

        /**
         * Encodes the specified PNotifyNewCard message. Does not implicitly {@link battle.PNotifyNewCard.verify|verify} messages.
         * @param message PNotifyNewCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPNotifyNewCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PNotifyNewCard message, length delimited. Does not implicitly {@link battle.PNotifyNewCard.verify|verify} messages.
         * @param message PNotifyNewCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPNotifyNewCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PNotifyNewCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PNotifyNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PNotifyNewCard;

        /**
         * Decodes a PNotifyNewCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PNotifyNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PNotifyNewCard;

        /**
         * Verifies a PNotifyNewCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PNotifyNewCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PNotifyNewCard
         */
        public static fromObject(object: { [k: string]: any }): battle.PNotifyNewCard;

        /**
         * Creates a plain object from a PNotifyNewCard message. Also converts values to other types if specified.
         * @param message PNotifyNewCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PNotifyNewCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PNotifyNewCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PNotifyNewCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PNotifyPowerRecover. */
    interface IPNotifyPowerRecover {
    }

    /** Represents a PNotifyPowerRecover. */
    class PNotifyPowerRecover implements IPNotifyPowerRecover {

        /**
         * Constructs a new PNotifyPowerRecover.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPNotifyPowerRecover);

        /**
         * Creates a new PNotifyPowerRecover instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PNotifyPowerRecover instance
         */
        public static create(properties?: battle.IPNotifyPowerRecover): battle.PNotifyPowerRecover;

        /**
         * Encodes the specified PNotifyPowerRecover message. Does not implicitly {@link battle.PNotifyPowerRecover.verify|verify} messages.
         * @param message PNotifyPowerRecover message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPNotifyPowerRecover, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PNotifyPowerRecover message, length delimited. Does not implicitly {@link battle.PNotifyPowerRecover.verify|verify} messages.
         * @param message PNotifyPowerRecover message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPNotifyPowerRecover, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PNotifyPowerRecover message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PNotifyPowerRecover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PNotifyPowerRecover;

        /**
         * Decodes a PNotifyPowerRecover message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PNotifyPowerRecover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PNotifyPowerRecover;

        /**
         * Verifies a PNotifyPowerRecover message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PNotifyPowerRecover message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PNotifyPowerRecover
         */
        public static fromObject(object: { [k: string]: any }): battle.PNotifyPowerRecover;

        /**
         * Creates a plain object from a PNotifyPowerRecover message. Also converts values to other types if specified.
         * @param message PNotifyPowerRecover
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PNotifyPowerRecover, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PNotifyPowerRecover to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PNotifyPowerRecover
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PNotifyBattleOver. */
    interface IPNotifyBattleOver {
    }

    /** Represents a PNotifyBattleOver. */
    class PNotifyBattleOver implements IPNotifyBattleOver {

        /**
         * Constructs a new PNotifyBattleOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPNotifyBattleOver);

        /**
         * Creates a new PNotifyBattleOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PNotifyBattleOver instance
         */
        public static create(properties?: battle.IPNotifyBattleOver): battle.PNotifyBattleOver;

        /**
         * Encodes the specified PNotifyBattleOver message. Does not implicitly {@link battle.PNotifyBattleOver.verify|verify} messages.
         * @param message PNotifyBattleOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPNotifyBattleOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PNotifyBattleOver message, length delimited. Does not implicitly {@link battle.PNotifyBattleOver.verify|verify} messages.
         * @param message PNotifyBattleOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPNotifyBattleOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PNotifyBattleOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PNotifyBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PNotifyBattleOver;

        /**
         * Decodes a PNotifyBattleOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PNotifyBattleOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PNotifyBattleOver;

        /**
         * Verifies a PNotifyBattleOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PNotifyBattleOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PNotifyBattleOver
         */
        public static fromObject(object: { [k: string]: any }): battle.PNotifyBattleOver;

        /**
         * Creates a plain object from a PNotifyBattleOver message. Also converts values to other types if specified.
         * @param message PNotifyBattleOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PNotifyBattleOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PNotifyBattleOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PNotifyBattleOver
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PNotifyEnemyCardNum. */
    interface IPNotifyEnemyCardNum {
    }

    /** Represents a PNotifyEnemyCardNum. */
    class PNotifyEnemyCardNum implements IPNotifyEnemyCardNum {

        /**
         * Constructs a new PNotifyEnemyCardNum.
         * @param [properties] Properties to set
         */
        constructor(properties?: battle.IPNotifyEnemyCardNum);

        /**
         * Creates a new PNotifyEnemyCardNum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PNotifyEnemyCardNum instance
         */
        public static create(properties?: battle.IPNotifyEnemyCardNum): battle.PNotifyEnemyCardNum;

        /**
         * Encodes the specified PNotifyEnemyCardNum message. Does not implicitly {@link battle.PNotifyEnemyCardNum.verify|verify} messages.
         * @param message PNotifyEnemyCardNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: battle.IPNotifyEnemyCardNum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PNotifyEnemyCardNum message, length delimited. Does not implicitly {@link battle.PNotifyEnemyCardNum.verify|verify} messages.
         * @param message PNotifyEnemyCardNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: battle.IPNotifyEnemyCardNum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PNotifyEnemyCardNum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PNotifyEnemyCardNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.PNotifyEnemyCardNum;

        /**
         * Decodes a PNotifyEnemyCardNum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PNotifyEnemyCardNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.PNotifyEnemyCardNum;

        /**
         * Verifies a PNotifyEnemyCardNum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PNotifyEnemyCardNum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PNotifyEnemyCardNum
         */
        public static fromObject(object: { [k: string]: any }): battle.PNotifyEnemyCardNum;

        /**
         * Creates a plain object from a PNotifyEnemyCardNum message. Also converts values to other types if specified.
         * @param message PNotifyEnemyCardNum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: battle.PNotifyEnemyCardNum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PNotifyEnemyCardNum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PNotifyEnemyCardNum
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** BattleState enum. */
    enum BattleState {
        BATTLE_STATE_UNKNOWN = 0,
        BATTLE_STATE_INIT = 1,
        BATTLE_STATE_LOADING = 2,
        BATTLE_STATE_COUNT_DOWN = 3,
        BATTLE_STATE_FIGHTING = 4,
        BATTLE_STATE_OVER = 5,
        BATTLE_STATE_DELETE = 6
    }

    /** BattleFieldType enum. */
    enum BattleFieldType {
        BATTLE_FIELD_INVALID = 0,
        BATTLE_FIELD_NORMAL = 1,
        BATTLE_FIELD_REPLAY = 2,
        BATTLE_FIELD_CHECK_RESULT = 3
    }

    /** BattleSide enum. */
    enum BattleSide {
        LEFT = 0,
        RIGHT = 1,
        MAX = 3
    }

    /** RouteType enum. */
    enum RouteType {
        DOWN = 0,
        MIDDLE = 1,
        UP = 2
    }

    /** HeroState enum. */
    enum HeroState {
        HERO_STATE_INIT = 0,
        HERO_STATE_SEARCH = 1,
        HERO_STATE_MOVE = 2,
        HERO_STATE_ATTACK = 3,
        HERO_STATE_DELETE = 4,
        HERO_STATE_OVER = 888,
        HERO_STATE_DEAD = 999,
        HERO_STATE_ERROR = 1888
    }

    /** BulletState enum. */
    enum BulletState {
        BULLET_STATE_NORMAL = 0,
        BULLET_STATE_DEAD = 1,
        BULLET_STATE_DELETE = 2
    }

    /** TargetType enum. */
    enum TargetType {
        TARGET_TYPE_All = 0,
        TARGET_TYPE_FRIEND = 1,
        TARGET_TYPE_ENEMY = 2
    }

    /** BuffEffectType enum. */
    enum BuffEffectType {
        EFFECT_TYPE_UNKNOWN = 0,
        BAN_MOVE = 1,
        BAN_ATTACK = 2,
        IMMNUE_CONTROL = 3,
        IMMNUE_DAMAGE = 4,
        INVINCIBLE = 5
    }

    /** SkillFindTargetWay enum. */
    enum SkillFindTargetWay {
        SINGLE = 0
    }

    /** DamageAttrIndex enum. */
    enum DamageAttrIndex {
        Damage = 0,
        Healing = 1,
        CritPer = 2,
        BlockPer = 3,
        DodgePer = 4,
        CrtiDmgPer = 5,
        SuckBloodPer = 6
    }

    /** DamageType enum. */
    enum DamageType {
        NORMAL = 0,
        DODGE = 1,
        BLOCK = 2,
        CRIT = 3,
        IMMUNE = 999
    }

    /** CardRemoveType enum. */
    enum CardRemoveType {
        REMOVE_TYPE_UNKNOWN = 0,
        REPLAY = 1,
        COMMAND = 2,
        DROP = 3
    }

    /** Properties of a RouteInfo. */
    interface IRouteInfo {

        /** RouteInfo route */
        route?: (number|null);

        /** RouteInfo posX */
        posX?: (number|null);

        /** RouteInfo posY */
        posY?: (number|null);
    }

    /** Represents a RouteInfo. */
    class RouteInfo implements IRouteInfo {

        /**
         * Constructs a new RouteInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IRouteInfo);

        /** RouteInfo route. */
        public route: number;

        /** RouteInfo posX. */
        public posX: number;

        /** RouteInfo posY. */
        public posY: number;

        /**
         * Creates a new RouteInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteInfo instance
         */
        public static create(properties?: common.IRouteInfo): common.RouteInfo;

        /**
         * Encodes the specified RouteInfo message. Does not implicitly {@link common.RouteInfo.verify|verify} messages.
         * @param message RouteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IRouteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteInfo message, length delimited. Does not implicitly {@link common.RouteInfo.verify|verify} messages.
         * @param message RouteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IRouteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.RouteInfo;

        /**
         * Decodes a RouteInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.RouteInfo;

        /**
         * Verifies a RouteInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteInfo
         */
        public static fromObject(object: { [k: string]: any }): common.RouteInfo;

        /**
         * Creates a plain object from a RouteInfo message. Also converts values to other types if specified.
         * @param message RouteInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.RouteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommandRoute. */
    interface ICommandRoute {

        /** CommandRoute route */
        route?: (number|null);

        /** CommandRoute posX */
        posX?: (number|null);

        /** CommandRoute posY */
        posY?: (number|null);

        /** CommandRoute front */
        front?: (boolean|null);
    }

    /** Represents a CommandRoute. */
    class CommandRoute implements ICommandRoute {

        /**
         * Constructs a new CommandRoute.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICommandRoute);

        /** CommandRoute route. */
        public route: number;

        /** CommandRoute posX. */
        public posX: number;

        /** CommandRoute posY. */
        public posY: number;

        /** CommandRoute front. */
        public front: boolean;

        /**
         * Creates a new CommandRoute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommandRoute instance
         */
        public static create(properties?: common.ICommandRoute): common.CommandRoute;

        /**
         * Encodes the specified CommandRoute message. Does not implicitly {@link common.CommandRoute.verify|verify} messages.
         * @param message CommandRoute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICommandRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommandRoute message, length delimited. Does not implicitly {@link common.CommandRoute.verify|verify} messages.
         * @param message CommandRoute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICommandRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandRoute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommandRoute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.CommandRoute;

        /**
         * Decodes a CommandRoute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommandRoute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.CommandRoute;

        /**
         * Verifies a CommandRoute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommandRoute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommandRoute
         */
        public static fromObject(object: { [k: string]: any }): common.CommandRoute;

        /**
         * Creates a plain object from a CommandRoute message. Also converts values to other types if specified.
         * @param message CommandRoute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.CommandRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommandRoute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommandRoute
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Command. */
    interface ICommand {

        /** Command instId */
        instId?: (number|Long|null);

        /** Command card */
        card?: (number|null);

        /** Command routes */
        routes?: (common.ICommandRoute[]|null);
    }

    /** Represents a Command. */
    class Command implements ICommand {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICommand);

        /** Command instId. */
        public instId: (number|Long);

        /** Command card. */
        public card: number;

        /** Command routes. */
        public routes: common.ICommandRoute[];

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: common.ICommand): common.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link common.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link common.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): common.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Command
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveCardCommond. */
    interface IRemoveCardCommond {

        /** RemoveCardCommond instId */
        instId?: (number|null);
    }

    /** Represents a RemoveCardCommond. */
    class RemoveCardCommond implements IRemoveCardCommond {

        /**
         * Constructs a new RemoveCardCommond.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IRemoveCardCommond);

        /** RemoveCardCommond instId. */
        public instId: number;

        /**
         * Creates a new RemoveCardCommond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveCardCommond instance
         */
        public static create(properties?: common.IRemoveCardCommond): common.RemoveCardCommond;

        /**
         * Encodes the specified RemoveCardCommond message. Does not implicitly {@link common.RemoveCardCommond.verify|verify} messages.
         * @param message RemoveCardCommond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IRemoveCardCommond, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveCardCommond message, length delimited. Does not implicitly {@link common.RemoveCardCommond.verify|verify} messages.
         * @param message RemoveCardCommond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IRemoveCardCommond, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveCardCommond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveCardCommond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.RemoveCardCommond;

        /**
         * Decodes a RemoveCardCommond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveCardCommond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.RemoveCardCommond;

        /**
         * Verifies a RemoveCardCommond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveCardCommond message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveCardCommond
         */
        public static fromObject(object: { [k: string]: any }): common.RemoveCardCommond;

        /**
         * Creates a plain object from a RemoveCardCommond message. Also converts values to other types if specified.
         * @param message RemoveCardCommond
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.RemoveCardCommond, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveCardCommond to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoveCardCommond
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Equip. */
    interface IEquip {

        /** Equip id */
        id?: (number|Long|null);
    }

    /** Represents an Equip. */
    class Equip implements IEquip {

        /**
         * Constructs a new Equip.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEquip);

        /** Equip id. */
        public id: (number|Long);

        /**
         * Creates a new Equip instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Equip instance
         */
        public static create(properties?: common.IEquip): common.Equip;

        /**
         * Encodes the specified Equip message. Does not implicitly {@link common.Equip.verify|verify} messages.
         * @param message Equip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEquip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Equip message, length delimited. Does not implicitly {@link common.Equip.verify|verify} messages.
         * @param message Equip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEquip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Equip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Equip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Equip;

        /**
         * Decodes an Equip message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Equip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Equip;

        /**
         * Verifies an Equip message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Equip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Equip
         */
        public static fromObject(object: { [k: string]: any }): common.Equip;

        /**
         * Creates a plain object from an Equip message. Also converts values to other types if specified.
         * @param message Equip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Equip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Equip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Equip
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card id */
        id?: (number|null);

        /** Card level */
        level?: (number|null);

        /** Card equips */
        equips?: (common.IEquip[]|null);

        /** Card modelId */
        modelId?: (number|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICard);

        /** Card id. */
        public id: number;

        /** Card level. */
        public level: number;

        /** Card equips. */
        public equips: common.IEquip[];

        /** Card modelId. */
        public modelId: number;

        /**
         * Creates a new Card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Card instance
         */
        public static create(properties?: common.ICard): common.Card;

        /**
         * Encodes the specified Card message. Does not implicitly {@link common.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link common.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Card;

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Card;

        /**
         * Verifies a Card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Card
         */
        public static fromObject(object: { [k: string]: any }): common.Card;

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @param message Card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Card
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HandCardInst. */
    interface IHandCardInst {

        /** HandCardInst id */
        id?: (number|Long|null);

        /** HandCardInst cardId */
        cardId?: (number|null);
    }

    /** Represents a HandCardInst. */
    class HandCardInst implements IHandCardInst {

        /**
         * Constructs a new HandCardInst.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IHandCardInst);

        /** HandCardInst id. */
        public id: (number|Long);

        /** HandCardInst cardId. */
        public cardId: number;

        /**
         * Creates a new HandCardInst instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandCardInst instance
         */
        public static create(properties?: common.IHandCardInst): common.HandCardInst;

        /**
         * Encodes the specified HandCardInst message. Does not implicitly {@link common.HandCardInst.verify|verify} messages.
         * @param message HandCardInst message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IHandCardInst, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandCardInst message, length delimited. Does not implicitly {@link common.HandCardInst.verify|verify} messages.
         * @param message HandCardInst message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IHandCardInst, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandCardInst message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandCardInst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.HandCardInst;

        /**
         * Decodes a HandCardInst message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandCardInst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.HandCardInst;

        /**
         * Verifies a HandCardInst message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandCardInst message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandCardInst
         */
        public static fromObject(object: { [k: string]: any }): common.HandCardInst;

        /**
         * Creates a plain object from a HandCardInst message. Also converts values to other types if specified.
         * @param message HandCardInst
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.HandCardInst, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandCardInst to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HandCardInst
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattlePlayerData. */
    interface IBattlePlayerData {

        /** BattlePlayerData uid */
        uid?: (string|null);

        /** BattlePlayerData nick */
        nick?: (string|null);

        /** BattlePlayerData avatar */
        avatar?: (number|null);

        /** BattlePlayerData level */
        level?: (number|null);

        /** BattlePlayerData country */
        country?: (string|null);

        /** BattlePlayerData cup */
        cup?: (number|null);

        /** BattlePlayerData guildName */
        guildName?: (string|null);

        /** BattlePlayerData guildFlag */
        guildFlag?: (number|Long|null);

        /** BattlePlayerData cards */
        cards?: (common.ICard[]|null);

        /** BattlePlayerData initCards */
        initCards?: (common.IHandCardInst[]|null);

        /** BattlePlayerData initEnergy */
        initEnergy?: (number|null);

        /** BattlePlayerData nextFrame */
        nextFrame?: (number|null);

        /** BattlePlayerData cardNum */
        cardNum?: (number|null);

        /** BattlePlayerData dealTimes */
        dealTimes?: (number|null);
    }

    /** Represents a BattlePlayerData. */
    class BattlePlayerData implements IBattlePlayerData {

        /**
         * Constructs a new BattlePlayerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBattlePlayerData);

        /** BattlePlayerData uid. */
        public uid: string;

        /** BattlePlayerData nick. */
        public nick: string;

        /** BattlePlayerData avatar. */
        public avatar: number;

        /** BattlePlayerData level. */
        public level: number;

        /** BattlePlayerData country. */
        public country: string;

        /** BattlePlayerData cup. */
        public cup: number;

        /** BattlePlayerData guildName. */
        public guildName: string;

        /** BattlePlayerData guildFlag. */
        public guildFlag: (number|Long);

        /** BattlePlayerData cards. */
        public cards: common.ICard[];

        /** BattlePlayerData initCards. */
        public initCards: common.IHandCardInst[];

        /** BattlePlayerData initEnergy. */
        public initEnergy: number;

        /** BattlePlayerData nextFrame. */
        public nextFrame: number;

        /** BattlePlayerData cardNum. */
        public cardNum: number;

        /** BattlePlayerData dealTimes. */
        public dealTimes: number;

        /**
         * Creates a new BattlePlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattlePlayerData instance
         */
        public static create(properties?: common.IBattlePlayerData): common.BattlePlayerData;

        /**
         * Encodes the specified BattlePlayerData message. Does not implicitly {@link common.BattlePlayerData.verify|verify} messages.
         * @param message BattlePlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBattlePlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattlePlayerData message, length delimited. Does not implicitly {@link common.BattlePlayerData.verify|verify} messages.
         * @param message BattlePlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBattlePlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattlePlayerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattlePlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BattlePlayerData;

        /**
         * Decodes a BattlePlayerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattlePlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BattlePlayerData;

        /**
         * Verifies a BattlePlayerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattlePlayerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattlePlayerData
         */
        public static fromObject(object: { [k: string]: any }): common.BattlePlayerData;

        /**
         * Creates a plain object from a BattlePlayerData message. Also converts values to other types if specified.
         * @param message BattlePlayerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BattlePlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattlePlayerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattlePlayerData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleResult. */
    interface IBattleResult {

        /** BattleResult winner */
        winner?: (string|null);

        /** BattleResult cups */
        cups?: (number[]|null);

        /** BattleResult crowns */
        crowns?: (number[]|null);

        /** BattleResult turnTheTile */
        turnTheTile?: (number|null);

        /** BattleResult endFrame */
        endFrame?: (number|null);
    }

    /** Represents a BattleResult. */
    class BattleResult implements IBattleResult {

        /**
         * Constructs a new BattleResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBattleResult);

        /** BattleResult winner. */
        public winner: string;

        /** BattleResult cups. */
        public cups: number[];

        /** BattleResult crowns. */
        public crowns: number[];

        /** BattleResult turnTheTile. */
        public turnTheTile: number;

        /** BattleResult endFrame. */
        public endFrame: number;

        /**
         * Creates a new BattleResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleResult instance
         */
        public static create(properties?: common.IBattleResult): common.BattleResult;

        /**
         * Encodes the specified BattleResult message. Does not implicitly {@link common.BattleResult.verify|verify} messages.
         * @param message BattleResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleResult message, length delimited. Does not implicitly {@link common.BattleResult.verify|verify} messages.
         * @param message BattleResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BattleResult;

        /**
         * Decodes a BattleResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BattleResult;

        /**
         * Verifies a BattleResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleResult
         */
        public static fromObject(object: { [k: string]: any }): common.BattleResult;

        /**
         * Creates a plain object from a BattleResult message. Also converts values to other types if specified.
         * @param message BattleResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattleResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CardInstData. */
    interface ICardInstData {

        /** CardInstData level */
        level?: (number|null);

        /** CardInstData modelId */
        modelId?: (number|null);
    }

    /** Represents a CardInstData. */
    class CardInstData implements ICardInstData {

        /**
         * Constructs a new CardInstData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICardInstData);

        /** CardInstData level. */
        public level: number;

        /** CardInstData modelId. */
        public modelId: number;

        /**
         * Creates a new CardInstData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInstData instance
         */
        public static create(properties?: common.ICardInstData): common.CardInstData;

        /**
         * Encodes the specified CardInstData message. Does not implicitly {@link common.CardInstData.verify|verify} messages.
         * @param message CardInstData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICardInstData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardInstData message, length delimited. Does not implicitly {@link common.CardInstData.verify|verify} messages.
         * @param message CardInstData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICardInstData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardInstData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInstData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.CardInstData;

        /**
         * Decodes a CardInstData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInstData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.CardInstData;

        /**
         * Verifies a CardInstData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardInstData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardInstData
         */
        public static fromObject(object: { [k: string]: any }): common.CardInstData;

        /**
         * Creates a plain object from a CardInstData message. Also converts values to other types if specified.
         * @param message CardInstData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.CardInstData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardInstData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CardInstData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientCommand. */
    interface IClientCommand {

        /** ClientCommand uid */
        uid?: (string|null);

        /** ClientCommand frame */
        frame?: (number|null);

        /** ClientCommand instId */
        instId?: (number|null);

        /** ClientCommand card */
        card?: (number|null);

        /** ClientCommand routes */
        routes?: (common.ICommandRoute[]|null);
    }

    /** Represents a ClientCommand. */
    class ClientCommand implements IClientCommand {

        /**
         * Constructs a new ClientCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IClientCommand);

        /** ClientCommand uid. */
        public uid: string;

        /** ClientCommand frame. */
        public frame: number;

        /** ClientCommand instId. */
        public instId: number;

        /** ClientCommand card. */
        public card: number;

        /** ClientCommand routes. */
        public routes: common.ICommandRoute[];

        /**
         * Creates a new ClientCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientCommand instance
         */
        public static create(properties?: common.IClientCommand): common.ClientCommand;

        /**
         * Encodes the specified ClientCommand message. Does not implicitly {@link common.ClientCommand.verify|verify} messages.
         * @param message ClientCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IClientCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientCommand message, length delimited. Does not implicitly {@link common.ClientCommand.verify|verify} messages.
         * @param message ClientCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IClientCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ClientCommand;

        /**
         * Decodes a ClientCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ClientCommand;

        /**
         * Verifies a ClientCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientCommand
         */
        public static fromObject(object: { [k: string]: any }): common.ClientCommand;

        /**
         * Creates a plain object from a ClientCommand message. Also converts values to other types if specified.
         * @param message ClientCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ClientCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FrameData. */
    interface IFrameData {

        /** FrameData frame */
        frame?: (number|null);

        /** FrameData commands */
        commands?: (common.IClientCommand[]|null);

        /** FrameData addPower */
        addPower?: (common.IReplayPower[]|null);

        /** FrameData addCards */
        addCards?: (common.IReplayHandCard[]|null);
    }

    /** Represents a FrameData. */
    class FrameData implements IFrameData {

        /**
         * Constructs a new FrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFrameData);

        /** FrameData frame. */
        public frame: number;

        /** FrameData commands. */
        public commands: common.IClientCommand[];

        /** FrameData addPower. */
        public addPower: common.IReplayPower[];

        /** FrameData addCards. */
        public addCards: common.IReplayHandCard[];

        /**
         * Creates a new FrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrameData instance
         */
        public static create(properties?: common.IFrameData): common.FrameData;

        /**
         * Encodes the specified FrameData message. Does not implicitly {@link common.FrameData.verify|verify} messages.
         * @param message FrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FrameData message, length delimited. Does not implicitly {@link common.FrameData.verify|verify} messages.
         * @param message FrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.FrameData;

        /**
         * Decodes a FrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.FrameData;

        /**
         * Verifies a FrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FrameData
         */
        public static fromObject(object: { [k: string]: any }): common.FrameData;

        /**
         * Creates a plain object from a FrameData message. Also converts values to other types if specified.
         * @param message FrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.FrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FrameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleFieldData. */
    interface IBattleFieldData {

        /** BattleFieldData curFrame */
        curFrame?: (number|null);

        /** BattleFieldData seed */
        seed?: (number|Long|null);

        /** BattleFieldData playerData */
        playerData?: (common.IBattlePlayerData[]|null);

        /** BattleFieldData frameData */
        frameData?: ({ [k: string]: common.IFrameData }|null);

        /** BattleFieldData battleConfigId */
        battleConfigId?: (number|null);
    }

    /** Represents a BattleFieldData. */
    class BattleFieldData implements IBattleFieldData {

        /**
         * Constructs a new BattleFieldData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBattleFieldData);

        /** BattleFieldData curFrame. */
        public curFrame: number;

        /** BattleFieldData seed. */
        public seed: (number|Long);

        /** BattleFieldData playerData. */
        public playerData: common.IBattlePlayerData[];

        /** BattleFieldData frameData. */
        public frameData: { [k: string]: common.IFrameData };

        /** BattleFieldData battleConfigId. */
        public battleConfigId: number;

        /**
         * Creates a new BattleFieldData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleFieldData instance
         */
        public static create(properties?: common.IBattleFieldData): common.BattleFieldData;

        /**
         * Encodes the specified BattleFieldData message. Does not implicitly {@link common.BattleFieldData.verify|verify} messages.
         * @param message BattleFieldData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBattleFieldData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleFieldData message, length delimited. Does not implicitly {@link common.BattleFieldData.verify|verify} messages.
         * @param message BattleFieldData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBattleFieldData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleFieldData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleFieldData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BattleFieldData;

        /**
         * Decodes a BattleFieldData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleFieldData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BattleFieldData;

        /**
         * Verifies a BattleFieldData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleFieldData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleFieldData
         */
        public static fromObject(object: { [k: string]: any }): common.BattleFieldData;

        /**
         * Creates a plain object from a BattleFieldData message. Also converts values to other types if specified.
         * @param message BattleFieldData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BattleFieldData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleFieldData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattleFieldData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplayHandCard. */
    interface IReplayHandCard {

        /** ReplayHandCard uid */
        uid?: (string|null);

        /** ReplayHandCard card */
        card?: (common.IHandCardInst|null);

        /** ReplayHandCard nextFrame */
        nextFrame?: (number|null);

        /** ReplayHandCard cardNum */
        cardNum?: (number|null);
    }

    /** Represents a ReplayHandCard. */
    class ReplayHandCard implements IReplayHandCard {

        /**
         * Constructs a new ReplayHandCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReplayHandCard);

        /** ReplayHandCard uid. */
        public uid: string;

        /** ReplayHandCard card. */
        public card?: (common.IHandCardInst|null);

        /** ReplayHandCard nextFrame. */
        public nextFrame: number;

        /** ReplayHandCard cardNum. */
        public cardNum: number;

        /**
         * Creates a new ReplayHandCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplayHandCard instance
         */
        public static create(properties?: common.IReplayHandCard): common.ReplayHandCard;

        /**
         * Encodes the specified ReplayHandCard message. Does not implicitly {@link common.ReplayHandCard.verify|verify} messages.
         * @param message ReplayHandCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReplayHandCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplayHandCard message, length delimited. Does not implicitly {@link common.ReplayHandCard.verify|verify} messages.
         * @param message ReplayHandCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReplayHandCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayHandCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplayHandCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ReplayHandCard;

        /**
         * Decodes a ReplayHandCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplayHandCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ReplayHandCard;

        /**
         * Verifies a ReplayHandCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplayHandCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplayHandCard
         */
        public static fromObject(object: { [k: string]: any }): common.ReplayHandCard;

        /**
         * Creates a plain object from a ReplayHandCard message. Also converts values to other types if specified.
         * @param message ReplayHandCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ReplayHandCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplayHandCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplayHandCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplayPower. */
    interface IReplayPower {

        /** ReplayPower uid */
        uid?: (string|null);

        /** ReplayPower power */
        power?: (number|null);

        /** ReplayPower nextFrame */
        nextFrame?: (number|null);
    }

    /** Represents a ReplayPower. */
    class ReplayPower implements IReplayPower {

        /**
         * Constructs a new ReplayPower.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReplayPower);

        /** ReplayPower uid. */
        public uid: string;

        /** ReplayPower power. */
        public power: number;

        /** ReplayPower nextFrame. */
        public nextFrame: number;

        /**
         * Creates a new ReplayPower instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplayPower instance
         */
        public static create(properties?: common.IReplayPower): common.ReplayPower;

        /**
         * Encodes the specified ReplayPower message. Does not implicitly {@link common.ReplayPower.verify|verify} messages.
         * @param message ReplayPower message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReplayPower, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplayPower message, length delimited. Does not implicitly {@link common.ReplayPower.verify|verify} messages.
         * @param message ReplayPower message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReplayPower, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayPower message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplayPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ReplayPower;

        /**
         * Decodes a ReplayPower message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplayPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ReplayPower;

        /**
         * Verifies a ReplayPower message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplayPower message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplayPower
         */
        public static fromObject(object: { [k: string]: any }): common.ReplayPower;

        /**
         * Creates a plain object from a ReplayPower message. Also converts values to other types if specified.
         * @param message ReplayPower
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ReplayPower, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplayPower to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplayPower
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplayData. */
    interface IReplayData {

        /** ReplayData key */
        key?: (string|null);

        /** ReplayData seed */
        seed?: (number|Long|null);

        /** ReplayData time */
        time?: (number|null);

        /** ReplayData playerData */
        playerData?: (common.IBattlePlayerData[]|null);

        /** ReplayData frameList */
        frameList?: ({ [k: string]: common.IFrameData }|null);

        /** ReplayData result */
        result?: (common.IBattleResult|null);

        /** ReplayData version */
        version?: (string|null);
    }

    /** Represents a ReplayData. */
    class ReplayData implements IReplayData {

        /**
         * Constructs a new ReplayData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReplayData);

        /** ReplayData key. */
        public key: string;

        /** ReplayData seed. */
        public seed: (number|Long);

        /** ReplayData time. */
        public time: number;

        /** ReplayData playerData. */
        public playerData: common.IBattlePlayerData[];

        /** ReplayData frameList. */
        public frameList: { [k: string]: common.IFrameData };

        /** ReplayData result. */
        public result?: (common.IBattleResult|null);

        /** ReplayData version. */
        public version: string;

        /**
         * Creates a new ReplayData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplayData instance
         */
        public static create(properties?: common.IReplayData): common.ReplayData;

        /**
         * Encodes the specified ReplayData message. Does not implicitly {@link common.ReplayData.verify|verify} messages.
         * @param message ReplayData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReplayData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplayData message, length delimited. Does not implicitly {@link common.ReplayData.verify|verify} messages.
         * @param message ReplayData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReplayData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ReplayData;

        /**
         * Decodes a ReplayData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ReplayData;

        /**
         * Verifies a ReplayData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplayData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplayData
         */
        public static fromObject(object: { [k: string]: any }): common.ReplayData;

        /**
         * Creates a plain object from a ReplayData message. Also converts values to other types if specified.
         * @param message ReplayData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ReplayData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplayData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplayData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplayCard. */
    interface IReplayCard {

        /** ReplayCard id */
        id?: (number|null);

        /** ReplayCard level */
        level?: (number|null);
    }

    /** Represents a ReplayCard. */
    class ReplayCard implements IReplayCard {

        /**
         * Constructs a new ReplayCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReplayCard);

        /** ReplayCard id. */
        public id: number;

        /** ReplayCard level. */
        public level: number;

        /**
         * Creates a new ReplayCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplayCard instance
         */
        public static create(properties?: common.IReplayCard): common.ReplayCard;

        /**
         * Encodes the specified ReplayCard message. Does not implicitly {@link common.ReplayCard.verify|verify} messages.
         * @param message ReplayCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReplayCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplayCard message, length delimited. Does not implicitly {@link common.ReplayCard.verify|verify} messages.
         * @param message ReplayCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReplayCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplayCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ReplayCard;

        /**
         * Decodes a ReplayCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplayCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ReplayCard;

        /**
         * Verifies a ReplayCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplayCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplayCard
         */
        public static fromObject(object: { [k: string]: any }): common.ReplayCard;

        /**
         * Creates a plain object from a ReplayCard message. Also converts values to other types if specified.
         * @param message ReplayCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ReplayCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplayCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplayCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplayPlayerSummary. */
    interface IReplayPlayerSummary {

        /** ReplayPlayerSummary uid */
        uid?: (string|null);

        /** ReplayPlayerSummary nick */
        nick?: (string|null);

        /** ReplayPlayerSummary avatar */
        avatar?: (string|null);

        /** ReplayPlayerSummary level */
        level?: (number|null);

        /** ReplayPlayerSummary country */
        country?: (string|null);

        /** ReplayPlayerSummary cup */
        cup?: (number|null);

        /** ReplayPlayerSummary guildName */
        guildName?: (string|null);

        /** ReplayPlayerSummary guildFlag */
        guildFlag?: (number|Long|null);

        /** ReplayPlayerSummary cards */
        cards?: (common.IReplayCard[]|null);
    }

    /** Represents a ReplayPlayerSummary. */
    class ReplayPlayerSummary implements IReplayPlayerSummary {

        /**
         * Constructs a new ReplayPlayerSummary.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReplayPlayerSummary);

        /** ReplayPlayerSummary uid. */
        public uid: string;

        /** ReplayPlayerSummary nick. */
        public nick: string;

        /** ReplayPlayerSummary avatar. */
        public avatar: string;

        /** ReplayPlayerSummary level. */
        public level: number;

        /** ReplayPlayerSummary country. */
        public country: string;

        /** ReplayPlayerSummary cup. */
        public cup: number;

        /** ReplayPlayerSummary guildName. */
        public guildName: string;

        /** ReplayPlayerSummary guildFlag. */
        public guildFlag: (number|Long);

        /** ReplayPlayerSummary cards. */
        public cards: common.IReplayCard[];

        /**
         * Creates a new ReplayPlayerSummary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplayPlayerSummary instance
         */
        public static create(properties?: common.IReplayPlayerSummary): common.ReplayPlayerSummary;

        /**
         * Encodes the specified ReplayPlayerSummary message. Does not implicitly {@link common.ReplayPlayerSummary.verify|verify} messages.
         * @param message ReplayPlayerSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReplayPlayerSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplayPlayerSummary message, length delimited. Does not implicitly {@link common.ReplayPlayerSummary.verify|verify} messages.
         * @param message ReplayPlayerSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReplayPlayerSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayPlayerSummary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplayPlayerSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ReplayPlayerSummary;

        /**
         * Decodes a ReplayPlayerSummary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplayPlayerSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ReplayPlayerSummary;

        /**
         * Verifies a ReplayPlayerSummary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplayPlayerSummary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplayPlayerSummary
         */
        public static fromObject(object: { [k: string]: any }): common.ReplayPlayerSummary;

        /**
         * Creates a plain object from a ReplayPlayerSummary message. Also converts values to other types if specified.
         * @param message ReplayPlayerSummary
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ReplayPlayerSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplayPlayerSummary to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplayPlayerSummary
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplaySummaryData. */
    interface IReplaySummaryData {

        /** ReplaySummaryData key */
        key?: (string|null);

        /** ReplaySummaryData time */
        time?: (number|null);

        /** ReplaySummaryData result */
        result?: (common.IBattleResult|null);

        /** ReplaySummaryData playerData */
        playerData?: (common.IReplayPlayerSummary[]|null);

        /** ReplaySummaryData version */
        version?: (string|null);

        /** ReplaySummaryData play */
        play?: (boolean|null);
    }

    /** Represents a ReplaySummaryData. */
    class ReplaySummaryData implements IReplaySummaryData {

        /**
         * Constructs a new ReplaySummaryData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReplaySummaryData);

        /** ReplaySummaryData key. */
        public key: string;

        /** ReplaySummaryData time. */
        public time: number;

        /** ReplaySummaryData result. */
        public result?: (common.IBattleResult|null);

        /** ReplaySummaryData playerData. */
        public playerData: common.IReplayPlayerSummary[];

        /** ReplaySummaryData version. */
        public version: string;

        /** ReplaySummaryData play. */
        public play: boolean;

        /**
         * Creates a new ReplaySummaryData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplaySummaryData instance
         */
        public static create(properties?: common.IReplaySummaryData): common.ReplaySummaryData;

        /**
         * Encodes the specified ReplaySummaryData message. Does not implicitly {@link common.ReplaySummaryData.verify|verify} messages.
         * @param message ReplaySummaryData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReplaySummaryData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplaySummaryData message, length delimited. Does not implicitly {@link common.ReplaySummaryData.verify|verify} messages.
         * @param message ReplaySummaryData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReplaySummaryData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplaySummaryData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplaySummaryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ReplaySummaryData;

        /**
         * Decodes a ReplaySummaryData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplaySummaryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ReplaySummaryData;

        /**
         * Verifies a ReplaySummaryData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplaySummaryData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplaySummaryData
         */
        public static fromObject(object: { [k: string]: any }): common.ReplaySummaryData;

        /**
         * Creates a plain object from a ReplaySummaryData message. Also converts values to other types if specified.
         * @param message ReplaySummaryData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ReplaySummaryData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplaySummaryData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplaySummaryData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DamageLabelData. */
    interface IDamageLabelData {

        /** DamageLabelData flag */
        flag?: (number|null);

        /** DamageLabelData val */
        val?: (number|null);

        /** DamageLabelData posX */
        posX?: (number|null);

        /** DamageLabelData posY */
        posY?: (number|null);
    }

    /** Represents a DamageLabelData. */
    class DamageLabelData implements IDamageLabelData {

        /**
         * Constructs a new DamageLabelData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IDamageLabelData);

        /** DamageLabelData flag. */
        public flag: number;

        /** DamageLabelData val. */
        public val: number;

        /** DamageLabelData posX. */
        public posX: number;

        /** DamageLabelData posY. */
        public posY: number;

        /**
         * Creates a new DamageLabelData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DamageLabelData instance
         */
        public static create(properties?: common.IDamageLabelData): common.DamageLabelData;

        /**
         * Encodes the specified DamageLabelData message. Does not implicitly {@link common.DamageLabelData.verify|verify} messages.
         * @param message DamageLabelData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IDamageLabelData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DamageLabelData message, length delimited. Does not implicitly {@link common.DamageLabelData.verify|verify} messages.
         * @param message DamageLabelData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IDamageLabelData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DamageLabelData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DamageLabelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.DamageLabelData;

        /**
         * Decodes a DamageLabelData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DamageLabelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.DamageLabelData;

        /**
         * Verifies a DamageLabelData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DamageLabelData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DamageLabelData
         */
        public static fromObject(object: { [k: string]: any }): common.DamageLabelData;

        /**
         * Creates a plain object from a DamageLabelData message. Also converts values to other types if specified.
         * @param message DamageLabelData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.DamageLabelData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DamageLabelData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DamageLabelData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Reward. */
    interface IReward {

        /** Reward type */
        type?: (string|null);

        /** Reward id */
        id?: (string|null);

        /** Reward count */
        count?: (number|Long|null);

        /** Reward tradable */
        tradable?: (boolean|null);

        /** Reward isBoxAward */
        isBoxAward?: (boolean|null);

        /** Reward boxId */
        boxId?: (number|null);
    }

    /** Represents a Reward. */
    class Reward implements IReward {

        /**
         * Constructs a new Reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IReward);

        /** Reward type. */
        public type: string;

        /** Reward id. */
        public id: string;

        /** Reward count. */
        public count: (number|Long);

        /** Reward tradable. */
        public tradable: boolean;

        /** Reward isBoxAward. */
        public isBoxAward: boolean;

        /** Reward boxId. */
        public boxId: number;

        /**
         * Creates a new Reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reward instance
         */
        public static create(properties?: common.IReward): common.Reward;

        /**
         * Encodes the specified Reward message. Does not implicitly {@link common.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link common.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Reward;

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Reward;

        /**
         * Verifies a Reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reward
         */
        public static fromObject(object: { [k: string]: any }): common.Reward;

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @param message Reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Reward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
