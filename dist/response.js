"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockedResponse = void 0;
const statements_1 = require("./statements");
class MockedResponseCollection {
    collection = [];
    add(statement, repeat) {
        this.collection = [...this.collection, { repeat, statement }];
    }
    isEmpty() {
        return this.collection.length === 0;
    }
    toJson() {
        let result = {};
        let currentResponseIndex = 0;
        for (let i = 0; i < this.collection.length; i++) {
            const item = this.collection[i];
            let indexStr = currentResponseIndex.toString();
            if (item.repeat > 0) {
                currentResponseIndex = currentResponseIndex + item.repeat;
                indexStr = `${indexStr}-${currentResponseIndex}`;
            }
            result[indexStr] = item.statement.toJson();
            currentResponseIndex++;
        }
        return result;
    }
}
class MockedResponse {
    responses = new MockedResponseCollection();
    _name;
    get name() {
        return this._name;
    }
    constructor(name) {
        this._name = name;
    }
    return(response, repeat = 0) {
        this.responses.add(new statements_1.ReturnStatement(response), repeat);
        return this;
    }
    throw(error, cause, repeat = 0) {
        this.responses.add(new statements_1.ThrowStatement(error, cause), repeat);
        return this;
    }
    toJson() {
        if (this.responses.isEmpty()) {
            throw new Error('At least 1 return or throw response is required.');
        }
        return {
            [this._name]: this.responses.toJson(),
        };
    }
}
exports.MockedResponse = MockedResponse;
