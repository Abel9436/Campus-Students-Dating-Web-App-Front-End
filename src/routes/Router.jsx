import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../component/Home'
import LandingPage from '../pages/LandingPage/LandingPage'
function Router() {
  return (
    <div> <Routes>

    <Route path="/" element={<LandingPage/>} />
    <Route path="/home" element={<Home/>} />
  </Routes>
</div>
  )
}

export default Router