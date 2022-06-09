import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import {VscLoading} from 'react-icons/vsc'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useDispatch,useStore } from 'react-redux'




function MovieCard() {
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFavorite,setIsFavorite] = useState(false);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d`)
            .then(data => data.json())
            .then(data => {setMovie(data);setIsLoaded(true)})

            checkFavorite(movie)

    }, [isLoaded]);
    const dispatch = useDispatch();
    const store = useStore();

    const checkFavorite = (movie) =>{
        store.getState().movies.map(element => element.id === movie.id ? setIsFavorite(!isFavorite) : null)
    }

    
    return (
        <div className='container border border-black mx-auto'>
            <Link to="/">
                <IoIosArrowBack className='text-4xl absolute top-20 left-4' />
            </Link>
           
            {!isLoaded ?  <div className='flex justify-center pt-36 text-4xl'><VscLoading className='animate-spin'/></div>  :
                <>
                    <h1 className="py-4 font-montserrat text-center text-4xl font-bold">{movie.title}</h1>
                    <div className='flex border border-black space-x-8'>
                        <img className="rounded-lg w-80" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='flex flex-col space-y-4 py-4'>

                            <div className='flex flex-row'>
                                <p className='italic text-xl text-black'>
                                    {`"${movie.tagline}"`}
                                </p>
                            </div>
                            <div className='flex flex-row space-x-1'>
                                <p className='font-bold'>Genre:</p>
                                <div className='flex space-x-1 flex-wrap'>
                                {movie.genres.map(element => {
                                    return <p key={element.id}>{element.name}</p>
                                
                                })}
                                </div>
                            </div>
                            <div className='flex'>
                                {
                                    !isFavorite ?  <AiOutlineHeart className='text-4xl' onClick={()=>{
                                        dispatch({type:'ADD_MOVIE',payload:movie}); setIsFavorite(!isFavorite)}
                                        }/>
                                        : <AiFillHeart className='text-4xl text-red-600' onClick={()=>{dispatch({type:'REMOVE_MOVIE',payload:movie});setIsFavorite(!isFavorite)}}/>
                                }
                               
                            </div>

                        </div>
                    </div>
                </>}


        </div>
    );
}
export default MovieCard;
