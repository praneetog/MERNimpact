const http = require('http');
const fs = require('fs');
const path = require('path');
const app = http.createServer((req, res)=>{
    // console.log(req);
    // res.write("Hello")
    // res.end()
    // console.log(req.url)
    // res.end()
    // if(req.url == "/"){
    //     res.write("Welcome to the home page")
    //     res.end()
    // }else if(req.url == "/about"){
    //     res.end("Welcome to the about page")
    // }else if(req.url == "/contact"){
    //     res.write("Welcome to the contact page")
    //     res.end()
    // }else{
    //     res.end("404 page not found")
    // }
    // const currentDateTime = new Date().toISOString();
//     const logEntry = [${currentDateTime}] Request received: ${req.method} ${req.url}\n;
//     const logFilePath = path.join(__dirname, 'log.txt');
//     fs.appendFile(logFilePath, logEntry, (err) => {
//         if (err) {
//           console.error('Error writing to log file:', err);
//         }else console.log("Log Successfull")
//       });
// });
    fs.appendFile("log.txt",`Request recieved: ${req.url}\n`,(err)=>{
        if (err) {
            console.error('Error writing to log file:', err);
          }else console.log("Log Successfull")
        });
        res.end("Log Success")
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});