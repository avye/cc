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
  let legend = 'The kind indicates the kind of change and can be:\nN - indicates a newly added property/element\nD - indicates a property/element was deleted\nE - indicates a property/element was edited\nA - indicates a change occurred within an array\nlhs represents the original and rhs represents the new output\n'
  fs.appendFileSync(updatedFilename, legend);
  fs.appendFileSync(updatedFilename, JSON.stringify(difference, null, '\t'));
}
