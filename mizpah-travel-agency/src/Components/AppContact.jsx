import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

class AppContact extends React.Component {
  sendEmail(event) {
    event.preventDefault();
    window.location.href = `mailto:Kelvinkyei2004@gmail.com?subject=Contact Form Submission&body=
    Name: ${event.target.elements.name.value}, 
    Email: ${event.target.elements.email.value}, 
    Message:${event.target.elements.message.value}, 
    Tel:${event.target.elements.telephone.value}`;
  }

  render() {
    return (
      <section id="contact" className="block contact-block">
        <Container fluid>
          <div className="title-holder text-center pt-5">
            <h2 className='text-uppercase'>Contact us</h2>
            <div className="subtitle pb-3">- Get Connected With Us -</div>
          </div>
          <Form className='contact-form d-flex justify-content-center' onSubmit={this.sendEmail.bind(this)} >
            <Row>
              <Col sm={4} >
                <Form.Control type="text" name="name" placeholder="Enter your full name" required />
              </Col>
              <Col sm={4} >
                <Form.Control type="email" name="email" placeholder="Enter your email address" required />
              </Col>
              <Col sm={4} >
                <Form.Control type="tel" placeholder="Enter your contact number" name="telephone" required />
              </Col>
              <Col sm={12} >
                  We promise that we will not share your email address.
                <Form.Control style={{ height:200}} as="textarea" placeholder="How may we assist you (Add Your Current Location)" name="message" required />
              </Col>
              <Col className="d-flex justify-content-center" sm={4}>
                <Button type="submit">Send Email</Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className='google-map'>
        <iframe title="map" src="https://maps.google.com/maps?q=west chester&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
            <i className="fas fa-phone"><Icon.Envelope /></i>
              mizpahtravelagency@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"><Icon.Phone /></i>
              +1 (513) 328-2864
            </li>
            <li>
            <i className="fas fa-phone"><Icon.Signpost /></i>
              West Chester,USA
            </li>
            <li>
            <div className="social-icon mt-5">
                    <a href="https://www.instagram.com/mizpahtravel/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><Icon.Instagram className='icon'/></a>
                    <a href="https://www.facebook.com/profile.php?id=100093048200376&mibextid=avESrC"> <Icon.Facebook className='icon'/></a>
                    <a href="https://www.tiktok.com/@mizpah_travel2023?_t=8fiKjKM214U&_r=1"><Icon.Tiktok className='icon' /></a>
                    <a href="https://www.youtube.com/@MizpahTravelAgency-tg6lf"><Icon.Youtube className='icon' /></a>
                    <a href= "tel:+1 (513) 328-2864"><Icon.Phone className='icon'/></a>
                </div>
            </li>
          </ul>
        </div>
      </Container>
      </section>
    );
  }
}

export default AppContact;