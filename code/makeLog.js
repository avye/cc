'use strict'
import * as fs from 'fs';

export const makeLog = () => {
  fs.appendFileSync('./code/spec/specData/testLog.json', 'test')
}
