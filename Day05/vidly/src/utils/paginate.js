import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  
  // slice the array starting from 'startIndex'
  // _.slice(items, startIndex)
  
  // give it an array and the total number of items we want to take from that array.
  // _.take()
}