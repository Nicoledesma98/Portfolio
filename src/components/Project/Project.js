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
        <h2>Project</h2>
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
          This is the final project of the Web Development course, using HTML5, CSS3 and SASS. The project consists of a website for a gentlemen's hairdresser.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='buttoncard'>
          <a href='https://github.com/Nicoledesma98/PorLosPelos-comision24500' className='btncard'>GitHub</a>
          <a href='https://nicoledesma98.github.io/PorLosPelos-comision24500/index.html' className='btncard'>Demo</a>
        </Card.Footer>
      </Card>
      <Card className='cardpr'>
        <Card.Img variant="top" src="../blackprime.gif" />
        <Card.Body className='itemcard'>
          <Card.Title>BlackPrime</Card.Title>
          <Card.Text>
          This is a project made with Javascript, html and css, as a final challenge of CoderHouse Javascript course.the project consists of a web page of loans.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='buttoncard'>
          <a href='https://github.com/Nicoledesma98/Javascript-BlackPrime' className='btncard'>GitHub</a>
          <a href='https://stupendous-dodol-20b99e.netlify.app/' className='btncard'>Demo</a>
        </Card.Footer>
      </Card>
      <Card className='cardpr'>
        <Card.Img variant="top" src="../nicogift.gif" />
        <Card.Body className='itemcard'>
          <Card.Title>Pet Society</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='buttoncard'>
          <a href='https://github.com/Nicoledesma98/pet-ecommerce' className='btncard'>GitHub</a>
          <a href='https://github.com/Nicoledesma98/pet-ecommerce' className='btncard'>Demo</a>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Project