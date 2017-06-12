interface I18nInterface {
  t(pathToValue: string, data?: Obj<any>): string;
}

type Obj<T> = {
  [key: string]: T;
}

type I18nOptionsInterface = {
  content: Obj<any>;
  locale?: string;
}


export {
  Obj,
  I18nInterface,
  I18nOptionsInterface
};
