import {Link } from 'react-router-dom'
import React from 'react'


function CinemaCard({movie}) {
   
    return (
    

    <div className="movie rounded-lg my-8 shadow-xl">
        <Link to={`movie/${movie.id}`} >
       
        <div className="movie-info flex flex-col justify-between ">
            <img  className="movie-poster rounded-lg rounded-b-none " src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}></img>
            <h1 className="pt-2 h-16 rounded-lg text-white font-montserrat  bg-black rounded-t-none content-center">{movie.title}</h1>
        </div>
        </Link>
        
    </div>
    ) 
}

export default CinemaCard;