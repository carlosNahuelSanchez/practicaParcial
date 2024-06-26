const express = require('express');
const router = require('./routes/app.routes');
app = express()
alumnos = require("./database")


app.use(express.json())

app.use("/", router)

app.listen(3000, ()=>{console.log("Server running")})