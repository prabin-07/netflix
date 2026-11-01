const express = require('express');
const router = express.Router();
const Movies = require('../models/movModel');

router.get("/", (req,res)=>{
    res.redirect('/Movies');
})

router.post("/addMovies", async (req,res) => {
    const { title,genre,description,year,rating,language,cast } = req.body;
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
    res.redirect('/Movies/movieList')
})

router.get('/movieList', async (req,res) => {
    const value = await Movies.find();
    res.render('movieList',{value})
})

module.exports=router;