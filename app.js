const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(req.url == "/.well-known/pki-validation/DB54CC8EC1C2B15228458243FF2A93DC.txt"){
     res.end("E16C386B319DD68031EA646D0897A64A7D9A303B014F05791DB0B5527D0DD363\ncomodoca.com\nbcb6daa9e6a9650");
  }
  res.end(req.url);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
