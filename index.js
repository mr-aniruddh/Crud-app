// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const UserModel = require('./models/Users')
//  const  Users  = require('../vite-project/src/Users')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/crud")
// console.log("DATA BASE IS CONNECTED");

// app.post("/createUser", (req, res) => {
//     UserModel.create(req.body)
//     .then(Users => res.json(Users))
//     .catch(err => res.json(err))
// })
// app.listen(3001, () => {
//     console.log("Server is Running")
// })

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users'); // Correct path

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DATABASE IS CONNECTED"))
.catch(err => console.error("DATABASE CONNECTION ERROR:", err));

app.post("/createUser", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => {
    console.log("Server is Running on port 3001");
});
