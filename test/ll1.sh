#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function ll1 () {
  export LANG{,UAGE}=en_US.UTF_8
  local NODE_BIN="$(which node{js,} 2>/dev/null | head -n 1)"
  [ -n "$NODE_BIN" ] || NODE_BIN=node

  local DIFF_CMD=colordiff
  </dev/null "$DIFF_CMD" &>/dev/null || DIFF_CMD=diff

  local JS_CMD='require("stdio-duplex/test/line-lengths.js")'
  "$DIFF_CMD" -sU 2 --label 'expected' <(<<<'3 1 5' tr ' ' '\n'
    ) --label 'actual output' <(
    <<<$'foo\n:\nHELLO' "$NODE_BIN" -e "$JS_CMD")
  return $?
}










[ "$1" == --lib ] && return 0; ll1 "$@"; exit $?
