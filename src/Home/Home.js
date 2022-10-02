import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Skills from '../components/Skills/Skills';
import Project from '../components/Project/Project';
const Home = () => {
  return (
    <>
      <Container fluid className='Home '>
        <Row>
          <Col>
            <h2 className='title'>Home</h2>
          </Col>
        </Row>
        <Container>
          <Row className='window'>
            <Col>
              <img src='../gifprogram.gif' className='gif' alt=''></img>
            </Col>
            <Col className='border focus'>
              <h1>Developer Front-End</h1>
            </Col>
          </Row>
          <Row>
            <Col className='conthome'>
              <img src='../nicoimg.jpeg' alt='image nico' className='imgnico' />
              <h5 className='border focus'><img src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-Hi-foreign-language-smashingstocks-detailed-outline-smashing-stocks.png" alt='' />
                I'm Nico and a few months ago I entered the world of web development and I love it. I graduated from Front-end at CoderHouse, I passed (Web Development (Html,Css,Sass,Bootstrap,Git,GitHub), Javascript and React) I have serious intentions of continuing to venture into this world of programming and continue training professionally.
                I would be delighted to have my first opportunity as a Jr or Trainee since it is something that I am very passionate about</h5>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Skills />
        <Project/>
      </Container>
    </>

  );
}

export default Home
