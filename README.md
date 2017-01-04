
<!--#echo json="package.json" key="name" underline="=" -->
stdio-duplex
============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Factory function for duplex streams made from process.std{in,out}.
<!--/#echo -->


Usage
-----

from [test/line-lengths.js](test/line-lengths.js):

<!--#include file="test/line-lengths.js" start="  //#u" stop="  //#r"
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

  * `err`: (bool) Send output to stderr instead of stdout.
  * `lines`: (bool) Split stdin into lines.






<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
