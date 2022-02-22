# Step Functions Testing Library

## Features

- Create a [MockConfigFile](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-local-test-sm-exec.html) with JavaScript


### Install

```sh
npm i stepfunctions-testing
```
## Usage

### Creating a mocked response

#### `Return` a response

```js
const checkIdentityLambdaMockedSuccess = new MockedResponse(
  'CheckIdentityLambdaMockedSuccess'
).return<any>({
  StatusCode: 200,
  Payload: {
    statusCode: 200,
    body: JSON.stringify({
      approved: true,
      message: 'identity validation passed',
    }),
  },
});
```

#### `Throw` a response

```js
const checkIdentityLambdaMockedThrowError = new MockedResponse(
  'CheckIdentityLambdaMockedThrowError'
).throw('CustomValidationError', 'Check Identity Validation Failed');
```

#### Repeating responses

```js
const checkIdentityLambdaMockedThrowError = new MockedResponse(
  'CheckIdentityLambdaMockedThrowError'
).throw('CustomValidationError', 'Check Identity Validation Failed', /* repeat the response 3 times. total becomes 4 */ 3);
```

### Full example

```js
// Create mocked responses
const checkIdentityLambdaMockedSuccess = new MockedResponse(
  'CheckIdentityLambdaMockedSuccess'
).return<any>({
  StatusCode: 200,
  Payload: {
    statusCode: 200,
    body: JSON.stringify({
      approved: true,
      message: 'identity validation passed',
    }),
  },
});

const checkAddressLambdaMockedSuccess = new MockedResponse(
  'CheckAddressLambdaMockedSuccess'
).return<any>({
  StatusCode: 200,
  Payload: {
    statusCode: 200,
    body: JSON.stringify({
      approved: true,
      message: 'address validation passed',
    }),
  },
});

// Create a state machine test definition
const stateMachineTestDefinition = new StateMachineTestDefinition('SomeStateMachineName')
  .addTestCase(
    new StateMachineTestCase('HappyPathTest')
      .withInput(input)
      .addMockedState(
        'CheckIdentity',
        checkIdentityLambdaMockedSuccess
      )
      .addMockedState(
        'CheckAddress',
        checkAddressLambdaMockedSuccess
      )
  );

// Create a config
const config = new StepFunctionsMockConfig()
      .addTestDefinition(stateMachineTestDefinition);

// Convert the config object to JSON
// You can write this down to a file to be used by step functions local
config.toJSON();
```

## License

stepfunctions-testing is available under the terms of [MIT License](./LICENSE)