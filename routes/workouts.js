const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// Get all workouts
router.get('/', (req, res)=>{
    res.json({mssg:'Get all workouts'})
})

// Get single workout
router.get('/:id', (res, req) => {
    res.json({mssg: 'Get a single workout'})
})

// Post a new workout
router.post('/', (req,res) => {
    const {title, load, reps} = req.body

    try {
        const workout = Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'Post a new workout'})
})

// Delete a new workout
router.delete('/', (req,res) => {
    res.json({mssg: 'Delete anew workout'})
})

// Update a new workout
router.patch('/', (req,res) => {
    res.json({mssg: 'Update anew workout'})
})

module.exports = router