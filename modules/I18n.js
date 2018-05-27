import IntlMessageFormat from 'intl-messageformat';


class I18n {

  _locale = 'en';

  _content = null;

  _formatMessage(message, data) {
    const intlMessage = new IntlMessageFormat(message);

    return intlMessage.format(data);
  }

  _resolveObjPath(obj, pathToValue) {
    return pathToValue.split('.').reduce((resultValue, currentKey) => {
      return resultValue && resultValue[currentKey];
    }, obj) || null;
  }

  _resolvePath(pathToValue) {
    return this._resolveObjPath(this._content[this._locale], pathToValue);
  }

  constructor(options) {
    const {
      content,
      locale
    } = options;

    this._content = content;

    if (locale) { this._locale = locale; }
  }

  t(pathToValue, data) {
    return this._formatMessage(this._resolvePath(pathToValue), data);
  }
}


export default I18n;
