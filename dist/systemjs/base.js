'use strict';

System.register(['autobind-decorator', '@nod/console', './configuration'], function (_export, _context) {
  var autobind, Console, Configuration, _createClass, _desc, _value, _class, PROTECTED, Base;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodConsole) {
      Console = _nodConsole.Console;
    }, function (_configuration) {
      Configuration = _configuration.Configuration;
    }],
    execute: function () {
      _createClass = function () {
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

      PROTECTED = Symbol('PROTECTED');

      _export('Base', Base = (_class = function () {
        function Base() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? new Configuration() : arguments[0];
          var console = arguments.length <= 1 || arguments[1] === undefined ? new Console() : arguments[1];

          _classCallCheck(this, Base);

          Object.assign(this, {
            options: options,
            console: console
          });
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
      }(), (_applyDecoratedDescriptor(_class.prototype, 'initialize', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'initialize'), _class.prototype)), _class));

      _export('Base', Base);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FPYyxnRUFBVSxJQUFJLGFBQUo7Y0FBcUIsZ0VBQVUsSUFBSSxPQUFKIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdAbm9kL2NvbnNvbGUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksIGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG9wdGlvbnMsIGNvbnNvbGUgfSk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
