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

exports.eventValidation = joi.object({
  bannerImage: joi.string().optional(),
  brandLogo: joi.string().optional(),
  currency: joi.string().optional(),

  name: joi
    .string()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.nameRq}` }),
  description: joi
    .string()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.descriptionRq}` }),
  visibility: joi
    .string()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.VisibilityRq}` }),
  startDate: joi
    .date()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.startDateRq}` }),
  endDate: joi
    .date()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.endDateRq}` }),
  speaker: joi
    .string()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.Speaker}` }),
  timezoneId: joi
    .string()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.timezoneId}` }),
  eventMode: joi
    .string()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.eventModeRreq}` }),
  address: joi
    .string()
    .allow("")
    .when("eventMode", { is: "offline", then: joi.required().allow('') }),
    venue: joi
    .string()
    .when("eventMode", { is: "offline", then: joi.required().allow('') }),
    broadcast: joi
    .object()
    .when("eventMode", { is: "online", then: joi.required() }),
    createdById:joi.required(),
    lat:joi.number().when("eventMode", { is: "offline", then: joi.required() }),
    lng:joi.number().when("eventMode", { is: "offline", then: joi.required() }),

  eventFee: joi
    .number()
    .required()
    .messages({ "any.required": `${errormsg.eventMsg.eventFee}` }),
});
