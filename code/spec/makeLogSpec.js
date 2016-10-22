'use strict'
import { expect } from 'chai';
import { makeLog } from '../makeLog';
import * as fs from 'fs';

describe('MakeLog Test Suite', () => {
  before(() => {
    // Check to see if the file exists already
    fs.access('./code/spec/specData/testLog.md', (err) => {
      if (!err) {
        // Delete it if it does
        fs.unlink('./code/spec/specData/testLog.md')
      }
    })

    // Check to see if the file exists already
    fs.access('./code/spec/specData/dataTestLog.md', (err) => {
      if (!err) {
        // Delete it if it does
        fs.unlink('./code/spec/specData/dataTestLog.md')
      }
    })
  })

  it('should have a makeLog function', () => {
    expect(makeLog).to.be.a('function');
  })

  it('should create a file given a filename with Log in the title', () => {
    let filename = './code/spec/specData/test.json'
    makeLog(filename);
    let exists = fs.existsSync('./code/spec/specData/testLog.md');
    expect(exists).to.be.true;
  })

  it('should populate that file given some input and output data', () => {
    let filename = './code/spec/specData/dataTest.json';
    let logFilename = './code/spec/specData/dataTestLog.md';
    let inputData = 'input';
    let outputData = 'output';

    makeLog(filename, inputData, outputData);
    let fileData = fs.readFileSync(logFilename, 'utf8');
    expect(fileData.indexOf('output')).to.not.equal(-1);
  })

  after(() => {
    // Check to see if the file exists already
    fs.access('./code/spec/specData/testLog.md', (err) => {
      if (!err) {
        // Delete it if it does
        fs.unlink('./code/spec/specData/testLog.md')
      }
    })
    // Check to see if the file exists already
    fs.access('./code/spec/specData/dataTestLog.md', (err) => {
      if (!err) {
        // Delete it if it does
        fs.unlink('./code/spec/specData/dataTestLog.md')
      }
    })
  })
})
