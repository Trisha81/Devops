import React from "react"
import {useNavigate} from "react-router-dom"

function Navbar(){

const navigate = useNavigate()

const logout = ()=>{
navigate("/")
}

return(

<div className="navbar">

<h2>Smart Traffic Dashboard</h2>

<div className="menu">

<p>Dashboard</p>
<p>Sensors</p>
<p>Analytics</p>
<p onClick={logout}>Logout</p>

</div>

</div>

)

}

export default Navbar