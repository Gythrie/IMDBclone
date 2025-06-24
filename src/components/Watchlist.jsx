import React from 'react'
import {useState,useEffect} from 'react'
import genreids from '../utility/genre'

function watchlist({watchlist, setWatchList, handleRemovefromWatchList}) {

  const [search , setSearch] = useState('')
  const [genreList, setGenreList]= useState(['All Genres'])
  const [currGenre, setCurrGenre]=useState('All Genres')


  let handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  let handleFilter=(genre)=>{
    setCurrGenre(genre)
  }

  let sortIncreasing =()=>{
    let sortedIncreasing = watchlist.sort((movieA ,movieB)=>{
      return movieA.vote_average - movieB.vote_average 
    })

    setWatchList([...sortedIncreasing])
  }

  let sortDecreasing =()=>{
    let sortedDecreasing = watchlist.sort((movieA ,movieB)=>{
      return movieB.vote_average - movieA.vote_average 
    })

    setWatchList ([...sortedDecreasing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = Array.from(new Set(temp));      //remove duplicates
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  },[watchlist])

  return (
    
<>
    <div className ='hover:cursor-pointer flex justify-center flex-wrap m-5'>
      {genreList.map((genre)=>{
        return <div key={genre} onClick={()=>handleFilter(genre)} className={ currGenre==genre? 'flex justify-center h-[3rem] w-[9rem] bg-blue-300 rounded-xl text-white font-bold items-center m-2.5':'flex justify-center h-[3rem] w-[9rem] bg-gray-300 rounded-xl text-white flont-bold items-center m-2.5'}>{genre}</div>
      })}
            </div>

{/* search */}
    <div className='flex justify-center mt-8'>
      <input onChange={handleSearch} value={search} type="text" placeholder="Search Movies" className=" h-[3rem] w-[18rem] bg-gray-200 rounded px-4 py-2 w-1/2"/>
    </div>


    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2 hover:cursor-pointer'><i className="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Rating</div>
                <div onClick={sortDecreasing} className='p-2 hover:cursor-pointer'><i className="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>


            {
              watchlist
              .filter((movie) => {
                return (
                  (currGenre === 'All Genres' || genreids[movie.genre_ids[0]] === currGenre) &&
                  movie.title.toLowerCase().includes(search.toLowerCase())
                );
              }).map((movieObj)=>{
              return (
                <tr key={movieObj.id} className='border-b-2'>
                <td className = 'flex items-center px-6 py-4'>
                  <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} className='h-[6rem] w-[10rem]'></img>
                  <div className='mx-10'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>handleRemovefromWatchList(movieObj)} className='text-red-500 font-bold hover:cursor-pointer'>Delete</td>
              </tr>)
              })
            }
              
              
          </tbody>
        </table>
    </div>
    </>
   
  );
}

export default watchlist;