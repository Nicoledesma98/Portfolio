import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Project = () => {
  return (
    <Container fluid className='project'>
      <Row>
        <Col className='tittlesproject'>
        <h2>Proyectos</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <CardGroup >
      <Card className='cardpr'>
        <Card.Img variant="top" src="../porlospelos.gif" />
        <Card.Body className='itemcard'>
          <Card.Title>Por Los Pelos</Card.Title>
          <Card.Text>
          Este es el proyecto final del curso de Desarrollo Web, utilizando HTML5, CSS3 y SASS. El proyecto consiste en una web para una peluquería de caballeros.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='buttoncard'>
          <a href='https://github.com/Nicoledesma98/PorLosPelos-comision24500' className='btncard'>GitHub</a>
          <a href='https://nicoledesma98.github.io/PorLosPelos-comision24500/index.html' className='btncard'>Web</a>
        </Card.Footer>
      </Card>
      <Card className='cardpr'>
        <Card.Img variant="top" src="../blackprime.gif" />
        <Card.Body className='itemcard'>
          <Card.Title>BlackPrime</Card.Title>
          <Card.Text>
          Este es un proyecto realizado con Javascript, HTML y CSS, como reto final del curso Javascript de CoderHouse. El proyecto consiste en una página web de préstamos.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='buttoncard'>
          <a href='https://github.com/Nicoledesma98/Javascript-BlackPrime' className='btncard'>GitHub</a>
          <a href='https://stupendous-dodol-20b99e.netlify.app/' className='btncard'>Web</a>
        </Card.Footer>
      </Card>
      <Card className='cardpr'>
        <Card.Img variant="top" src="../nicogift.gif" />
        <Card.Body className='itemcard'>
          <Card.Title>Pet Society</Card.Title>
          <Card.Text>
            Este es un proyecto realizado con ReactJs,HTML y CSS. Conectandolo a FireBase. Dicho proyecto consiste en una e-commerce de venta de productos de mascotas. 
          </Card.Text>
        </Card.Body>
        <Card.Footer className='buttoncard'>
          <a href='https://github.com/Nicoledesma98/pet-ecommerce' className='btncard'>GitHub</a>
          <a href='https://pet-ecommerce-ochre.vercel.app/' className='btncard'>Web</a>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}


export default Project