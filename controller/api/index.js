const router=require("express").Router();

const Workout = require('../../models/Workout')


router.get("/workouts/", async (req,res)=>{
    let workouts = await Workout.find()
    res.json(workouts)

})


router.put("/workouts/:id", async (req,res)=>{
    let workout = await Workout.findById(
        req.params.id
    )
    console.log(req.body)
    workout.exercises.push(req.body)
    workout.save();
    
    res.json(workout)

})

router.post("/workouts", async (req,res)=>{
    let newWorkout = await Workout.create({
        day: new Date(new Date().setDate(new Date().getDate())),
        exercises: [
          
        ],
      },)
      res.send(newWorkout)
})

router.get("/workouts/range", async(req,res)=>{
   let workouts = await Workout.find()
   let workouts7 = workouts.slice(-7)
   console.log(workouts)
    res.send(workouts7)
} )




module.exports = router;
