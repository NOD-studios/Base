(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './base', './configuration', 'source-map-support/register', 'babel-polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./base'), require('./configuration'), require('source-map-support/register'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.base, global.configuration, global.register, global.babelPolyfill);
    global.index = mod.exports;
  }
})(this, function (exports, _base, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = exports.Base = undefined;
  Object.defineProperty(exports, 'Base', {
    enumerable: true,
    get: function get() {
      return _base.Base;
    }
  });
  Object.defineProperty(exports, 'Configuration', {
    enumerable: true,
    get: function get() {
      return _configuration.Configuration;
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRVM7Ozs7Ozs0QkFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuZXhwb3J0IHsgQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
