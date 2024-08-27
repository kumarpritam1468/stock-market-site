const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }
});

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;