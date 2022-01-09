"use strict";

const mongoose = require("mongoose");
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema(
  {
    email: { type: String, lowercase: true, default: "" },
    password: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    personName: { type: String, default: null },
    mobileNumber: { type: String, default: null },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false},
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Roles" },
    isAccepted: {
      type: String,
      enum: ["pending", "accept", "decline"],
      default: "pending",
    },
    gender: { type: String, enum: ["male", "female"] },
    invitedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    address: { type: String, default: null },
    city: { type: String, default: null },
    state: { type: mongoose.Schema.Types.ObjectId, ref: "State" },
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
    postalCode: { type: String, default: null },
    image: { type: String, default: null },
    token: { type: String },
    deviceType: { type: String, default: "web" }, // web,android,iphone
    deviceId: { type: String },
    resetkey: { type: String, default: null },
    timezone: { type: mongoose.Schema.Types.ObjectId, ref: "timezone" },
    createdById: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    accessLevel :{ type:String,default:'COMPANY'},
    otp:{ type:String,default:'0'},
    otpGenerationDate:{type:Date,default:null},
    progressBar:{type:Number,default:0}
    
  },
  {
    timestamps: true,
  }
);



var User = mongoose.model("user", userSchema);
module.exports = User;
