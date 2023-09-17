import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='bg-dark pt-5 pb-5'>
      <Container className='bg-dark footer'>
        <Row className='footer-row text-center'>
          <Col md={12} sm={12}>
            <p>© 2023 Mizpah Travel Agency. All Rights Reserved.</p>
          </Col>
          <Col sm={12}>
            This website was designed by <a href='https://linktr.ee/agyemang166'>Agyemang</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
