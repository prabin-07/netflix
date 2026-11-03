const express = require('express')
const app = express()
const mongoose = require('mongoose')
const movieRouter = require('./router/movies')

app.set("view engine", "hbs")
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use("/", movieRouter)
app.use("/Movies", movieRouter)


mongoose.connect("mongodb://localhost:27017/Movies").then(()=> 
    console.log("connected")).catch(()=>
    console.log("error occured"));


app.listen(3000, ()=> {
    console.log('listening. http://localhost:3000/')
})
