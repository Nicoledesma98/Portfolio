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
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="../blackprime.gif" />
        <Card.Body>
          <Card.Title>BlackPrime</Card.Title>
          <Card.Text>
          This is a project made with Javascript, html and css, as a final challenge of CoderHouse Javascript course.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button>asdasd</button>
          <button>asdasd</button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../porlospelos.gif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../nicogift.gif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Project