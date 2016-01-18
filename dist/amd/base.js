define(['exports', 'path', 'autobind-decorator', '@nod/console', '@nod/environment', 'decorate-this', 'source-map-support/register'], function (exports, _path, _autobindDecorator, _console, _environment, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Base = undefined;

  var _path2 = _interopRequireDefault(_path);

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

  var _dec, _dec2, _desc, _value, _class;

  var PROTECTED = Symbol('PROTECTED');
  var Base = exports.Base = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({})), _dec2 = (0, _decorateThis.returns)(Object), (_class = function () {
    _createClass(Base, [{
      key: 'setOptions',
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Object.assign(this[PROTECTED].options, this.defaults, options);
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

      _classCallCheck(this, Base);

      this.defaults = {
        console: new _console.Console({}),
        config: new _environment.Environment({}).config
      };

      Object.defineProperty(this, PROTECTED, {
        enumerable: false,
        value: {
          options: {}
        }
      });

      this.options = options;
      this.options = options.config;

      this.options.console.info(this.constructor.name + ': Initialized.');
      return this;
    }

    return Base;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFTYSxJQUFJLFdBQUosSUFBSSxXQVlkLGtCQWhCTSxLQUFLLEVBZ0JMLGtCQWhCZ0IsUUFBUSxFQWdCZixFQUFFLENBQUMsQ0FBQyxVQUNuQixrQkFqQmEsT0FBTyxFQWlCWixNQUFNLENBQUM7aUJBYkwsSUFBSTs7bUNBY1U7WUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ3JCLGVBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDdkU7OzswQkFUYTtBQUNaLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztPQUNoQzswQkFTeUI7WUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ3RCLGVBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNqQzs7O0FBRUQsYUF0QlcsSUFBSSxHQXNCVztVQUFkLE9BQU8seURBQUcsRUFBRTs7NEJBdEJiLElBQUk7O1dBRWYsUUFBUSxHQUFHO0FBQ1QsZUFBTyxFQUFHLGFBVEwsT0FBTyxDQVNVLEVBQUUsQ0FBQztBQUN6QixjQUFNLEVBQUcsaUJBVEosV0FBVyxDQVNTLEVBQUUsQ0FBQyxDQUFDLE1BQU07T0FDcEM7O0FBa0JDLFlBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUNyQyxrQkFBVSxFQUFHLEtBQUs7QUFDbEIsYUFBSyxFQUFRO0FBQ1gsaUJBQU8sRUFBRyxFQUFFO1NBQ2I7T0FDRixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDOztBQUU5QixVQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFpQixDQUFDO0FBQ3BFLGFBQU8sSUFBSSxDQUFDO0tBQ2I7O1dBbkNVLElBQUkiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGNvbnNvbGUgOiBuZXcgQ29uc29sZSh7fSksXG4gICAgY29uZmlnIDogbmV3IEVudmlyb25tZW50KHt9KS5jb25maWdcbiAgfTtcblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLm9wdGlvbnM7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHt9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldCBvcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucy5jb25maWc7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc29sZS5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
