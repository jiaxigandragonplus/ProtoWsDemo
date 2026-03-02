import * as $protobuf from "protobufjs";
import Long = require("long");
export interface ICLogin {
    name?: (string|null);
    password?: (string|null);
}

export class CLogin implements ICLogin {
    constructor(properties?: ICLogin);
    public name: string;
    public password: string;
    public static encode(message: ICLogin, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLogin;
}

export interface ISLogin {
    playerId?: (number|Long|null);
}

export class SLogin implements ISLogin {
    constructor(properties?: ISLogin);
    public playerId: (number|Long);
    public static encode(message: ISLogin, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SLogin;
}

export interface ICEcho {
    msg?: (string|null);
}

export class CEcho implements ICEcho {
    constructor(properties?: ICEcho);
    public msg: string;
    public static encode(message: ICEcho, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEcho;
}

export interface ISEcho {
    msg?: (string|null);
}

export class SEcho implements ISEcho {
    constructor(properties?: ISEcho);
    public msg: string;
    public static encode(message: ISEcho, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SEcho;
}
