interface I18nInterface {
  t(pathToValue: string, data?: Obj<any>): string;
}

interface JSONParserInterface {
  read(pathToFile: string): Obj<any>;
  resolvePath(pathToValue: string): any;
}

type Obj<T> = {
  [key: string]: T;
}

type I18nOptionsInterface = {
  jsonParser: JSONParserInterface;
  currentLocale: string;
}


export {
  Obj,
  I18nInterface,
  JSONParserInterface,
  I18nOptionsInterface
};
