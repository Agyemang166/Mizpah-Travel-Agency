import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import Aeroplane from '../assets/aeroplane.png'

export default function Hero() {
  

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Discover The World With Us", "One City At A Time", "Next stop: Your Dream Location" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    
    return(
        <section className="banner" id="home" >
            <Container>
                <Row className="justify-contents-center align-items-justify">
                    <Col xs={12} md={6} xl={6}>
                        <span className="tagline ">Welcome to Mizpah Travel Agency </span>
                        
                    <h1 className="wrap"><span >{text}</span> </h1>
                    <h5>Ready to escape the ordinary? Join us on a journey of discovery. You'll immerse yourself in diverse cultures, taste exotic cuisines, and make unforgettable memories. Whether you're a seasoned globetrotter or a first-time explorer, we've got the perfect adventure waiting for you. Let's turn your travel dreams into reality. The world is your oyster, and it's time to start exploring!</h5>
                    <a href='#'><button className="vvd" > <span>Let's Connect <Icon.ArrowRightCircleFill size={28} /></span></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="second justify-content-center align-items-center d-flex">
                        <img src={Aeroplane} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}