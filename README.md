
<!--#echo json="package.json" key="name" underline="=" -->
stdio-duplex
============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Factory function for duplex streams made from process.std{in,out}.
<!--/#echo -->


Usage
-----

from [doc/examples/line-lengths.js](doc/examples/line-lengths.js):

<!--#include file="doc/examples/line-lengths.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="6" -->
```javascript
var stdio = require('stdio-duplex')({ lines: true });
stdio.on('data', function (oneLine) {
  stdio.write(String(oneLine).length + '\n');
});
```
<!--/include-->


Options
-------

The factory function takes an optional options object
which supports these settings:

  * `end`: (bool) Whether to end stdout when stdin ends. Default: `false`
    * NB: Trying to `.end()` the original ("real") stdout will most probably
      fail with `Error: process.stdout cannot be closed.`
  * `err`: (bool) Send output to stderr instead of stdout. Default: `false`
  * `lines`: (bool) Split stdin into lines. Default: `false`






<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
