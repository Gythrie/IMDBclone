import React from 'react'

function MovieCard({movieObj,poster_path,name,handleAddtoWatchList, handleRemovefromWatchList,watchlist}) {
  
    function doesContain(movieObj){
      for(let i=0; i<watchlist.length;i++){
        if(watchlist[i].id==movieObj.id){
          return true
        }
      }
      return false
    }
  
  return (
    <div
      className='relative flex flex-col mb-10 h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-200 hover:cursor-pointer'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      { doesContain(movieObj)?
      <div className='flex justify-end'>
      <div onClick={()=>{handleRemovefromWatchList(movieObj)}} className='w-7 h-7 m-4 bg-gray-900/60 flex justify-center items-center rounded border-l hover-cursor' >&#10060;</div>
      </div>:
      
      <div className='flex justify-end'>
      <div onClick={()=>{handleAddtoWatchList(movieObj)}} className='w-7 h-7 m-4 bg-gray-900/60 flex justify-center items-center rounded border-l hover-cursor'>
        &#128525;
      </div>
      </div>
      }
      <div className="absolute bottom-0 w-full text-white text-xl p-2 text-center bg-gray-900 bg-opacity-70 rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard

// &#128525