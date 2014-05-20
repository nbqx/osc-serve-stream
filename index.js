var Stream = require('stream'),
    osc = require('node-osc');

module.exports = main;

function main(port,host){
  var stream = new Stream();
  var port = port || 12345,
      host = host || 'localhost';

  stream.readable = true;
  
  var server = new osc.Server(port,host);
  server.on('message',function(msg){
    stream.emit('data',msg);
  });

  return stream;
};

