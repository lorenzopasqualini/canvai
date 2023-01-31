import React from 'react'
import Image from 'next/image';

export default function ServicioI() {
  return (
    <div className='parent' id='servicios'>
        <h2>Servicios</h2>

        <div className='child' id='svc'>
            <p>Ofrecemos todos los servicios necesarios para que tus operaciones inmobiliarias sucedan de la forma más eficiente:</p>
            <ul>
                <li className='parent'>
                  <Image src='/img/tasasion.png' width='100' height='100' />
                  Tasasiones
                </li>
                <li className='parent'>
                  <Image src='/img/venta.png' width='100' height='100' />
                  Venta
                </li>
                <li className='parent'>
                  <Image src='/img/alquiler.png' width='100' height='100' />
                  Alquiler
                </li>
                <li className='parent'>
                  <Image src='/img/home.png' width='100' height='100' />
                  Home Staging
                </li>
            </ul>
            <h4>Ponte en contacto con nosotros para empezar a trabajar juntos tus inmuebles!</h4>
        </div>
    </div>
  )
}