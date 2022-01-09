const express = require("express");
const mongoose = require("mongoose");

// App config
cors = require("cors");

const app = express();
const port = process.env.PORT || 8001;



const connection_url ="mongodb+srv://admin:j2VEMdAgFGjc9i1M@cluster0.omuzk.mongodb.net/truckmine?retryWrites=true&w=majority";

// mongodb+srv://admin:<password>@cluster0.omuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// Middleware
app.use(express.json());
app.use(cors())

// All api requests
app.use(function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data')
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(require("./router/auth"));
app.use(require("./router/blog"));
app.use(require("./router/event"));


// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
  }).then((res) => {
    console.log('DataBase Connect Successfully');
  }).catch((error) => {
    console.log("error");
  });

// Port Listener
app.listen(port, () => console.log(`Listening in port : ${port}`));
