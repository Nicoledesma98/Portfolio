import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='imagenes'>
            <img src='../carrousel3.jpg' alt='imagen perro collar'/>
            <img src='../carrousel2.jpg' alt='imagen gato collar'/>
            <img src='../perro-acdc.jpg' alt='imagen perro acdc'/>
     </div>
    <div className='row Home'>
                <div className='col-md-4'>
                    <span>Si tu compra supera los $3500.- enviamos GRATIS a la sucursal de Correo Argentino de tu ciudad.</span>
                </div>
                <div className='col-md-4'>
                    <span>Protegemos tus datos</span>
                </div>
                <div className='col-md-4'>
                    <span>Protegemos tus datos</span>
                </div>
    </div>
    </div>
  );
}

export default Home
