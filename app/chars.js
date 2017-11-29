const lowercase = "abcdefghjkilmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const digits = "0123456789";
const punctuations = "|!$()?[]-_";

const lowercaseSet = lowercase.split('');
const uppercaseSet = uppercase.split('');
const digitsSet = digits.split('');
const punctuationsSet = punctuations.split('');

module.exports = {
  lowercase: lowercaseSet,
  uppercase: uppercaseSet,
  digits: digitsSet,
  punctuations: punctuationsSet,
};
