import React from 'react'
import Image from 'next/image'

export default function Nosotros() {
  return (
    <div className='parent' id='nosotros'>
        <h2>Sobre Nosotros</h2>

        <p>
        Somos un equipo de profesionales, y desde la vocación de cada uno de nosotros trabajamos para ofrecerte las mejores oportunidades.
        Nos especializamos en soluciones arquitectónicas e inmobiliarias para que puedas llevar tu hogar o negocio al máximo nivel con seguridad y confianza.
        ¡Nos encanta lo que hacemos y lo hacemos con gran dedicación!
        </p>

        <div className='child'>
          <div className='parent'>
            <Image src='/img/pia.jpg' width='150' height='150' />
            <h3>Pía Pasqualini</h3>
            <h5>Inmobiliario (n° AICAT 11939)</h5>
          </div>

          <div className='parent'>
            <Image src='/img/marcelo.jpg' width='150' height='150' />
            <h3>Marcelo Pasqualini</h3>
            <h5>Arquitecto</h5>
          </div>
        </div>

  </div>
  )
}