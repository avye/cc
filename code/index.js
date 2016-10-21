'use strict'

export const deduplicate = (inputArray) => {
  let ids = {};

  inputArray.forEach((element) => {
    if (ids[element._id]) {
      ids[element._id] = element;
    } else {
      ids[element._id] = element;
    }
  })

  return Object.keys(ids).reduce((acc, el) => {
    acc.push(ids[el]);
    return acc;
  }, [])
}
