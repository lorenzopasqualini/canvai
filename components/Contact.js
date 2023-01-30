import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='parent' id='contact'>
      <h2>Contacto</h2>

      <div className='child'>
        <Image src="/favicon.ico" width="100" height="100" />

        <div className='parent'>
          <h3> CAN VAI S.L. </h3>
          <p> NIF n° B72506785 </p>
        </div>

        <div className='parent'>
          <h3> info@can-vai.com </h3>
          <p> +34 624292516 </p>
          <p> +34 623338257 </p>
        </div>
      </div>
    </div>
  )
}