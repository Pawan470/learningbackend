const express = require("express");
const router = express.Router();
require("../server");
const Event = require("../model/eventSheme");
const constants = require("../lib/constants");
const Response = require("../lib/Response");
const Message = require("../lib/errormsg");
const catchAsync = require("../lib/catchAsync");
mongoose = require("mongoose");
let { eventValidation } = require("../lib/joivalidation");

// Add Event
router.post(
  "/event/add",
  catchAsync(async (req, res) => {
    await eventValidation.validateAsync(req.body);
    req.body.isActive = true
    if (req.body.endDate <= req.body.startDate)
      return res.json(
        Response(constants.statusCode.unauth, constants.eventMsg.endTime)
      );

    const eventExit = await Event.find({
      name: req.body.name,
      createdById: req.body.createdById,
    });

    if (eventExit.length) {
      return res.json(
        Response(constants.statusCode.unauth, Message.eventMsg.alreadyExist)
      );
    }
    if (req.body.eventMode === "offline") {
      req.body.location = { coordinates: [req.body.lng, req.body.lat] };
    }
    let eventSaveInfo = await Event.create(req.body);
    if (eventSaveInfo)
      return res.json(
        Response(constants.statusCode.ok, Message.eventMsg.eventSuccess)
      );
  })
);


router.post(
    "/event/list",
    catchAsync(async (req, res) => {
        if(!req.createdById){
            return res.json(
                Response(constants.statusCode.unauth, Message.eventMsg.createdByID)
              );
        } 
     
    })
  );
  
module.exports = router;
