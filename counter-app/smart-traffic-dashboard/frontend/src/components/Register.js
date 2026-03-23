import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../App.css"

function Register(){

const navigate = useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const register = async()=>{

await axios.post("http://localhost:5000/register",{
email,
password
})

alert("Account created")

navigate("/")

}

return(

<div className="login-page">

<h2>Create Account</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={register}>Register</button>

</div>

)

}

export default Register