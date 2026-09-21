const express = require('express')

const app= express()

app.get('/welcome',(req,res) => {
    res.send("welcome belcome")
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`listening to the PORT ${PORT}`)
})