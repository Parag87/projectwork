var ping = require('ping');
var tcpp = require('tcp-ping');
var http = require('http');
var soap = require('strong-soap').soap;


// tcpp.probe('localhost', 3000, function(err, available) {
//     console.log(available);
// });
//
//
// tcpp.ping({ address: 'localhost', port:3000 }, function(err, data) {
//     console.log(data);
// });
//
//
// http.get({
//       hostname: 'localhost',
//       port: 3000,
//       path: '/users',
//       agent: false  // create a new agent just for this one request
//     }, (res) => {
//   // Do stuff with response
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
//
// });

 //wsdl of the Web Service this client is going to invoke. This can point to local wsdl as well.
 // var url = 'http://127.0.0.1:1337/testService?WSDL';
 // var requestArgs = {
 //   myArg1: 'ARS',
 //   myArg2: 'ARS'
 // };
 // var options = {};
 //
 // soap.createClient(url, options, function(err, client) {
 //   client.test1(requestArgs, function(err, result, envelope) {
 //     //response envelope
 //     console.log(envelope);
 //     //result in SOAP envelope body which is the wrapper element. In this case, result object corresponds to GetCityForecastByZIPResponse
 //     console.log(JSON.stringify(result));
 //   });
 // });
