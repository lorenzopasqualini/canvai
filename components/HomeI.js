import React from 'react'
import Image from 'next/image'

export default function HomeI() {
  return (
    <div className='parent'>

      <div id='home'>
        <Image src="/img/aicat.png" width="450" height="150" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>¿Estás pensando en invertir en inmuebles en España? Contacta con nosotros. Podemos asesorarte y guiarte a lo largo de todo el proceso, y ayudarte a elegir la opción que mejor se adapte a tus necesidades.</p>
            <p>Dando cumplimiento al Decreto 12/2010 del 2 de febrero, somos agentes inmobiliarios matriculados por AICAT.</p>
        </div>
      </div>

    </div>
  )
}