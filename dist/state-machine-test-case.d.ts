import { JsonSerializable } from '.';
import { MockedResponse } from './response';
export declare class StateMachineTestCase<StateName extends string = string> implements JsonSerializable {
    private mockedStates;
    private _testCaseName;
    get name(): string;
    private _input;
    get input(): any;
    constructor(testCaseName: string);
    withInput(input: any): this;
    addMockedState(stateName: StateName, response: MockedResponse): this;
    collectMockedResponses(): MockedResponse[];
    toJson(): {
        [x: string]: {
            [key: string]: any;
        };
    };
}
