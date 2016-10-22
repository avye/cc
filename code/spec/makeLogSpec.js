'use strict'
import { expect } from 'chai';
import { makeLog } from '../makeLog';
import * as fs from 'fs';

describe('MakeLog Test Suite', () => {
  it('should have a makeLog function', () => {
    expect(makeLog).to.be.a('function');
  })

  it('should create a file', () => {
    makeLog();
    let exists = fs.existsSync('./code/spec/specData/testLog.json');
    expect(exists).to.be.true;
  })

})
