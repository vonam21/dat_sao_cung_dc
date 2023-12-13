const express=require("express")
const { PORT } = require("./config")
const app=express()
const nam = 3.14
app.listen(PORT,(req,res)=>{
    console.log("nay la code web cua nam")
    console.log(`Port is ${PORT}`)
    console.log(`Port is ${PORT}`)
})
app.get("/",(req,res)=>{
    res.send("welcome back my channel1131321312")
})
app.get("/user/:id",(req,res)=>{
    const id=req.params.id
    res.send(`Nam is ${nam} ${id}`);
})




