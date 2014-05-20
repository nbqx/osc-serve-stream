## osc-serve-stream

[osc](http://opensoundcontrol.org/) message readable stream

## usage

```js
var oscStream = require('osc-serve-stream');
var port = 3333,
    host = 'localhost';

var s = oscStream(port,host).on('data',function(data){
  console.log(data);
});
```

## todo

* kill osc server
