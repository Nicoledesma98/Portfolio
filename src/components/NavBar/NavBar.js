import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar () {
  return (
    <Navbar className='back' expand="lg" variant='dark'>
      <Container className='spacing h4'>
        <Navbar.Brand href="#home">Nicolas Ledesma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home" className='me-4'>Home</Nav.Link>
            <Nav.Link href="#link"className='me-4'>Skills</Nav.Link>
            <Nav.Link href="#home"className='me-4'>Project</Nav.Link>
            <Nav.Link href="#home"className='me-4'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

