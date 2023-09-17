import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import * as Icon from 'react-bootstrap-icons';
import  Logo from '../assets/logo.png'
import styled from 'styled-components';
import { useState, useEffect } from "react";


export default function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10){
                setScroll(true)
            } else{
                setScroll(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    
    }
    return (
        <Navbar expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} style={{height:100, width:"auto"}} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                <span className="navbar-toggler-icon bg-warning"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About Us</Nav.Link>
                <Nav.Link href="#services" className={activeLink === "services" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
                <Nav.Link href="#recommend" className={activeLink === "recommend" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('recommend')}>Recommend</Nav.Link>
                <Nav.Link href="#testimonials" className={activeLink === "testimonial" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('testimonial')}>Testimonial</Nav.Link>
                
              </Nav>
              <span className="Navbar-text">
                <div className="social-icon">
                    <a href="https://www.instagram.com/mizpahtravel/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><Icon.Instagram className='icon'/></a>
                    <a href="https://www.facebook.com/profile.php?id=100093048200376&mibextid=avESrC"> <Icon.Facebook className='icon'/></a>
                    <a href="https://www.tiktok.com/@mizpah_travel2023?_t=8fiKjKM214U&_r=1"><Icon.Tiktok className='icon' /></a>
                    <a href="https://www.youtube.com/@MizpahTravelAgency-tg6lf"><Icon.Youtube className='icon' /></a>
                    <a href= "tel:+1 (513) 328-2864"><Icon.Phone className='icon'/></a>
                </div>
                <div>
                    <a href='#contact'><button className="vvd" > <span>Contact Us <Icon.ArrowRightCircleFill size={28} /></span></button></a>
                </div>
                
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}