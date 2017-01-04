/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var duplexer = require('duplexer'), makeLineSplitter = require('split2');

function factory(opts) {
  opts = (opts || false);
  var src = process.stdin, dest = process.stdout;
  if (opts.lines) { src = src.pipe(makeLineSplitter()); }
  if (opts.err) { dest = process.stderr; }
  return duplexer(dest, src);
}


module.exports = factory;
