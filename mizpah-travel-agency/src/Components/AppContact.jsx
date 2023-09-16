import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button formaction="mailto:gyamfiagyemang999@gmail.com">Submit</Button>
          </div>
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
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;