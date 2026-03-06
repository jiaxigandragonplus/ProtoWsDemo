import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace mail. */
export namespace mail {

    /** Properties of a CGetMailList. */
    interface ICGetMailList {

        /** CGetMailList mailIds */
        mailIds?: (number[]|null);
    }

    /** Represents a CGetMailList. */
    class CGetMailList implements ICGetMailList {

        /**
         * Constructs a new CGetMailList.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ICGetMailList);

        /** CGetMailList mailIds. */
        public mailIds: number[];

        /**
         * Creates a new CGetMailList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGetMailList instance
         */
        public static create(properties?: mail.ICGetMailList): mail.CGetMailList;

        /**
         * Encodes the specified CGetMailList message. Does not implicitly {@link mail.CGetMailList.verify|verify} messages.
         * @param message CGetMailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ICGetMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGetMailList message, length delimited. Does not implicitly {@link mail.CGetMailList.verify|verify} messages.
         * @param message CGetMailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ICGetMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGetMailList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.CGetMailList;

        /**
         * Decodes a CGetMailList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.CGetMailList;

        /**
         * Verifies a CGetMailList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGetMailList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGetMailList
         */
        public static fromObject(object: { [k: string]: any }): mail.CGetMailList;

        /**
         * Creates a plain object from a CGetMailList message. Also converts values to other types if specified.
         * @param message CGetMailList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.CGetMailList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGetMailList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CGetMailList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SGetMailList. */
    interface ISGetMailList {

        /** SGetMailList list */
        list?: (common.IMailInfo[]|null);
    }

    /** Represents a SGetMailList. */
    class SGetMailList implements ISGetMailList {

        /**
         * Constructs a new SGetMailList.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ISGetMailList);

        /** SGetMailList list. */
        public list: common.IMailInfo[];

        /**
         * Creates a new SGetMailList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SGetMailList instance
         */
        public static create(properties?: mail.ISGetMailList): mail.SGetMailList;

        /**
         * Encodes the specified SGetMailList message. Does not implicitly {@link mail.SGetMailList.verify|verify} messages.
         * @param message SGetMailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ISGetMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SGetMailList message, length delimited. Does not implicitly {@link mail.SGetMailList.verify|verify} messages.
         * @param message SGetMailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ISGetMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SGetMailList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.SGetMailList;

        /**
         * Decodes a SGetMailList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SGetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.SGetMailList;

        /**
         * Verifies a SGetMailList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SGetMailList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SGetMailList
         */
        public static fromObject(object: { [k: string]: any }): mail.SGetMailList;

        /**
         * Creates a plain object from a SGetMailList message. Also converts values to other types if specified.
         * @param message SGetMailList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.SGetMailList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SGetMailList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SGetMailList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CReadMail. */
    interface ICReadMail {

        /** CReadMail mailId */
        mailId?: (number|null);

        /** CReadMail mailType */
        mailType?: (common.MailType|null);
    }

    /** Represents a CReadMail. */
    class CReadMail implements ICReadMail {

        /**
         * Constructs a new CReadMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ICReadMail);

        /** CReadMail mailId. */
        public mailId: number;

        /** CReadMail mailType. */
        public mailType: common.MailType;

        /**
         * Creates a new CReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReadMail instance
         */
        public static create(properties?: mail.ICReadMail): mail.CReadMail;

        /**
         * Encodes the specified CReadMail message. Does not implicitly {@link mail.CReadMail.verify|verify} messages.
         * @param message CReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ICReadMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReadMail message, length delimited. Does not implicitly {@link mail.CReadMail.verify|verify} messages.
         * @param message CReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ICReadMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReadMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.CReadMail;

        /**
         * Decodes a CReadMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.CReadMail;

        /**
         * Verifies a CReadMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReadMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReadMail
         */
        public static fromObject(object: { [k: string]: any }): mail.CReadMail;

