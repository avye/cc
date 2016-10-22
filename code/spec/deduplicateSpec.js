'use strict'
import { expect } from 'chai';
import { deduplicate, isMoreRecent, objectToSortedArray } from '../deduplicate';

describe('Deduplicate Test Suite', () => {
  it('should have a deduplicate function', () => {
    expect(deduplicate).to.be.a('function');
  })

  it('should return an array', () => {
    expect(deduplicate([])).to.be.an('array');
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

    expect(deduplicate(testDuplicateIDData)).to.deep.equal(expectedDuplicateIDData);
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

    expect(deduplicate(testDuplicateEmailData)).to.deep.equal(expectedDuplicateEmailData);
  })

  it('should prioritize removal of duplicates by date', () => {
    let testDuplicateDateData = [
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
        "email": "mae@bar.com",
        "firstName":  "Theodore",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:40:20+00:00"
      },
      {
        "_id": "edu45238jdsnfsj23",
        "email": "fake@bar.com",
        "firstName":  "Ted",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];

    let expectedDuplicateDateData = [
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
        "email": "mae@bar.com",
        "firstName":  "Theodore",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:40:20+00:00"
      }
    ];

    expect(deduplicate(testDuplicateDateData)).to.deep.equal(expectedDuplicateDateData);
  })

  it('should return an ordered list arranged by date', () => {
    let testDuplicateDateOrderData = [
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "John",
        "lastName": "Smith",
        "address": "123 Street St",
        "entryDate": "2014-05-07T17:33:20+00:00"
      },
      {
        "_id": "edu45238jdsnfsj23",
        "email": "mae@bar.com",
        "firstName":  "Theodore",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:32:20+00:00"
      }
    ];

    let expectedDuplicateDateOrderData = [
      {
        "_id": "edu45238jdsnfsj23",
        "email": "mae@bar.com",
        "firstName":  "Theodore",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:32:20+00:00"
      },
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "John",
        "lastName": "Smith",
        "address": "123 Street St",
        "entryDate": "2014-05-07T17:33:20+00:00"
      }
    ];

    expect(deduplicate(testDuplicateDateOrderData)).to.deep.equal(expectedDuplicateDateOrderData);
  })

  it('should prioritize by email first', () => {
    let testDuplicateEmailAndIdData = [
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "John",
        "lastName": "Smith",
        "address": "123 Street St",
        "entryDate": "2014-05-07T17:31:20+00:00"
      },
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "Theodore",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:32:20+00:00"
      }
    ];

    let expectedDuplicateEmailAndIdData = [
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "firstName":  "Theodore",
        "lastName": "Masters",
        "address": "44 North Hampton St",
        "entryDate": "2014-05-07T17:32:20+00:00"
      }
    ];

    expect(deduplicate(testDuplicateEmailAndIdData)).to.deep.equal(expectedDuplicateEmailAndIdData);
  })
})

describe('isMoreRecent Test Suite', () => {
  it('should have a isMoreRecent function', () => {
    expect(isMoreRecent).to.be.a('function');
  })

  it('should return a boolean', () => {
    expect(isMoreRecent()).to.be.a('boolean');
  })

  it('should return true if the second date is more recent', () => {
    let firstDate = "2014-05-07T17:30:20+00:00";
    let secondDate = "2014-05-07T17:33:20+00:00";
    expect(isMoreRecent(firstDate, secondDate)).to.be.true;
  })

  it('should return true if the two dates are the same', () => {
    let firstDate = "2014-05-07T17:30:20+00:00";
    let secondDate = firstDate;
    expect(isMoreRecent(firstDate, secondDate)).to.be.true;
  })
})

describe('objectToSortedArray Test Suite', () => {
  it('should have a objectToSortedArray function', () => {
    expect(objectToSortedArray).to.be.a('function');
  })

  it('should have a return an array', () => {
    expect(objectToSortedArray({})).to.be.an('array');
  })
})
