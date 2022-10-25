import React from 'react'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/esm/Container'
const Footer = () => {
    return (
        <footer className="footer">
            <Container className='spacingg'>
                <Row>
                    <Col>
                        <a href="https://github.com/Nicoledesma98"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" /></a>
                        <a href="https://www.linkedin.com/in/nicolas-ledesma-75a900197/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon" /></a>
                        <a href="https://www.instagram.com/nicoledesma98_/"><img src="https://img.icons8.com/3d-fluency/48/000000/instagram-new.png" alt="Instagram" className="icon" /></a>
                        <a href="https://www.facebook.com/nicolas.ledesma.923"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook" className="icon" /></a>
                        <a href='https://wa.me/+541121566591'><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="letra">PortFolio de Nicolas Ledesma</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer