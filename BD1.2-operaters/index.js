let express= require("express")
let app= express()
let port=3000
app.get("/total-distance",(req,res)=>{
    let distance1=parseFloat(req.query.distance1)
    let distance2=parseFloat(req.query.distance2)
    let total_distance=distance1+distance2
    res.send(total_distance.toString())

})

app.get("/total-time",(req,res)=>{
    let time1=parseFloat(req.query.time1)
    let time2=parseFloat(req.query.time3)
    let time3=parseFloat(req.query.time3)
    let total_time=time1+time2+time3
    res.send(total_time.toString())
})
app.get("/avrage-speed",(req,res)=>{
    let totalDistance=parseFloat(req.query.totalDistance)
    let total_Time=parseFloat(res.query.total_Time)
    let avrage_speed=totalDistance/total_Time
    res.send(avrage_speed.toString())
})
app.get("/ETA",(req,res)=>{
    let distance=parseFloat(req.query.distance)
    let speed=parseFloat(req.query.speed)
    let eta=distance/speed
    res.send(eta.toString())
})
app.get("/total-calories",(req,res)=>{
    let duration1= parseFloat(req.query.duration1)
    let duration2= parseFloat(req.query.duration2)
    let caloriesPerMinute=parseFloat(req.query.caloriesPerMinute)
    let total_calories=(duration1+duration2)*caloriesPerMinute
    res.send(total_calories.toString())
})
app.get("/interest-earned",(req,res)=>{
    let principal=parseFloat(req.query.principal)
    let rate=parseFloat(req.query.rate)
    let time=parseFloat(req.query.time)
    let interest_earned=(principal*rate+time)/100
    res.send(interest_earned.toString())

})
app.listen(port,()=>{
    console.log("app is lission on 3000")
})