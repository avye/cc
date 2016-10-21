'use strict'
import { expect } from 'chai';
import * as code from '../index.js';

describe('Test Suite', () => {
  it('should have a deduplicate function', () => {
    expect(code.deduplicate).to.be.a('function');
  })

  it('should return an array', () => {
    expect(code.deduplicate([])).to.be.an('array');
  })
})
