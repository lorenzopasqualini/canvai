import React from 'react'
import Image from 'next/image'

export default function HomeReformas() {
  return (
    <div className='parent'>

      <div id='home'>
        <Image src="/img/atrb.png" width="250" height="250" />
        <p> Contamos con más de 30 años de experiencia en arquitectura, contrucción y reformas. Es decir, llevamos más de 30 años ayudando a las familias a construir hogares, y a las empresas a alcanzar sus metas.<br/> Para ofrecer las mejores condiciones, garantías y transparencia, somos franquiciados AQUÍ TU REFORMA, por lo que podemos ofrecerte: <br/><br/> -Financiación para tu reforma<br/>-Garantía de calidad por dos años tras finalizadas las obras<br/>-Cumplimiento de plazos por contrato<br/>-Profesionalismo y seriedad <br/><br/>¡Consúltanos! </p>
      </div>

    </div>
  )
}