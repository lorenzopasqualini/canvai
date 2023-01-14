import React from 'react';
import Head from 'next/head'
import HeaderInm from '../components/HeaderInm'
import Footer from '../components/Footer'
import Tilt from 'react-tilt'

function inmobiliaria() {
  return (
    <>
        <Head>
            <title>Inmuebles</title>
        </Head>

        <HeaderInm />

        <Footer />

    </>
  )
}

export default inmobiliaria