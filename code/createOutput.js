'use strict'
import * as fs from 'fs';

export const createOutput = (filename) => {
  let data = JSON.stringify('test data');
  fs.appendFileSync(filename, data)
}
