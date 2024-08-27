const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    holdings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Holding',
            default:[]
        }
    ],
    positions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Position',
            default:[]
        }
    ],
    accountBalance: { type: Number, default: 0 }
})

const User = mongoose.model("User", userSchema);

module.exports = User;