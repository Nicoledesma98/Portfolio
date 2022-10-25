import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const Home = () => {
  return (
      <Container fluid className='Home '>
        <Row>
          <Col>
            <h2 className='title'>Inicio</h2>
          </Col>
        </Row>
        <Container>
          <Row className='window'>
            <Col>
              <img src='../gifprogram.gif' className='gif' alt=''></img>
            </Col>
            <Col>
              <h1 className='border focus texting'>Desarrollador Front-End</h1>
            </Col>
          </Row>
          <Row className='conthome'>
            <Col >
              <img src='../nicoimg.jpeg' alt='image nico' className='imgnico' />
              </Col>
              <Col>
              <h5 className='border focus texto'><img className='icons' src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-Hi-foreign-language-smashingstocks-detailed-outline-smashing-stocks.png" alt='' />
              Soy Nico y hace unos meses me adentré en el mundo del desarrollo web y me encanta. Me gradué de Front-end en CoderHouse, aprobé (Desarrollo Web (Html,Css,Sass,Bootstrap,Git,GitHub), Javascript y ReactJs) Tengo serias intenciones de seguir incursionando en este mundo de la programación y seguir formándome profesionalmente.
              Estaría encantado de tener mi primera oportunidad como Trainee ya que es algo que me apasiona mucho</h5>
            </Col>
          </Row>
        </Container>
      </Container>

  );
}

export default Home
