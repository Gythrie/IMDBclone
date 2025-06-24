import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Banner from './components/Banner';
import {HashRouter, Routes , Route} from 'react-router-dom';


function App() {

  let [watchlist , setWatchList]=useState([])

  let handleAddtoWatchList=(movieObj)=>{
      let newWatchList =[...watchlist,movieObj]
      localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemovefromWatchList=(movieObj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id !=movieObj.id
    })
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList)
  }


  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if(moviesFromLocalStorage){
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
    
  },[]);

return (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<><Banner /><Movies handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} watchlist={watchlist}/></>} />
     <Route path='/Movies' element={<><Banner /><Movies handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} watchlist={watchlist}/></>}/>
      <Route path='/Watchlist' element={<><Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemovefromWatchList={handleRemovefromWatchList}/></>}/>
      
    </Routes>
  </HashRouter>
);

}

export default App
