const express = require('express');
const router = require.express();
const Movies = require('../models/movModel');

router.get("/", (req,res)=>{
    res.render('homePage');
})

router.post("/addMovies", async (req,res) => {
    const { title,genre,description,year,rating,episodes,language,cast } = req.body;
    const data = await Movies.create(
        {
            movie_title : title,
            movie_description : description,
            movie_genre : genre,
            release_year : year,
            movie_rating : rating,
            movie_language : language,
            movie_cast : cast
        }
    )
    res.render("movieList",{data})
})

router.get('/movieList', async (req,res) => {
    const value = await Movies.find();
    res.render('movieList',{value})
})

module.exports=router;