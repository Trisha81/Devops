const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

let tasks = [];
let id = 1;

/* POST - Create Task */
app.post("/tasks", (req, res) => {
    tasks.push({
        id: id++,
        title: req.body.title,
        status: "Pending"
    });
    res.redirect("/");
});

/* GET - All Tasks */
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

/* GET - Task by ID */
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    res.json(task);
});

/* PUT - Update Status */
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) task.status = req.body.status;
    res.redirect("/");
});

/* DELETE - Remove Task */
app.delete("/tasks/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.redirect("/");
});

/* Home Page GUI */
app.get("/", (req, res) => {
    let page = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>✨ Task Tracker</title>
        <style>
            body {
                font-family: Arial;
                background: linear-gradient(135deg, #667eea, #764ba2);
                text-align: center;
                padding: 40px;
                color: white;
            }
            .container {
                background: white;
                color: black;
                padding: 20px;
                border-radius: 15px;
                width: 500px;
                margin: auto;
                box-shadow: 0px 8px 20px rgba(0,0,0,0.3);
            }
            input {
                padding: 10px;
                width: 70%;
                border-radius: 8px;
                border: 1px solid gray;
            }
            button {
                padding: 8px 12px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                margin: 5px;
            }
            .add { background: #4CAF50; color: white; }
            .complete { background: #2196F3; color: white; }
            .delete { background: #f44336; color: white; }
            .task {
                margin-top: 15px;
                padding: 10px;
                background: #f2f2f2;
                border-radius: 8px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>📝 Task Tracker Application</h2>
            <form action="/tasks" method="POST">
                <input type="text" name="title" placeholder="Enter new task..." required>
                <button class="add">➕ Add</button>
            </form>
            <hr>
    `;

    tasks.forEach(task => {
        page += `
            <div class="task">
                <strong>${task.title}</strong> <br>
                Status: ${task.status === "Completed" ? "✅ Completed" : "⏳ Pending"}
                <br>
                <form style="display:inline" method="POST" action="/tasks/${task.id}?_method=PUT">
                    <input type="hidden" name="status" value="Completed">
                    <button class="complete">✔ Complete</button>
                </form>
                <form style="display:inline" method="POST" action="/tasks/${task.id}?_method=DELETE">
                    <button class="delete">🗑 Delete</button>
                </form>
            </div>
        `;
    });

    page += `
        </div>
    </body>
    </html>
    `;

    res.send(page);
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});