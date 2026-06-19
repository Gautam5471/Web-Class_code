// const { log } = require("console");


let http = require("http");
const { listen } = require("node:quic");
// console.log(http);


let server=http.createServer((req,res)=>{
    console.log("server is running...");

    res.end("Insta home page")
})


server.listen(3000);