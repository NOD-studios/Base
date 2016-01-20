'use strict';

System.register(['source-map-support/register', 'babel-polyfill', 'path', 'autobind-decorator', '@nod/console', '@nod/environment', 'decorate-this'], function (_export, _context) {
  var path, autobind, Console, Environment, param, returns, optional, _createClass, _dec, _dec2, _desc, _value, _class, PROTECTED, Base;

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
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_path) {
      path = _path.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodConsole) {
      Console = _nodConsole.Console;
    }, function (_nodEnvironment) {
      Environment = _nodEnvironment.Environment;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
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

      _export('Base', Base = (_dec = param(optional({})), _dec2 = returns(Object), (_class = function () {
        _createClass(Base, [{
          key: 'setOptions',
          value: function setOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            return Object.assign(this[PROTECTED].options, options);
          }
        }, {
          key: 'options',
          get: function get() {
            return this[PROTECTED].options;
          },
          set: function set() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            return this.setOptions(options);
          }
        }]);

        function Base() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          var defaults = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, Base);

          Object.defineProperty(this, PROTECTED, {
            enumerable: false,
            value: {
              options: {}
            }
          });
          var console = new Console(),
              config = new Environment().config;
          defaults.base = defaults.base || this.options;
          this.options = defaults;
          this.options = config;
          this.options = {
            console: console
          };
          this.options = options;
          this.options.console.info(this.constructor.name + ': Initialized.');
        }

        return Base;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [autobind, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class)));

      _export('Base', Base);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFtQmEsT0FBTyx5REFBRyxFQUFFOzs7Ozs7Ozs7Z0JBSVgsT0FBTyx5REFBRyxFQUFFOzs7Ozs7Y0FJWixPQUFPLHlEQUFHLEVBQUU7Y0FBRSxRQUFRLHlEQUFHLEVBQUUiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJ0Bub2QvY29uc29sZSc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLm9wdGlvbnM7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHt9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldCBvcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30sIGRlZmF1bHRzID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldFxuICAgICAgY29uc29sZSA9IG5ldyBDb25zb2xlKCksXG4gICAgICBjb25maWcgPSBuZXcgRW52aXJvbm1lbnQoKS5jb25maWc7XG5cbiAgICBkZWZhdWx0cy5iYXNlID0gZGVmYXVsdHMuYmFzZSB8fCB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0gZGVmYXVsdHM7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnO1xuICAgIHRoaXMub3B0aW9ucyA9IHsgY29uc29sZSB9O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc29sZS5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
