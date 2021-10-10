var http = require('http');
var data = [
    {name:'pawan',age:97,joblocation:'mohali'},
    {name:'api',age:98,joblocation:'america'},
    {name:'apilearning',age:99,joblocation:'delhi'}
]

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900)