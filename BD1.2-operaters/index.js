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
//-----------------------------------------------
app.get("/total-marks", (req, res) => {
    let marks1 = parseFloat(req.query.marks1) || 0;
    let marks2 = parseFloat(req.query.marks2) || 0;
    let total_marks = marks1 + marks2;
    res.send(total_marks.toString());
});

app.get("/total_weight",(req,res)=>{
    let weight1=parseFloat(req.query.weight1)
    let weight2=parseFloat(req.query.weight2)
    let weight3=parseFloat(req.query.weight3)
    let total_weight=(weight1+weight2+weight3)
    res.send(total_weight.toString())

})
app.get("/monthly-salary",(req,res)=>{
    let annualSalary=parseFloat(req.query.annualSalary)
    let monthlySalary= annualSalary/12
    res.send(monthlySalary.toString())
})
app.get("/total-pages",(req,res)=>{
    let pagesPerDay=parseFloat(req.query.pagesPerDay)
    let days=parseFloat(req.query.days)
    let total_pages=pagesPerDay*days
    res.send(total_pages.toString())

})

app.get("/crrency-conversion",(req,res)=>{
    let amount=parseFloat(req.query.amount)
    let exchangeRate=parseFloat(req.query.exchangeRate)

    if (isNaN(amount) || isNaN(exchangeRate)) {
        return res.status(400).json({ error: "Invalid amount or exchange rate" });
    }
    let converted_amount=amount*exchangeRate
    res.send(converted_amount.toString())
})

app.get("/average-sales",(req,res)=>{
    let sales1=parseFloat(req.query.sales1)
    let sales2=parseFloat(req.query.sales2)
    let sales3=parseFloat(req.query.sales3)
    let avrage_sales=(sales1+sales2+sales3)/3
    res.send(avrage_sales.toString())
})

app.get("/bmi",(req,res)=>{
    let height=parseFloat(req.query.height)
    let weight_body=parseFloat(req.query.weight_body)
    let bmi=(weight_body/(height*height))
    res.send(bmi.toString())
})
app.get("/chcekout",(req,res)=>{
    let product=req.query.product
    let units=parseFloat(req.query.units)
    let price=parseFloat(req.query.price)
    let total_price=units*price
    let massage="congratulation you add "+units+" " +product+" total price is "+ total_price 
    res.send(massage.toString())
})
app.get("/percentage",(req,res)=>{
    let math=parseFloat(req.query.math)
    let english=parseFloat(req.query.english)
    let science=parseFloat(req.query.science)
    let gread=(math+english+science)/300*100
    res.send(gread.toString())
})
app.get("/discounted-price",(req,res)=>{
    let cardTotal=parseFloat(req.query.cardTotal)
    let discount =parseFloat(req.query.discount)
    let total_cart=cardTotal*(discount/100)
    res.send(total_cart.toString())
})
app.get("/split-bill",(req,res)=>{
    let billAmount=parseFloat(req.query.billAmount)
    let numberOfFriends=parseFloat(req.query.numberOfFriends)
    let each_friend_have_to_pay=billAmount/numberOfFriends
    res.send(each_friend_have_to_pay.toString())
})
app.get("/celsius-to-fahrenheit",(req,res)=>{
    let temperature=parseFloat(req.query.temperature)
    let fahrenheit = temperature * 9/5 + 32
    res.send(fahrenheit.toString())
})

app.get("/monthly-salarys",(req,res)=>{
    console.log("satart")
    let totalHours=parseFloat(req.query.totalHours)
    let hourlyWage=parseFloat(req.query.hourlyWage)
    let monthlySalary = hourlyWage*totalHours
    res.send(monthlySalary.toString())
})
app.listen(port,()=>{
    console.log("app is lission on 3000")
})