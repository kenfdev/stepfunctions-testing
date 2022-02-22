import { JsonSerializable } from '.';
export declare class MockedResponse implements JsonSerializable {
    private responses;
    private _name;
    get name(): string;
    constructor(name: string);
    return<T = any>(response: T, repeat?: number): this;
    throw(error: string, cause: string, repeat?: number): this;
    toJson(): {
        [x: string]: {
            [index: string]: any;
        };
    };
}
