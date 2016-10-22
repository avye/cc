'use strict'
import * as fs from 'fs';

export const createOutput = (done) => {
  let data = JSON.stringify('test data');
  fs.appendFile('./code/spec/specData/test.json', data, (err) => {
    if (err) {
      throw err;
    }
    console.log('File successfully created');
    done()
  })
}
