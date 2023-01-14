import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <h1 className='logo'>
        <Link href='/'>
            <Image src="/favicon.ico" alt="icon-inmuebles" width="150" height="150" />
        </Link>   
    </h1>
    
  )
}

export default Logo