import React from 'react';
import Head from 'next/head'
import HeaderI from '../components/HeaderI'
import HomeI from '../components/HomeI'
import ServicioI from '../components/ServicioI'
import Propiedades from '../components/Propiedades'
import Nosotros from '../components/Nosotros'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function inmobiliaria() {
  return (
    <>
    <Head>
        <title>Inmuebles</title>
    </Head>

    <HeaderI />

    <div className='container'>

      <HomeI />

      <ServicioI />

      <Propiedades />

      <Nosotros />

      <Contact />

    </div>

    <Footer />
    </>
  )
}

export default inmobiliaria