import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderRef from '../components/HeaderRef'
import Footer from '../components/Footer'

function quienes() {
  return (
    <>
        <Head>
            <title>¿Quiénes Somos?</title>
        </Head>

        <HeaderRef />

        <div className='about'>
            <h2>Sobre Nosotros</h2>
        </div>

        <div className='about'>
            <p>
                Somos un equipo de profesionales, y desde la vocación de cada uno de nosotros trabajamos para ofrecerte las mejores oportunidades.
                Nos especializamos en soluciones arquitectónicas e inmobiliarias para que puedas llevar tu hogar o negocio al máximo nivel con seguridad y confianza.
                ¡Nos encanta lo que hacemos y lo hacemos con gran dedicación!
            </p>
        </div>

        <div className='cont'>
            <div className='people'>
                <div className='child'>
                    <Image src='/img/pia.jpg' width='150' height='150' />
                </div>
                <h4>Pía Pasqualini</h4>
                <h6>Inmobiliario (n° AICAT 11939)</h6>
            </div>

            <div className='people'>
                <div className='child'>
                    <Image src='/img/marcelo.jpg' width='150' height='150' />
                </div>
                <h4>Marcelo Pasqualini</h4>
                <h6>Arquitecto</h6>
            </div>    
        </div>


        <Footer />
    </>
  )
}

export default quienes