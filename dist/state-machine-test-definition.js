"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachineTestDefinition = void 0;
const _1 = require(".");
class StateMachineTestDefinition {
    _testCaseDefinitions = {};
    get testCaseDefinitions() {
        return this._testCaseDefinitions;
    }
    _stateMachineName;
    get stateMachineName() {
        return this._stateMachineName;
    }
    constructor(stateMachineName) {
        this._stateMachineName = stateMachineName;
    }
    addTestCase(testCase) {
        if (this._testCaseDefinitions.hasOwnProperty(testCase.name)) {
            throw new Error(`TestCase ${testCase.name} is already defined`);
        }
        this._testCaseDefinitions[testCase.name] = testCase;
        return this;
    }
    collectTestCase() {
        return Object.values(this._testCaseDefinitions);
    }
    collectMockedResponses() {
        return Object.keys(this._testCaseDefinitions).reduce((acc, key) => {
            return acc.concat(this._testCaseDefinitions[key].collectMockedResponses());
        }, []);
    }
    toJson() {
        if ((0, _1.isObjectEmpty)(this._testCaseDefinitions)) {
            throw new Error('At least 1 test case needs to be defined');
        }
        const serializedTestCaseDefinitions = Object.keys(this._testCaseDefinitions).reduce((acc, key) => {
            return { ...acc, ...this._testCaseDefinitions[key].toJson() };
        }, {});
        return {
            [this._stateMachineName]: {
                TestCases: serializedTestCaseDefinitions,
            },
        };
    }
}
exports.StateMachineTestDefinition = StateMachineTestDefinition;
