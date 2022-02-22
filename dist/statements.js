"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowStatement = exports.ReturnStatement = void 0;
class ReturnStatement {
    response;
    constructor(response) {
        this.response = response;
    }
    toJson() {
        return {
            Return: this.response,
        };
    }
}
exports.ReturnStatement = ReturnStatement;
class ThrowStatement {
    error;
    cause;
    constructor(error, cause) {
        this.error = error;
        this.cause = cause;
    }
    toJson() {
        return {
            Throw: {
                Error: this.error,
                Cause: this.cause,
            },
        };
    }
}
exports.ThrowStatement = ThrowStatement;
