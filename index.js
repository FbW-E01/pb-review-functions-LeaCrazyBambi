//  1.
function exercise1(number, num) {
  return number + num;
}
console.log(exercise1(9, 10));

//  2. return string capitalized
function capitalizeString(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

console.log(capitalizeString("it seems like the end of the world outside"));
console.log(capitalizeString("heavy rain"));

//  3.- Make an array
const arrayOfThings = ["Pomegranate", "Holidays", "Sun", "Parties"];

function lastItemOfArray(array) {
  return array.slice(-1);
}

console.log(lastItemOfArray(arrayOfThings));

//  4.
firstItemOfArray = (array) => {
  // return array[0];
  return array.shift(1);
};

console.log(firstItemOfArray(arrayOfThings));

//  5.
threeLastCharacters = (string) => {
  const characters = string.substring(string.length - 3);
  return characters;
};
console.log(threeLastCharacters("Potatoes are tasty"));

//  6.
whatTypeIs = (array) => {
  return typeof array[0];
};

console.log(whatTypeIs(arrayOfThings));

//  7.
allSameType = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (typeof array[i] !== typeof array[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(allSameType(arrayOfThings));

//  8.
const test1 = function () {};
console.log(typeof test1);

//  9.
const test2 = () => {};
console.log(typeof test2);

// 10.
function randomNumberGeneratorFactory(min, max) {
  return () => {
    return Math.round(Math.random() * (max - min) + min);
  };
}

const rng = randomNumberGeneratorFactory(30, 100);
console.log(rng());

// 11. In your own words, explain what are side effects and what is a pure function.
/**/

// 12. In your own words, explain what is the difference between functions and methods.
/*
A function is a code snippet that can be called by other code or by itself
-- taken from MDN - Function

A method is a function which is a property of an object
-- taken from MDN - Method
 */
