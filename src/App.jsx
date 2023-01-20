import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Favorites, Home, Login, NewDetail } from './pages'
import { LogingScreen, NavBar } from './components'
import { useSelector } from 'react-redux'


function App() {
  const isLoading=useSelector(state=>state.isLoading)
 
  return (
    
      <HashRouter>
        <NavBar/>
        {isLoading &&<LogingScreen/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new/:id'element={<NewDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          
            <Route path='/favorite' element={<Favorites/>}/>
          
          
        </Routes>
      </HashRouter>
   
  )
}

export default App
