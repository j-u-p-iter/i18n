import * as path from 'path';

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
    const {
      jsonParser,
      directoryPath,
      currentLocale
    } = options;

    this._jsonParser = jsonParser;
    this._jsonParser.read(this._getPathToFile(directoryPath, currentLocale));
  }

  _getPathToFile(directoryPath:string, fileName: string): string {
    return path.join(directoryPath, `${fileName}.json`);
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
