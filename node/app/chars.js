const lowercase = "abcdefghjkilmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const digits = "0123456789";

const lowercaseSet = lowercase.split('');
const uppercaseSet = uppercase.split('');
const digitsSet = digits.split('');

module.exports = {
  lowercase: lowercaseSet,
  uppercase: uppercaseSet,
  digits: digitsSet,
};