        /**
         * Creates a plain object from a CReadMail message. Also converts values to other types if specified.
         * @param message CReadMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.CReadMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReadMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CReadMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SReadMail. */
    interface ISReadMail {
    }

    /** Represents a SReadMail. */
    class SReadMail implements ISReadMail {

        /**
         * Constructs a new SReadMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ISReadMail);

        /**
         * Creates a new SReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SReadMail instance
         */
        public static create(properties?: mail.ISReadMail): mail.SReadMail;

        /**
         * Encodes the specified SReadMail message. Does not implicitly {@link mail.SReadMail.verify|verify} messages.
         * @param message SReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ISReadMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SReadMail message, length delimited. Does not implicitly {@link mail.SReadMail.verify|verify} messages.
         * @param message SReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ISReadMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SReadMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.SReadMail;

        /**
         * Decodes a SReadMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.SReadMail;

        /**
         * Verifies a SReadMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SReadMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SReadMail
         */
        public static fromObject(object: { [k: string]: any }): mail.SReadMail;

        /**
         * Creates a plain object from a SReadMail message. Also converts values to other types if specified.
         * @param message SReadMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.SReadMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SReadMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SReadMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CDeleteMail. */
    interface ICDeleteMail {

        /** CDeleteMail mailIds */
        mailIds?: (number[]|null);
    }

    /** Represents a CDeleteMail. */
    class CDeleteMail implements ICDeleteMail {

        /**
         * Constructs a new CDeleteMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ICDeleteMail);

        /** CDeleteMail mailIds. */
        public mailIds: number[];

        /**
         * Creates a new CDeleteMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CDeleteMail instance
         */
        public static create(properties?: mail.ICDeleteMail): mail.CDeleteMail;

        /**
         * Encodes the specified CDeleteMail message. Does not implicitly {@link mail.CDeleteMail.verify|verify} messages.
         * @param message CDeleteMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ICDeleteMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CDeleteMail message, length delimited. Does not implicitly {@link mail.CDeleteMail.verify|verify} messages.
         * @param message CDeleteMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ICDeleteMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CDeleteMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.CDeleteMail;

        /**
         * Decodes a CDeleteMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.CDeleteMail;

        /**
         * Verifies a CDeleteMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CDeleteMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CDeleteMail
         */
        public static fromObject(object: { [k: string]: any }): mail.CDeleteMail;

        /**
         * Creates a plain object from a CDeleteMail message. Also converts values to other types if specified.
         * @param message CDeleteMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.CDeleteMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CDeleteMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CDeleteMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SDeleteMail. */
    interface ISDeleteMail {

        /** SDeleteMail mailIds */
        mailIds?: (number[]|null);
    }

    /** Represents a SDeleteMail. */
    class SDeleteMail implements ISDeleteMail {

        /**
         * Constructs a new SDeleteMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ISDeleteMail);

        /** SDeleteMail mailIds. */
        public mailIds: number[];

        /**
         * Creates a new SDeleteMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SDeleteMail instance
         */
        public static create(properties?: mail.ISDeleteMail): mail.SDeleteMail;

        /**
         * Encodes the specified SDeleteMail message. Does not implicitly {@link mail.SDeleteMail.verify|verify} messages.
         * @param message SDeleteMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ISDeleteMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SDeleteMail message, length delimited. Does not implicitly {@link mail.SDeleteMail.verify|verify} messages.
         * @param message SDeleteMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ISDeleteMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SDeleteMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.SDeleteMail;

        /**
         * Decodes a SDeleteMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SDeleteMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.SDeleteMail;

        /**
         * Verifies a SDeleteMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SDeleteMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SDeleteMail
         */
        public static fromObject(object: { [k: string]: any }): mail.SDeleteMail;

        /**
         * Creates a plain object from a SDeleteMail message. Also converts values to other types if specified.
         * @param message SDeleteMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.SDeleteMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SDeleteMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SDeleteMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CClaimMail. */
    interface ICClaimMail {

