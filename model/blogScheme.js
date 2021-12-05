const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

const blogSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    createdById: { type: mongoose.Schema.Types.ObjectId, required: true  },
    // createdById:{ type: mongoose.Schema.ObjectId, required: true},
    isActive:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },

})
 
const Blog = mongoose.model('BLOG',blogSchema)
module.exports = Blog