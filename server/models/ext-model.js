const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ext = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('ext', Ext)
