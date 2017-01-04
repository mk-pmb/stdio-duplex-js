/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function readmeDemo() {
  //#u
  var stdio = require('stdio-duplex')({ lines: true });
  stdio.on('data', function (oneLine) {
    stdio.write(String(oneLine).length + '\n');
  });
  //#r
}());
