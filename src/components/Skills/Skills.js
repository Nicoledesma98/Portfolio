import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Skills = () => {
  return (
    <Container fluid className='skills'>
      <Row>
        <Col>
          <h2 className='tittleskills'>Skills</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className='list'>
            <li className='borderlist roll-in-blurred-right'><img src='../html.png'alt='icon html'/><h6>HTML 5</h6></li>
            <li className='borderlist roll-in-blurred-right'><img src='../css.png' alt='icon css'/><h6>CSS 3</h6></li>
            <li className='borderlist roll-in-blurred-right'><img src='../sass.png' alt='icon sass'/><h6>Sass</h6></li>
            <li className='borderlist roll-in-blurred-right'><img src='../git.png'alt='icon html'/><h6>Git</h6></li>
            <li className='borderlist roll-in-blurred-right'><img src='../github.png' alt='icon github'/><h6>GitHub</h6></li>
            <li className='borderlist roll-in-blurred-right'><img src='../bootstrap.png' alt='icon bootstrap'/><h6>Bootstrap</h6></li>
            <li className='borderlist roll-in-blurred-right'><img src='../js.png' alt='icon javascript'/><h6></h6>Javascript</li>
            <li className='borderlist roll-in-blurred-right'><img src='../react.png' alt='icon reactjs'/><h6></h6>React Js</li>
            <li className='borderlist roll-in-blurred-right'><img src='../firebase.png' alt='icon firebase'/><h6></h6>Firebase</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills