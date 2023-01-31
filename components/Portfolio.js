import React from 'react'
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

export default function Portfolio() {
  return (
    <div className='parent' id='portfolio'>
      <h2>Portfolio</h2>
      Contamos con más de 30 años de trayectoria en el rubro de la construcción, arquitectura y las reformas. A continuación podrás ver imágenes de algunos de nuestros trabajos más recientes.

      <Splide options={{width: '50rem', rewind: true, autoplay: true, interval: 2500, easing: 'cubic-bezier(0.25, 1, 0.5, 1)', arrows: false }}>
        <SplideSlide>
          <Image src='/img/7.png' width='768' height='364'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/8.png' width='768' height='364'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/9.png' width='768' height='364'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/11.png' width='768' height='364'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/12.png' width='768' height='364'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/13.png' width='768' height='364'/>
        </SplideSlide>
      </Splide>

    </div>
  )
}