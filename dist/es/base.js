import autobind from 'autobind-decorator';
import { Console } from '@nod/console';
import { Configuration } from './configuration';

const PROTECTED = Symbol('PROTECTED');

export class Base {
  constructor(options = new Configuration(), console = new Console()) {
    Object.assign(this, { options, console });
    this.initialize();
    this.console.info(`${this.constructor.name}: Initialized.`);
    return this;
  }

  @autobind
  initialize() {
    return this;
  }
}
