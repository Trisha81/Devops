import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../App.css"

function Login(){

const navigate = useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const login = async()=>{

const res = await axios.post("http://localhost:5000/login",{
email,
password
})

if(res.data==="success"){
navigate("/dashboard")
}else{
alert("Invalid login")
}

}

return(

<div className="login-page">

<h2>Smart Traffic System</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={login}>Login</button>

<p onClick={()=>navigate("/register")}>
Create Account
</p>

</div>

)

}

export default Login