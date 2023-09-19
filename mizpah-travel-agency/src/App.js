import React from 'react'
import './App.css';
import NavBar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Recommend from './Components/Recommend'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import AppContact from './Components/AppContact';
import About from './Components/About';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
