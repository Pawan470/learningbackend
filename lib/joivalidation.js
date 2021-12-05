const joi = require("joi"),
errormsg = require("./errormsg");

exports.groupValidation = joi.object({

    title: joi
      .string()
      .required()
      .messages({ "any.required": `${errormsg.Blog.title}` }),
  
      description: joi
      .string()
      .required()
      .messages({ "any.required": `${errormsg.Blog.description}` }),
      createdById: joi
      .string()
      .required()
      .messages({ "any.required": `${errormsg.Blog.createdById}` }),
      
  });

  exports.sendInviteValidation = joi.object({
    invitedTo: joi
      .string()
      .required()
      .messages({ "any.required": `${errormsg.Blog.createdById}` }),
  
    invitedBy: joi
      .string()
      .required()
      .messages({ "any.required": `${errormsg.Blog.createdById}` }),
  });