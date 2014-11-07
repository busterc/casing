'use strict';
module.exports = function() {
  var camelize = require('camelize');
  var snakeize = require('snakeize');

  var casing = {
    camelize: camelize,
    snakeize: snakeize
  };

  return casing;
}();