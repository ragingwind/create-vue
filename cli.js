#!/usr/bin/env node
'use strict';
const meow = require('meow');
const createVuePwa = require('.');

const cli = meow(`
	Usage
	  $ create-vue-pwa [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ create-vue-pwa
	  unicorns & rainbows
	  $ create-vue-pwa ponies
	  ponies & rainbows
`);

console.log(createVuePwa(cli.input[0] || 'unicorns'));
