const $ = require('jquery');
const _ = require('lodash');
const random = require('./random');
const chars = require('./chars');

$(document).ready(function () {

  var symbols = $('#symbols');
  var symbolsList = chars.punctuations;
  symbolsList.map( function (symbol) {
    var checkbox = $('<input>', { type: "checkbox", class: "form-check-input symbol", name: symbol, id: symbol, checked: true});
    var label = $('<label>', {class: "form-check-label", for: symbol});
    var div = $('<div>', {class: "form-check form-check-inline"});
    label.append(checkbox);
    label.append(symbol);
    div.append(label);
    symbols.append(div);
  });

  $('#punctuations').change( function () {
    $('#symbolsContainer').toggleClass('d-none');
  });

  $('#select-all-punct').on('click', function () {
    var symbols = $('#symbols').find('.symbol');
    symbols.map( function (index, symbol) {
      $(symbol).prop('checked', true);
    });
  });

  $('#deselect-all-punct').on('click', function () {
    var symbols = $('#symbols').find('.symbol');
    symbols.map( function (index, symbol) {
      $(symbol).prop('checked', false);
    });
  });

  $('#generate').click( function (event) {
    event.stopPropagation();
    event.preventDefault();

    let charset = [];
    let passwd = [];

    var lowercaseCheckBox = $('#lowercase');
    var lowercaseFlag = lowercaseCheckBox.prop('checked');
    if (lowercaseFlag) {
      charset = charset.concat(chars.lowercase);
      // at least one lowercase
      passwd.push(chars.lowercase[random.randomBetween(0, chars.lowercase.length)]);
    }

    var uppercaseCheckBox = $('#uppercase');
    var uppercaseFlag = uppercaseCheckBox.prop('checked');
    if (uppercaseFlag) {
      charset = charset.concat(chars.uppercase);
      // at least one uppercase
      passwd.push(chars.uppercase[random.randomBetween(0, chars.uppercase.length)]);
    }

    var digitsCheckBox = $('#digits');
    var digitsFlag = digitsCheckBox.prop('checked');
    if (digitsFlag) {
      charset = charset.concat(chars.digits);
      // at least one digits
      passwd.push(chars.digits[random.randomBetween(0, chars.digits.length)]);
    }

    var punctuationsCheckBox = $('#punctuations');
    var punctuationsFlag = punctuationsCheckBox.prop('checked');
    if (punctuationsFlag) {
      var symbols = [];
      var symbolsCheckBox = $('#symbols').find('.symbol');
      symbolsCheckBox.map( function (index, symbolCheckBox) {
        if ($(symbolCheckBox).prop('checked')) {
          symbols.push($(symbolCheckBox).prop('name'));
        }
      });
      // at least one symbol (if at least one selected)
      if (symbols.length > 0) {
        charset = charset.concat(symbols);
        passwd.push(symbols[random.randomBetween(0, symbols.length)]);
      }
    }

    const passwdRequestedLength = $('input[name=passwd-length]').filter(':checked').val();

    for (let i = passwd.length+1; i <= passwdRequestedLength; i++) {
      passwd.push(charset[random.randomBetween(0, charset.length)]);
    }

    passwd = _.shuffle(passwd);
    passwd = _.shuffle(passwd);
    passwd = _.shuffle(passwd);
    $('#passwd').text(passwd.join(''));

    return false;
  });
});
