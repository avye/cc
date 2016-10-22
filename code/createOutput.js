'use strict'
import * as fs from 'fs';

export const createOutput = (filename, data) => {
  let JSONdata = JSON.stringify(data);
  fs.appendFileSync(filename, JSONdata)
}
