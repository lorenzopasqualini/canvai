import React from 'react'
import Image from 'next/image';

export default function ServicioI() {
  return (
    <div className='parent' id='servicios'>
        <h2>Servicios</h2>

        <div className='child' id='svc'>
            <p>Ofrecemos todos los servicios necesarios para que tus operaciones inmobiliarias sucedan de la forma más eficiente:</p>
            <ul>
              <Image src='/img/tasasion.png' width='125' height='125' />
                <li className='parent'>Tasasiones</li>
              <Image src='/img/venta.png' width='125' height='125' />
                <li className='parent'>Venta</li>
              <Image src='/img/alquiler.png' width='125' height='125' />
                <li className='parent'>Alquiler</li>
              <Image src='/img/home.png' width='125' height='125' />
                <li className='parent'>Home Staging</li>
            </ul>
            <h4>Ponte en contacto con nosotros para empezar a trabajar juntos tus inmuebles!</h4>
        </div>
    </div>
  )
}