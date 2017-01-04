/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = module.exports, makePassthroughStream = require('through2');
EX.stNames = ['stdin', 'stdout'];
EX.backup = {};

// initialize console, in order to make it grab the original streams:
console.log('# init console');

EX.hookStreams = function () { EX.stNames.forEach(EX.hookOneStream); };
EX.restoreStreams = function () { EX.stNames.forEach(EX.restoreOneStream); };

EX.hookOneStream = function (key) {
  var bak = Object.getOwnPropertyDescriptor(process, key),
    fake = makePassthroughStream();
  EX.backup[key] = bak;
  Object.defineProperty(process, key, { configurable: true,
    enumerable: bak.enumerable, value: fake });
  EX[key] = fake;
  return fake;
};

EX.restoreOneStream = function (key) {
  Object.defineProperty(process, key, EX.backup[key]);
};

EX.writeSlowly = function (dest, intervalMsec, chunks) {
  var pos = -1;
  (function writeNext() {
    var chunk = chunks[pos];
    // console.error({ pos: pos, chunk: chunk });
    if (chunk || (chunk === '')) { process[dest].write(chunk); }
    if (chunk === null) { process[dest].end(); }
    pos += 1;
    if (pos < chunks.length) { setTimeout(writeNext, intervalMsec); }
  }());
};












// scroll
