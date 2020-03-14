const http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'content-type':'text/plain'});
    res.write("Http server Demo using plain http module local code");
    res.end();

}).listen(3000, function(){
    console.log("server started on port 3000");
});