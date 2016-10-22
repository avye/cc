'use strict'
import * as fs from 'fs';

export const makeLog = (filename, inputData, outputData) => {
  let lastPeriodIndex = filename.lastIndexOf('.');
  // Add the word Log to the filename
  let updatedFilename = filename.slice(0, lastPeriodIndex).concat('Log.md');

  fs.appendFileSync(updatedFilename, inputData);
  fs.appendFileSync(updatedFilename, outputData);
}
