import 'source-map-support/register';
import path from 'path';
import autobind from 'autobind-decorator';
import { Console } from '@nod/console';
import { Environment } from '@nod/environment';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

export class Base {

  defaults = {
    console : new Console({}),
    config : new Environment({}).config
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
    this.options = options.config;

    this.options.console.info(`${this.constructor.name}: Initialized.`);
    return this;
  }
}
