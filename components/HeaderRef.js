import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function HeaderRef() {
  return (
    <header>
        <ul>
            <Link href='/nosotros'> <li className='cardHeader'> ¿Quiénes Somos? </li> </Link>
            <Link href='/servRef'> <li className='cardHeader'> Servicios Reformas </li> </Link>
            <Link href='/'> <li> <Image src='/favicon.ico' width='100' height='100' sty/> </li> </Link>
            <Link href='/portfolio'> <li className='cardHeader'> Portfolio </li> </Link>
            <Link href='/contacto'> <li className='cardHeader'> ¡Contáctanos! </li> </Link>
        </ul>
    </header>
  )
}

export default HeaderRef