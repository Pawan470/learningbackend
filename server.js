const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./dbCards.js')


// App config 
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

// Middleware  
app.use(express.json());
// app.use(Cors())



// All api requests
app.use(function (req, res, next) {
 
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data");

  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});



app.use(require('./router/auth'))
app.use(require('./router/blog'))

// DB Config 
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  retryWrites: true,
  w: "majority",
  });



// Port Listener
app.listen(port,()=> console.log(`Listening in port : ${port}`))