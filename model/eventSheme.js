'use strict'

const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    endDate: { type: Date, default: null }, 
    startDate: { type: Date, default: null }, 
    isActive: { type: Boolean, default: true },
    description: { type: String, default: null },
    eventMode: { type: String, enum: ['online', 'offline'] },
    timezoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'timezones' },
    createdById: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    eventFee :{type:Number,default:0},   

    // Images and logo
    brandLogo: { type: String, default: null },
    bannerImage: { type: String, default: null },
    
    // If event is offline then it must have location
    location: { type: { type: String, default: 'Point', enum: ['Point'] }, coordinates: [Number] },
    venue: { type: String, default: null },
    address: { type: String, default: null },
    
    
    visibility: { type: String, enum: ['Public', 'Private'], default: null },
    speaker: { type: String, default: null },
    broadcast: { link: { type: String, default: null }
    
  },
  },
  {
    timestamps: true,
  }
)

var Event = mongoose.model('event', eventSchema)
module.exports = Event
