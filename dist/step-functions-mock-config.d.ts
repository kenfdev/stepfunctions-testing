import { JsonSerializable } from '.';
import { StateMachineTestDefinition } from './state-machine-test-definition';
export declare class StepFunctionsMockConfig implements JsonSerializable {
    private stateMachineTestDefinitions;
    collectStateMachineTestDefinitions(): StateMachineTestDefinition[];
    addTestDefinition(test: StateMachineTestDefinition): this;
    private optimizeMockedResponses;
    toJson(): {
        StateMachines: any;
        MockedResponses: {
            [key: string]: any;
        };
    };
}
