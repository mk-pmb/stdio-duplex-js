/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function measure(s) { return (s === null ? '' : s.length + '\n'); }
function soon(f) { return function () { setTimeout(f, 10); }; }

var origOut = process.stdout, hookStdio = require('./hook-stdio.js'),
  inputChunks = [ 'hel', 'lo world\nfoo\nb', '', 'ar', null ],
  expectedOutput = inputChunks.join('').split('\n').map(measure).join(''),
  accum = '', equal = require('equal-pmb');

hookStdio.hookStreams();

function collectOutput(chunk) {
  chunk = String(chunk);
  // console.error({ collectOutput: chunk });
  accum += chunk;
}
hookStdio.stdout.on('data', collectOutput);

function compareExpectation() {
  // console.error({ actual: accum, expected: expectedOutput });
  hookStdio.restoreStreams();
  equal(accum, expectedOutput);
  console.log('+OK fake-stdio test passed.');
}
hookStdio.stdin.on('end', soon(compareExpectation));

require('../doc/examples/line-lengths.js')();

origOut.write('# fake-printing slowly…\n');
hookStdio.writeSlowly('stdin', 50, inputChunks);
