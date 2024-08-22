const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    percentChange:{
        type:Number,
        required:true
    },
    isDown:{
        type:Boolean,
        required:true
    }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;