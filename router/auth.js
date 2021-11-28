const express = require("express");
const router = express.Router();
require("../server");
const User = require("../model/userScheme");
var bcrypt = require("bcryptjs");
// var bcrypt = dcodeIO.bcrypt;

router.get("/", (req, res) => {
  res.send("hellow wolrd");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    console.log("not form valid error");
    return res.status(422).json({ error: "Please filled all required field" });
  }

  try {
    let userExist = await User.find({ email: req.body.email });
    console.log("userExist", userExist, userExist.length);
    if (userExist.length) {
      res.status(422).json({ error: "user alredy exist" });
      return false;
    }
    const user = new User(req.body);
    let save = await user.save();

    if (save) {
      res.status(200).json({ message: "user registered successfuly  " });
    }
  } catch (err) {
    console.log("catch error ==========>", err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.json({ message: "fill all mendatory fields" });
      return false;
    }
    const userLogin = await User.findOne({ email: req.body.email });
    console.log('userLogin',userLogin)
    const isMatch = await bcrypt.compare(req.body.password, userLogin.password);

    if (isMatch === true) {
      res.status(200).json(
        {
             message: "Login successfuly",
             name:userLogin.name,
             work:userLogin.work,
             _id:userLogin._id
     });
    } else {
      res.status(422).json({ message: "Email and Password is wrong" });
    }
  } catch (error) {
    res.status(422).json({ message: "Email and Password is wrong" });
  }
});

module.exports = router;
