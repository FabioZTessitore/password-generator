const $ = require('jquery');
const _ = require('lodash');
const random = require('./random');
const chars = require('./chars');

$(document).ready(function () {
  $('#generate').on('click', function () {
    let charset = [];
    let passwd = [];

    var lowercaseCheckBox = $('#lowercase');
    var lowercaseFlag = lowercaseCheckBox.is(':checked');
    if (lowercaseFlag) {
      charset = charset.concat(chars.lowercase);
      // at least one lowercase
      passwd.push(chars.lowercase[random.randomBetween(0, chars.lowercase.length)]);
    }

    var uppercaseCheckBox = $('#uppercase');
    var uppercaseFlag = uppercaseCheckBox.is(':checked');
    if (uppercaseFlag) {
      charset = charset.concat(chars.uppercase);
      // at least one uppercase
      passwd.push(chars.uppercase[random.randomBetween(0, chars.uppercase.length)]);
    }

    var digitsCheckBox = $('#digits');
    var digitsFlag = digitsCheckBox.is(':checked');
    if (digitsFlag) {
      charset = charset.concat(chars.digits);
      // at least one digits
      passwd.push(chars.digits[random.randomBetween(0, chars.digits.length)]);
    }

    const passwdRequestedLength = $('input[name=passwd-length]').filter(':checked').val();

    for (let i = passwd.length+1; i <= passwdRequestedLength; i++) {
      passwd.push(charset[random.randomBetween(0, charset.length)]);
    }

    passwd = _.shuffle(passwd);
    $('#passwd').text(passwd.join(''));

    return false;
  });
});
