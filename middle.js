const middle = function(array) {
  let middleNumber = [];

  if (array.length <= 2) {
    return middleNumber;
  }
  if (array.length % 2 === 0) {
    let firstIndex = array.length/2 - 1;
    let secondIndex = array.length/2;
    middleNumber.push(array[firstIndex]);
    middleNumber.push(array[secondIndex]);
  } 
  else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length/2);
    middleNumber.push(array[middleIndex]);
  } 
  return middleNumber;
}

module.exports = middle;