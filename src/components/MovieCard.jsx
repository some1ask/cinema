import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VscLoading } from 'react-icons/vsc'
import { AiOutlineHeart, AiFillHeart,AiFillStar} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, deleteFavorite } from '../store/favorites/favoritesSlice'
import {Comment}  from '../components/Comment'
import Video  from './Video'




function MovieCard() {
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        let tempData = {}
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d`)
            .then(data => data.json())
            .then(data => { 
                tempData = data;
                return  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d&language=en-US`)
            })
            .then(data=> data.json())
            .then(data=>{
                setMovie(Object.assign(tempData,data)); setIsLoaded(true)
            })
        checkFavorite(movie)
    }, [isLoaded]);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const stars = Math.floor(movie.vote_average)
    const checkFavorite = (movie) => {
        favorites.map(element => element.id === movie.id ? setIsFavorite(!isFavorite) : null)
    }
    console.log(movie)

    return (
        <div className='container mx-auto'>

            {!isLoaded ? <div className='flex justify-center pt-36 text-4xl'><VscLoading className='animate-spin' /></div> :
                <div className='flex flex-col'>
                    <div className='flex flex-col py-4'>
                    <h1 className="font-montserrat text-center text-4xl font-bold">{movie.title}</h1>
                    <div className='flex flex-row justify-center'>
                                <p className='italic text-xl text-black'>
                                    {`"${movie.tagline}"`}
                                </p>
                            </div>
                    </div>
                    <div className='flex  space-x-8 sm:space-x-2 sm:flex-col sm:justify-center flex-row'>
                        <div className='flex sm:justify-center'>
                        <img className="" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />

                        </div>
                        <div className='flex flex-1 flex-col space-y-4 py-4 sm:py-2 sm:px-0'>

                           
                            <div className='flex flex-row space-x-1'>
                                <p className='font-bold'>Genre:</p>
                                <div className='flex space-x-1 flex-wrap'>
                                    {movie.genres.map(element => {
                                        return <p key={element.id}>{element.name}</p>

                                    })}
                                </div>
                            </div>
                            <div className='flex'>
                                <p className='font-bold'>Budget: </p>
                                <p className='italic'>&nbsp;{movie.budget}$</p>
                            </div>
                            <div className='flex space-x-3'>
                            <div className='flex'>
                                {
                                 [...new Array(stars)].map((_,i)=><AiFillStar className='text-2xl text-yellow-300' key={i}/>)
                                }
                            </div>
                            <div >{movie.vote_average}</div>
                            </div>
                            <div className='flex'>
                                {movie.overview}
                            </div>
                            <div className='flex'>
                                {
                                    !isFavorite ? <AiOutlineHeart className='text-4xl' onClick={() => {
                                        dispatch(addFavorite(movie)); setIsFavorite(!isFavorite)
                                    }
                                    } />
                                        : <AiFillHeart className='text-4xl text-red-600' onClick={() => { dispatch(deleteFavorite(movie)); setIsFavorite(!isFavorite) }} />
                                }

                            </div>
                            
                        </div>
                    </div>
                    <div className='flex pt-4'>
                                <Video data={movie.results[0]}></Video>
                    </div>
                    <div className='flex'>
                        <Comment/>
                    </div>
                </div>}


        </div>
    );
}
export default MovieCard;
