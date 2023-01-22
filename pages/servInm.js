import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderInm from '../components/HeaderInm'
import Footer from '../components/Footer'

function servRef() {
  return (
    <>
      <Head>
        <title>Reformas</title>
      </Head>

      <HeaderInm />

      <div className='parent'>

        <div className='child'>
          Ofrecemos todos los servicios necesarios para que tus operaciones inmobiliarias sucedan de la forma más eficiente:
        </div>

        <div className='child'>
          <ul>
            <li>Tasasiones</li>
            <li>Venta</li>
            <li>Alquiler</li>
            <li>Home-staging</li>
          </ul>
        </div>

        <div className='child'>
          <p> Ponte en contacto con nosotros para empezar a trabajar juntos tus inmuebles! </p>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default servRef