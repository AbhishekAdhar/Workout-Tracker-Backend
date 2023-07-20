require('dotenv').config()
//frCZeODOw3Tx9P5B
const express = require('express')  //creating express in the app
const mongoose = require('mongoose')
const workoutsRoutes = require('./routes/workouts')

const app = express() //start express app

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// route handler to react to request
app.use('/api/workouts',workoutsRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    //listen for request
    app.listen(process.env.PORT,()=>{
    console.log("Connected to DB and Listening on port 4000") //install nodemon for saving changes on refresh
})
}).catch((error)=>{
    console.log(error)
})

