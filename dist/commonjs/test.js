'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBb0I7QUFDekMsMkJBQXVCLGFBQVEscUNBQS9CLENBRHlDO0NBQXBCOztJQUlqQjs7Ozs7Ozs7Ozs7Ozs7a05BQ0osYUFBYTs7O1NBRFQ7OztJQUlBOzs7Ozs7Ozs7OztpQ0FDUztBQUNYLFVBQUksS0FBSyxPQUFMLENBQWEsVUFBYixLQUE0QixhQUE1QixFQUEyQztBQUM3QyxZQUFJLGVBQWUsaUJBQWlCLEtBQUssV0FBTCxDQUFpQixJQUFqQixFQUF1QixZQUF4QyxDQUFmLENBRHlDO0FBRTdDLGNBQU0sSUFBSSxLQUFKLENBQVUsWUFBVixDQUFOLENBRjZDO09BQS9DO0FBSUEsVUFBSSxLQUFLLE9BQUwsQ0FBYSxTQUFiLEtBQTJCLE1BQTNCLEVBQW1DO0FBQ3JDLFlBQUksZUFBZSxpQkFBaUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLEVBQXVCLFdBQXhDLENBQWYsQ0FEaUM7QUFFckMsY0FBTSxJQUFJLEtBQUosQ0FBVSxZQUFWLENBQU4sQ0FGcUM7T0FBdkM7QUFJQSxXQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FUVzs7OztTQURUOzs7QUFjTixJQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksSUFBSSxvQkFBSixDQUF5QjtBQUNqRCxhQUFZLE1BQVo7Q0FEd0IsQ0FBWixDQUFWOztBQUlKLElBQUksUUFBUSxVQUFSLEtBQXVCLElBQXZCLEVBQTZCO0FBQy9CLE1BQUksZUFBZSxpQkFBaUIsUUFBUSxXQUFSLENBQW9CLElBQXBCLEVBQTBCLFlBQTNDLENBQWYsQ0FEMkI7QUFFL0IsUUFBTSxJQUFJLEtBQUosQ0FBVSxZQUFWLENBQU4sQ0FGK0I7Q0FBakMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2UsIENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2luZGV4JztcblxubGV0IG1ha2VFcnJvck1lc3NhZ2UgPSAobmFtZSwgcHJvcGVydHkpID0+IHtcbiAgcmV0dXJuIGBUZXN0IGVycm9yIDogJHtuYW1lfS4ke3Byb3BlcnR5fSBpcyBub3QgZGVmaW5lZCBwcm9wZXJseWA7XG59O1xuXG5jbGFzcyBFeGFtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xuICBkZWZhdWx0VmFsID0gJ2V4YW1wbGUgdmFsJztcbn1cblxuY2xhc3MgRXhhbXBsZSBleHRlbmRzIEJhc2Uge1xuICBpbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbCAhPT0gJ2V4YW1wbGUgdmFsJykge1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IG1ha2VFcnJvck1lc3NhZ2UodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCAnZGVmYXVsdFZhbCcpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2Vjb25kVmFsICE9PSAndGVzdCcpIHtcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBtYWtlRXJyb3JNZXNzYWdlKHRoaXMuY29uc3RydWN0b3IubmFtZSwgJ3NlY29uZFZhbCcpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFBhc3NlZCA9IHRydWU7XG4gIH1cbn1cblxubGV0IGV4YW1wbGUgPSBuZXcgRXhhbXBsZShuZXcgRXhhbXBsZUNvbmZpZ3VyYXRpb24oe1xuICBzZWNvbmRWYWwgOiAndGVzdCdcbn0pKTtcblxuaWYgKGV4YW1wbGUuaW5pdFBhc3NlZCAhPT0gdHJ1ZSkge1xuICBsZXQgZXJyb3JNZXNzYWdlID0gbWFrZUVycm9yTWVzc2FnZShleGFtcGxlLmNvbnN0cnVjdG9yLm5hbWUsICdpbml0UGFzc2VkJyk7XG4gIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
