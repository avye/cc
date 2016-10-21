'use strict'

export const deduplicate = (inputArray) => {
  // ids will be our main source of truth
  let ids = {};
  let emails = {};

  inputArray.forEach((element) => {
    if (ids[element._id]) {
      ids[element._id] = element;
      emails[element.email] = element;
    } else if (emails[element.email]) {
      // since ids is our main source of truth, remove and update the record there
      delete ids[emails[element.email]._id]
      ids[element._id] = element;
      emails[element.email] = element;
    } else {
      ids[element._id] = element;
      emails[element.email] = element;
    }
  })

  return Object.keys(ids).reduce((acc, el) => {
    acc.push(ids[el]);
    return acc;
  }, [])
}
