import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function HeaderInm() {
  return (
    <header>
        <ul>
            <Link href='#nosotros'> <li className='card'> ¿Quiénes Somos? </li> </Link>
            <Link href='#servicios'> <li className='card'> Servicios Inmuebles </li> </Link>
            <Link href='/'> <li> <Image src='/favicon.ico' width='100' height='100' sty/> </li> </Link>
            <Link href='#propiedades'> <li className='card'> Propiedades </li> </Link>
            <Link href='#contact'> <li className='card'> ¡Contáctanos! </li> </Link>
        </ul>
    </header>
  )
}

export default HeaderInm