'use strict';

function arraySum(arr) {
  var length = arr.length;
  var sum = 0;

  for (var i = 0; i < length; i++){
    if (arr[i].length > 0) {
      sum += arraySum(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = arraySum;
