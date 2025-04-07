let express=require("express")
let app=express()
let port=3000

app.get("/check_number",(req,res)=>{
    let number=parseFloat(req.query.number)
    let result=""
    if(number>=0){
        result="number is +v number"
    }else{
        result="number is nagative number"
    }
    res.send(result)
})

app.get("/check_even_odd", (req, res) => {
    let number1 = parseFloat(req.query.number1);
    let result1 = "";

    if (isNaN(number1)) {
        result1 = "Invalid input. Please provide a valid number.";
    } else if (number1 === 0) {
        result1 = "number is zero";
    } else if (number1 % 2 === 0) {
        result1 = "number is even";
    } else {
        result1 = "number is odd";
    }

    res.send(result1);
});

app.get("/check-login",(req,res)=>{
    let isloggedin=req.query.isloggedin==="true"
    let result2;
    if(isloggedin){
        result2="user is login"
    }else{
        result2="user is not login"
    }
    res.send(result2)
})
app.get("/check-discount",(req,res)=>{
    let age=parseInt(req.query.age)
    let result3;
    if(age>=65){
        result3="user eligibe for discount"
    }else{
        result3="user is not eligible for discounts"
    }
    res.send(result3)
})


app.get("/check-number-type",(req,res)=>{
    let number4=parseFloat(req.query.number4)
    let result4;
    if(isNaN(number4)){
        result4="invalid input ! , please provide the valid number"
    }else if(number4< 0){
        result4= "number is nagative number"
    }else if(number4>0){
        result4="number is posative number"
    }else{
        result4="zero"
    }
    res.send(result4)
})
app.get("/chcek_temp",(req,res)=>{
    let temperature=parseFloat(req.query.temperature)
    let result5;
    if(temperature<15){
        result5="cold"
    }else if(temperature<=25){
        result5="worm"
    }else{
        result5="hot"
    }
    res.send(result5)
})
app.get("/eligible-for-vote", (req, res) => {
    let age2 = parseInt(req.query.age);
    let result6;

    if (isNaN(age2)) {
        result6 = "Invalid input. Please provide a valid age.";
    } else if (age2 >= 18) {
        result6 = "You are eligible to vote.";
    } else {
        result6 = "You are not eligible to vote.";
    }
    res.send(result6);
});
app.get("/check-whole-number",(req,res)=>{
  let number_n=parseInt(req.query.number_n)
  let result7;
  if(number_n>=0){
    result7=" whole number"
  }else{
    result7=" not a whole number"
  }
  res.send(result7)
})

app.get("/check-equal",(req,res)=>{
    let num1=parseFloat(req.query.num1)
    let num2=parseFloat(req.query.num2)
    let result8;
    if(num1===num2){
        result8="equal"
    }else{
        result8="not equal"
    }
    res.send(result8)
})
app.listen(port,()=>{
    console.log("app is lission on 3000")
})