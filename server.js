const express = require('express')
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')

require('dotenv').config()
const mongoose = require('mongoose')
const Workout=require('./model/workOutModel')
const cors=require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/workouts', workoutRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.mongo_url).then(() => {

    
    app.listen(process.env.PORT, () => {
        console.log(`done! ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})

