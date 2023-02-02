import React from 'react'
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

export default function Portfolio() {
  return (
    <div className='parent' id='portfolio'>
      <h2>Portfolio</h2>
      Contamos con más de 30 años de trayectoria en el rubro de la construcción, arquitectura y las reformas. A continuación podrás ver imágenes de algunos de nuestros trabajos más recientes.

      <Splide options={{ width: '65rem', rewind: true, autoplay: true, interval: 3000, easing: 'cubic-bezier(0.25, 1, 0.5, 1)', pagination: false }}>
        <SplideSlide>
          <Image src='/img/10.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/11.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/12.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/13.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/14.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/15.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/16.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/17.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/18.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/19.png' width='1000' height='600'/>
        </SplideSlide>

        <SplideSlide>
          <Image src='/img/20.png' width='1000' height='600'/>
        </SplideSlide>
      </Splide>

    </div>
  )
}