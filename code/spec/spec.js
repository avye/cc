'use strict'
import { expect } from 'chai';
import * as code from '../index.js';

describe('Dedeuplicate Test Suite', () => {
  it('should have a deduplicate function', () => {
    expect(code.deduplicate).to.be.a('function');
  })

  it('should return an array', () => {
    expect(code.deduplicate([])).to.be.an('array');
  })

  it('should remove duplicate ID entries', () => {
    let testDuplicateIDData = [
      {
        "_id": "edu45238jdsnfsj23",
        "email": "mae@bar.com",
        "firstName":  "Ted",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:31:20+00:00"
      },
      {
        "_id": "edu45238jdsnfsj23",
        "email": "fake@bar.com",
        "firstName":  "Ted2",
        "lastName": "Masters2",
        "address": "44 North Hampton S2t",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];

    let expectedDuplicateIDData = [
      {
        "_id": "edu45238jdsnfsj23",
        "email": "fake@bar.com",
        "firstName":  "Ted2",
        "lastName": "Masters2",
        "address": "44 North Hampton S2t",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];

    expect(code.deduplicate(testDuplicateIDData)).to.deep.equal(expectedDuplicateIDData);
  })

  it('should remove duplicate email entries', () => {
    let testDuplicateEmailData = [
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "John",
        "lastName": "Smith",
        "address": "123 Street St",
        "entryDate": "2014-05-07T17:30:20+00:00"
      },
      {
        "_id": "edu45238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "Ted",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];

    let expectedDuplicateEmailData = [
      {
        "_id": "edu45238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "Ted",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];

    expect(code.deduplicate(testDuplicateEmailData)).to.deep.equal(expectedDuplicateEmailData);
  })
})
