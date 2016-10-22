'use strict'

export const deduplicate = (inputArray) => {
  // ids will be our main source of truth
  let ids = {};
  let emails = {};

  inputArray.forEach((element) => {
    if (ids[element._id]) {
      if (new Date(ids[element._id].entryDate) <= new Date(element.entryDate)) {
        ids[element._id] = element;
        emails[element.email] = element;
      }
    } else if (emails[element.email]) {
      if (new Date(emails[element.email].entryDate) <= new Date(element.entryDate)) {
        // since ids is our main source of truth, remove and update the record there
        delete ids[emails[element.email]._id]
        ids[element._id] = element;
        emails[element.email] = element;
      }
    } else {
      ids[element._id] = element;
      emails[element.email] = element;
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

export const isMoreRecent = () => {
  
}
