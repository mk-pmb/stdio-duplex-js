/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function readmeDemo() {
  //#u
  var stdio = require('stdio-duplex')(),
    lineSplitter = require('split2')(),
    inLines = stdio.pipe(lineSplitter);

  inLines.on('data', function (chunk) {
    stdio.write(String(chunk).length + '\n');
  });
  //#r
}());
