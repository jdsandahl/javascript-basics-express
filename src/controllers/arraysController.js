const { getNthElement, arrayToCSVString, addToArray2, elementsStartingWithAVowel, removeNthElement2 } = require('../lib/arrays');

exports.arrays_getNthElement = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
};

exports.arrays_arrayToCSVString = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

exports.arrays_addToArray2 = (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
};

exports.arrays_elementsStartingWithAVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

exports.arrays_removeNthElement2 = (req, res) => {
  let { index } = req.query || 0;
  const { array } = req.body;

  res.status(200).json({ result: removeNthElement2(index, array) });
};