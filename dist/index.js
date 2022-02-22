"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEmpty = exports.StepFunctionsMockConfig = exports.StateMachineTestCase = exports.StateMachineTestDefinition = exports.MockedResponse = void 0;
var response_1 = require("./response");
Object.defineProperty(exports, "MockedResponse", { enumerable: true, get: function () { return response_1.MockedResponse; } });
var state_machine_test_definition_1 = require("./state-machine-test-definition");
Object.defineProperty(exports, "StateMachineTestDefinition", { enumerable: true, get: function () { return state_machine_test_definition_1.StateMachineTestDefinition; } });
var state_machine_test_case_1 = require("./state-machine-test-case");
Object.defineProperty(exports, "StateMachineTestCase", { enumerable: true, get: function () { return state_machine_test_case_1.StateMachineTestCase; } });
var step_functions_mock_config_1 = require("./step-functions-mock-config");
Object.defineProperty(exports, "StepFunctionsMockConfig", { enumerable: true, get: function () { return step_functions_mock_config_1.StepFunctionsMockConfig; } });
const isObjectEmpty = (obj) => {
    return (obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype);
};
exports.isObjectEmpty = isObjectEmpty;
