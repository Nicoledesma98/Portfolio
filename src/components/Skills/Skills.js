import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
const Skills = () => {
  return (
    <Container fluid className='skills'>
      <Row>
        <Col>
          <h2 className='tittleskills'>Habilidades</h2>
        </Col>
      </Row>
         <Row className=''>
        <Col md={12}>
          <ul className='borderlist shadowskill'>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../html.png'alt='icon html'/><h6>HTML 5</h6></li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../css.png' alt='icon css'/><h6>CSS 3</h6></li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../sass.png' alt='icon sass'/><h6>Sass</h6></li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../git.png'alt='icon html'/><h6>Git</h6></li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../github.png' alt='icon github'/><h6>GitHub</h6></li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../bootstrap.png' alt='icon bootstrap'/><h6>Bootstrap</h6></li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../js.png' alt='icon javascript'/><h6></h6>Javascript</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../react.png' alt='icon reactjs'/><h6></h6>React Js</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../firebase.png' alt='icon firebase'/><h6></h6>Firebase</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../nodejs.png' alt='icon NodeJs'/><h6></h6>NodeJs</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../expressjs.png' alt='icon expressJs'/><h6></h6>ExpressJs</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../mongodb.png' alt='icon MongoDB'/><h6></h6>MongoDB</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../postgresql.png' alt='icon Postgresql'/><h6></h6>PostgreSQL</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../postman.png' alt='icon postman'/><h6></h6>Postman</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../jwt.png' alt='icon Json Web Token'/><h6></h6>Json Web Token</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../docker.png' alt='icon docker'/><h6></h6>Docker</li>
            <li className='roll-in-blurred-right iconflex'><img className='' src='../nestjs.png' alt='icon NestJs'/><h6></h6>NestJs</li>
            </ul>
            </Col>
            </Row>
    </Container>
  )
}
export default Skills