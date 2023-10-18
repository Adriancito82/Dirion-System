const mongoose = require('mongoose')

const pcSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

const PcModel = mongoose.model('computer', pcSchema)

module.exports = PcModel
