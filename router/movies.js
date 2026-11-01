const express = require('express')
const app = require.express()
const Movies = require('../models/movModel')

router.get("/", (req,res)=>{
    res.render('homePage');
})



router.get('/')