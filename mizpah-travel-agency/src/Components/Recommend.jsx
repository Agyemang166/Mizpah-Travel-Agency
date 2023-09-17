import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

const worksData = [
  {
    id: 1,
    image: require('../assets/waterpark.webp'),
    alt: "waterpark",
    title: 'Splash Fun',
    subtitle: "Including a water park in your tour adds splash fun! It's a refreshing break from sightseeing, offering thrilling slides, wave pools, and relaxation. It's a perfect way to create unforgettable memories and cool off!"
  }, 
  {
    id: 2,
    image: require('../assets/museum.avif'),
    alt: "museum",
    title: 'Museum Visiting',
    subtitle: "Visiting museums enriches your tour, offering insights into local culture, history, and art. It's a great way to connect with a new place!"
  }, 
  {
    id: 3,
    image: require('../assets/fleamarket.webp'),
    alt: "fleamarket",
    title: 'Bargain Hunting',
    subtitle: "Visiting flea markets during tours can be a healthy activity. It involves walking, which is good exercise, and provides mental stimulation from hunting for unique items. Plus, it's a great way to interact with locals!"
  }, 
  {
    id: 4,
    image: require('../assets/restaurant.webp'),
    alt: "restaurants",
    title: 'Culinary Adventure',
    subtitle: "Trying new foods on tours is a culinary adventure! It's a chance to explore different cultures through their cuisine, discover unique flavors, and maybe even find your new favorite dish. It's an exciting part of any travel experience!"
  }, 
  {
    id: 5,
    image: require('../assets/photography.webp'),
    alt: "photography",
    title: 'Photographic Excursions',
    subtitle: "Photographic Excursions are unique tours with a focus on capturing stunning images. They offer guided trips to picturesque spots, providing professional photography tips. Perfect for creating lasting memories of your adventures! 📸"
  }, 
  {
    id: 6,
    image: require('../assets/beaching.webp'),
    alt: "beaching",
    title: 'Sandy Soirees',
    subtitle: "'Sandy Soirees' are the ultimate beach escape! Experience the soothing waves, golden sands, and beautiful sunsets. Perfect for relaxation, fun, and making unforgettable memories. Don't miss out on this seaside adventure! 🏖️"
  }, 
]


function Recommend() {
  return (
    <section id="recommend" className=" block works-block" >
      <Container fluid>
        <div className="title-holder text-center">
          <h2 className='pt-5 text-uppercase'>Recommendaton</h2>
          <div className="subtitle pb-5 pt-2">What We Recommend For You</div>
          <i>Move mouse pointer over image for more info</i>
          <h6>Thrilling features & More Info on larger devices!</h6>
          
        </div>
        <Row className='portfoliolist' >
          {
            worksData.map(works => {
              return (
                <Col sm={3} key={works.id} style={{borderRadius:10, }}>
                  <div className='portfolio-wrapper'>
                      <Image src={works.image} alt={works.alt} className='image' style={{height:400, padding: 15}}/>
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                        <div className="social-icon pt-5">
                          <a href="#"><Icon.Whatsapp className='icon'/></a>
                          <a href="#"><Icon.Tiktok className='icon'/></a>
                          <a href= "tel:+1 (513) 328-2864"><Icon.Phone className='icon'/></a>
                </div>
                      </div>
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