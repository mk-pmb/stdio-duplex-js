
<!--#echo json="package.json" key="name" underline="=" -->
stdio-duplex
============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Factory function that returns a duplex stream made from process.std{in,out}.
<!--/#echo -->


Usage
-----

from [test/line-lengths.js](test/line-lengths.js):

<!--#include file="test/line-lengths.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="9" -->
```javascript
var stdio = require('stdio-duplex')(),
  lineSplitter = require('split2')(),
  inLines = stdio.pipe(lineSplitter);

inLines.on('data', function (chunk) {
  stdio.write(String(chunk).length + '\n');
});
```
<!--/include-->




<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
