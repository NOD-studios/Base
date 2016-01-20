(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path', 'autobind-decorator', '@nod/console', '@nod/environment', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'), require('autobind-decorator'), require('@nod/console'), require('@nod/environment'), require('decorate-this'), require('source-map-support/register'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path, global.autobindDecorator, global.console, global.environment, global.decorateThis, global.register, global.babelPolyfill);
    global.base = mod.exports;
  }
})(this, function (exports, _path, _autobindDecorator, _console, _environment, _decorateThis) {
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

      var console = new _console.Console(),
          config = new _environment.Environment().config;

      defaults.base = defaults.base || this.options;
      this.options = defaults;
      this.options = config;
      this.options = { console: console };
      this.options = options;

      this.options.console.info(this.constructor.name + ': Initialized.');
    }

    return Base;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFVYSxJQUFJLFdBQUosSUFBSSxXQU9kLGtCQVhNLEtBQUssRUFXTCxrQkFYZ0IsUUFBUSxFQVdmLEVBQUUsQ0FBQyxDQUFDLFVBQ25CLGtCQVphLE9BQU8sRUFZWixNQUFNLENBQUM7aUJBUkwsSUFBSTs7bUNBU1U7WUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ3JCLGVBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ3hEOzs7MEJBVGE7QUFDWixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7T0FDaEM7MEJBU3lCO1lBQWQsT0FBTyx5REFBRyxFQUFFOztBQUN0QixlQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDakM7OztBQUVELGFBakJXLElBQUksR0FpQjBCO1VBQTdCLE9BQU8seURBQUcsRUFBRTtVQUFFLFFBQVEseURBQUcsRUFBRTs7NEJBakI1QixJQUFJOztBQWtCYixZQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDckMsa0JBQVUsRUFBRyxLQUFLO0FBQ2xCLGFBQUssRUFBUTtBQUNYLGlCQUFPLEVBQUcsRUFBRTtTQUNiO09BQ0YsQ0FBQyxDQUFDOztBQUVILFVBQ0UsT0FBTyxHQUFHLGFBaENQLE9BQU8sRUFnQ2E7VUFDdkIsTUFBTSxHQUFHLGlCQWhDTixXQUFXLEVBZ0NZLENBQUMsTUFBTSxDQUFDOztBQUVwQyxjQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM5QyxVQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN4QixVQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixVQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFQLE9BQU8sRUFBRSxDQUFDO0FBQzNCLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUV2QixVQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFpQixDQUFDO0tBQ3JFOztXQXBDVSxJQUFJIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdAbm9kL2NvbnNvbGUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7fSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBzZXQgb3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9LCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXRcbiAgICAgIGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpLFxuICAgICAgY29uZmlnID0gbmV3IEVudmlyb25tZW50KCkuY29uZmlnO1xuXG4gICAgZGVmYXVsdHMuYmFzZSA9IGRlZmF1bHRzLmJhc2UgfHwgdGhpcy5vcHRpb25zO1xuICAgIHRoaXMub3B0aW9ucyA9IGRlZmF1bHRzO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZztcbiAgICB0aGlzLm9wdGlvbnMgPSB7IGNvbnNvbGUgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy5vcHRpb25zLmNvbnNvbGUuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
