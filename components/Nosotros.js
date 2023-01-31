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
            <h4>Pía Pasqualini</h4>
            <h6>Inmobiliario AICAT 11939</h6>
          </div>

          <div className='parent'>
            <Image src='/img/marcelo.jpg' width='150' height='150' />
            <h4>Marcelo Pasqualini</h4>
            <h6>Arquitecto</h6>
          </div>
        </div>

  </div>
  )
}