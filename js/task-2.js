'use strict';

function makeArray(firstArray, secondArray, maxLength) {
  let resultArray = [];

  if (firstArray.length < maxLength) {
    resultArray = firstArray;
    for (let i = 0; i <= maxLength - firstArray.length; i++) {
      resultArray.push(secondArray[i]);
    }
  } else {
    for (let i = 0; i < maxLength; i++) {
      resultArray.push(firstArray[i]);
    }
  }

  return resultArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
