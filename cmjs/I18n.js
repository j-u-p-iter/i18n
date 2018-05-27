'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intlMessageformat = require('intl-messageformat');

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var I18n = function () {
  _createClass(I18n, [{
    key: '_formatMessage',
    value: function _formatMessage(message, data) {
      var intlMessage = new _intlMessageformat2.default(message);

      return intlMessage.format(data);
    }
  }, {
    key: '_resolveObjPath',
    value: function _resolveObjPath(obj, pathToValue) {
      return pathToValue.split('.').reduce(function (resultValue, currentKey) {
        return resultValue && resultValue[currentKey];
      }, obj) || null;
    }
  }, {
    key: '_resolvePath',
    value: function _resolvePath(pathToValue) {
      return this._resolveObjPath(this._content[this._locale], pathToValue);
    }
  }]);

  function I18n(options) {
    _classCallCheck(this, I18n);

    this._locale = 'en';
    this._content = null;
    var content = options.content,
        locale = options.locale;


    this._content = content;

    if (locale) {
      this._locale = locale;
    }
  }

  _createClass(I18n, [{
    key: 't',
    value: function t(pathToValue, data) {
      return this._formatMessage(this._resolvePath(pathToValue), data);
    }
  }]);

  return I18n;
}();

exports.default = I18n;