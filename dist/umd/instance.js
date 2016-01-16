(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './base'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./base'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.base);
    global.instance = mod.exports;
  }
})(this, function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.base = undefined;
  var base = exports.base = new _base.Base();
  exports.default = base;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDVyxJQUFJLFdBQUosSUFBSSxHQUFHLFVBRFQsSUFBSSxFQUNlO29CQUNiLElBQUkiLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBsZXQgYmFzZSA9IG5ldyBCYXNlKCk7XG5leHBvcnQgZGVmYXVsdCBiYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
