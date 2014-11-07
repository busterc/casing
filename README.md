# casing

Recursively transform object key strings to and from camelCase and snake_case

## Version 1.0.0

## Installation

```javascript
$ npm install --save casing
```

## Usage
```javascript
'use strict';
var casing = require('casing');

var wasCamel = {
  objId: 123,
  myName: 'Slim Shady'
};
console.log(casing.snakeize(wasCamel));
// => { obj_id: 123, my_name: 'Slim Shady' }

var was_snake = {
  obj_id: 456,
  my_name: 'fiddycent'
};
console.log(casing.camelize(was_snake));
// => { objId: 456, myName: 'fiddycent' }
```

## Dependencies
- [snakeize](https://www.npmjs.org/package/snakeize)
- [camelize](https://www.npmjs.org/package/camelize)

## License
MIT