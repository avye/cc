'use strict'
import { expect } from 'chai';
import { makeLog } from '../makeLog';

describe('MakeLog Test Suite', () => {
  it('should have a makeLog function', () => {
    expect(makeLog).to.be.a('function');
  })
})
