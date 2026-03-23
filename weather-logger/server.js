const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const FILE = "weather.json";

// POST /weather
app.post("/weather", (req, res) => {
    const { temperature, humidity, pressure, date } = req.body;

    let data = JSON.parse(fs.readFileSync(FILE));
    
    const newEntry = {
        temperature,
        humidity,
        pressure,
        date
    };

    data.push(newEntry);

    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

    res.send("Weather Data Saved Successfully");
});

// GET /weather
app.get("/weather", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    res.json(data);
});

// GET /weather/data?date=YYYY-MM-DD
app.get("/weather/data", (req, res) => {
    const date = req.query.date;
    const data = JSON.parse(fs.readFileSync(FILE));

    const filtered = data.filter(entry => entry.date === date);

    res.json(filtered);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});