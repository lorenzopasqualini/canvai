import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderRef from '../components/HeaderRef'
import Footer from '../components/Footer'

function reforma() {
  return (
    <>
      <Head>
        <title>Reformas</title>
      </Head>

      <HeaderRef />

        <div className='parent'>

          <Image src="/img/atrb.png" width="250" height="250" />

          <div className='child'>
            <p> Tenemos más de 30 años de experiencia en arquitectura y reformas. Para ofrecer las mejores condiciones, garantías y transparencia, somos franquiciados AQUÍ TU REFORMA. Podemos ofrecerte financiación para tu reforma, garantía de calidad y cumplimiento de plazos. ¡Consúltanos! </p>
          </div>

        </div>

      <Footer />
    </>
  )
}

export default reforma