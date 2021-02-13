/**
 *	index.js: @org.slashlib/jsbatch-strings
 *  String constants required by every jsbatchrun plugin.
 *
 *  @module jsbatch-strings
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = { EXPORTS: "exports" };

/*
 *  Helpstring:  jsbatchrun commandline switches for arguments.
 */
const _USAGEARGS = `arguments can be taken from environment by:
    --env:args:use:<property>
    --env:args:prepend:<property>
    --env:args:append:<property>
  arguments can be narrowed down by:
    --args:from  <index>
    --args:to    <index>
    --args:index <index>`;

/*
 *  Helpstring:  jsbatchrun commandline switches for options.
 */
const _USAGEOPTS = `special:
  --env:opt:<property>:<optionname>
  --help
  --debug`;

/**
 *  Strings to export
 */
const STRINGS = {
  CONFIG:     "config",
  EMPTY:      "",
  HELP:       "help",
  ID:         "id",
  INVOKE:     "invoke",
  TAB1:       "  ",
  TAB2:       "    ",
  TAB3:       "      ",
  USAGE:      "Usage: jsbr [command(s)] [options] [arguments]",
  USAGEARGS:  _USAGEARGS,
  USAGEOPTS:  _USAGEOPTS
};

Object.freeze( STRINGS );
Object.seal(   STRINGS );

Object.defineProperty( module, _STRINGS.EXPORTS,         {
  value:    STRINGS,
  writable: false, enumerable: true, configurable: false });
