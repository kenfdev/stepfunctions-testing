export { MockedResponse } from './response';
export { StateMachineTestDefinition } from './state-machine-test-definition';
export { StateMachineTestCase } from './state-machine-test-case';
export { StepFunctionsMockConfig } from './step-functions-mock-config';
export interface JsonSerializable {
    toJson: () => any;
}
export declare const isObjectEmpty: (obj: any) => any;
