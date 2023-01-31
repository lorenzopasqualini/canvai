import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function HeaderRef() {
  return (
    <header>
      <Link href='#nosotros'> <li className='card'> Sobre Nosotros </li> </Link>
      <Link href='#servicios'> <li className='card'> Servicios Reformas </li> </Link>
      <Link href='/'> <Image src='/favicon.ico' width='100' height='100' sty/> </Link>
      <Link href='#portfolio'> <li className='card'> Portfolio </li> </Link>
      <Link href='#contact'> <li className='card'> ¡Contáctanos! </li> </Link>
    </header>
  )
}

export default HeaderRef