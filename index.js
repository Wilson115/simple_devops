require("dotenv").config();
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('change from Simple DevOps')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})