        /** CClaimMail mailId */
        mailId?: (number|null);

        /** CClaimMail mailType */
        mailType?: (common.MailType|null);
    }

    /** Represents a CClaimMail. */
    class CClaimMail implements ICClaimMail {

        /**
         * Constructs a new CClaimMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ICClaimMail);

        /** CClaimMail mailId. */
        public mailId: number;

        /** CClaimMail mailType. */
        public mailType: common.MailType;

        /**
         * Creates a new CClaimMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CClaimMail instance
         */
        public static create(properties?: mail.ICClaimMail): mail.CClaimMail;

        /**
         * Encodes the specified CClaimMail message. Does not implicitly {@link mail.CClaimMail.verify|verify} messages.
         * @param message CClaimMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ICClaimMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CClaimMail message, length delimited. Does not implicitly {@link mail.CClaimMail.verify|verify} messages.
         * @param message CClaimMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ICClaimMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CClaimMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.CClaimMail;

        /**
         * Decodes a CClaimMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.CClaimMail;

        /**
         * Verifies a CClaimMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CClaimMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CClaimMail
         */
        public static fromObject(object: { [k: string]: any }): mail.CClaimMail;

        /**
         * Creates a plain object from a CClaimMail message. Also converts values to other types if specified.
         * @param message CClaimMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.CClaimMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CClaimMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CClaimMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SClaimMail. */
    interface ISClaimMail {

        /** SClaimMail extra */
        extra?: (string|null);
    }

    /** Represents a SClaimMail. */
    class SClaimMail implements ISClaimMail {

        /**
         * Constructs a new SClaimMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ISClaimMail);

        /** SClaimMail extra. */
        public extra: string;

        /**
         * Creates a new SClaimMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SClaimMail instance
         */
        public static create(properties?: mail.ISClaimMail): mail.SClaimMail;

        /**
         * Encodes the specified SClaimMail message. Does not implicitly {@link mail.SClaimMail.verify|verify} messages.
         * @param message SClaimMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ISClaimMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SClaimMail message, length delimited. Does not implicitly {@link mail.SClaimMail.verify|verify} messages.
         * @param message SClaimMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ISClaimMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SClaimMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.SClaimMail;

        /**
         * Decodes a SClaimMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SClaimMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.SClaimMail;

        /**
         * Verifies a SClaimMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SClaimMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SClaimMail
         */
        public static fromObject(object: { [k: string]: any }): mail.SClaimMail;

        /**
         * Creates a plain object from a SClaimMail message. Also converts values to other types if specified.
         * @param message SClaimMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.SClaimMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SClaimMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SClaimMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CClaimAllMail. */
    interface ICClaimAllMail {
    }

    /** Represents a CClaimAllMail. */
    class CClaimAllMail implements ICClaimAllMail {

        /**
         * Constructs a new CClaimAllMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ICClaimAllMail);

        /**
         * Creates a new CClaimAllMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CClaimAllMail instance
         */
        public static create(properties?: mail.ICClaimAllMail): mail.CClaimAllMail;

        /**
         * Encodes the specified CClaimAllMail message. Does not implicitly {@link mail.CClaimAllMail.verify|verify} messages.
         * @param message CClaimAllMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ICClaimAllMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CClaimAllMail message, length delimited. Does not implicitly {@link mail.CClaimAllMail.verify|verify} messages.
         * @param message CClaimAllMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ICClaimAllMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CClaimAllMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.CClaimAllMail;

        /**
         * Decodes a CClaimAllMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.CClaimAllMail;

        /**
         * Verifies a CClaimAllMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CClaimAllMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CClaimAllMail
         */
        public static fromObject(object: { [k: string]: any }): mail.CClaimAllMail;

        /**
         * Creates a plain object from a CClaimAllMail message. Also converts values to other types if specified.
         * @param message CClaimAllMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.CClaimAllMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CClaimAllMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CClaimAllMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SClaimAllMail. */
    interface ISClaimAllMail {

        /** SClaimAllMail extra */
        extra?: (string[]|null);
    }

    /** Represents a SClaimAllMail. */
    class SClaimAllMail implements ISClaimAllMail {

        /**
         * Constructs a new SClaimAllMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.ISClaimAllMail);

        /** SClaimAllMail extra. */
        public extra: string[];

        /**
         * Creates a new SClaimAllMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SClaimAllMail instance
         */
        public static create(properties?: mail.ISClaimAllMail): mail.SClaimAllMail;

        /**
         * Encodes the specified SClaimAllMail message. Does not implicitly {@link mail.SClaimAllMail.verify|verify} messages.
         * @param message SClaimAllMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.ISClaimAllMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SClaimAllMail message, length delimited. Does not implicitly {@link mail.SClaimAllMail.verify|verify} messages.
         * @param message SClaimAllMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.ISClaimAllMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SClaimAllMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.SClaimAllMail;

        /**
         * Decodes a SClaimAllMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SClaimAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.SClaimAllMail;

        /**
         * Verifies a SClaimAllMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SClaimAllMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SClaimAllMail
         */
        public static fromObject(object: { [k: string]: any }): mail.SClaimAllMail;

        /**
         * Creates a plain object from a SClaimAllMail message. Also converts values to other types if specified.
         * @param message SClaimAllMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.SClaimAllMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SClaimAllMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SClaimAllMail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** MailStatus enum. */
    enum MailStatus {
        MAIL_STATUS_INVALID = 0,
        MAIL_STATUS_NEW = 1,
        MAIL_STATUS_READ = 2,
        MAIL_STATUS_CLAIMED = 3,
        MAIL_STATUS_DELETED = 4
    }

    /** MailType enum. */
    enum MailType {
        MAIL_TYPE_INVALID = 0,
        MAIL_TYPE_SYSTEM = 1,
        MAIL_TYPE_USER = 2
    }

    /** Properties of a MailInfo. */
    interface IMailInfo {

        /** MailInfo id */
        id?: (number|null);

        /** MailInfo mailType */
        mailType?: (common.MailType|null);

        /** MailInfo status */
        status?: (common.MailStatus|null);

        /** MailInfo title */
        title?: (string|null);

        /** MailInfo message */
        message?: (string|null);

        /** MailInfo sender */
        sender?: (string|null);

        /** MailInfo receiver */
        receiver?: (string|null);

        /** MailInfo expire */
        expire?: (number|Long|null);

        /** MailInfo extra */
        extra?: (string|null);

        /** MailInfo timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a MailInfo. */
    class MailInfo implements IMailInfo {

        /**
         * Constructs a new MailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IMailInfo);

        /** MailInfo id. */
        public id: number;

        /** MailInfo mailType. */
        public mailType: common.MailType;

        /** MailInfo status. */
        public status: common.MailStatus;

        /** MailInfo title. */
        public title: string;

        /** MailInfo message. */
        public message: string;

        /** MailInfo sender. */
        public sender: string;

        /** MailInfo receiver. */
        public receiver: string;

        /** MailInfo expire. */
        public expire: (number|Long);

        /** MailInfo extra. */
        public extra: string;

        /** MailInfo timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new MailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfo instance
         */
        public static create(properties?: common.IMailInfo): common.MailInfo;

        /**
         * Encodes the specified MailInfo message. Does not implicitly {@link common.MailInfo.verify|verify} messages.
         * @param message MailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailInfo message, length delimited. Does not implicitly {@link common.MailInfo.verify|verify} messages.
         * @param message MailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.MailInfo;

        /**
         * Decodes a MailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.MailInfo;

        /**
         * Verifies a MailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfo
         */
        public static fromObject(object: { [k: string]: any }): common.MailInfo;

        /**
         * Creates a plain object from a MailInfo message. Also converts values to other types if specified.
         * @param message MailInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.MailInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MailInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
