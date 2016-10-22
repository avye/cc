'use strict'
import * as fs from 'fs';
import { diff } from 'deep-diff';

export const makeLog = (filename, inputData, outputData) => {
  let lastPeriodIndex = filename.lastIndexOf('.');
  // Add the word Log to the filename
  let updatedFilename = filename.slice(0, lastPeriodIndex).concat('Log.md');
  let difference = diff(inputData, outputData);

  fs.appendFileSync(updatedFilename, '# Original Source Data \n');
  fs.appendFileSync(updatedFilename, JSON.stringify(inputData, null, '\t'));

  fs.appendFileSync(updatedFilename, '\n # Output Data \n');
  fs.appendFileSync(updatedFilename, JSON.stringify(outputData, null, '\t'));

  fs.appendFileSync(updatedFilename, '\n # Differences between the two \n');
  fs.appendFileSync(updatedFilename, JSON.stringify(difference, null, '\t'));
}
