const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url ==='/'){
        res.end("Home")
    }
    if(req.url ==="/intro"){
        res.end("intro")
    }
    res.end(`
    <p> Not found</p>
    <a href="/">Back</a>`)
});

server.listen(5000)