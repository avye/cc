'use strict'

export const deduplicate = (inputArray) => {
  // Check duplicate emails first as emails should be our source of truth
  // since they do represent one person/company outside of our system.
  // Ids have the potential to have been a mistake in our own system.
  let emails = {};

  inputArray.forEach((element) => {
    if (emails[element.email]) {
      if (isMoreRecent(emails[element.email].entryDate, element.entryDate)) {
        emails[element.email] = element;
      }
    } else {
      emails[element.email] = element;
    }
  })

  let removedEmailDuplicates = Object.keys(emails).reduce((acc, el) => {
    acc.push(emails[el]);
    return acc;
  }, [])

  let removedEmailDuplicatesSorted = removedEmailDuplicates.sort((a,b) => {
    return (new Date(a.entryDate) - new Date(b.entryDate));
  })

  let ids = {};
  removedEmailDuplicatesSorted.forEach((element) => {
    if (ids[element._id]) {
      if (isMoreRecent(ids[element._id].entryDate, element.entryDate)) {
        ids[element._id] = element;
      }
    } else {
      ids[element._id] = element;
    }
  })

  let result = Object.keys(ids).reduce((acc, el) => {
    acc.push(ids[el]);
    return acc;
  }, [])

  return result.sort((a, b) => {
    return (new Date(a.entryDate) - new Date(b.entryDate));
  })
}

export const isMoreRecent = (firstDate, secondDate) => {
  return new Date(firstDate) <= new Date(secondDate);
}

export const objectToSortedArray = (obj) => {
  return [];
}
