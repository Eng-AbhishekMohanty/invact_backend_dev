let express =require ("express")
let app=express()
let port=3000
app.get("/name",(req,res)=>{
let myName=(req.query.name).toLocaleUpperCase()
console.log(myName)
res.send(myName)
})
app.get("/fullName",(req,res)=>{
let firstName=req.query.firstName
let lastName=req.query.lastName
let fullName=firstName+" " +lastName
console.log(firstName)
console.log(lastName)
res.send(fullName)
})
app.get("/date",(req,res)=>{
    let month=req.query.month
    let year= req.query.year
    let date=month+", "+year
    res.send(date)
})

app.get("/greet",(req,res)=>{
    let name=req.query.name
    let greet= "welcome ," +name
    res.send(greet)
})

app.get("/adress",(req,res)=>{
    let strit=req.query.strit
    let city=req.query.city
    let state=req.query.state
    let address= strit +","+ city+"," +state
    res.send(address)
})
app.get("email",(req,res)=>{
    let name=req.query.name
    let doman =req.res.doman
    let email=name +"@"+doman
    res.send(email)
})
app.get("/shout",(req,res)=>{
    let name=req.query.name
    let upercase=name.toUpperCase()
    res.send(upercase)
})
app.get("/whisper",(req,res)=>{
    let name=req.query.name
    let lowercase=name.toLowerCase()
    res.send(lowercase)
})
app.get("/fullproductName",(req,res)=>{
    let companyName=req.query.companyName
    let productName=req.query.productName
    let result=companyName +" " +productName
    res.send(result)
})
app.get("/dateandyear",(req,res)=>{
   
    let month=req.query.month
    let year=req.query.year
    let fulldate=month+"/"+year
    res.send(fulldate)
})
app.get("/welcome",(req,res)=>{
    let city=req.query.city
    let welcomeMassage= "welcome to my page ,you are leaves in "+city
    res.send(welcomeMassage)
})

app.get("/capital",(req,res)=>{
    let capital=req.query.capital
    let country=req.query.country
    let countryCapital=capital +" " +"is the capital of "+country
    res.send(countryCapital)
})
app.get("/email", (req, res) => {
    let { name1st, name2nd, domain } = req.query;

    // Validate input
    if (!name1st || !name2nd || !domain) {
        return res.status(400).send("Please provide name1st, name2nd, and domain.");
    }

    // Convert entire input to lowercase first
    name1st = name1st.toLowerCase();
    name2nd = name2nd.toLowerCase();
    domain = domain.toLowerCase();

    // Ensure only the first letter is lowercase while keeping the rest as is
    let formattedName1 = name1st.charAt(0).toLowerCase() + name1st.slice(1);
    let formattedName2 = name2nd.charAt(0).toLowerCase() + name2nd.slice(1);

    // Construct the email
    let officeEmail = `${formattedName1}.${formattedName2}@${domain}`;

    res.send(officeEmail);
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

