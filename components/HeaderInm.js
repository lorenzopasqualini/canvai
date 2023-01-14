import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function HeaderInm() {
  return (
    <header>
        <ul>
            <Link href='/nosotros'> <li className='cardHeader'> ¿Quiénes Somos? </li> </Link>
            <Link href=''> <li className='cardHeader'> Servicios Inmuebles </li> </Link>
            <Link href='/'> <li> <Image src='/favicon.ico' width='100' height='100' sty/> </li> </Link>
            <Link href=''> <li className='cardHeader'> Propiedades </li> </Link>
            <Link href='/contacto'> <li className='cardHeader'> ¡Contáctanos! </li> </Link>
        </ul>
    </header>
  )
}

export default HeaderInm