import { Base, Configuration } from './index';

let makeErrorMessage = (name, property) => {
  return `Test error : ${name}.${property} is not defined properly`;
};

class ExampleConfiguration extends Configuration {
  defaultVal = 'example val';
}

class Example extends Base {
  initialize() {
    if (this.options.defaultVal !== 'example val') {
      let errorMessage = makeErrorMessage(this.constructor.name, 'defaultVal');
      throw new Error(errorMessage);
    }
    if (this.options.secondVal !== 'test') {
      let errorMessage = makeErrorMessage(this.constructor.name, 'secondVal');
      throw new Error(errorMessage);
    }
    this.initPassed = true;
  }
}

let example = new Example(new ExampleConfiguration({
  secondVal : 'test'
}));

if (example.initPassed !== true) {
  let errorMessage = makeErrorMessage(example.constructor.name, 'initPassed');
  throw new Error(errorMessage);
}
