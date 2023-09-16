import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/accomodation.avif'),
    title: 'Lonely Path',
    subtitle: 'Web Design'
  }, 
]


function Recommend() {
  return (
    <section id="recommend" className="block works-block">
      <Container fluid>
        <div className="title-holder text-center">
          <h2 className='pt-5'>Recommendaton</h2>
          <div className="subtitle pb-5 pt-2">What We Recommend For You</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={3} key={works.id} style={{borderRadius:10, backgroundColor:"yellow",margin:60}}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        
      </Container>  
    </section>
  );
}

export default Recommend;