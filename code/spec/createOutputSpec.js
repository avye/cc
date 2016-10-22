'use strict'
import { expect } from 'chai';
import { createOutput } from '../createOutput';
import * as fs from 'fs';

describe('CreateOutput Test Suite', () => {
  before(() => {
    // Check to see if the file exists already
    fs.access('./code/spec/specData/test.json', (err) => {
      if (!err) {
        // Delete it if it does
        fs.unlink('./code/spec/specData/test.json')
      }
    })
  })

  it('should have a createOutput function', () => {
    expect(createOutput).to.be.a('function');
  })

  it('should create a file given a particular filename', () => {
    let filename = './code/spec/specData/test.json'
    createOutput(filename);
    let exists = fs.existsSync('./code/spec/specData/test.json');
    expect(exists).to.be.true;
  })
})
