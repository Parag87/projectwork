var ping = require('ping')
var tcpp = require('tcp-ping')
var http = require('http')
var soap = require('strong-soap').soap;
var fs  = require('fs')
//var urls = require('./urls')

const chunks = []

// urls.forEach( (url) => {
//   console.log('server: ' + url.server + ' ' + 'path ' + url.path);
// })

const urls = [{ server: 'arswsint.igslb.allstate.com', path : '/RSPAssistWS/RSPAssistBrokerService/wsdl/RSPAssistBrokerService.wsdl'},
  { server: 'amcalliance.allstate.com', path : '/AgentSale/AMCSaleServiceSoapBindingSoapPort?wsdl'},
  { server: 'arsintws.allstate.com', path : 'ARSPCI_CC/ARSCC?wsdl'},
  { server: 'arsintws.allstate.com', path : '/EPAS/EPASService?wsdl'},
  { server: 'arsintws.igslb.allstate.com', path : '/JJ2-0WS/JJInProxyService?wsdl'}]

for(var i = 0; i < urls.length; i++) {
  // console.log(urls[i].server + urls[i].path);
  try {
    http.get({
          hostname: urls[i].server,
          path: urls[i].path,
          agent: false  // create a new agent just for this one request
        }, (res) => {
      res.on('data', function (chunk) {
        // console.log('BODY: ' + chunk);
        chunks.push(chunk)
        fs.writeFile('./../res/' + i + '.wsdl', chunk, 'utf8', (err, data) => { console.log( 'length of chuck : ' + chunks.length, chunks.toString())})
      })
    })
  } catch (e) {
    console.error(e);
  } finally {
    console.log(urls[i].server + urls[i].path);
    console.log('proceeding for next');
  }

}




// var no = 0;
//
// http.get({
//       hostname: urls[no].server,
//       path: urls[no].path,
//       agent: false  // create a new agent just for this one request
//     }, (res) => {
//   // Do stuff with response
//   res.on('data', function (chunk) {
//     fs.writeFile('./../res/wsdl.wsdl', chunk, 'utf8', () => console.log('logged'))
//   });
//
// });
