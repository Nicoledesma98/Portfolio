import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const Home = () => {
  return (
      <Container fluid className='Home '>
        <Row>
          <Col>
            <h2 className='title font'>Portafolio</h2>
          </Col>
        </Row>
        <Container>
          <Row className='window'>
            <Col>
              <img src='../gifprogram.gif' className='gif' alt=''></img>
            </Col>
            <Col>
              <h1 className='border focus texting'>Desarrollador Full Stack MERN</h1>
            </Col>
          </Row>
          <Row className='conthome'>
            <Col >
              <img src='../nicoimg.jpg' alt='imagen nico' className='imgnico' />
              </Col>
              <Col>
            <h5 className='border focus texto'><img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/35/null/external-Hi-foreign-language-smashingstocks-glyph-smashing-stocks.png" alt='' />
              Soy Nico y Hace un año me adentre en el mundo IT, actualmente soy desarrollador Full Stack MERN (MongoDB,ExpressJs,React,NodeJs), tengo serias intenciones de seguir adentrándome en dicho mundo y seguir formándome profesionalmente. Estaría encantado en tener mi primera oportunidad como Junior o Trainee ya que es algo que realmente me apasiona</h5>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home
