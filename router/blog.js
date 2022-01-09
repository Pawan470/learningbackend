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
      //  res.status(200).json({ message: "Blog added successfuly" });
      return res.json(Response(constants.statusCode.ok, Message.Blog.success));
    }
  })
);

router.post(
  "/blog/list",
  catchAsync(async (req, res) => {
    if (!req.body._id) {
      res.json(Response(constants.statusCode.unauth, Message.Blog.createdByID));
    }
    let condition = { createdById: mongoose.Types.ObjectId(req.body._id) };

    let data = await Blog.aggregate([
      { $match: condition },
      {
        $lookup: {
          from: "users",
          localField: "createdById",
          foreignField: "_id",
          as: "userData",
        },
      },
      { $unwind: { path: "$userData", preserveNullAndEmptyArrays: true } },

      {
        $project: {
          title: "$title",
          description: "$description",
          createdById: "$createdById",
          userInfo: {
            name: "$userData.name",
            work: "$userData.work",
            _id: "$userData._id",
            email: "$userData.email",
          },
        },
      },
    ]);
    let totalCount = await Blog.countDocuments(condition);

    console.log(data);
    if (data) {
      res.json(
        Response(
          constants.statusCode.ok,
          Message.Blog.successData,
          data,
          totalCount
        )
      );
    } else {
      res.json(
        Response(
          constants.statusCode.ok,
          Message.Blog.NoRecord,
          data,
          totalCount
        )
      );
    }
    console.log(data);
  })
);

module.exports = router;
