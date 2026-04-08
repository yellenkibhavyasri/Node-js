const fs=require("fs");
//sync..
//fs.writeFileSync("./test.txt","Hey there");
//Async
//fs.writeFile("./test.txt","Hello World Async",(err)=>{});
/*const res=fs.readFileSync("./contacts.txt","utf-8");
console.log(res);*/
/*fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
});*/
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.cpSync("./test.txt","./copy.txt");
fs.unlinkSync("./copy.txt");