import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';

import img1 from '../assets/logo.png';

function About() {

  return (
    <section id="about" className="block about-block bg-transparent">
      <Container >
        <div className="title-holder text-center pb-5">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6} className='about-img'>
            <Image src={img1} />
          </Col>
          <Col sm={6} className='about-text text-black'>
            <p>
            Mizpah Travel Agency, nestled in the charming locale of West Chester, is your go-to for all travel needs. With an extensive network and seasoned experts, we're dedicated to creating unforgettable journeys tailored to your preferences. Our team isn't just well-versed in planning; we're passionate globetrotters ourselves, understanding the nuances of travel. We believe in crafting experiences that resonate, journeys that leave an indelible mark on your memory. Our services aren't confined to ticketing and accommodations; we're here to provide comprehensive travel solutions. From exotic getaways to business trips, Mizpah ensures seamless travel experiences. <br></br><br></br>
            We prioritize your comfort and safety, ensuring every journey with us is stress-free and enjoyable. Our partnerships with top-notch hotels and airlines around the globe allow us to provide you with exceptional quality and value. At Mizpah, we don't just plan your travel; we aspire to be a part of your journey, making every trip an experience worth cherishing. We're here to turn your travel dreams into reality. So, whether you're planning a solo adventure, a family vacation, or a corporate trip, Mizpah Travel Agency in West Chester is your trusted partner in creating memorable journeys. Explore the world with us!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;