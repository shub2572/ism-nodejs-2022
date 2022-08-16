let http = require("http")

http.createServer(function(req,res){

   console.log("request coming........" +req.url);
   if(req.url ==  "/login" ){
    let loginFile = fs.readFileSync("login.html")
    res.writeHead(200,{"content-Type": "text/html"})    
    res.write("login");
   }else if(req.url == "/home"){
      res.write("home");
   }else{  
      res.write("hello world");
   }
     res.end();

}).listen(9878)