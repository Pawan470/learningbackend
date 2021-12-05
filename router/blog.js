const express = require("express");
const router = express.Router();
require("../server");
const Blog = require("../model/blogScheme");
const constants = require("../lib/constants");
const Response = require("../lib/Response");
const Message = require("../lib/errormsg");
const catchAsync = require("../lib/catchAsync");
mongoose = require("mongoose");

let { groupValidation } = require("../lib/joivalidation");


// Add Blog
router.post(
  "/blog/add",
  catchAsync(async (req, res) => {
    const groupObj = {
      title: req.body.title,
      description: req.body.description,
      createdById: req.body.createdById,
    };

    await groupValidation.validateAsync(groupObj);

    const blogExist = await Blog.find({
      title: req.body.title,
    });

    if (blogExist.length) {
      return res.json(
        Response(constants.statusCode.unauth, Message.Blog.alreadyExist)
      );
    }
    const addBlog = new Blog(req.body);
    let save = await addBlog.save();
    if (save) {
      return res.status(200).json({ message: "Blog added successfuly" });
    }
  })
);


router.post('/blog/list',catchAsync(async (req,res) =>{
  console.log(req.body)
  if(!req.body.createdById){
    Response(constants.statusCode.unauth, Message.Blog.createdByID  )

  }
  const blogList = await Blog.find({createdById:req.body.createdById}) 
  console.log(blogList)
  if(blogList.length){
    return res.json(Response(constants.statusCode.unauth, Message.Blog.alreadyExist,blogList));
  }
  
}))


async function getDetails(){

  // const blogList = await Blog.find({createdById: mongoose.Types.ObjectId('619fba5d166d3d978b8bfaac') })
  // // using or conditon for mongoose
  // .and([{description:'This is the another blog'},{isActive:true}])
  // console.log(blogList)

//  { description:"This is the another blog" };
 let condition =  { createdById: '61ab258320bfa92f7e83455a' }
 let createdById ="61ab258320bfa92f7e83455a"

  const data = await Blog.aggregate([
   
    {
      $lookup:
      {
        from: 'user',
        localField: 'createdById',
        foreignField: '_id',
        as: 'userData',
      },
    },
    
     
    
  ])








   


  console.log('data',data)

} 
getDetails()

module.exports = router;
