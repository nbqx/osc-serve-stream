var oscStream = require('.');
var port = 3333,
    host = 'localhost';

var s = oscStream(port,host).on('data',function(data){
  console.log(data);
});
