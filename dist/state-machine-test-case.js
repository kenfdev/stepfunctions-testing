"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachineTestCase = void 0;
const _1 = require(".");
class StateMachineTestCase {
    mockedStates = {};
    _testCaseName;
    get name() {
        return this._testCaseName;
    }
    _input;
    get input() {
        return this._input;
    }
    constructor(testCaseName) {
        this._testCaseName = testCaseName;
    }
    withInput(input) {
        this._input = input;
        return this;
    }
    addMockedState(stateName, response) {
        if (this.mockedStates.hasOwnProperty(stateName)) {
            throw new Error(`The State ${stateName} is already defined`);
        }
        this.mockedStates[stateName] = response;
        return this;
    }
    collectMockedResponses() {
        return Object.keys(this.mockedStates).map((key) => this.mockedStates[key]); // TODO: better way to Type?
    }
    toJson() {
        if ((0, _1.isObjectEmpty)(this.mockedStates)) {
            throw new Error('At least 1 state needs to be defined');
        }
        const serializedMockedStates = Object.keys(this.mockedStates).reduce((acc, key) => {
            acc[key] = this.mockedStates[key].name;
            return acc;
        }, {});
        return {
            [this._testCaseName]: serializedMockedStates,
        };
    }
}
exports.StateMachineTestCase = StateMachineTestCase;
