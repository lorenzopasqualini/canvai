import React from 'react'
import Image from 'next/image'

export default function Propiedades() {
  return (
    <div className='parent' id='propiedades'>
        <h2>Propiedades</h2>

        <div className='child' style={{ display: 'flex', alignItems: 'center' }}>
          <Image src='/img/warn.png' width='50' height='50' />
          Oops! In construction. Coming soon.
          <Image src='/img/warn.png' width='50' height='50' />
        </div>
    </div>
  )
}