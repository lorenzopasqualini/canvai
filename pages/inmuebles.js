import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import HeaderInm from '../components/HeaderInm'
import Footer from '../components/Footer'

function inmobiliaria() {
  return (
    <>
        <Head>
            <title>Inmuebles</title>
        </Head>

        <HeaderInm />

        <div className='parent'>

          <Image src="/img/aicat.png" width="450" height="150" />

          <div className='child'>
            <p>¿Estás pensando en invertir en inmuebles en España? Contacta con nosotros. Podemos asesorarte y guiarte a lo largo de todo el proceso, y ayudarte a elegir la opción que mejor se adapte a tus necesidades.</p>
            <br></br>
            <p>Dando cumplimiento al Decreto 12/2010 del 2 de febrero, somos agentes inmobiliarios matriculados por AICAT.</p>
          </div>

        </div>

        <Footer />

    </>
  )
}

export default inmobiliaria