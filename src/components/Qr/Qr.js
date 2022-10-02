import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function Qr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button className='button2'  onClick={handleShow}>
      View QR
      </button>
      <Modal show={show} onHide={handleClose} className="qrblur">
        <Modal.Body className='backqr'>
            <img src='../micurriculum.png' alt='qrcurriculum' className='imgqr'/>
        </Modal.Body>
        <Modal.Footer>
          <button className='button1' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
     </>
    );
}

export default Qr