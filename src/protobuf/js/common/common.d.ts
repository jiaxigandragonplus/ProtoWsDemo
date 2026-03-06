import * as $protobuf from "protobufjs";
import Long = require("long");
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
        CONTENT_VEDIO = 5,
        CONTENT_EMOJI = 6
    }

    /** MessageLoadType enum. */
    enum MessageLoadType {
        BACKWORD = 0,
        FORWORD = 1
    }

    /** ChatType enum. */
    enum ChatType {
        CHAT_TYPE_UNKONOWN = 0,
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

        /** GetChatTipsParam maxReadedMessageId */
        maxReadedMessageId?: (number|null);
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

        /** GetChatTipsParam maxReadedMessageId. */
        public maxReadedMessageId: number;

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

    /** ServerType enum. */
    enum ServerType {
        ServerTypeUnknown = 0,
        ServerTypeGate = 1,
        ServerTypeGame = 2,
        ServerTypeGuild = 3
    }

    /** Properties of a FriendGuildInfo. */
    interface IFriendGuildInfo {

        /** FriendGuildInfo gid */
        gid?: (string|null);

        /** FriendGuildInfo name */
        name?: (string|null);

        /** FriendGuildInfo flag */
        flag?: (number|null);

        /** FriendGuildInfo type */
        type?: (string|null);
    }

    /** Represents a FriendGuildInfo. */
    class FriendGuildInfo implements IFriendGuildInfo {

        /**
         * Constructs a new FriendGuildInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFriendGuildInfo);

        /** FriendGuildInfo gid. */
        public gid: string;

        /** FriendGuildInfo name. */
        public name: string;

        /** FriendGuildInfo flag. */
        public flag: number;

        /** FriendGuildInfo type. */
        public type: string;

        /**
         * Creates a new FriendGuildInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendGuildInfo instance
         */
        public static create(properties?: common.IFriendGuildInfo): common.FriendGuildInfo;

        /**
         * Encodes the specified FriendGuildInfo message. Does not implicitly {@link common.FriendGuildInfo.verify|verify} messages.
         * @param message FriendGuildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFriendGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendGuildInfo message, length delimited. Does not implicitly {@link common.FriendGuildInfo.verify|verify} messages.
         * @param message FriendGuildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFriendGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendGuildInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.FriendGuildInfo;

        /**
         * Decodes a FriendGuildInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.FriendGuildInfo;

        /**
         * Verifies a FriendGuildInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendGuildInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendGuildInfo
         */
        public static fromObject(object: { [k: string]: any }): common.FriendGuildInfo;

        /**
         * Creates a plain object from a FriendGuildInfo message. Also converts values to other types if specified.
         * @param message FriendGuildInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.FriendGuildInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendGuildInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendGuildInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendUserInfo. */
    interface IFriendUserInfo {

        /** FriendUserInfo uid */
        uid?: (string|null);

        /** FriendUserInfo name */
        name?: (string|null);

        /** FriendUserInfo avatar */
        avatar?: (string|null);

        /** FriendUserInfo country */
        country?: (string|null);

        /** FriendUserInfo level */
        level?: (number|null);

        /** FriendUserInfo online */
        online?: (number|null);

        /** FriendUserInfo guild */
        guild?: (common.IFriendGuildInfo|null);

        /** FriendUserInfo extra */
        extra?: (string|null);
    }

    /** Represents a FriendUserInfo. */
    class FriendUserInfo implements IFriendUserInfo {

        /**
         * Constructs a new FriendUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFriendUserInfo);

        /** FriendUserInfo uid. */
        public uid: string;

        /** FriendUserInfo name. */
        public name: string;

        /** FriendUserInfo avatar. */
        public avatar: string;

        /** FriendUserInfo country. */
        public country: string;

        /** FriendUserInfo level. */
        public level: number;

        /** FriendUserInfo online. */
        public online: number;

        /** FriendUserInfo guild. */
        public guild?: (common.IFriendGuildInfo|null);

        /** FriendUserInfo extra. */
        public extra: string;

        /**
         * Creates a new FriendUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendUserInfo instance
         */
        public static create(properties?: common.IFriendUserInfo): common.FriendUserInfo;

        /**
         * Encodes the specified FriendUserInfo message. Does not implicitly {@link common.FriendUserInfo.verify|verify} messages.
         * @param message FriendUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFriendUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendUserInfo message, length delimited. Does not implicitly {@link common.FriendUserInfo.verify|verify} messages.
         * @param message FriendUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFriendUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.FriendUserInfo;

        /**
         * Decodes a FriendUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.FriendUserInfo;

        /**
         * Verifies a FriendUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendUserInfo
         */
        public static fromObject(object: { [k: string]: any }): common.FriendUserInfo;

        /**
         * Creates a plain object from a FriendUserInfo message. Also converts values to other types if specified.
         * @param message FriendUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.FriendUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendUserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ApplyInfo. */
    interface IApplyInfo {

        /** ApplyInfo uid */
        uid?: (string|null);

        /** ApplyInfo name */
        name?: (string|null);

        /** ApplyInfo avatar */
        avatar?: (string|null);

        /** ApplyInfo country */
        country?: (string|null);

        /** ApplyInfo level */
        level?: (number|null);

        /** ApplyInfo guild */
        guild?: (common.IFriendGuildInfo|null);

        /** ApplyInfo extra */
        extra?: (string|null);
    }

    /** Represents an ApplyInfo. */
    class ApplyInfo implements IApplyInfo {

        /**
         * Constructs a new ApplyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IApplyInfo);

        /** ApplyInfo uid. */
        public uid: string;

        /** ApplyInfo name. */
        public name: string;

        /** ApplyInfo avatar. */
        public avatar: string;

        /** ApplyInfo country. */
        public country: string;

        /** ApplyInfo level. */
        public level: number;

        /** ApplyInfo guild. */
        public guild?: (common.IFriendGuildInfo|null);

        /** ApplyInfo extra. */
        public extra: string;

        /**
         * Creates a new ApplyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyInfo instance
         */
        public static create(properties?: common.IApplyInfo): common.ApplyInfo;

        /**
         * Encodes the specified ApplyInfo message. Does not implicitly {@link common.ApplyInfo.verify|verify} messages.
         * @param message ApplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IApplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyInfo message, length delimited. Does not implicitly {@link common.ApplyInfo.verify|verify} messages.
         * @param message ApplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IApplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ApplyInfo;

        /**
         * Decodes an ApplyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ApplyInfo;

        /**
         * Verifies an ApplyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ApplyInfo;

        /**
         * Creates a plain object from an ApplyInfo message. Also converts values to other types if specified.
         * @param message ApplyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ApplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApplyInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GuildEventType enum. */
    enum GuildEventType {
        GUILD_EVVENT_UNKNOWN = 0,
        GUILD_EVVENT_CREATE = 1,
        GUILD_EVVENT_JOIN = 2,
        GUILD_EVVENT_LEAVE = 3,
        GUILD_EVVENT_KICK = 4,
        GUILD_EVVENT_MODIFY_NOTICE = 5,
        GUILD_EVVENT_MODIFY_FLAG = 6,
        GUILD_EVVENT_MODIFY_NAME = 7,
        GUILD_EVVENT_TRANSFER = 8
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

    /** MailStatus enum. */
    enum MailStatus {
        MAIL_STATUS_INVALID = 0,
        MAIL_STATUS_NEW = 1,
        MAIL_STATUS_READED = 2,
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

    /** Properties of a PlayerData. */
    interface IPlayerData {

        /** PlayerData id */
        id?: (number|Long|null);

        /** PlayerData name */
        name?: (string|null);

        /** PlayerData guildId */
        guildId?: (number|Long|null);
    }

    /** Represents a PlayerData. */
    class PlayerData implements IPlayerData {

        /**
         * Constructs a new PlayerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPlayerData);

        /** PlayerData id. */
        public id: (number|Long);

        /** PlayerData name. */
        public name: string;

        /** PlayerData guildId. */
        public guildId: (number|Long);

        /**
         * Creates a new PlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerData instance
         */
        public static create(properties?: common.IPlayerData): common.PlayerData;

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link common.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link common.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PlayerData;

        /**
         * Decodes a PlayerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PlayerData;

        /**
         * Verifies a PlayerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerData
         */
        public static fromObject(object: { [k: string]: any }): common.PlayerData;

        /**
         * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
         * @param message PlayerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo unionId */
        unionId?: (number|Long|null);

        /** UserInfo account */
        account?: (string|null);

        /** UserInfo nick */
        nick?: (string|null);

        /** UserInfo email */
        email?: (string|null);

        /** UserInfo phoneNumber */
        phoneNumber?: (string|null);

        /** UserInfo group */
        group?: (number|null);

        /** UserInfo createTime */
        createTime?: (number|Long|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserInfo);

        /** UserInfo unionId. */
        public unionId: (number|Long);

        /** UserInfo account. */
        public account: string;

        /** UserInfo nick. */
        public nick: string;

        /** UserInfo email. */
        public email: string;

        /** UserInfo phoneNumber. */
        public phoneNumber: string;

        /** UserInfo group. */
        public group: number;

        /** UserInfo createTime. */
        public createTime: (number|Long);

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: common.IUserInfo): common.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link common.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link common.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): common.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WorldUserInfo. */
    interface IWorldUserInfo {

        /** WorldUserInfo uid */
        uid?: (string|null);

        /** WorldUserInfo nick */
        nick?: (string|null);

        /** WorldUserInfo gender */
        gender?: (string|null);

        /** WorldUserInfo country */
        country?: (string|null);

        /** WorldUserInfo avatar */
        avatar?: (string|null);

        /** WorldUserInfo level */
        level?: (number|null);

        /** WorldUserInfo cups */
        cups?: (number|null);

        /** WorldUserInfo gameId */
        gameId?: (number|null);

        /** WorldUserInfo gateId */
        gateId?: (number|null);

        /** WorldUserInfo gateAddress */
        gateAddress?: (string|null);
    }

    /** Represents a WorldUserInfo. */
    class WorldUserInfo implements IWorldUserInfo {

        /**
         * Constructs a new WorldUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWorldUserInfo);

        /** WorldUserInfo uid. */
        public uid: string;

        /** WorldUserInfo nick. */
        public nick: string;

        /** WorldUserInfo gender. */
        public gender: string;

        /** WorldUserInfo country. */
        public country: string;

        /** WorldUserInfo avatar. */
        public avatar: string;

        /** WorldUserInfo level. */
        public level: number;

        /** WorldUserInfo cups. */
        public cups: number;

        /** WorldUserInfo gameId. */
        public gameId: number;

        /** WorldUserInfo gateId. */
        public gateId: number;

        /** WorldUserInfo gateAddress. */
        public gateAddress: string;

        /**
         * Creates a new WorldUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldUserInfo instance
         */
        public static create(properties?: common.IWorldUserInfo): common.WorldUserInfo;

        /**
         * Encodes the specified WorldUserInfo message. Does not implicitly {@link common.WorldUserInfo.verify|verify} messages.
         * @param message WorldUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWorldUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldUserInfo message, length delimited. Does not implicitly {@link common.WorldUserInfo.verify|verify} messages.
         * @param message WorldUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWorldUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorldUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WorldUserInfo;

        /**
         * Decodes a WorldUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorldUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WorldUserInfo;

        /**
         * Verifies a WorldUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldUserInfo
         */
        public static fromObject(object: { [k: string]: any }): common.WorldUserInfo;

        /**
         * Creates a plain object from a WorldUserInfo message. Also converts values to other types if specified.
         * @param message WorldUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WorldUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WorldUserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EquipInfo. */
    interface IEquipInfo {

        /** EquipInfo id */
        id?: (number|null);

        /** EquipInfo hero */
        hero?: (number|null);

        /** EquipInfo attr */
        attr?: (number[]|null);
    }

    /** Represents an EquipInfo. */
    class EquipInfo implements IEquipInfo {

        /**
         * Constructs a new EquipInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEquipInfo);

        /** EquipInfo id. */
        public id: number;

        /** EquipInfo hero. */
        public hero: number;

        /** EquipInfo attr. */
        public attr: number[];

        /**
         * Creates a new EquipInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipInfo instance
         */
        public static create(properties?: common.IEquipInfo): common.EquipInfo;

        /**
         * Encodes the specified EquipInfo message. Does not implicitly {@link common.EquipInfo.verify|verify} messages.
         * @param message EquipInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEquipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquipInfo message, length delimited. Does not implicitly {@link common.EquipInfo.verify|verify} messages.
         * @param message EquipInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEquipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.EquipInfo;

        /**
         * Decodes an EquipInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.EquipInfo;

        /**
         * Verifies an EquipInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipInfo
         */
        public static fromObject(object: { [k: string]: any }): common.EquipInfo;

        /**
         * Creates a plain object from an EquipInfo message. Also converts values to other types if specified.
         * @param message EquipInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.EquipInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquipInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Hero. */
    interface IHero {

        /** Hero level */
        level?: (number|null);

        /** Hero san */
        san?: (number|null);

        /** Hero revocerTime */
        revocerTime?: (number|Long|null);

        /** Hero modelId */
        modelId?: (number|null);

        /** Hero skinId */
        skinId?: (number|null);

        /** Hero equips */
        equips?: ((number|Long)[]|null);
    }

    /** Represents a Hero. */
    class Hero implements IHero {

        /**
         * Constructs a new Hero.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IHero);

        /** Hero level. */
        public level: number;

        /** Hero san. */
        public san: number;

        /** Hero revocerTime. */
        public revocerTime: (number|Long);

        /** Hero modelId. */
        public modelId: number;

        /** Hero skinId. */
        public skinId: number;

        /** Hero equips. */
        public equips: (number|Long)[];

        /**
         * Creates a new Hero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hero instance
         */
        public static create(properties?: common.IHero): common.Hero;

        /**
         * Encodes the specified Hero message. Does not implicitly {@link common.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link common.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Hero;

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Hero;

        /**
         * Verifies a Hero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hero
         */
        public static fromObject(object: { [k: string]: any }): common.Hero;

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @param message Hero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Hero
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BagItemNum. */
    interface IBagItemNum {

        /** BagItemNum num */
        num?: (number|null);

        /** BagItemNum tradable */
        tradable?: (number|null);
    }

    /** Represents a BagItemNum. */
    class BagItemNum implements IBagItemNum {

        /**
         * Constructs a new BagItemNum.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBagItemNum);

        /** BagItemNum num. */
        public num: number;

        /** BagItemNum tradable. */
        public tradable: number;

        /**
         * Creates a new BagItemNum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BagItemNum instance
         */
        public static create(properties?: common.IBagItemNum): common.BagItemNum;

        /**
         * Encodes the specified BagItemNum message. Does not implicitly {@link common.BagItemNum.verify|verify} messages.
         * @param message BagItemNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBagItemNum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BagItemNum message, length delimited. Does not implicitly {@link common.BagItemNum.verify|verify} messages.
         * @param message BagItemNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBagItemNum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BagItemNum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BagItemNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BagItemNum;

        /**
         * Decodes a BagItemNum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BagItemNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BagItemNum;

        /**
         * Verifies a BagItemNum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BagItemNum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BagItemNum
         */
        public static fromObject(object: { [k: string]: any }): common.BagItemNum;

        /**
         * Creates a plain object from a BagItemNum message. Also converts values to other types if specified.
         * @param message BagItemNum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BagItemNum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BagItemNum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BagItemNum
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Collection. */
    interface ICollection {

        /** Collection level */
        level?: (number|null);

        /** Collection num */
        num?: (number|null);
    }

    /** Represents a Collection. */
    class Collection implements ICollection {

        /**
         * Constructs a new Collection.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICollection);

        /** Collection level. */
        public level: number;

        /** Collection num. */
        public num: number;

        /**
         * Creates a new Collection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Collection instance
         */
        public static create(properties?: common.ICollection): common.Collection;

        /**
         * Encodes the specified Collection message. Does not implicitly {@link common.Collection.verify|verify} messages.
         * @param message Collection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICollection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Collection message, length delimited. Does not implicitly {@link common.Collection.verify|verify} messages.
         * @param message Collection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICollection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Collection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Collection;

        /**
         * Decodes a Collection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Collection;

        /**
         * Verifies a Collection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Collection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Collection
         */
        public static fromObject(object: { [k: string]: any }): common.Collection;

        /**
         * Creates a plain object from a Collection message. Also converts values to other types if specified.
         * @param message Collection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Collection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Collection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Collection
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BagInfo. */
    interface IBagInfo {

        /** BagInfo equips */
        equips?: ({ [k: string]: common.IEquipInfo }|null);

        /** BagInfo items */
        items?: ({ [k: string]: common.IBagItemNum }|null);

        /** BagInfo cards */
        cards?: ({ [k: string]: common.IBagItemNum }|null);

        /** BagInfo driftBottles */
        driftBottles?: ({ [k: string]: number }|null);

        /** BagInfo picturePuzzles */
        picturePuzzles?: ({ [k: string]: number }|null);

        /** BagInfo collections */
        collections?: ({ [k: string]: number }|null);

        /** BagInfo diyFlags */
        diyFlags?: ({ [k: string]: number }|null);

        /** BagInfo equipVolume */
        equipVolume?: (number|null);

        /** BagInfo extendNum */
        extendNum?: (number|null);
    }

    /** Represents a BagInfo. */
    class BagInfo implements IBagInfo {

        /**
         * Constructs a new BagInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBagInfo);

        /** BagInfo equips. */
        public equips: { [k: string]: common.IEquipInfo };

        /** BagInfo items. */
        public items: { [k: string]: common.IBagItemNum };

        /** BagInfo cards. */
        public cards: { [k: string]: common.IBagItemNum };

        /** BagInfo driftBottles. */
        public driftBottles: { [k: string]: number };

        /** BagInfo picturePuzzles. */
        public picturePuzzles: { [k: string]: number };

        /** BagInfo collections. */
        public collections: { [k: string]: number };

        /** BagInfo diyFlags. */
        public diyFlags: { [k: string]: number };

        /** BagInfo equipVolume. */
        public equipVolume: number;

        /** BagInfo extendNum. */
        public extendNum: number;

        /**
         * Creates a new BagInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BagInfo instance
         */
        public static create(properties?: common.IBagInfo): common.BagInfo;

        /**
         * Encodes the specified BagInfo message. Does not implicitly {@link common.BagInfo.verify|verify} messages.
         * @param message BagInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BagInfo message, length delimited. Does not implicitly {@link common.BagInfo.verify|verify} messages.
         * @param message BagInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BagInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BagInfo;

        /**
         * Decodes a BagInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BagInfo;

        /**
         * Verifies a BagInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BagInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BagInfo
         */
        public static fromObject(object: { [k: string]: any }): common.BagInfo;

        /**
         * Creates a plain object from a BagInfo message. Also converts values to other types if specified.
         * @param message BagInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BagInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BagInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BagInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GoodsRecordInfo. */
    interface IGoodsRecordInfo {

        /** GoodsRecordInfo buyTimes */
        buyTimes?: (number|null);

        /** GoodsRecordInfo totalBuyTimes */
        totalBuyTimes?: (number|null);

        /** GoodsRecordInfo requestTimes */
        requestTimes?: (number|null);

        /** GoodsRecordInfo refreshTime */
        refreshTime?: (number|Long|null);

        /** GoodsRecordInfo awards */
        awards?: (string|null);
    }

    /** Represents a GoodsRecordInfo. */
    class GoodsRecordInfo implements IGoodsRecordInfo {

        /**
         * Constructs a new GoodsRecordInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGoodsRecordInfo);

        /** GoodsRecordInfo buyTimes. */
        public buyTimes: number;

        /** GoodsRecordInfo totalBuyTimes. */
        public totalBuyTimes: number;

        /** GoodsRecordInfo requestTimes. */
        public requestTimes: number;

        /** GoodsRecordInfo refreshTime. */
        public refreshTime: (number|Long);

        /** GoodsRecordInfo awards. */
        public awards: string;

        /**
         * Creates a new GoodsRecordInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoodsRecordInfo instance
         */
        public static create(properties?: common.IGoodsRecordInfo): common.GoodsRecordInfo;

        /**
         * Encodes the specified GoodsRecordInfo message. Does not implicitly {@link common.GoodsRecordInfo.verify|verify} messages.
         * @param message GoodsRecordInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGoodsRecordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoodsRecordInfo message, length delimited. Does not implicitly {@link common.GoodsRecordInfo.verify|verify} messages.
         * @param message GoodsRecordInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGoodsRecordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoodsRecordInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoodsRecordInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GoodsRecordInfo;

        /**
         * Decodes a GoodsRecordInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoodsRecordInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GoodsRecordInfo;

        /**
         * Verifies a GoodsRecordInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoodsRecordInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoodsRecordInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GoodsRecordInfo;

        /**
         * Creates a plain object from a GoodsRecordInfo message. Also converts values to other types if specified.
         * @param message GoodsRecordInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GoodsRecordInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoodsRecordInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GoodsRecordInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ShopInfo. */
    interface IShopInfo {

        /** ShopInfo goods */
        goods?: ({ [k: string]: common.IGoodsRecordInfo }|null);
    }

    /** Represents a ShopInfo. */
    class ShopInfo implements IShopInfo {

        /**
         * Constructs a new ShopInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IShopInfo);

        /** ShopInfo goods. */
        public goods: { [k: string]: common.IGoodsRecordInfo };

        /**
         * Creates a new ShopInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopInfo instance
         */
        public static create(properties?: common.IShopInfo): common.ShopInfo;

        /**
         * Encodes the specified ShopInfo message. Does not implicitly {@link common.ShopInfo.verify|verify} messages.
         * @param message ShopInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IShopInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShopInfo message, length delimited. Does not implicitly {@link common.ShopInfo.verify|verify} messages.
         * @param message ShopInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IShopInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ShopInfo;

        /**
         * Decodes a ShopInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ShopInfo;

        /**
         * Verifies a ShopInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ShopInfo;

        /**
         * Creates a plain object from a ShopInfo message. Also converts values to other types if specified.
         * @param message ShopInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ShopInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ShopInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TaskFreeAward. */
    interface ITaskFreeAward {

        /** TaskFreeAward ids */
        ids?: (number[]|null);

        /** TaskFreeAward getIndex */
        getIndex?: (number|null);

        /** TaskFreeAward getTime */
        getTime?: (number|Long|null);
    }

    /** Represents a TaskFreeAward. */
    class TaskFreeAward implements ITaskFreeAward {

        /**
         * Constructs a new TaskFreeAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITaskFreeAward);

        /** TaskFreeAward ids. */
        public ids: number[];

        /** TaskFreeAward getIndex. */
        public getIndex: number;

        /** TaskFreeAward getTime. */
        public getTime: (number|Long);

        /**
         * Creates a new TaskFreeAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskFreeAward instance
         */
        public static create(properties?: common.ITaskFreeAward): common.TaskFreeAward;

        /**
         * Encodes the specified TaskFreeAward message. Does not implicitly {@link common.TaskFreeAward.verify|verify} messages.
         * @param message TaskFreeAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITaskFreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskFreeAward message, length delimited. Does not implicitly {@link common.TaskFreeAward.verify|verify} messages.
         * @param message TaskFreeAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITaskFreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskFreeAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskFreeAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TaskFreeAward;

        /**
         * Decodes a TaskFreeAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskFreeAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TaskFreeAward;

        /**
         * Verifies a TaskFreeAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskFreeAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskFreeAward
         */
        public static fromObject(object: { [k: string]: any }): common.TaskFreeAward;

        /**
         * Creates a plain object from a TaskFreeAward message. Also converts values to other types if specified.
         * @param message TaskFreeAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TaskFreeAward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskFreeAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TaskFreeAward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TaskInfo. */
    interface ITaskInfo {

        /** TaskInfo awardPoint */
        awardPoint?: (number|null);

        /** TaskInfo box */
        box?: (number|null);

        /** TaskInfo free */
        free?: (common.ITaskFreeAward|null);

        /** TaskInfo refreshNum */
        refreshNum?: (number|null);

        /** TaskInfo boxSeq */
        boxSeq?: (number[]|null);

        /** TaskInfo boxSeqVer */
        boxSeqVer?: (string|null);

        /** TaskInfo freeSeq */
        freeSeq?: (number[]|null);

        /** TaskInfo freeSeqVer */
        freeSeqVer?: (string|null);

        /** TaskInfo taskList */
        taskList?: ({ [k: string]: number }|null);
    }

    /** Represents a TaskInfo. */
    class TaskInfo implements ITaskInfo {

        /**
         * Constructs a new TaskInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITaskInfo);

        /** TaskInfo awardPoint. */
        public awardPoint: number;

        /** TaskInfo box. */
        public box: number;

        /** TaskInfo free. */
        public free?: (common.ITaskFreeAward|null);

        /** TaskInfo refreshNum. */
        public refreshNum: number;

        /** TaskInfo boxSeq. */
        public boxSeq: number[];

        /** TaskInfo boxSeqVer. */
        public boxSeqVer: string;

        /** TaskInfo freeSeq. */
        public freeSeq: number[];

        /** TaskInfo freeSeqVer. */
        public freeSeqVer: string;

        /** TaskInfo taskList. */
        public taskList: { [k: string]: number };

        /**
         * Creates a new TaskInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfo instance
         */
        public static create(properties?: common.ITaskInfo): common.TaskInfo;

        /**
         * Encodes the specified TaskInfo message. Does not implicitly {@link common.TaskInfo.verify|verify} messages.
         * @param message TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskInfo message, length delimited. Does not implicitly {@link common.TaskInfo.verify|verify} messages.
         * @param message TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TaskInfo;

        /**
         * Decodes a TaskInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TaskInfo;

        /**
         * Verifies a TaskInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskInfo
         */
        public static fromObject(object: { [k: string]: any }): common.TaskInfo;

        /**
         * Creates a plain object from a TaskInfo message. Also converts values to other types if specified.
         * @param message TaskInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TaskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TaskInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WaitEventData. */
    interface IWaitEventData {

        /** WaitEventData id */
        id?: (number|null);

        /** WaitEventData team */
        team?: (number|null);

        /** WaitEventData tool */
        tool?: (number|null);
    }

    /** Represents a WaitEventData. */
    class WaitEventData implements IWaitEventData {

        /**
         * Constructs a new WaitEventData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWaitEventData);

        /** WaitEventData id. */
        public id: number;

        /** WaitEventData team. */
        public team: number;

        /** WaitEventData tool. */
        public tool: number;

        /**
         * Creates a new WaitEventData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WaitEventData instance
         */
        public static create(properties?: common.IWaitEventData): common.WaitEventData;

        /**
         * Encodes the specified WaitEventData message. Does not implicitly {@link common.WaitEventData.verify|verify} messages.
         * @param message WaitEventData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWaitEventData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WaitEventData message, length delimited. Does not implicitly {@link common.WaitEventData.verify|verify} messages.
         * @param message WaitEventData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWaitEventData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WaitEventData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WaitEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WaitEventData;

        /**
         * Decodes a WaitEventData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WaitEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WaitEventData;

        /**
         * Verifies a WaitEventData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WaitEventData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WaitEventData
         */
        public static fromObject(object: { [k: string]: any }): common.WaitEventData;

        /**
         * Creates a plain object from a WaitEventData message. Also converts values to other types if specified.
         * @param message WaitEventData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WaitEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WaitEventData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WaitEventData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserBaseInfo. */
    interface IUserBaseInfo {

        /** UserBaseInfo nick */
        nick?: (string|null);

        /** UserBaseInfo gender */
        gender?: (string|null);

        /** UserBaseInfo country */
        country?: (string|null);

        /** UserBaseInfo avatar */
        avatar?: (number|null);

        /** UserBaseInfo imel */
        imel?: (string|null);

        /** UserBaseInfo device */
        device?: (string|null);
    }

    /** Represents a UserBaseInfo. */
    class UserBaseInfo implements IUserBaseInfo {

        /**
         * Constructs a new UserBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserBaseInfo);

        /** UserBaseInfo nick. */
        public nick: string;

        /** UserBaseInfo gender. */
        public gender: string;

        /** UserBaseInfo country. */
        public country: string;

        /** UserBaseInfo avatar. */
        public avatar: number;

        /** UserBaseInfo imel. */
        public imel: string;

        /** UserBaseInfo device. */
        public device: string;

        /**
         * Creates a new UserBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBaseInfo instance
         */
        public static create(properties?: common.IUserBaseInfo): common.UserBaseInfo;

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link common.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link common.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserBaseInfo;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserBaseInfo;

        /**
         * Verifies a UserBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): common.UserBaseInfo;

        /**
         * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
         * @param message UserBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserBaseInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginInfo. */
    interface ILoginInfo {

        /** LoginInfo firstTime */
        firstTime?: (number|Long|null);

        /** LoginInfo lastTime */
        lastTime?: (number|Long|null);

        /** LoginInfo lastIp */
        lastIp?: (string|null);

        /** LoginInfo loginDays */
        loginDays?: (number|null);
    }

    /** Represents a LoginInfo. */
    class LoginInfo implements ILoginInfo {

        /**
         * Constructs a new LoginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ILoginInfo);

        /** LoginInfo firstTime. */
        public firstTime: (number|Long);

        /** LoginInfo lastTime. */
        public lastTime: (number|Long);

        /** LoginInfo lastIp. */
        public lastIp: string;

        /** LoginInfo loginDays. */
        public loginDays: number;

        /**
         * Creates a new LoginInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginInfo instance
         */
        public static create(properties?: common.ILoginInfo): common.LoginInfo;

        /**
         * Encodes the specified LoginInfo message. Does not implicitly {@link common.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link common.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.LoginInfo;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.LoginInfo;

        /**
         * Verifies a LoginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginInfo
         */
        public static fromObject(object: { [k: string]: any }): common.LoginInfo;

        /**
         * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
         * @param message LoginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.LoginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PaymentInfo. */
    interface IPaymentInfo {

        /** PaymentInfo totalEcharge */
        totalEcharge?: (number|null);

        /** PaymentInfo dailyRecharge */
        dailyRecharge?: (number|null);

        /** PaymentInfo lastRecharge */
        lastRecharge?: (number|null);

        /** PaymentInfo lastRechargeTime */
        lastRechargeTime?: (number|Long|null);
    }

    /** Represents a PaymentInfo. */
    class PaymentInfo implements IPaymentInfo {

        /**
         * Constructs a new PaymentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPaymentInfo);

        /** PaymentInfo totalEcharge. */
        public totalEcharge: number;

        /** PaymentInfo dailyRecharge. */
        public dailyRecharge: number;

        /** PaymentInfo lastRecharge. */
        public lastRecharge: number;

        /** PaymentInfo lastRechargeTime. */
        public lastRechargeTime: (number|Long);

        /**
         * Creates a new PaymentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymentInfo instance
         */
        public static create(properties?: common.IPaymentInfo): common.PaymentInfo;

        /**
         * Encodes the specified PaymentInfo message. Does not implicitly {@link common.PaymentInfo.verify|verify} messages.
         * @param message PaymentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymentInfo message, length delimited. Does not implicitly {@link common.PaymentInfo.verify|verify} messages.
         * @param message PaymentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PaymentInfo;

        /**
         * Decodes a PaymentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PaymentInfo;

        /**
         * Verifies a PaymentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymentInfo
         */
        public static fromObject(object: { [k: string]: any }): common.PaymentInfo;

        /**
         * Creates a plain object from a PaymentInfo message. Also converts values to other types if specified.
         * @param message PaymentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PaymentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PaymentInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CosumeInfo. */
    interface ICosumeInfo {

        /** CosumeInfo cash */
        cash?: (number|null);

        /** CosumeInfo bindcash */
        bindcash?: (number|null);
    }

    /** Represents a CosumeInfo. */
    class CosumeInfo implements ICosumeInfo {

        /**
         * Constructs a new CosumeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICosumeInfo);

        /** CosumeInfo cash. */
        public cash: number;

        /** CosumeInfo bindcash. */
        public bindcash: number;

        /**
         * Creates a new CosumeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CosumeInfo instance
         */
        public static create(properties?: common.ICosumeInfo): common.CosumeInfo;

        /**
         * Encodes the specified CosumeInfo message. Does not implicitly {@link common.CosumeInfo.verify|verify} messages.
         * @param message CosumeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICosumeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CosumeInfo message, length delimited. Does not implicitly {@link common.CosumeInfo.verify|verify} messages.
         * @param message CosumeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICosumeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CosumeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CosumeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.CosumeInfo;

        /**
         * Decodes a CosumeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CosumeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.CosumeInfo;

        /**
         * Verifies a CosumeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CosumeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CosumeInfo
         */
        public static fromObject(object: { [k: string]: any }): common.CosumeInfo;

        /**
         * Creates a plain object from a CosumeInfo message. Also converts values to other types if specified.
         * @param message CosumeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.CosumeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CosumeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CosumeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResourceInfo. */
    interface IResourceInfo {

        /** ResourceInfo cash */
        cash?: (number|Long|null);

        /** ResourceInfo bindcash */
        bindcash?: (number|Long|null);

        /** ResourceInfo exp */
        exp?: (number|Long|null);

        /** ResourceInfo gold */
        gold?: (number|Long|null);

        /** ResourceInfo fairyAge */
        fairyAge?: (number|null);

        /** ResourceInfo candy */
        candy?: (number|null);
    }

    /** Represents a ResourceInfo. */
    class ResourceInfo implements IResourceInfo {

        /**
         * Constructs a new ResourceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IResourceInfo);

        /** ResourceInfo cash. */
        public cash: (number|Long);

        /** ResourceInfo bindcash. */
        public bindcash: (number|Long);

        /** ResourceInfo exp. */
        public exp: (number|Long);

        /** ResourceInfo gold. */
        public gold: (number|Long);

        /** ResourceInfo fairyAge. */
        public fairyAge: number;

        /** ResourceInfo candy. */
        public candy: number;

        /**
         * Creates a new ResourceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResourceInfo instance
         */
        public static create(properties?: common.IResourceInfo): common.ResourceInfo;

        /**
         * Encodes the specified ResourceInfo message. Does not implicitly {@link common.ResourceInfo.verify|verify} messages.
         * @param message ResourceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link common.ResourceInfo.verify|verify} messages.
         * @param message ResourceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResourceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResourceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ResourceInfo;

        /**
         * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResourceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ResourceInfo;

        /**
         * Verifies a ResourceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResourceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResourceInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ResourceInfo;

        /**
         * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
         * @param message ResourceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ResourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResourceInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResourceInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroTeam. */
    interface IHeroTeam {

        /** HeroTeam heros */
        heros?: (number[]|null);
    }

    /** Represents a HeroTeam. */
    class HeroTeam implements IHeroTeam {

        /**
         * Constructs a new HeroTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IHeroTeam);

        /** HeroTeam heros. */
        public heros: number[];

        /**
         * Creates a new HeroTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroTeam instance
         */
        public static create(properties?: common.IHeroTeam): common.HeroTeam;

        /**
         * Encodes the specified HeroTeam message. Does not implicitly {@link common.HeroTeam.verify|verify} messages.
         * @param message HeroTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IHeroTeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroTeam message, length delimited. Does not implicitly {@link common.HeroTeam.verify|verify} messages.
         * @param message HeroTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IHeroTeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.HeroTeam;

        /**
         * Decodes a HeroTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.HeroTeam;

        /**
         * Verifies a HeroTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroTeam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroTeam
         */
        public static fromObject(object: { [k: string]: any }): common.HeroTeam;

        /**
         * Creates a plain object from a HeroTeam message. Also converts values to other types if specified.
         * @param message HeroTeam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.HeroTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroTeam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroTeam
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BoxInfo. */
    interface IBoxInfo {

        /** BoxInfo bid */
        bid?: (number|null);

        /** BoxInfo id */
        id?: (number|null);

        /** BoxInfo time */
        time?: (number|Long|null);
    }

    /** Represents a BoxInfo. */
    class BoxInfo implements IBoxInfo {

        /**
         * Constructs a new BoxInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBoxInfo);

        /** BoxInfo bid. */
        public bid: number;

        /** BoxInfo id. */
        public id: number;

        /** BoxInfo time. */
        public time: (number|Long);

        /**
         * Creates a new BoxInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoxInfo instance
         */
        public static create(properties?: common.IBoxInfo): common.BoxInfo;

        /**
         * Encodes the specified BoxInfo message. Does not implicitly {@link common.BoxInfo.verify|verify} messages.
         * @param message BoxInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BoxInfo message, length delimited. Does not implicitly {@link common.BoxInfo.verify|verify} messages.
         * @param message BoxInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoxInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BoxInfo;

        /**
         * Decodes a BoxInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BoxInfo;

        /**
         * Verifies a BoxInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BoxInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BoxInfo
         */
        public static fromObject(object: { [k: string]: any }): common.BoxInfo;

        /**
         * Creates a plain object from a BoxInfo message. Also converts values to other types if specified.
         * @param message BoxInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BoxInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BoxInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BoxInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DropInfo. */
    interface IDropInfo {

        /** DropInfo num */
        num?: (number|null);

        /** DropInfo cycle */
        cycle?: (number|null);
    }

    /** Represents a DropInfo. */
    class DropInfo implements IDropInfo {

        /**
         * Constructs a new DropInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IDropInfo);

        /** DropInfo num. */
        public num: number;

        /** DropInfo cycle. */
        public cycle: number;

        /**
         * Creates a new DropInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DropInfo instance
         */
        public static create(properties?: common.IDropInfo): common.DropInfo;

        /**
         * Encodes the specified DropInfo message. Does not implicitly {@link common.DropInfo.verify|verify} messages.
         * @param message DropInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IDropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DropInfo message, length delimited. Does not implicitly {@link common.DropInfo.verify|verify} messages.
         * @param message DropInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IDropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DropInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DropInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.DropInfo;

        /**
         * Decodes a DropInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DropInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.DropInfo;

        /**
         * Verifies a DropInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DropInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DropInfo
         */
        public static fromObject(object: { [k: string]: any }): common.DropInfo;

        /**
         * Creates a plain object from a DropInfo message. Also converts values to other types if specified.
         * @param message DropInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.DropInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DropInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DropInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ArenaInfo. */
    interface IArenaInfo {

        /** ArenaInfo historyCups */
        historyCups?: (number|null);

        /** ArenaInfo prizeRecord */
        prizeRecord?: (number[]|null);

        /** ArenaInfo winBoxIndex */
        winBoxIndex?: (number|null);

        /** ArenaInfo winCount */
        winCount?: (number|null);

        /** ArenaInfo curWinRepeat */
        curWinRepeat?: (number|null);

        /** ArenaInfo maxWinRepeat */
        maxWinRepeat?: (number|null);

        /** ArenaInfo totalWin */
        totalWin?: (number|null);

        /** ArenaInfo turnTheTide */
        turnTheTide?: (number|null);

        /** ArenaInfo seasonJoinCount */
        seasonJoinCount?: (number|null);

        /** ArenaInfo seasonWinCount */
        seasonWinCount?: (number|null);

        /** ArenaInfo preLeagueId */
        preLeagueId?: (number|null);

        /** ArenaInfo curLeagueId */
        curLeagueId?: (number|null);

        /** ArenaInfo preRankGlobal */
        preRankGlobal?: (number|null);

        /** ArenaInfo preRankLocal */
        preRankLocal?: (number|null);

        /** ArenaInfo curRankGlobal */
        curRankGlobal?: (number|null);

        /** ArenaInfo curRankLocal */
        curRankLocal?: (number|null);
    }

    /** Represents an ArenaInfo. */
    class ArenaInfo implements IArenaInfo {

        /**
         * Constructs a new ArenaInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IArenaInfo);

        /** ArenaInfo historyCups. */
        public historyCups: number;

        /** ArenaInfo prizeRecord. */
        public prizeRecord: number[];

        /** ArenaInfo winBoxIndex. */
        public winBoxIndex: number;

        /** ArenaInfo winCount. */
        public winCount: number;

        /** ArenaInfo curWinRepeat. */
        public curWinRepeat: number;

        /** ArenaInfo maxWinRepeat. */
        public maxWinRepeat: number;

        /** ArenaInfo totalWin. */
        public totalWin: number;

        /** ArenaInfo turnTheTide. */
        public turnTheTide: number;

        /** ArenaInfo seasonJoinCount. */
        public seasonJoinCount: number;

        /** ArenaInfo seasonWinCount. */
        public seasonWinCount: number;

        /** ArenaInfo preLeagueId. */
        public preLeagueId: number;

        /** ArenaInfo curLeagueId. */
        public curLeagueId: number;

        /** ArenaInfo preRankGlobal. */
        public preRankGlobal: number;

        /** ArenaInfo preRankLocal. */
        public preRankLocal: number;

        /** ArenaInfo curRankGlobal. */
        public curRankGlobal: number;

        /** ArenaInfo curRankLocal. */
        public curRankLocal: number;

        /**
         * Creates a new ArenaInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenaInfo instance
         */
        public static create(properties?: common.IArenaInfo): common.ArenaInfo;

        /**
         * Encodes the specified ArenaInfo message. Does not implicitly {@link common.ArenaInfo.verify|verify} messages.
         * @param message ArenaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IArenaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArenaInfo message, length delimited. Does not implicitly {@link common.ArenaInfo.verify|verify} messages.
         * @param message ArenaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IArenaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArenaInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ArenaInfo;

        /**
         * Decodes an ArenaInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ArenaInfo;

        /**
         * Verifies an ArenaInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArenaInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ArenaInfo;

        /**
         * Creates a plain object from an ArenaInfo message. Also converts values to other types if specified.
         * @param message ArenaInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ArenaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ArenaInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MarkInfo. */
    interface IMarkInfo {

        /** MarkInfo userNameModifyCount */
        userNameModifyCount?: (number|null);

        /** MarkInfo guildNameModifyCount */
        guildNameModifyCount?: (number|null);

        /** MarkInfo adTimesToday */
        adTimesToday?: (number|null);
    }

    /** Represents a MarkInfo. */
    class MarkInfo implements IMarkInfo {

        /**
         * Constructs a new MarkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IMarkInfo);

        /** MarkInfo userNameModifyCount. */
        public userNameModifyCount: number;

        /** MarkInfo guildNameModifyCount. */
        public guildNameModifyCount: number;

        /** MarkInfo adTimesToday. */
        public adTimesToday: number;

        /**
         * Creates a new MarkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MarkInfo instance
         */
        public static create(properties?: common.IMarkInfo): common.MarkInfo;

        /**
         * Encodes the specified MarkInfo message. Does not implicitly {@link common.MarkInfo.verify|verify} messages.
         * @param message MarkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IMarkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MarkInfo message, length delimited. Does not implicitly {@link common.MarkInfo.verify|verify} messages.
         * @param message MarkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IMarkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MarkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MarkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.MarkInfo;

        /**
         * Decodes a MarkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MarkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.MarkInfo;

        /**
         * Verifies a MarkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MarkInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MarkInfo
         */
        public static fromObject(object: { [k: string]: any }): common.MarkInfo;

        /**
         * Creates a plain object from a MarkInfo message. Also converts values to other types if specified.
         * @param message MarkInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.MarkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MarkInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MarkInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BindInfo. */
    interface IBindInfo {

        /** BindInfo wx */
        wx?: (string|null);

        /** BindInfo qq */
        qq?: (string|null);

        /** BindInfo fb */
        fb?: (string|null);

        /** BindInfo gmail */
        gmail?: (string|null);

        /** BindInfo twitter */
        twitter?: (string|null);
    }

    /** Represents a BindInfo. */
    class BindInfo implements IBindInfo {

        /**
         * Constructs a new BindInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBindInfo);

        /** BindInfo wx. */
        public wx: string;

        /** BindInfo qq. */
        public qq: string;

        /** BindInfo fb. */
        public fb: string;

        /** BindInfo gmail. */
        public gmail: string;

        /** BindInfo twitter. */
        public twitter: string;

        /**
         * Creates a new BindInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BindInfo instance
         */
        public static create(properties?: common.IBindInfo): common.BindInfo;

        /**
         * Encodes the specified BindInfo message. Does not implicitly {@link common.BindInfo.verify|verify} messages.
         * @param message BindInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBindInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BindInfo message, length delimited. Does not implicitly {@link common.BindInfo.verify|verify} messages.
         * @param message BindInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBindInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BindInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BindInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BindInfo;

        /**
         * Decodes a BindInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BindInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BindInfo;

        /**
         * Verifies a BindInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BindInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BindInfo
         */
        public static fromObject(object: { [k: string]: any }): common.BindInfo;

        /**
         * Creates a plain object from a BindInfo message. Also converts values to other types if specified.
         * @param message BindInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BindInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BindInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BindInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AdventureTeamInfo. */
    interface IAdventureTeamInfo {

        /** AdventureTeamInfo id */
        id?: (number|null);

        /** AdventureTeamInfo startTime */
        startTime?: (number|Long|null);

        /** AdventureTeamInfo costTime */
        costTime?: (number|null);

        /** AdventureTeamInfo moveStartTime */
        moveStartTime?: (number|Long|null);

        /** AdventureTeamInfo moveStartPoint */
        moveStartPoint?: (number|null);

        /** AdventureTeamInfo moveTarget */
        moveTarget?: (number|null);

        /** AdventureTeamInfo usingTool */
        usingTool?: (number|null);

        /** AdventureTeamInfo slots */
        slots?: ({ [k: string]: number }|null);
    }

    /** Represents an AdventureTeamInfo. */
    class AdventureTeamInfo implements IAdventureTeamInfo {

        /**
         * Constructs a new AdventureTeamInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAdventureTeamInfo);

        /** AdventureTeamInfo id. */
        public id: number;

        /** AdventureTeamInfo startTime. */
        public startTime: (number|Long);

        /** AdventureTeamInfo costTime. */
        public costTime: number;

        /** AdventureTeamInfo moveStartTime. */
        public moveStartTime: (number|Long);

        /** AdventureTeamInfo moveStartPoint. */
        public moveStartPoint: number;

        /** AdventureTeamInfo moveTarget. */
        public moveTarget: number;

        /** AdventureTeamInfo usingTool. */
        public usingTool: number;

        /** AdventureTeamInfo slots. */
        public slots: { [k: string]: number };

        /**
         * Creates a new AdventureTeamInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdventureTeamInfo instance
         */
        public static create(properties?: common.IAdventureTeamInfo): common.AdventureTeamInfo;

        /**
         * Encodes the specified AdventureTeamInfo message. Does not implicitly {@link common.AdventureTeamInfo.verify|verify} messages.
         * @param message AdventureTeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAdventureTeamInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdventureTeamInfo message, length delimited. Does not implicitly {@link common.AdventureTeamInfo.verify|verify} messages.
         * @param message AdventureTeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAdventureTeamInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdventureTeamInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdventureTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AdventureTeamInfo;

        /**
         * Decodes an AdventureTeamInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdventureTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AdventureTeamInfo;

        /**
         * Verifies an AdventureTeamInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdventureTeamInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdventureTeamInfo
         */
        public static fromObject(object: { [k: string]: any }): common.AdventureTeamInfo;

        /**
         * Creates a plain object from an AdventureTeamInfo message. Also converts values to other types if specified.
         * @param message AdventureTeamInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AdventureTeamInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdventureTeamInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AdventureTeamInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AdventureAreaInfo. */
    interface IAdventureAreaInfo {

        /** AdventureAreaInfo level */
        level?: (number|null);

        /** AdventureAreaInfo progress */
        progress?: (number|null);

        /** AdventureAreaInfo onceAward */
        onceAward?: ({ [k: string]: number }|null);

        /** AdventureAreaInfo upgradeAward */
        upgradeAward?: ({ [k: string]: number }|null);
    }

    /** Represents an AdventureAreaInfo. */
    class AdventureAreaInfo implements IAdventureAreaInfo {

        /**
         * Constructs a new AdventureAreaInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAdventureAreaInfo);

        /** AdventureAreaInfo level. */
        public level: number;

        /** AdventureAreaInfo progress. */
        public progress: number;

        /** AdventureAreaInfo onceAward. */
        public onceAward: { [k: string]: number };

        /** AdventureAreaInfo upgradeAward. */
        public upgradeAward: { [k: string]: number };

        /**
         * Creates a new AdventureAreaInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdventureAreaInfo instance
         */
        public static create(properties?: common.IAdventureAreaInfo): common.AdventureAreaInfo;

        /**
         * Encodes the specified AdventureAreaInfo message. Does not implicitly {@link common.AdventureAreaInfo.verify|verify} messages.
         * @param message AdventureAreaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAdventureAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdventureAreaInfo message, length delimited. Does not implicitly {@link common.AdventureAreaInfo.verify|verify} messages.
         * @param message AdventureAreaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAdventureAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdventureAreaInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdventureAreaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AdventureAreaInfo;

        /**
         * Decodes an AdventureAreaInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdventureAreaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AdventureAreaInfo;

        /**
         * Verifies an AdventureAreaInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdventureAreaInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdventureAreaInfo
         */
        public static fromObject(object: { [k: string]: any }): common.AdventureAreaInfo;

        /**
         * Creates a plain object from an AdventureAreaInfo message. Also converts values to other types if specified.
         * @param message AdventureAreaInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AdventureAreaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdventureAreaInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AdventureAreaInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EventModInfo. */
    interface IEventModInfo {

        /** EventModInfo seq */
        seq?: (number[]|null);
    }

    /** Represents an EventModInfo. */
    class EventModInfo implements IEventModInfo {

        /**
         * Constructs a new EventModInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEventModInfo);

        /** EventModInfo seq. */
        public seq: number[];

        /**
         * Creates a new EventModInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventModInfo instance
         */
        public static create(properties?: common.IEventModInfo): common.EventModInfo;

        /**
         * Encodes the specified EventModInfo message. Does not implicitly {@link common.EventModInfo.verify|verify} messages.
         * @param message EventModInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEventModInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventModInfo message, length delimited. Does not implicitly {@link common.EventModInfo.verify|verify} messages.
         * @param message EventModInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEventModInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventModInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventModInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.EventModInfo;

        /**
         * Decodes an EventModInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventModInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.EventModInfo;

        /**
         * Verifies an EventModInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventModInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventModInfo
         */
        public static fromObject(object: { [k: string]: any }): common.EventModInfo;

        /**
         * Creates a plain object from an EventModInfo message. Also converts values to other types if specified.
         * @param message EventModInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.EventModInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventModInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EventModInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RandomEventInfo. */
    interface IRandomEventInfo {

        /** RandomEventInfo version */
        version?: (string|null);

        /** RandomEventInfo mod */
        mod?: (common.IEventModInfo|null);
    }

    /** Represents a RandomEventInfo. */
    class RandomEventInfo implements IRandomEventInfo {

        /**
         * Constructs a new RandomEventInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IRandomEventInfo);

        /** RandomEventInfo version. */
        public version: string;

        /** RandomEventInfo mod. */
        public mod?: (common.IEventModInfo|null);

        /**
         * Creates a new RandomEventInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RandomEventInfo instance
         */
        public static create(properties?: common.IRandomEventInfo): common.RandomEventInfo;

        /**
         * Encodes the specified RandomEventInfo message. Does not implicitly {@link common.RandomEventInfo.verify|verify} messages.
         * @param message RandomEventInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IRandomEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RandomEventInfo message, length delimited. Does not implicitly {@link common.RandomEventInfo.verify|verify} messages.
         * @param message RandomEventInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IRandomEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RandomEventInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RandomEventInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.RandomEventInfo;

        /**
         * Decodes a RandomEventInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RandomEventInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.RandomEventInfo;

        /**
         * Verifies a RandomEventInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RandomEventInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RandomEventInfo
         */
        public static fromObject(object: { [k: string]: any }): common.RandomEventInfo;

        /**
         * Creates a plain object from a RandomEventInfo message. Also converts values to other types if specified.
         * @param message RandomEventInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.RandomEventInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RandomEventInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RandomEventInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AdventureInfo. */
    interface IAdventureInfo {

        /** AdventureInfo teams */
        teams?: (common.IAdventureTeamInfo|null);

        /** AdventureInfo curSelectTeam */
        curSelectTeam?: (number|null);

        /** AdventureInfo areas */
        areas?: ({ [k: string]: common.IAdventureAreaInfo }|null);

        /** AdventureInfo randomEvent */
        randomEvent?: (common.IRandomEventInfo|null);
    }

    /** Represents an AdventureInfo. */
    class AdventureInfo implements IAdventureInfo {

        /**
         * Constructs a new AdventureInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAdventureInfo);

        /** AdventureInfo teams. */
        public teams?: (common.IAdventureTeamInfo|null);

        /** AdventureInfo curSelectTeam. */
        public curSelectTeam: number;

        /** AdventureInfo areas. */
        public areas: { [k: string]: common.IAdventureAreaInfo };

        /** AdventureInfo randomEvent. */
        public randomEvent?: (common.IRandomEventInfo|null);

        /**
         * Creates a new AdventureInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdventureInfo instance
         */
        public static create(properties?: common.IAdventureInfo): common.AdventureInfo;

        /**
         * Encodes the specified AdventureInfo message. Does not implicitly {@link common.AdventureInfo.verify|verify} messages.
         * @param message AdventureInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAdventureInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdventureInfo message, length delimited. Does not implicitly {@link common.AdventureInfo.verify|verify} messages.
         * @param message AdventureInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAdventureInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdventureInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdventureInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AdventureInfo;

        /**
         * Decodes an AdventureInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdventureInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AdventureInfo;

        /**
         * Verifies an AdventureInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdventureInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdventureInfo
         */
        public static fromObject(object: { [k: string]: any }): common.AdventureInfo;

        /**
         * Creates a plain object from an AdventureInfo message. Also converts values to other types if specified.
         * @param message AdventureInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AdventureInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdventureInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AdventureInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EventInfo. */
    interface IEventInfo {

        /** EventInfo waitQueue */
        waitQueue?: (common.IWaitEventData[]|null);

        /** EventInfo happend */
        happend?: ({ [k: string]: number }|null);
    }

    /** Represents an EventInfo. */
    class EventInfo implements IEventInfo {

        /**
         * Constructs a new EventInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEventInfo);

        /** EventInfo waitQueue. */
        public waitQueue: common.IWaitEventData[];

        /** EventInfo happend. */
        public happend: { [k: string]: number };

        /**
         * Creates a new EventInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventInfo instance
         */
        public static create(properties?: common.IEventInfo): common.EventInfo;

        /**
         * Encodes the specified EventInfo message. Does not implicitly {@link common.EventInfo.verify|verify} messages.
         * @param message EventInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventInfo message, length delimited. Does not implicitly {@link common.EventInfo.verify|verify} messages.
         * @param message EventInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.EventInfo;

        /**
         * Decodes an EventInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.EventInfo;

        /**
         * Verifies an EventInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventInfo
         */
        public static fromObject(object: { [k: string]: any }): common.EventInfo;

        /**
         * Creates a plain object from an EventInfo message. Also converts values to other types if specified.
         * @param message EventInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.EventInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EventInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToolInfo. */
    interface IToolInfo {

        /** ToolInfo id */
        id?: (number|null);

        /** ToolInfo useTime */
        useTime?: (number|Long|null);

        /** ToolInfo useNum */
        useNum?: (number|null);

        /** ToolInfo adNum */
        adNum?: (number|null);

        /** ToolInfo hasNum */
        hasNum?: (number|null);
    }

    /** Represents a ToolInfo. */
    class ToolInfo implements IToolInfo {

        /**
         * Constructs a new ToolInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IToolInfo);

        /** ToolInfo id. */
        public id: number;

        /** ToolInfo useTime. */
        public useTime: (number|Long);

        /** ToolInfo useNum. */
        public useNum: number;

        /** ToolInfo adNum. */
        public adNum: number;

        /** ToolInfo hasNum. */
        public hasNum: number;

        /**
         * Creates a new ToolInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToolInfo instance
         */
        public static create(properties?: common.IToolInfo): common.ToolInfo;

        /**
         * Encodes the specified ToolInfo message. Does not implicitly {@link common.ToolInfo.verify|verify} messages.
         * @param message ToolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IToolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToolInfo message, length delimited. Does not implicitly {@link common.ToolInfo.verify|verify} messages.
         * @param message ToolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IToolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToolInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ToolInfo;

        /**
         * Decodes a ToolInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ToolInfo;

        /**
         * Verifies a ToolInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToolInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToolInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ToolInfo;

        /**
         * Creates a plain object from a ToolInfo message. Also converts values to other types if specified.
         * @param message ToolInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ToolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToolInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToolInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CollectionInfo. */
    interface ICollectionInfo {

        /** CollectionInfo id */
        id?: (number|null);

        /** CollectionInfo level */
        level?: (number|null);
    }

    /** Represents a CollectionInfo. */
    class CollectionInfo implements ICollectionInfo {

        /**
         * Constructs a new CollectionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICollectionInfo);

        /** CollectionInfo id. */
        public id: number;

        /** CollectionInfo level. */
        public level: number;

        /**
         * Creates a new CollectionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CollectionInfo instance
         */
        public static create(properties?: common.ICollectionInfo): common.CollectionInfo;

        /**
         * Encodes the specified CollectionInfo message. Does not implicitly {@link common.CollectionInfo.verify|verify} messages.
         * @param message CollectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICollectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CollectionInfo message, length delimited. Does not implicitly {@link common.CollectionInfo.verify|verify} messages.
         * @param message CollectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICollectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CollectionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CollectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.CollectionInfo;

        /**
         * Decodes a CollectionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CollectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.CollectionInfo;

        /**
         * Verifies a CollectionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CollectionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CollectionInfo
         */
        public static fromObject(object: { [k: string]: any }): common.CollectionInfo;

        /**
         * Creates a plain object from a CollectionInfo message. Also converts values to other types if specified.
         * @param message CollectionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.CollectionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CollectionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CollectionInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WorkTableInfo. */
    interface IWorkTableInfo {

        /** WorkTableInfo tools */
        tools?: ({ [k: string]: common.IToolInfo }|null);

        /** WorkTableInfo collections */
        collections?: ({ [k: string]: common.ICollectionInfo }|null);
    }

    /** Represents a WorkTableInfo. */
    class WorkTableInfo implements IWorkTableInfo {

        /**
         * Constructs a new WorkTableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWorkTableInfo);

        /** WorkTableInfo tools. */
        public tools: { [k: string]: common.IToolInfo };

        /** WorkTableInfo collections. */
        public collections: { [k: string]: common.ICollectionInfo };

        /**
         * Creates a new WorkTableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorkTableInfo instance
         */
        public static create(properties?: common.IWorkTableInfo): common.WorkTableInfo;

        /**
         * Encodes the specified WorkTableInfo message. Does not implicitly {@link common.WorkTableInfo.verify|verify} messages.
         * @param message WorkTableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWorkTableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorkTableInfo message, length delimited. Does not implicitly {@link common.WorkTableInfo.verify|verify} messages.
         * @param message WorkTableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWorkTableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorkTableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorkTableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WorkTableInfo;

        /**
         * Decodes a WorkTableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorkTableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WorkTableInfo;

        /**
         * Verifies a WorkTableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorkTableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorkTableInfo
         */
        public static fromObject(object: { [k: string]: any }): common.WorkTableInfo;

        /**
         * Creates a plain object from a WorkTableInfo message. Also converts values to other types if specified.
         * @param message WorkTableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WorkTableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorkTableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WorkTableInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FairyThemeInfo. */
    interface IFairyThemeInfo {

        /** FairyThemeInfo id */
        id?: (number|null);

        /** FairyThemeInfo level */
        level?: (number|null);

        /** FairyThemeInfo specialOpened */
        specialOpened?: (boolean|null);

        /** FairyThemeInfo recordNormal */
        recordNormal?: (number|Long|null);

        /** FairyThemeInfo recordSpecial */
        recordSpecial?: (number|Long|null);
    }

    /** Represents a FairyThemeInfo. */
    class FairyThemeInfo implements IFairyThemeInfo {

        /**
         * Constructs a new FairyThemeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFairyThemeInfo);

        /** FairyThemeInfo id. */
        public id: number;

        /** FairyThemeInfo level. */
        public level: number;

        /** FairyThemeInfo specialOpened. */
        public specialOpened: boolean;

        /** FairyThemeInfo recordNormal. */
        public recordNormal: (number|Long);

        /** FairyThemeInfo recordSpecial. */
        public recordSpecial: (number|Long);

        /**
         * Creates a new FairyThemeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FairyThemeInfo instance
         */
        public static create(properties?: common.IFairyThemeInfo): common.FairyThemeInfo;

        /**
         * Encodes the specified FairyThemeInfo message. Does not implicitly {@link common.FairyThemeInfo.verify|verify} messages.
         * @param message FairyThemeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFairyThemeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FairyThemeInfo message, length delimited. Does not implicitly {@link common.FairyThemeInfo.verify|verify} messages.
         * @param message FairyThemeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFairyThemeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FairyThemeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FairyThemeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.FairyThemeInfo;

        /**
         * Decodes a FairyThemeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FairyThemeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.FairyThemeInfo;

        /**
         * Verifies a FairyThemeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FairyThemeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FairyThemeInfo
         */
        public static fromObject(object: { [k: string]: any }): common.FairyThemeInfo;

        /**
         * Creates a plain object from a FairyThemeInfo message. Also converts values to other types if specified.
         * @param message FairyThemeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.FairyThemeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FairyThemeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FairyThemeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuideInfo. */
    interface IGuideInfo {

        /** GuideInfo taskId */
        taskId?: (number|null);

        /** GuideInfo stepId */
        stepId?: (number|null);

        /** GuideInfo jumpRecord */
        jumpRecord?: ({ [k: string]: number }|null);

        /** GuideInfo finishedTaskIds */
        finishedTaskIds?: (number[]|null);
    }

    /** Represents a GuideInfo. */
    class GuideInfo implements IGuideInfo {

        /**
         * Constructs a new GuideInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGuideInfo);

        /** GuideInfo taskId. */
        public taskId: number;

        /** GuideInfo stepId. */
        public stepId: number;

        /** GuideInfo jumpRecord. */
        public jumpRecord: { [k: string]: number };

        /** GuideInfo finishedTaskIds. */
        public finishedTaskIds: number[];

        /**
         * Creates a new GuideInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuideInfo instance
         */
        public static create(properties?: common.IGuideInfo): common.GuideInfo;

        /**
         * Encodes the specified GuideInfo message. Does not implicitly {@link common.GuideInfo.verify|verify} messages.
         * @param message GuideInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGuideInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuideInfo message, length delimited. Does not implicitly {@link common.GuideInfo.verify|verify} messages.
         * @param message GuideInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGuideInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuideInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuideInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GuideInfo;

        /**
         * Decodes a GuideInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuideInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GuideInfo;

        /**
         * Verifies a GuideInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuideInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuideInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GuideInfo;

        /**
         * Creates a plain object from a GuideInfo message. Also converts values to other types if specified.
         * @param message GuideInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GuideInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuideInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuideInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserGuildInfo. */
    interface IUserGuildInfo {

        /** UserGuildInfo gid */
        gid?: (string|null);

        /** UserGuildInfo name */
        name?: (string|null);

        /** UserGuildInfo flag */
        flag?: (number|null);

        /** UserGuildInfo location */
        location?: (string|null);
    }

    /** Represents a UserGuildInfo. */
    class UserGuildInfo implements IUserGuildInfo {

        /**
         * Constructs a new UserGuildInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserGuildInfo);

        /** UserGuildInfo gid. */
        public gid: string;

        /** UserGuildInfo name. */
        public name: string;

        /** UserGuildInfo flag. */
        public flag: number;

        /** UserGuildInfo location. */
        public location: string;

        /**
         * Creates a new UserGuildInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserGuildInfo instance
         */
        public static create(properties?: common.IUserGuildInfo): common.UserGuildInfo;

        /**
         * Encodes the specified UserGuildInfo message. Does not implicitly {@link common.UserGuildInfo.verify|verify} messages.
         * @param message UserGuildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserGuildInfo message, length delimited. Does not implicitly {@link common.UserGuildInfo.verify|verify} messages.
         * @param message UserGuildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserGuildInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserGuildInfo;

        /**
         * Decodes a UserGuildInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserGuildInfo;

        /**
         * Verifies a UserGuildInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserGuildInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGuildInfo
         */
        public static fromObject(object: { [k: string]: any }): common.UserGuildInfo;

        /**
         * Creates a plain object from a UserGuildInfo message. Also converts values to other types if specified.
         * @param message UserGuildInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserGuildInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGuildInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserGuildInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserProfile. */
    interface IUserProfile {

        /** UserProfile uid */
        uid?: (string|null);

        /** UserProfile openId */
        openId?: (string|null);

        /** UserProfile info */
        info?: (common.IUserBaseInfo|null);

        /** UserProfile login */
        login?: (common.ILoginInfo|null);

        /** UserProfile level */
        level?: (number|null);

        /** UserProfile cups */
        cups?: (number|null);

        /** UserProfile historyMaxCups */
        historyMaxCups?: (number|null);

        /** UserProfile adTimes */
        adTimes?: (number|null);

        /** UserProfile guest */
        guest?: (number|null);

        /** UserProfile payment */
        payment?: (common.IPaymentInfo|null);

        /** UserProfile consume */
        consume?: (common.ICosumeInfo|null);

        /** UserProfile resource */
        resource?: (common.IResourceInfo|null);

        /** UserProfile heros */
        heros?: ({ [k: string]: common.IHero }|null);

        /** UserProfile heroTeams */
        heroTeams?: ({ [k: string]: common.IHeroTeam }|null);

        /** UserProfile curHeroTeam */
        curHeroTeam?: (number|null);

        /** UserProfile bag */
        bag?: (common.IBagInfo|null);

        /** UserProfile shop */
        shop?: (common.IShopInfo|null);

        /** UserProfile mail */
        mail?: ({ [k: string]: number }|null);

        /** UserProfile task */
        task?: (common.ITaskInfo|null);

        /** UserProfile box */
        box?: ({ [k: string]: common.IBoxInfo }|null);

        /** UserProfile drop */
        drop?: ({ [k: string]: common.IDropInfo }|null);

        /** UserProfile arena */
        arena?: (common.IArenaInfo|null);

        /** UserProfile mark */
        mark?: (common.IMarkInfo|null);

        /** UserProfile bind */
        bind?: (common.IBindInfo|null);

        /** UserProfile hasAvatars */
        hasAvatars?: (number[]|null);

        /** UserProfile adventure */
        adventure?: (common.IAdventureInfo|null);

        /** UserProfile events */
        events?: (common.IEventInfo|null);

        /** UserProfile workTable */
        workTable?: (common.IWorkTableInfo|null);

        /** UserProfile fairyTheme */
        fairyTheme?: (common.IFairyThemeInfo|null);

        /** UserProfile guide */
        guide?: (common.IGuideInfo|null);

        /** UserProfile unlockedSkins */
        unlockedSkins?: (number[]|null);

        /** UserProfile skinExpire */
        skinExpire?: ({ [k: string]: (number|Long) }|null);

        /** UserProfile markedSaleIds */
        markedSaleIds?: (number[]|null);

        /** UserProfile markedGoods */
        markedGoods?: (string[]|null);

        /** UserProfile diyFlags */
        diyFlags?: ({ [k: string]: number }|null);

        /** UserProfile customData */
        customData?: (string|null);

        /** UserProfile guild */
        guild?: (common.IUserGuildInfo|null);
    }

    /** Represents a UserProfile. */
    class UserProfile implements IUserProfile {

        /**
         * Constructs a new UserProfile.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserProfile);

        /** UserProfile uid. */
        public uid: string;

        /** UserProfile openId. */
        public openId: string;

        /** UserProfile info. */
        public info?: (common.IUserBaseInfo|null);

        /** UserProfile login. */
        public login?: (common.ILoginInfo|null);

        /** UserProfile level. */
        public level: number;

        /** UserProfile cups. */
        public cups: number;

        /** UserProfile historyMaxCups. */
        public historyMaxCups: number;

        /** UserProfile adTimes. */
        public adTimes: number;

        /** UserProfile guest. */
        public guest: number;

        /** UserProfile payment. */
        public payment?: (common.IPaymentInfo|null);

        /** UserProfile consume. */
        public consume?: (common.ICosumeInfo|null);

        /** UserProfile resource. */
        public resource?: (common.IResourceInfo|null);

        /** UserProfile heros. */
        public heros: { [k: string]: common.IHero };

        /** UserProfile heroTeams. */
        public heroTeams: { [k: string]: common.IHeroTeam };

        /** UserProfile curHeroTeam. */
        public curHeroTeam: number;

        /** UserProfile bag. */
        public bag?: (common.IBagInfo|null);

        /** UserProfile shop. */
        public shop?: (common.IShopInfo|null);

        /** UserProfile mail. */
        public mail: { [k: string]: number };

        /** UserProfile task. */
        public task?: (common.ITaskInfo|null);

        /** UserProfile box. */
        public box: { [k: string]: common.IBoxInfo };

        /** UserProfile drop. */
        public drop: { [k: string]: common.IDropInfo };

        /** UserProfile arena. */
        public arena?: (common.IArenaInfo|null);

        /** UserProfile mark. */
        public mark?: (common.IMarkInfo|null);

        /** UserProfile bind. */
        public bind?: (common.IBindInfo|null);

        /** UserProfile hasAvatars. */
        public hasAvatars: number[];

        /** UserProfile adventure. */
        public adventure?: (common.IAdventureInfo|null);

        /** UserProfile events. */
        public events?: (common.IEventInfo|null);

        /** UserProfile workTable. */
        public workTable?: (common.IWorkTableInfo|null);

        /** UserProfile fairyTheme. */
        public fairyTheme?: (common.IFairyThemeInfo|null);

        /** UserProfile guide. */
        public guide?: (common.IGuideInfo|null);

        /** UserProfile unlockedSkins. */
        public unlockedSkins: number[];

        /** UserProfile skinExpire. */
        public skinExpire: { [k: string]: (number|Long) };

        /** UserProfile markedSaleIds. */
        public markedSaleIds: number[];

        /** UserProfile markedGoods. */
        public markedGoods: string[];

        /** UserProfile diyFlags. */
        public diyFlags: { [k: string]: number };

        /** UserProfile customData. */
        public customData: string;

        /** UserProfile guild. */
        public guild?: (common.IUserGuildInfo|null);

        /**
         * Creates a new UserProfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserProfile instance
         */
        public static create(properties?: common.IUserProfile): common.UserProfile;

        /**
         * Encodes the specified UserProfile message. Does not implicitly {@link common.UserProfile.verify|verify} messages.
         * @param message UserProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link common.UserProfile.verify|verify} messages.
         * @param message UserProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserProfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserProfile;

        /**
         * Decodes a UserProfile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserProfile;

        /**
         * Verifies a UserProfile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserProfile
         */
        public static fromObject(object: { [k: string]: any }): common.UserProfile;

        /**
         * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
         * @param message UserProfile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserProfile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserProfile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** RankType enum. */
    enum RankType {
        RANK_TYPE_UNKNOWN = 0,
        GLOBAL_LEAGUE_CUR_CUPS = 1001,
        GLOBAL_LEAGUE_LAST_CUPS = 1002,
        GLOBAL_GUILD_CUPS = 1003,
        LOCAL_LEAGUE_CUR_CUPS = 2001,
        LOCAL_LEAGUE_LAST_CUPS = 2002,
        LOCAL_GUILD_CUPS = 2003
    }

    /** Properties of a RankNodeInfo. */
    interface IRankNodeInfo {

        /** RankNodeInfo nodeId */
        nodeId?: (string|null);

        /** RankNodeInfo score */
        score?: (number|null);

        /** RankNodeInfo rank */
        rank?: (number|null);

        /** RankNodeInfo extra */
        extra?: (string|null);

        /** RankNodeInfo updatedAt */
        updatedAt?: (number|Long|null);
    }

    /** Represents a RankNodeInfo. */
    class RankNodeInfo implements IRankNodeInfo {

        /**
         * Constructs a new RankNodeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IRankNodeInfo);

        /** RankNodeInfo nodeId. */
        public nodeId: string;

        /** RankNodeInfo score. */
        public score: number;

        /** RankNodeInfo rank. */
        public rank: number;

        /** RankNodeInfo extra. */
        public extra: string;

        /** RankNodeInfo updatedAt. */
        public updatedAt: (number|Long);

        /**
         * Creates a new RankNodeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankNodeInfo instance
         */
        public static create(properties?: common.IRankNodeInfo): common.RankNodeInfo;

        /**
         * Encodes the specified RankNodeInfo message. Does not implicitly {@link common.RankNodeInfo.verify|verify} messages.
         * @param message RankNodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IRankNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RankNodeInfo message, length delimited. Does not implicitly {@link common.RankNodeInfo.verify|verify} messages.
         * @param message RankNodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IRankNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankNodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankNodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.RankNodeInfo;

        /**
         * Decodes a RankNodeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankNodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.RankNodeInfo;

        /**
         * Verifies a RankNodeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankNodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankNodeInfo
         */
        public static fromObject(object: { [k: string]: any }): common.RankNodeInfo;

        /**
         * Creates a plain object from a RankNodeInfo message. Also converts values to other types if specified.
         * @param message RankNodeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.RankNodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankNodeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RankNodeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** SaleItemStatus enum. */
    enum SaleItemStatus {
        SALE_ITEM_STATE_UNKNOWN = 0,
        SALE_ITEM_STATE_PUBLICITY = 1,
        SALE_ITEM_STATE_TRADING = 2,
        SALE_ITEM_STATE_VERIFY = 3,
        SALE_ITEM_STATE_CLAIM = 4,
        SALE_ITEM_STATE_EXPIRE = 5
    }

    /** SaleRecordType enum. */
    enum SaleRecordType {
        SALE_RECORD_TYPE_SALE = 0,
        SALE_RECORD_TYPE_BUY = 1
    }

    /** Properties of a StorageItemInfo. */
    interface IStorageItemInfo {

        /** StorageItemInfo itemUuid */
        itemUuid?: (number|Long|null);

        /** StorageItemInfo itemId */
        itemId?: (number|null);

        /** StorageItemInfo itemType */
        itemType?: (string|null);

        /** StorageItemInfo itemTag */
        itemTag?: (string|null);

        /** StorageItemInfo itemCount */
        itemCount?: (number|null);
    }

    /** Represents a StorageItemInfo. */
    class StorageItemInfo implements IStorageItemInfo {

        /**
         * Constructs a new StorageItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IStorageItemInfo);

        /** StorageItemInfo itemUuid. */
        public itemUuid: (number|Long);

        /** StorageItemInfo itemId. */
        public itemId: number;

        /** StorageItemInfo itemType. */
        public itemType: string;

        /** StorageItemInfo itemTag. */
        public itemTag: string;

        /** StorageItemInfo itemCount. */
        public itemCount: number;

        /**
         * Creates a new StorageItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageItemInfo instance
         */
        public static create(properties?: common.IStorageItemInfo): common.StorageItemInfo;

        /**
         * Encodes the specified StorageItemInfo message. Does not implicitly {@link common.StorageItemInfo.verify|verify} messages.
         * @param message StorageItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IStorageItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageItemInfo message, length delimited. Does not implicitly {@link common.StorageItemInfo.verify|verify} messages.
         * @param message StorageItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IStorageItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.StorageItemInfo;

        /**
         * Decodes a StorageItemInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.StorageItemInfo;

        /**
         * Verifies a StorageItemInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageItemInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageItemInfo
         */
        public static fromObject(object: { [k: string]: any }): common.StorageItemInfo;

        /**
         * Creates a plain object from a StorageItemInfo message. Also converts values to other types if specified.
         * @param message StorageItemInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.StorageItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageItemInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StorageItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaleItemInfo. */
    interface ISaleItemInfo {

        /** SaleItemInfo saleId */
        saleId?: (number|Long|null);

        /** SaleItemInfo itemId */
        itemId?: (number|null);

        /** SaleItemInfo itemType */
        itemType?: (string|null);

        /** SaleItemInfo itemTag */
        itemTag?: (string|null);

        /** SaleItemInfo itemCount */
        itemCount?: (number|null);

        /** SaleItemInfo status */
        status?: (number|null);

        /** SaleItemInfo createAt */
        createAt?: (number|Long|null);

        /** SaleItemInfo price */
        price?: (number|null);

        /** SaleItemInfo markCount */
        markCount?: (number|null);

        /** SaleItemInfo salerId */
        salerId?: (string|null);

        /** SaleItemInfo publicityTime */
        publicityTime?: (number|null);
    }

    /** Represents a SaleItemInfo. */
    class SaleItemInfo implements ISaleItemInfo {

        /**
         * Constructs a new SaleItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISaleItemInfo);

        /** SaleItemInfo saleId. */
        public saleId: (number|Long);

        /** SaleItemInfo itemId. */
        public itemId: number;

        /** SaleItemInfo itemType. */
        public itemType: string;

        /** SaleItemInfo itemTag. */
        public itemTag: string;

        /** SaleItemInfo itemCount. */
        public itemCount: number;

        /** SaleItemInfo status. */
        public status: number;

        /** SaleItemInfo createAt. */
        public createAt: (number|Long);

        /** SaleItemInfo price. */
        public price: number;

        /** SaleItemInfo markCount. */
        public markCount: number;

        /** SaleItemInfo salerId. */
        public salerId: string;

        /** SaleItemInfo publicityTime. */
        public publicityTime: number;

        /**
         * Creates a new SaleItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaleItemInfo instance
         */
        public static create(properties?: common.ISaleItemInfo): common.SaleItemInfo;

        /**
         * Encodes the specified SaleItemInfo message. Does not implicitly {@link common.SaleItemInfo.verify|verify} messages.
         * @param message SaleItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISaleItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaleItemInfo message, length delimited. Does not implicitly {@link common.SaleItemInfo.verify|verify} messages.
         * @param message SaleItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISaleItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaleItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaleItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SaleItemInfo;

        /**
         * Decodes a SaleItemInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaleItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SaleItemInfo;

        /**
         * Verifies a SaleItemInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaleItemInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaleItemInfo
         */
        public static fromObject(object: { [k: string]: any }): common.SaleItemInfo;

        /**
         * Creates a plain object from a SaleItemInfo message. Also converts values to other types if specified.
         * @param message SaleItemInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SaleItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaleItemInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaleItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaleRecordInfo. */
    interface ISaleRecordInfo {

        /** SaleRecordInfo recordType */
        recordType?: (common.SaleRecordType|null);

        /** SaleRecordInfo itemId */
        itemId?: (number|null);

        /** SaleRecordInfo itemCount */
        itemCount?: (number|null);

        /** SaleRecordInfo itemPrice */
        itemPrice?: (number|null);

        /** SaleRecordInfo timestamp */
        timestamp?: (number|Long|null);

        /** SaleRecordInfo itemType */
        itemType?: (string|null);
    }

    /** Represents a SaleRecordInfo. */
    class SaleRecordInfo implements ISaleRecordInfo {

        /**
         * Constructs a new SaleRecordInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISaleRecordInfo);

        /** SaleRecordInfo recordType. */
        public recordType: common.SaleRecordType;

        /** SaleRecordInfo itemId. */
        public itemId: number;

        /** SaleRecordInfo itemCount. */
        public itemCount: number;

        /** SaleRecordInfo itemPrice. */
        public itemPrice: number;

        /** SaleRecordInfo timestamp. */
        public timestamp: (number|Long);

        /** SaleRecordInfo itemType. */
        public itemType: string;

        /**
         * Creates a new SaleRecordInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaleRecordInfo instance
         */
        public static create(properties?: common.ISaleRecordInfo): common.SaleRecordInfo;

        /**
         * Encodes the specified SaleRecordInfo message. Does not implicitly {@link common.SaleRecordInfo.verify|verify} messages.
         * @param message SaleRecordInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISaleRecordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaleRecordInfo message, length delimited. Does not implicitly {@link common.SaleRecordInfo.verify|verify} messages.
         * @param message SaleRecordInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISaleRecordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaleRecordInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaleRecordInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SaleRecordInfo;

        /**
         * Decodes a SaleRecordInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaleRecordInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SaleRecordInfo;

        /**
         * Verifies a SaleRecordInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaleRecordInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaleRecordInfo
         */
        public static fromObject(object: { [k: string]: any }): common.SaleRecordInfo;

        /**
         * Creates a plain object from a SaleRecordInfo message. Also converts values to other types if specified.
         * @param message SaleRecordInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SaleRecordInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaleRecordInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaleRecordInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WalletInfo. */
    interface IWalletInfo {

        /** WalletInfo balance */
        balance?: (number|null);
    }

    /** Represents a WalletInfo. */
    class WalletInfo implements IWalletInfo {

        /**
         * Constructs a new WalletInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWalletInfo);

        /** WalletInfo balance. */
        public balance: number;

        /**
         * Creates a new WalletInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalletInfo instance
         */
        public static create(properties?: common.IWalletInfo): common.WalletInfo;

        /**
         * Encodes the specified WalletInfo message. Does not implicitly {@link common.WalletInfo.verify|verify} messages.
         * @param message WalletInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWalletInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalletInfo message, length delimited. Does not implicitly {@link common.WalletInfo.verify|verify} messages.
         * @param message WalletInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWalletInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalletInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WalletInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WalletInfo;

        /**
         * Decodes a WalletInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalletInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WalletInfo;

        /**
         * Verifies a WalletInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WalletInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WalletInfo
         */
        public static fromObject(object: { [k: string]: any }): common.WalletInfo;

        /**
         * Creates a plain object from a WalletInfo message. Also converts values to other types if specified.
         * @param message WalletInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WalletInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalletInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WalletInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GoodsInfo. */
    interface IGoodsInfo {

        /** GoodsInfo itemType */
        itemType?: (string|null);

        /** GoodsInfo itemId */
        itemId?: (number|null);

        /** GoodsInfo itemCount */
        itemCount?: (number|null);

        /** GoodsInfo markCount */
        markCount?: (number|null);
    }

    /** Represents a GoodsInfo. */
    class GoodsInfo implements IGoodsInfo {

        /**
         * Constructs a new GoodsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGoodsInfo);

        /** GoodsInfo itemType. */
        public itemType: string;

        /** GoodsInfo itemId. */
        public itemId: number;

        /** GoodsInfo itemCount. */
        public itemCount: number;

        /** GoodsInfo markCount. */
        public markCount: number;

        /**
         * Creates a new GoodsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoodsInfo instance
         */
        public static create(properties?: common.IGoodsInfo): common.GoodsInfo;

        /**
         * Encodes the specified GoodsInfo message. Does not implicitly {@link common.GoodsInfo.verify|verify} messages.
         * @param message GoodsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoodsInfo message, length delimited. Does not implicitly {@link common.GoodsInfo.verify|verify} messages.
         * @param message GoodsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoodsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GoodsInfo;

        /**
         * Decodes a GoodsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GoodsInfo;

        /**
         * Verifies a GoodsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoodsInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoodsInfo
         */
        public static fromObject(object: { [k: string]: any }): common.GoodsInfo;

        /**
         * Creates a plain object from a GoodsInfo message. Also converts values to other types if specified.
         * @param message GoodsInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GoodsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoodsInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GoodsInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
