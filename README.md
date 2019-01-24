# casing

> Recursively transform object key strings to and from camelCase and snake_case.

- Supports objects, arrays and a combination of both in any depth.
- Was originally intended for use with BookShelf and Knex.

## Installation

```sh
$ npm install casing
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

### TypeScript

This package includes a definition file for TypeScript.

```ts
import { camelize, snakeize } from 'casing';

var wasCamel = { objId: 123 };
snakeize(wasCamel);

var was_snake = { obj_id: 456 };
camelize(was_snake);
```

## License

MIT
