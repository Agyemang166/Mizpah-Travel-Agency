import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';


const servicesData = [
  {
    id:1,
    image: require('../assets/accomodation.avif'),
    title: "Hotel Accomodation",
    despcription: "Sure! 'Experience the ease of hotel booking with our travel agency. We curate accommodations to your taste and budget, ensuring a perfect fit. Our exclusive deals and efficient handling of changes and cancellations make your travel planning a breeze. Enjoy stress-free journeys with us",
    icon: "Icon.House",
  },
  {
    id:2,
    image: require('../assets/tour.avif'),
    title: "Travel Planing ",
    despcription: "Let's turn your dream vacation into a reality! With our travel planning services, we'll handle everything from picking the perfect destination to arranging accommodations and creating a detailed itinerary. We'll ensure every aspect of your trip is taken care of, so all you have to do is relax and enjoy!",
    icon: "Icon.House",
  },
  {
    id:3,
    image: require('../assets/transport.jpg'),
    title: " Transport",
    despcription: "Embark on a journey of a lifetime with us. Our top-notch, comfortable, and efficient transportation services ensure that every trip you take becomes a cherished memory. We believe that the journey is just as important as the destination, and we're committed to making every moment of your travels truly special.",
    icon: "Icon.House",
  },
  {
    id:4,
    image: require('../assets/insuarance.webp'),
    title: " travel insurance",
    despcription: "Embark on adventures stress-free with our travel insurance! We've got your back, covering unexpected trip cancellities and health emergencies. Don't let surprises spoil your fun. Secure your journey with our comprehensive coverage. Travel with confidence and be safe!",
    icon: "Icon.House",
  }
]

export default function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='justify-content-center  align-items-center  d-flex bg-dark' >
      <Container id='services'>
        <div className='service-header'>
          <h1 className='service-title'>Services</h1>
          <p className='service-paragraph'> Discover new horizons with us! We're more than a travel agency, we're your passport to unforgettable adventures. We tailor each journey to your needs, arranging all details from flights to unique experiences. We're committed to making your travels the highlight of your year. Get ready to create memories that'll last a lifetime!</p>
            <Carousel responsive={responsive} infinite={true} className="skills-slider">
              {
              servicesData.map(service => {
                return(
                  <div className="item" key={service.id}>
              <Card style={{ width: '23rem', height:"auto", padding:20 }} className='card'>
                <Card.Img variant="top" src={service.image} className='service-img' />
                <Card.Body>
                  <Card.Title className='card-title text-uppercase'>{service.title}</Card.Title>
                  <Card.Text className='card-text'>
                    {service.despcription}
                  </Card.Text>
                  <div className="social-icon">
                    <a href="#"><Icon.Whatsapp className='icon'/></a>
                    <a href="#"><Icon.Tiktok className='icon'/></a>
                    <a href= "tel:+1 (513) 328-2864"><Icon.Phone className='icon'/></a>
                </div>
                    <a href=''><Button variant="primary">View Images</Button></a>
                </Card.Body>
              </Card>
              </div>
                )
              })
              } 
            </Carousel>
        </div>
      </Container>
    </section>
    
  )
}
