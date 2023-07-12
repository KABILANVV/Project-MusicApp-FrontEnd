import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './User/login'
import Forms from './User/form'
import Home from './Home/Home'
import MyPlaylist from './Components/MyPlaylist'
// import SettingsMenu from '../src/Home/SettingsMenu'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Forms/>}></Route>
        <Route path="/myplaylist" element={<MyPlaylist/>}></Route>
    </Routes>
  )
}

export default Routing