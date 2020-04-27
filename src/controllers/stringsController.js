const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

exports.strings_sayhello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

exports.strings_uppercase = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};

exports.strings_lowercase = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
};

exports.strings_firstCharacters = (req, res) => {
  const length = req.query.length || 1;

  res.status(200).json({ result: firstCharacters(req.params.string, length) });
};
