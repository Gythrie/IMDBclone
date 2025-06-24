import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import axios from 'axios';


function Movies({handleAddtoWatchList, handleRemovefromWatchList,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo == 1){
      setPageNo(pageNo)
    }
    else{setPageNo(pageNo-1)}
  }
  const handleNext =()=>{
    setPageNo(pageNo+1)
  }

  const handleAddToWatchList = (movieObj) => {
  console.log("Added to watchlist:", movieObj.title);
  // TODO: add logic to store in state or localStorage
};

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=263aac374353413679735cff8571c10b&language=en-US&page=${pageNo}`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results); 
      })
      
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">
        <h2>Trending Movies</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movieObj) => (
          <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name = {movieObj.original_title } handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} watchlist={watchlist}/>
        ))}
      </div>
      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
    </div>

    
  );
}



export default Movies;


// https://api.themoviedb.org/3/movie/popular?api_key=263aac374353413679735cff8571c10b&language=en-US&page=2