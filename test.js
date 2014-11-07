'use strict';
var casing = require('./main');

var wasCamel = {
  objId: 123,
  myName: 'Slim Shady'
};
var was_snake = {
  obj_id: 456,
  my_name: 'fiddycent'
};

console.log(['casing.camelize(was_snake)', casing.camelize(was_snake)]);
console.log(['casing.snakeize(wasCamel)', casing.snakeize(wasCamel)]);