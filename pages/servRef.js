import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderRef from '../components/HeaderRef'
import Footer from '../components/Footer'

function servRef() {
  return (
    <>
      <Head>
        <title>Reformas</title>
      </Head>

      <HeaderRef />

      <div className='parent'>

        <div className='child'>
          <Image src="/img/kitchen.png" width="100" height="100" />
          Realizamos reformas parciales: baños, cocinas o cualquier aspecto puntual de tu inmueble que requiera una refacción!
        </div>

        <div className='child'>
          <Image src="/img/home.png" width="100" height="100" />
          Realizamos reformas integrales: tu inmueble completamente a estrenar! Esta es tu mejor opción sí quieres dejar todo como nuevo.
        </div>

        <div className='child'>
          <Image src="/img/building.png" width="100" height="100" />
          Realizamos construcción a nuevo ¿Tienes un terreno y quieres construir la casa de tus sueños? Juntos lo hacemos realidad!
        </div>

      </div>

      <Footer />
    </>
  )
}

export default servRef