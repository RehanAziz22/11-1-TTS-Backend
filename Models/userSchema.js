const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

const userModel = new mongoose.model('user',userSchema)
module.exports = userModel
