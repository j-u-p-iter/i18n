import * as path from 'path';

import IntlMessageFormat from 'intl-messageformat';

import {
  I18nInterface,
  I18nOptionsInterface,
  Obj
} from './types';


class I18n implements I18nInterface {
  private _locale: string = 'en';
  private _content: Obj<any>;

  private _formatMessage(message: string, data?: Obj<any>) {
    const intlMessage = new IntlMessageFormat(message);

    return intlMessage.format(data);
  }

  private _resolveObjPath(obj: Obj<any>, pathToValue: string): string {
    return pathToValue.split('.').reduce((resultValue: Obj<any>, currentKey: string) => {
      return resultValue && resultValue[currentKey];
    }, obj) || null;
  }

  private _resolvePath(pathToValue: string): string {
    return this._resolveObjPath(this._content[this._locale], pathToValue);
  }

  constructor(options: I18nOptionsInterface) {
    const {
      content,
      locale
    } = options;

    this._content = content;

    if (locale) { this._locale = locale; }
  }

  t(pathToValue: string, data?: Obj<any>): string {
    return this._formatMessage(this._resolvePath(pathToValue), data);
  }
}


export default I18n;
