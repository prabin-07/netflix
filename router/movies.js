const express = require('express');
const router = express.Router();
const Movies = require('../models/movModel');
const multer = require('multer')

const files = multer({dest:'uploads/'})

router.get("/", async (req,res)=>{
    const movies = await Movies.find();
    res.render('homePage',{movies});
})

router.get("/addMovies", (req,res)=>{
    res.render('addMovies');
})

router.post("/addMovies",files.single('moviePost') ,async (req,res) => {
    const { title,genre,description,year,rating,language,cast,moviePost } = req.body;
    const data = await Movies.create(
        {
            movie_title : title,
            movie_description : description,
            movie_genre : genre,
            release_year : year,
            movie_rating : rating,
            movie_language : language,
            movie_cast : cast,
            movie_poster : moviePost
        }
    )
    res.render("movieList",{data})
})

router.get('/movieList', async (req,res) => {
    const value = await Movies.find();
    res.render('movieList',{value})
})

router.get('/:id', async (req,res) => {
    const mov = await Movies.findById(req.params.id)
    res.render('movieList',{mov})
})

module.exports=router;