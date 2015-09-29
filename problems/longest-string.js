'use strict';

function longestString(arr) {
  var arrLength = arr.length;
  var strLength = 0;
  var longest;

  for (var i = 0; i < arrLength; i++) {
    if (typeof arr[i] === 'string') {
      if (arr[i].length > strLength) {
        var strLength = arr[i].length;
        longest = arr[i];
      }
    }
  }// end of for loop
  return longest
}

module.exports = longestString;
