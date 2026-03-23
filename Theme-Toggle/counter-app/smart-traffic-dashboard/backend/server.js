const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const User = require("./models/User")

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/trafficDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.get("/",(req,res)=>{
res.send("Smart Traffic Backend Running")
})

app.post("/register",async(req,res)=>{

const user = new User({
email:req.body.email,
password:req.body.password
})

await user.save()

res.send("user created")

})

app.post("/login",async(req,res)=>{

const user = await User.findOne({email:req.body.email})

if(user && user.password===req.body.password){
res.send("success")
}else{
res.send("fail")
}

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})