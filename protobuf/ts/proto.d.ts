import * as $protobuf from "protobufjs";
import Long = require("long");
export interface ICLogin {
    name?: (string|null);
    password?: (string|null);
}

export class CLogin implements ICLogin {
    constructor(p?: ICLogin);
    public name: string;
    public password: string;
    public static encode(m: ICLogin, w?: $protobuf.Writer): $protobuf.Writer;
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CLogin;
}

export interface ISLogin {
    playerId?: (number|null);
}

export class SLogin implements ISLogin {
    constructor(p?: ISLogin);
    public playerId: number;
    public static encode(m: ISLogin, w?: $protobuf.Writer): $protobuf.Writer;
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SLogin;
}

export interface ICEcho {
    msg?: (string|null);
}

export class CEcho implements ICEcho {
    constructor(p?: ICEcho);
    public msg: string;
    public static encode(m: ICEcho, w?: $protobuf.Writer): $protobuf.Writer;
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CEcho;
}

export interface ISEcho {
    msg?: (string|null);
}

export class SEcho implements ISEcho {
    constructor(p?: ISEcho);
    public msg: string;
    public static encode(m: ISEcho, w?: $protobuf.Writer): $protobuf.Writer;
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SEcho;
}
