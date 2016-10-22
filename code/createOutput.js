'use strict'
import * as fs from 'fs';

export const createOutput = () => {
  let data = JSON.stringify('test data');
  fs.appendFileSync('./code/spec/specData/test.json', data)
}
