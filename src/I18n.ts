import IntlMessageFormat from 'intl-messageformat';

import {
  I18nInterface,
  I18nOptionsInterface,
  JSONParserInterface,
  Obj
} from './types';


class I18n implements I18nInterface {
  private _jsonParser: JSONParserInterface;

  constructor(options: I18nOptionsInterface) {
    this._jsonParser = options.jsonParser;
    this._jsonParser.read(this._getPathToFile(options.currentLocale));
  }

  _getPathToFile(fileName: string): string {
    return `${__dirname}/translations/${fileName}.json`;
  }

  _formatMessage(message: string, data?: Obj<any>) {
    const intlMessage = new IntlMessageFormat(message);

    return intlMessage.format(data);
  }

  t(pathToValue: string, data?: Obj<any>): string {
    return this._formatMessage(this._jsonParser.resolvePath(pathToValue), data);
  }
}


export default I18n;
