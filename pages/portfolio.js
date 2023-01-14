import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderRef from '../components/HeaderRef'
import Footer from '../components/Footer'

function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <HeaderRef />

      <div className='about'>
        <h3>Contamos con más de 30 años de trayectoria en el rubro de la construcción y las reformas. A continuación podrás ver imágenes de algunos de nuestros trabajos de arquitectura.</h3>
      </div>

      <div className='about'>
        <p>carousel</p>
      </div>

      <Footer />
    </>
  )
}

export default portfolio