const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
},{timestamps: true})

// Schema defines structure/blueprint of Document or type of document in DB
// Module applies the schema

module.exports = mongoose.model('Workout', workoutSchema)