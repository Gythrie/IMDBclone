import React from 'react'

function Banner() {
  return (
    <div className='h-[50vh] md:h-[80vh] bg-cover bg-center flex flex-col justify-end' style={{backgroundImage : 'url(https://i.ebayimg.com/images/g/6hIAAOSwv9ZczOzP/s-l1600.webp)'}}>
        <div className = ' text-white text-2xl text-center w-full bg-gray-900/60 p-4'>Avengers End Game</div>
    </div>
  )
}

export default Banner