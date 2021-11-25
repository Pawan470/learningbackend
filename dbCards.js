const mongoose  = require('mongoose'); 

const cardSchema = mongoose.Schema({
     name:String,
     imgUrl:String
})

// Collection name
module.exports =  mongoose.model('cards',cardSchema) 