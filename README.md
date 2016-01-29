# @nod/base

A configurable base class

Supports ES5, ES7, AMD, CommonJS, System and EcmaScript modules runs both on browser and server.

[![GitHub tag][tag-image]][tag-url]
[![Build status][build-image]][build-url]
[![Dependency Status][david-image]][david-url]
[![Join the chat][gitter-image]][gitter-url]


## Usage:

### Installation:
```
npm install --save @nod/base
```

### Examples:

```javascript
import { Base } from '@nod/base';
class Example extends Base {
 initialize() {
   // do stuff
 }
}
```

```javascript
import { Base, Configuration } from '@nod/base';

class ExampleConfiguration extends Configuration {
  defaultVal = 'example val';  
}

class Example extends Base {
   initialize() {
    this.console.log(this.options.defaultVal);
    this.console.info(this.options.secondVal);
   }
}

let example = new Example(new ExampleConfiguration({
 secondVal : 'test'
}));
```

## Build and develop:
```bash
gulp
```
or

```bash
npm run build
npm run watch

```
Please check available gulp tasks with:
```bash
gulp -T
```

## TODO:
- Gulp tasks as another dependency
- More detailed docs

## Support:
[![Send e-mail][mail-image]][mail-url]
[![Join the chat][gitter-image]][gitter-url]

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://nod.st)
by [NOD studios](http://nod.st)


[logo-image]: ./image/logo.strap.png?raw=true
[repo-url]: https://github.com/NOD-studios/base
[david-url]: https://david-dm.org/NOD-studios/base
[david-image]: https://david-dm.org/NOD-studios/base.svg
[gitter-image]: https://img.shields.io/badge/GITTER-join%20chat-green.svg
[gitter-url]: http://bit.ly/NOD-chat
[mail-image]: https://img.shields.io/badge/send-email-green.svg
[mail-url]: mailto:hey@nod.st
[tag-image]: https://img.shields.io/github/tag/NOD-studios/base.svg
[tag-url]: https://github.com/NOD-studios/base/tags
[build-image]: https://travis-ci.org/NOD-studios/base.svg
[build-url]: https://travis-ci.org/NOD-studios/base
