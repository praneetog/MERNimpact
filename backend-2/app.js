import express from "express"
import url from "url"
import fs from 'fs'
import path from "path"
import 'dotenv/config'
import http from "http"
import querystring from "querystring"

const port = 4000
const app = express();

const app1 = () => {
    const homepage = path.join("public/index.html")
        
        const server = http.createServer((req,res)=>{
            let parsedUrl = url.parse(req.url,true);
            if(req.url==="/"){
                fs.readFile(homepage,"utf-8",(err,data)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.write(data);
                        res.end();
                    }
                })
            }
            else if(url.parse(req.url).pathname==="/submit" && req.method == "POST"){
                let body = ""
                req.on("data", (chunks) => {
                    // console.log(chunks.toString())
                    body += chunks.toString();
                    const parsedData = querystring.parse(body);
                    const jsonData = JSON.stringify(parsedData, null, 2);
                    console.log("Received JSON Data:", jsonData);
                })
                
                res.end("This is coming by POST method");
            }
            else if(url.parse(req.url).pathname==="/submit" && req.method == "GET"){
                console.log(parsedUrl.query);
                res.end("This is coming by GET method");
            }
        })
    
        server.listen(port,()=>{
            console.log("Server is listening",port);
        })
}

export { app1 };