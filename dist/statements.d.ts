import { JsonSerializable } from '.';
export declare type Statement = JsonSerializable;
export declare class ReturnStatement<T = any> implements Statement {
    private response;
    constructor(response: T);
    toJson(): {
        Return: T;
    };
}
export declare class ThrowStatement implements Statement {
    error: string;
    cause: string;
    constructor(error: string, cause: string);
    toJson(): {
        Throw: {
            Error: string;
            Cause: string;
        };
    };
}
