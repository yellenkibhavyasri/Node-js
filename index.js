const http=require("http");
const fs=require("fs");
const url =require("url");
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()}: ${req.method}${req.url} New Req Received\n`;
    const myurl=url.parse(req.url,true);
    
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
                if(req.method==="GET") 
                    res.end("HomePage");
            break;
            case '/about':
                
                res.end("Iam Bhavya");
            break;
            case '/signup':
                if(req.method==='GET') res.end("This is a signup Form");
                else if(req.method==='POST'){
                    res.end("Success");
                }
            break;
            default:
                res.end("404 Not Found");
        }
        
    });
});
myServer.listen(8000,()=>console.log("Server Started"));