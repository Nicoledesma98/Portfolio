import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { async } from '@firebase/util';
import db from '../../utils/firebaseConfig';
import Swal from "sweetalert2"
const Contact = () => {

const [formValue, setFormValue] = useState({
  nombre: "",
  apellido:"",
  email:"",
  empresa:"",
  mensaje:""
})
const [consulta,setConsulta] = useState ({
  mensaje :{},
})
const handleSubmit = (e) => {
  e.preventDefault()
  setConsulta({...consulta, mensaje: formValue})
  saveData({...consulta, mensaje: formValue})
  Swal.fire(
    'Mensaje enviado',
    'En breve le respondere,Gracias',
    'success'
  )
}

const handleChange = (e) => {
  setFormValue({...formValue,[e.target.name]:e.target.value})
}

const saveData = async (newConsult) => {
  const msjFirebase = collection(db, "mensajes")
  const msjDoc = await addDoc(msjFirebase,newConsult)
  console.log("mensaje nuevo ",msjDoc )


}
  return (
    <Container fluid>
      <Row>
        <Col>
        <h2 className='tittlecontact'>Contacto</h2>
        </Col>
      </Row>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3 flexd">
          <Col xs={4} className="formtext">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
            onChange={handleChange}
            name="nombre"
            value={formValue.nombre}
            />
          </Col>
          <Col xs={4} className="formtext">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
            onChange={handleChange}
            name="apellido"
            value={formValue.apellido}
            />
          </Col>
        </Row >
        <Row className="mb-3 flexd">
          <Col xs={5} className="formtext">
            <Form.Label>Email</Form.Label>
            <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            value={formValue.email}
            />
          </Col>
          <Col xs={3} className="formtext">
            <Form.Label>Empresa</Form.Label>
            <Form.Control
            onChange={handleChange}
            name="empresa"
            value={formValue.empresa}
            />
          </Col>
        </Row>
        <Row className='flexd'>
          <Col xs={8} className="formtext">
            <Form.Group className="mb-3">
              <Form.Control
              onChange={handleChange}
              as="textarea"
              name="mensaje"
              placeholder='Deje su mensaje aqui'
              rows={3}
              value={formValue.mensaje}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='flexd'>
           <button
           className='btncontact'
           type="submit"
           >
          Enviar
        </button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Contact