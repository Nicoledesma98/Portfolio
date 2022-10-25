import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/esm/Container';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Qr from '../Qr/Qr';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid className='back'>
      <Row>
        <Col sm={12}>
          <button className='font me-4 bn322' onClick={handleShow} >
            <img src="https://img.icons8.com/ios-filled/30/000000/google-code.png" alt='' />
            Nicolas Ledesma </button>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Modal
            show={show}
            onHide={handleClose}
            size="md">
            <Modal.Header closeButton>
              <Modal.Title className='titlem'>Curriculum Vitae</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col xs={6} md={2}>
                    <img src='../cvnicoimg.png' alt='curriculum' className='imagecv' />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
               <button className='button1' onClick={handleClose}>
                Cerrar
              </button>
            <a href={"../cvnico.pdf"} download={"../cvnico.pdf"} ><button type='submit' className='button2'>Descargar</button></a>
              <Qr/>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
