/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function printLineLengths() {
  //#u
  var stdio = require('stdio-duplex')({ lines: true });
  stdio.on('data', function (oneLine) {
    stdio.write(String(oneLine).length + '\n');
  });
  //#r
}

module.exports = printLineLengths;
if (require.main === module) { printLineLengths(); }
