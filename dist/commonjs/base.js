'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

require('source-map-support/register');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _console = require('@nod/console');

var _environment = require('@nod/environment');

var _decorateThis = require('decorate-this');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztJQUV6QixJQUFJLFdBQUosSUFBSSxXQVlkLGtCQWhCTSxLQUFLLEVBZ0JMLGtCQWhCZ0IsUUFBUSxFQWdCZixFQUFFLENBQUMsQ0FBQyxVQUNuQixrQkFqQmEsT0FBTyxFQWlCWixNQUFNLENBQUM7ZUFiTCxJQUFJOztpQ0FjVTtVQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDckIsYUFBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN2RTs7O3dCQVRhO0FBQ1osYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQ2hDO3dCQVN5QjtVQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDdEIsYUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDOzs7QUFFRCxXQXRCVyxJQUFJLEdBc0JXO1FBQWQsT0FBTyx5REFBRyxFQUFFOzswQkF0QmIsSUFBSTs7U0FFZixRQUFRLEdBQUc7QUFDVCxhQUFPLEVBQUcsYUFUTCxPQUFPLENBU1UsRUFBRSxDQUFDO0FBQ3pCLFlBQU0sRUFBRyxpQkFUSixXQUFXLENBU1MsRUFBRSxDQUFDLENBQUMsTUFBTTtLQUNwQzs7QUFrQkMsVUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLGdCQUFVLEVBQUcsS0FBSztBQUNsQixXQUFLLEVBQVE7QUFDWCxlQUFPLEVBQUcsRUFBRTtPQUNiO0tBQ0YsQ0FBQyxDQUFDOztBQUVILFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7QUFFOUIsUUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxvQkFBaUIsQ0FBQztBQUNwRSxXQUFPLElBQUksQ0FBQztHQUNiOztTQW5DVSxJQUFJIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJ0Bub2QvY29uc29sZSc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBjb25zb2xlIDogbmV3IENvbnNvbGUoe30pLFxuICAgIGNvbmZpZyA6IG5ldyBFbnZpcm9ubWVudCh7fSkuY29uZmlnXG4gIH07XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7fSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gIH1cblxuICBzZXQgb3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMuY29uZmlnO1xuXG4gICAgdGhpcy5vcHRpb25zLmNvbnNvbGUuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
