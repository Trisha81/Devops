import React from "react"
import Navbar from "./Navbar"
import "../App.css"

function Dashboard(){

return(

<div>

<Navbar/>

<div className="stats">

<div className="stat-card">
<h3>Total Vehicles</h3>
<p>340</p>
</div>

<div className="stat-card">
<h3>Active Sensors</h3>
<p>12</p>
</div>

<div className="stat-card">
<h3>Traffic Alerts</h3>
<p>3</p>
</div>

</div>

<div className="dashboard">

<div className="card red">
<h3>Lane 1</h3>
<p>Vehicles: 120</p>
<p>Heavy Traffic</p>
</div>

<div className="card yellow">
<h3>Lane 2</h3>
<p>Vehicles: 75</p>
<p>Medium Traffic</p>
</div>

<div className="card green">
<h3>Lane 3</h3>
<p>Vehicles: 25</p>
<p>Low Traffic</p>
</div>

<div className="card blue">
<h3>Lane 4</h3>
<p>Vehicles: 50</p>
<p>Normal Traffic</p>
</div>

</div>

</div>

)

}

export default Dashboard