'use strict'
import { expect } from 'chai';
import { createOutput } from '../createOutput';

describe('CreateOutput Test Suite', () => {
  it('should have a createOutput function', () => {
    expect(createOutput).to.be.a('function');
  })
})
