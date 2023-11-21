const express=require('express')
const Workout=require('../model/workOutModel')
const mongoose = require('mongoose')
const {getWorkout,getWorkouts,createWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutControllers')

const router =express.Router()

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports=router