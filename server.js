const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./dbCards.js')


// App config 
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:axw1yGwrZTb8Mm0s@cluster0.yxc4w.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middleware  
app.use(express.json());
// app.use(Cors())
app.use(require('./router/auth'))



// DB Config 
 mongoose.connect(connection_url)



// Port Listener
app.listen(port,()=> console.log(`Listening in port : ${port}`))