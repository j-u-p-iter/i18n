/**
 * # JSON Parser
 *
 * Parse JSON files and extract
 * values according to the JSON paths.
 */


// # Import Modules
import * as fs from 'fs';

// # Import Types
import {
  Obj,
  JSONParserInterface
} from './types';


class JSONParser implements JSONParserInterface {
  private _fileParsedResult: Obj<any>;

  resolveObjPath(obj: Obj<any>, pathToValue: string) {
    return pathToValue.split('.').reduce((resultValue: Obj<any>, currentKey: string) => {
      return resultValue && resultValue[currentKey];
    }, obj) || null;
  }

  read(pathToFile: string) {
    const fileContent: string = fs.readFileSync(pathToFile).toString();

    try {
      this._fileParsedResult = JSON.parse(fileContent);

      return this._fileParsedResult;
    } catch(error) {
      throw new Error('JSON format is incorrect');
    }
  }

  resolvePath(pathToValue: string) {
    return this.resolveObjPath(this._fileParsedResult, pathToValue);
  }
}


export default JSONParser;
