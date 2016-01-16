import 'source-map-support/register';
import path from 'path';
import autobind from 'autobind-decorator';
import { Console } from '@nod/console';
import { environment } from '@nod/environment/src/instance';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

export class Base {

  defaults = {
    console : new Console({})
  };

  get options() {
    return this[PROTECTED].options;
  }

  @autobind
  @param(optional({}))
  @returns(Object)
  setOptions(options = {}) {
    return Object.assign(this[PROTECTED].options, this.defaults, options);
  }

  set options(options = {}) {
    return this.setOptions(options);
  }

  constructor(options = {}) {
    Object.defineProperty(this, PROTECTED, {
      enumerable : false,
      value      : {
        options : {}
      }
    });

    this.options = options;

    this.options.console.info(`${this.constructor.name}: Initialized.`);
    return this;
  }
}
