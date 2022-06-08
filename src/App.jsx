
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CinemaCard from './components/CinemaCard';
import Pagination from './components/Pagination';
import { SearchBar } from './components/SearchBar';





function App() {
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");
  // let movies = useSelector(state => state.movies);
  const [movies,setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


const request = `https://api.themoviedb.org/3/discover/movie?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`


  const getMovies = () =>{
    fetch(request)
      .then(data => data.json())
      .then(result => {
        // dispatch({ type: 'SET_MOVIES', payload: result.results })
        setMovies(result.results)
      })
      .then(setIsLoaded(true))
  }
  useEffect(() => {
    getMovies();
  }, [isLoaded,page])

  const filteredMovies = movies.filter(movie=>{
    return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <div className="App">
     <SearchBar setSearch={setSearch}/>
      <div className='flex px-10 flex-wrap justify-between'>
        {
          filteredMovies.map((movie,index)=>{
            return (
                   <CinemaCard key={index} movie={movie}/>
            )
          })
        }
      </div>
      <Pagination setPage={setPage}/>
    </div>
  );
}

export default App;
