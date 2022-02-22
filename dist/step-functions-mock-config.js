"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepFunctionsMockConfig = void 0;
class StepFunctionsMockConfig {
    stateMachineTestDefinitions = {};
    collectStateMachineTestDefinitions() {
        return Object.values(this.stateMachineTestDefinitions);
    }
    addTestDefinition(test) {
        if (this.stateMachineTestDefinitions.hasOwnProperty(test.stateMachineName)) {
            throw new Error(`StateMachine ${test.stateMachineName} is already defined`);
        }
        this.stateMachineTestDefinitions[test.stateMachineName] = test;
        return this;
    }
    optimizeMockedResponses(mockedResponses) {
        return mockedResponses.reduce((obj, response) => {
            if (obj[response.name] &&
                obj[response.name].hasOwnProperty(response.name) &&
                obj[response.name] !== response) {
                let errMessage = `Response name conflict. ${response.name} is already defined and has a different definition. Make sure the response names are unique or else the results will be unpredictable`;
                errMessage += `\nExisting definition: ${JSON.stringify(obj[response.name])}`;
                errMessage += `\nIncoming definition: ${JSON.stringify(response.toJson())}`;
                throw new Error(errMessage);
            }
            obj[response.name] = response;
            return obj;
        }, {});
    }
    toJson() {
        let serializedStateMachines = {};
        let mockedResponses = [];
        for (const stateMachineName of Object.keys(this.stateMachineTestDefinitions)) {
            const stateMachineTestDefinition = this.stateMachineTestDefinitions[stateMachineName];
            serializedStateMachines = {
                ...serializedStateMachines,
                ...stateMachineTestDefinition.toJson(),
            };
            mockedResponses = mockedResponses.concat(stateMachineTestDefinition.collectMockedResponses());
        }
        const optimizedMockResponses = this.optimizeMockedResponses(mockedResponses);
        const serializedMockedResponses = Object.keys(optimizedMockResponses).reduce((obj, key) => {
            return { ...obj, ...optimizedMockResponses[key].toJson() };
        }, {});
        return {
            StateMachines: serializedStateMachines,
            MockedResponses: serializedMockedResponses,
        };
    }
}
exports.StepFunctionsMockConfig = StepFunctionsMockConfig;
