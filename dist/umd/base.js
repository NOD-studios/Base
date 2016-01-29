(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'autobind-decorator', '@nod/console', './configuration'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('autobind-decorator'), require('@nod/console'), require('./configuration'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.autobindDecorator, global.console, global.configuration);
    global.base = mod.exports;
  }
})(this, function (exports, _autobindDecorator, _console, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Base = undefined;

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _desc, _value, _class;

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTWE7QUFDWCxhQURXLElBQ1gsR0FBb0U7VUFBeEQsZ0VBQVUsa0RBQThDO1VBQXpCLGdFQUFVLHNDQUFlOzs0QkFEekQsTUFDeUQ7O0FBQ2xFLGFBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRSxnQkFBRixFQUFXLGdCQUFYLEVBQXBCLEVBRGtFO0FBRWxFLFdBQUssVUFBTCxHQUZrRTtBQUdsRSxXQUFLLE9BQUwsQ0FBYSxJQUFiLENBQXFCLEtBQUssV0FBTCxDQUFpQixJQUFqQixtQkFBckIsRUFIa0U7QUFJbEUsYUFBTyxJQUFQLENBSmtFO0tBQXBFOztpQkFEVzs7bUNBU0U7QUFDWCxlQUFPLElBQVAsQ0FEVzs7OztXQVRGIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdAbm9kL2NvbnNvbGUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksIGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG9wdGlvbnMsIGNvbnNvbGUgfSk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
