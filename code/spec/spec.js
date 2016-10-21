'use strict'
import { expect } from 'chai';
import * as code from '../index.js';

describe('Test Suite', () => {
  it('should have a failing test', () => {
    expect(code.failingTest).to.equal(false);
  })
})
