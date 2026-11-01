const mongoose = require('mongoose')
const movieSchema = mongoose.Schema(
    {
        movie_title : String,
        description : String,
        movie_genre : String,
        release_year : Date,
        rating : Number,
        episodes : Number,
        language : String,
        cast : String
    }
)

module.exports = mongoose.model('Movies',movieSchema)