let express = require('express');
let path = require('path');
let server = express();

server.get('/',(req,res)=>{
res.send("hello world");
});

server.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
    });
    
    server.get('/add',(req,res)=>{
        res.send("Todays result is   "+ (parseInt(req.query.num1)+parseInt(req.query.num2)));
        });
        
 server.get('/name',(req,res)=>{
  res.send("Hello   "+ req.query.name);
x   });


server.listen(4000);
console.log("Hello world");