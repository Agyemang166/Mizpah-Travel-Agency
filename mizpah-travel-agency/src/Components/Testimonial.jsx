import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import * as Icon from 'react-bootstrap-icons';

var testimonialsData = [
  {
    id: 1,
    name: 'Abrewa Graphics',
    description: "My travel experience was the best ever thanks to Mizpah Travel Agency's first-rate service. Definitely recommend and will use again!",
    designation: 'Graphics Designer'
  },
  {
    id: 2,
    name: 'Cortney Phoenix',
    description: "Mizpah Travel Agency provided first class service and made my travel experience the best ever. Definitely will use again and highly recommended!",
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
    designation: 'CEO'
  },
  {
    id: 4,
    name: 'Kelvin Kyei',
    description: "I just wanted to say that I had the most incredible experience with your travel agency. The trip was beyond my expectations, and I can't wait to book another adventure with you! Thank you for creating such amazing memories! 🌟✨",
    designation: 'Enterpreneur'
  }
]

function Testimonial() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='text-uppercase'>Clients' Testimonials</h2>
            <h3><a href='https://g.co/kgs/DZdLJN'>Leave A Review</a></h3>
          <div className="subtitle">- What Clients Say About Us. We'd love to hear your thoughts too! -</div>

        </div>
        <Carousel controls={true} keyboard={true} fade>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                      <div className='star text-warning'>                       
                      <Icon.StarFill />
                      <Icon.StarFill />
                      <Icon.StarFill />
                      <Icon.StarFill />
                      <Icon.StarFill />
                      </div>

                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default Testimonial;