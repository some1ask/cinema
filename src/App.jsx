
import React, { useState, useEffect } from 'react';


import './App.css';
import CinemaCard from './components/CinemaCard';
import Pagination from './components/Pagination';
import { SearchBar } from './components/SearchBar';
import Skeleton from './components/Skeleton';





function App() {
  const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [movies,setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


const request = `https://api.themoviedb.org/3/discover/movie?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`


  const getMovies = async() =>{
    await fetch(request)
      .then(data => data.json())
      .then(result => {
        setMovies(result.results)
        setIsLoaded(true)
      })
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
      <div className='flex px-10 flex-wrap lg:justify-between justify-center '>
        {
          !isLoaded ? (
            [...new Array(20)].map((_,index)=><Skeleton key={index}/>)
          ) : (
            filteredMovies.map((movie,index)=>{
              return (
                     <CinemaCard key={index} movie={movie}/>
              )
            })
          )
        }
      </div>
      <Pagination setPage={setPage}/>
    </div>
  );
}

export default App;
