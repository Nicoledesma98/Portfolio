import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
        <h2 className='tittlecontact'>Contact</h2>
        </Col>
      </Row>
        <Form className=''>
        <Row className="mb-3 flexd">
          <Col xs={4}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control/>
          </Col>
          <Col xs={4}>
            <Form.Label>Apellido</Form.Label>
            <Form.Control/>
          </Col>
        </Row >
        <Row className="mb-3 flexd">
          <Col xs={5}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
          </Col>
          <Col xs={3}>
            <Form.Label>Empresa</Form.Label>
            <Form.Control/>
          </Col>
        </Row>
        <Row className='flexd'>
          <Col xs={8}>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" placeholder='Deje su mensaje aqui' rows={3} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='flexd'>
           <button className='btncontact' type="submit">
          Enviar
        </button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Contact