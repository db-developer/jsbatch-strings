# jsbatch-strings #

string constants for use with package [jsbatchrun](https://www.npmjs.com/package/jsbatchrun) and its plugins.

[![npm version](https://img.shields.io/npm/v/jsbatch-strings?color=blue)](https://www.npmjs.com/package/jsbatch-strings)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/jsbatch-strings/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/jsbatch-strings)
[![Build Status](https://travis-ci.com/db-developer/jsbatch-strings.svg?branch=master)](https://travis-ci.com/db-developer/jsbatch-strings)
[![dependencies](https://david-dm.org/db-developer/jsbatch-strings.svg)](https://david-dm.org/)

This package simply provides a number of string constants, used over and over by
[jsbatchrun](https://www.npmjs.com/package/jsbatchrun).  
Feel free to incorporate them into your plugins.

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)

* Developers
  * [Testing jsbatch-strings](docs/grunt.md#testing)
  * [Code coverage of tests for jsbatch-strings](docs/grunt.md#code-coverage)
  * [Build jsbatch-strings from scratch](docs/grunt.md#building)
  * [NPM integration of jsbatch-strings](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package jsbatch-strings](docs/api.index.md) (self generated with jsbatch-strings)

## getting started ##

This package is required by [jsbatchrun](https://www.npmjs.com/package/jsbatchrun) or
it may be incorporate into your own plugins.

### install ###

This guide assumes, that you are familiar with the use of [npm](https://npmjs.com "Homepage of npm").  

<code>npm install jsbatch-strings --save</code>

### prerequisites ###

No prerequisites.

## usage ##

```javascript
const helpstring = require( "jsbatch-strings" ).HELP;
console.log( helpstring );
// Will output "help" or whatever 'helpstring' currently is used by jsbatchrun.

const mystringtable = Object.assign({ my: "stringtable" }, require( "jsbatch-strings" ));
console.log( mystringtable.HELP );
// Will output "help" or whatever 'helpstring' currently is used by jsbatchrun.
```
