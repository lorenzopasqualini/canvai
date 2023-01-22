import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderInm from '../components/HeaderInm'
import Footer from '../components/Footer'

function quienes() {
  return (
    <>
        <Head>
            <title>Propiedades</title>
        </Head>

        <HeaderInm />

          <div className='parent'>

            <Image src='/img/warn.png' width='100' height='100' />
            <div className='child'>
              Oops! In construction. Coming soon.
            </div>

          </div>

        <Footer />
    </>
  )
}

export default quienes