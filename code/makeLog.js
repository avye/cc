'use strict'
import * as fs from 'fs';

export const makeLog = (filename, data) => {
  let lastPeriodIndex = filename.lastIndexOf('.');
  // Add the word Log to the filename
  let updatedFilename = filename.slice(0, lastPeriodIndex).concat('Log.md');

  fs.appendFileSync(updatedFilename, data);
}
