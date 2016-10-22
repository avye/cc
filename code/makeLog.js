'use strict'
import * as fs from 'fs';

export const makeLog = (filename) => {
  let lastPeriodIndex = filename.lastIndexOf('.')
  // Add the word Log to the filename
  let updatedFilename = filename.slice(0, lastPeriodIndex).concat('Log', filename.slice(lastPeriodIndex))

  fs.appendFileSync(updatedFilename, 'test')
}
