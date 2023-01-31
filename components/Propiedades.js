import React from 'react'
import Image from 'next/image'

export default function Propiedades() {
  return (
    <div className='parent' id='propiedades'>
        <h2>Propiedades</h2>

        <div className='child' style={{ display: 'flex', alignItems: 'center' }}>
          <Image src='/img/warn.png' width='100' height='100' />
          Oops! In construction. Coming soon.
          <Image src='/img/warn.png' width='100' height='100' />
        </div>
    </div>
  )
}