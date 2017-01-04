/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var duplexer = require('duplexer'), makeLineSplitter = require('split2');

function factory(opts) {
  opts = (opts || false);
  var src = process.stdin, dest = process.stdout;

  // options that modify src/dest must go first!
  if (opts.lines) { src = src.pipe(makeLineSplitter()); }
  if (opts.err) { dest = process.stderr; }

  // other options
  if (opts.end) { src.on('end', function () { dest.end(); }); }

  return duplexer(dest, src);
}


module.exports = factory;
