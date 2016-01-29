var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['./index'], function (_index) {
  'use strict';

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var makeErrorMessage = function makeErrorMessage(name, property) {
    return 'Test error : ' + name + '.' + property + ' is not defined properly';
  };

  var ExampleConfiguration = function (_Configuration) {
    _inherits(ExampleConfiguration, _Configuration);

    function ExampleConfiguration() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, ExampleConfiguration);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ExampleConfiguration)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.defaultVal = 'example val', _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ExampleConfiguration;
  }(_index.Configuration);

  var Example = function (_Base) {
    _inherits(Example, _Base);

    function Example() {
      _classCallCheck(this, Example);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Example).apply(this, arguments));
    }

    _createClass(Example, [{
      key: 'initialize',
      value: function initialize() {
        if (this.options.defaultVal !== 'example val') {
          var errorMessage = makeErrorMessage(this.constructor.name, 'defaultVal');
          throw new Error(errorMessage);
        }

        if (this.options.secondVal !== 'test') {
          var errorMessage = makeErrorMessage(this.constructor.name, 'secondVal');
          throw new Error(errorMessage);
        }

        this.initPassed = true;
      }
    }]);

    return Example;
  }(_index.Base);

  var example = new Example(new ExampleConfiguration({
    secondVal: 'test'
  }));

  if (example.initPassed !== true) {
    var errorMessage = makeErrorMessage(example.constructor.name, 'initPassed');
    throw new Error(errorMessage);
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
