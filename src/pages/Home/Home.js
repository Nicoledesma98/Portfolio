import React from 'react'
import { Form } from "react-bootstrap"
const Home = () => {
  return (
    <div className='Home'>
      <h1 className='tittle mt-5'>Skills</h1>
      <div>
        <img src="https://img.icons8.com/color/192/000000/html-5--v1.png" />
        <img src="https://img.icons8.com/color/192/000000/css3.png" />
        <img src="https://img.icons8.com/color/192/000000/sass.png" />
        <img src="https://img.icons8.com/color/192/000000/javascript--v1.png" />
        <img src='../logo192.png' ></img>
      </div>
      <h2 className='tittle mt-5'>Project</h2>
      <div className='gif'>
        <img src='../blackprime.gif' alt='project javascript' />
        <img src="../nicogift.gif" alt='project react e-commerce animal' />
        <img src='../porlospelos.gif' alt='project hairdressing men' />
      </div>
      <h3 className='tittle mt-5 '>Contact</h3>
      <div>
        <div className="container " >
          <div className="row ">
            <div className="col-md-4 m-3 mt-5 ">
              <input type="text" className="form-control " placeholder="Nombre" aria-label="Nombre"></input>
            </div>
            <div className="col-md-4 m-3 mt-5">
              <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 m-3 ">
              <input type="email" className="form-control" placeholder="Email" id="inputEmail4"></input>
            </div>
            <div className="col-md-4 m-3 ">
              <input type="tel" className="form-control" placeholder="Telefono" id="inputtel"></input>
            </div>
          </div>
          <div className="col-md-8 m-3 mt-3">
            <input type="text" className="form-control" placeholder="Asunto" aria-label="Asunto"></input>
          </div>
          <div className="col-md-8 m-3 ">
            <Form.Control
              as="textarea"
              placeholder="Deje su comentario aca!"
              style={{ height: '100px' }}
            />
          </div>
          <div className="col-md-8 m-3 ">
            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input>
            <label className="form-check-label ">Seleccione si esta conforme con que nos comuniquemos con usted a la brevedad!</label>
          </div>
          <div className="col-md-8 m-3" >
            <button type="submit" className="">Enviar</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home
