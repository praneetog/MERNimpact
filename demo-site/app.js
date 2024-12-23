import express from "express"
import url from "url"
import fs from 'fs'
import path from "path"
import 'dotenv/config'
import http from "http"

const port = 4000
const app = express();

const app1 = ()=>{
    app.get('/' ,(req,res)=>{
        res.send("My server")
    });

    app.get('/data',(req,res)=>{
        res.send({"name":"Himanshu","age":"21"})
    })
    
    app.listen(port,()=>{
        console.log("Server running...")
    })
}

const app2 = ()=>{
    const  myurl = "https://www.google.com/search/views?q=parul+university+pin+code&oq=parul+university&gs_lcrp=EgZjaHJvbWUqDAgAEAAYQxiABBiKBTIMCAAQABhDGIAEGIoFMhIIARBFGDkYkQIYsQMYgAQYigUyDAgCEAAYQxiABBiKBTIHCAMQABiABDIMCAQQABhDGIAEGIoFMgcIBRAAGIAEMhAIBhAuGJECGLEDGIAEGIoFMgcIBxAAGIAEMgcICBAAGIAE0gEJNTQzMmoxajE1qAIMsAIB&sourceid=chrome&ie=UTF-8"
    const newurl = url.parse(myurl,true)
    // const newurl = new URL(myurl)

    if(newurl.pathname=='/search'){
        console.log("Welcome to search Page!")
    }
    else{
        console.log("!Error Encountered..")
    }

    for(let i in newurl){
        if(i=="query"){
            for(let j in newurl[i]){
                console.log(`${j}: `,(newurl[i])[j])
            }
        }
        else{
            console.log(`${i.toLocaleUpperCase()}:,newurl[i]`)
        }
        
    }
}

const app3 = ()=>{
    const myPath = "D:\Backend\app.js"
    const newPath = path.parse(myPath) // path parsing into object
    console.log(newPath)
}

const app4 = ()=>{

    // let data = (fs.readFileSync("data.json","utf8"))
    // let obj = JSON.parse(data)
    // let x={"name":"karan","age":"15"}
    // let newdata = JSON.stringify(x)
    // fs.writeFileSync("data.json",newdata)
    
    // fs.unlinkSync("data.json")

    fs.writeFileSync("hello.txt","hello world") 
    fs.writeFileSync("hello.txt","hello world hi")
    fs.appendFileSync("hello.txt","\nnew hello")
    
    fs.appendFile("hello.txt","\nnext hello",(error)=>{
        if(error){
            console.log(error)
        }
    })

    console.log(fs.readFileSync("hello.txt","utf8")) // reading file data Synchronusly
    console.log(fs.readFile("hello.txt","utf8",(error,data)=>{ // reading file Asynchronusly
        if(data){
            console.log(data)
        }
    }))

    fs.unlinkSync("hello.txt") 
}

const app5 = ()=>{
    const server = http.createServer((req,res)=>{
        // if(req.url=="/"){
        //     res.write("Welcome To Home Page")
        //     res.end;
        // }
        // else if(req.url=="/contact"){
        //     res.write("Welcome to contact page")
        //     res.end;
        // }
        // res.end();
        const data = new Date();
        if(req.url=="/favicon.ico"){
            res.end();
        }
        else{
            fs.appendFile("login.txt",`Request received:${req.url} ${data}\n`,(err,data)=>{
                if(err) console.log(err);
                else{
                    console.log("Log Success")
                }
            });
        }
        res.end("log sucess");
        
    })

    server.listen(port,()=>{
        console.log("Server is learning",port);
    })
}

const app6 = ()=>{
    const homepage = path.join("public/index.html")
    const style = path.join("public/styles.css")
    const server = http.createServer((req,res)=>{
        console.log(req.url)
        if(req.url==="/"){
            fs.readFile(homepage,"utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    // res.end(data);
                    res.write(data);
                    res.end();
                    
                }
            })
        } else if(req.url==="/styles.css"){
            fs.readFile(style,"utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    // res.end(data);
                    res.write(data);
                    res.end();
                    
                }
            })
        }        
    })

    server.listen(port,()=>{
        console.log("Server is learning",port);
    })
}


export {app1,app2,app3,app4,app5,app6};