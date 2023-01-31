import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='parent' id='contact'>
      <h2>Contacto</h2>

      <div className='child'>

        <div className='parent'>
          <Image src="/favicon.ico" width="100" height="100" />
          <h4> CAN VAI S.L. </h4>
          <h5> NIF n° B72506785 </h5>
        </div>

        <div className='parent' id='contact'>
          <h4> info@can-vai.com </h4>
          <p> +34 624292516 </p>
          <p> +34 623338257 </p>
        </div>
      </div>
    </div>
  )
}