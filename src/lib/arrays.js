const getNthElement = (index, array) => {
  return array[index % array.length];
  /*
  if (index < array.length) {
    return array[index];
  } else {
    return array[index - array.length];
  }
  */
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat([element]);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  newArray = [...array];
  newArray.splice(index, 1);
  return newArray;

  /*
  return array.filter((_, itemIndex) => itemIndex !== index);
  */
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /[aeiou]/.test(string[0].toLowerCase()));

  /*
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    
    return vowels.includes(firstLetter);
  });
  */
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  const reverseString = (string) => string.split("").reverse().join("");

  return strings.map(reverseString).sort().map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};

test;
