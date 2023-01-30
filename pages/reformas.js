import React from 'react'
import Head from 'next/head'
import HeaderR from '../components/HeaderR'
import HomeR from '../components/HomeR'
import ServicioR from '../components/ServicioR'
import Portfolio from '../components/Portfolio'
import Nosotros from '../components/Nosotros'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function reforma() {
  return (
    <>
    <Head>
      <title>Reformas</title>
    </Head>

    <HeaderR />

    <div className='container'>

      <HomeR />

      <ServicioR />

      <Portfolio />

      <Nosotros />

      <Contact />

    </div>

    <Footer />
    </>
  )
}

export default reforma