/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var duplexer = require('duplexer');

function factory() {
  return duplexer(process.stdout, process.stdin);
}

factory.err = function () {
  return duplexer(process.stderr, process.stdin);
};


module.exports = factory;
