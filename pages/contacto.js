import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderRef from '../components/HeaderRef'
import Footer from '../components/Footer'

function contacto() {
  return (
    <>
      <Head>
        <title>¡Contáctanos!</title>
      </Head>

      <HeaderRef />

      <div className='parent'>

        <div className='child'>
          <h2>¡Ponte en contacto con nosotros!</h2>
          <h3> CAN VAI S.L. </h3>
          <h6> NIF n° B72506785 </h6>
        </div>

        <div className='child'>
          <h4> info@can-vai.com </h4>
          <p> +34 624292516 </p>
          <p> +34 623338257 </p>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default contacto