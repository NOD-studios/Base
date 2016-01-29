'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _console = require('@nod/console');

var _configuration = require('./configuration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var PROTECTED = Symbol('PROTECTED');

var Base = exports.Base = (_class = function () {
  function Base() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? new _configuration.Configuration() : arguments[0];
    var console = arguments.length <= 1 || arguments[1] === undefined ? new _console.Console() : arguments[1];

    _classCallCheck(this, Base);

    Object.assign(this, { options: options, console: console });
    this.initialize();
    this.console.info(this.constructor.name + ': Initialized.');
    return this;
  }

  _createClass(Base, [{
    key: 'initialize',
    value: function initialize() {
      return this;
    }
  }]);

  return Base;
}(), (_applyDecoratedDescriptor(_class.prototype, 'initialize', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'initialize'), _class.prototype)), _class);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sWUFBWSxPQUFPLFdBQVAsQ0FBWjs7SUFFTztBQUNYLFdBRFcsSUFDWCxHQUFvRTtRQUF4RCxnRUFBVSxrREFBOEM7UUFBekIsZ0VBQVUsc0NBQWU7OzBCQUR6RCxNQUN5RDs7QUFDbEUsV0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixFQUFFLGdCQUFGLEVBQVcsZ0JBQVgsRUFBcEIsRUFEa0U7QUFFbEUsU0FBSyxVQUFMLEdBRmtFO0FBR2xFLFNBQUssT0FBTCxDQUFhLElBQWIsQ0FBcUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLG1CQUFyQixFQUhrRTtBQUlsRSxXQUFPLElBQVAsQ0FKa0U7R0FBcEU7O2VBRFc7O2lDQVNFO0FBQ1gsYUFBTyxJQUFQLENBRFc7Ozs7U0FURiIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSBuZXcgQ29uZmlndXJhdGlvbigpLCBjb25zb2xlID0gbmV3IENvbnNvbGUoKSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBvcHRpb25zLCBjb25zb2xlIH0pO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuY29uc29sZS5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
