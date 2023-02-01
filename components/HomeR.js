import React from 'react'
import Image from 'next/image'

export default function HomeReformas() {
  return (
    <div className='parent'>

      <div id='home'>
        <Image src="/img/atrb.png" width="250" height="250" />
        <div style={{ display: 'grid', gap: '1rem' }}>
          <p>Contamos con más de 30 años de experiencia en arquitectura, contrucción y reformas. Es decir, llevamos más de 30 años ayudando a las familias a construir hogares, y a las empresas a alcanzar sus metas.</p>
          <p>Para ofrecer las mejores condiciones, garantías y transparencia, somos franquiciados AQUÍ TU REFORMA, por lo que podemos ofrecerte:</p>
          <ul style={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem' }}>
            <li>Financiación para tu reforma</li>
            <li>Garantía de calidad por dos años tras finalizadas las obras</li>
            <li>Cumplimiento de plazos por contrato</li>
            <li>Profesionalismo y seriedad</li>
          </ul>
        </div>
      </div>

    </div>
  )
}