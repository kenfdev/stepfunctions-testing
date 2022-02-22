import { JsonSerializable } from '.';
import { MockedResponse } from './response';
import { StateMachineTestCase } from './state-machine-test-case';
declare type TestCaseDefinitions = {
    [key: string]: StateMachineTestCase;
};
export declare class StateMachineTestDefinition implements JsonSerializable {
    private _testCaseDefinitions;
    get testCaseDefinitions(): TestCaseDefinitions;
    private _stateMachineName;
    get stateMachineName(): string;
    constructor(stateMachineName: string);
    addTestCase(testCase: StateMachineTestCase): this;
    collectTestCase(): StateMachineTestCase[];
    collectMockedResponses(): MockedResponse[];
    toJson(): {
        [x: string]: {
            TestCases: {
                [key: string]: any;
            };
        };
    };
}
export {};
