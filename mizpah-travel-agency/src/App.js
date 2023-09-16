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


export default function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar/>
      <Hero/>
      <Services />
      <Recommend />
      <Testimonial />
      <AppContact />
      <Footer />
    </div>
  )
}