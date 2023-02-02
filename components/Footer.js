import React from 'react'
import Link from 'next/link';
import Icon from 'react-simple-icons'

function Footer() {
  return (
    <footer>
      <div style={{ display: 'flex' }}>
        <Link href='https://www.instagram.com/canvaisl' className='icon'> <Icon name='instagram' /> </Link>
        <Link href='https://www.linkedin.com/company/can-vai-sl' className='icon'> <Icon name='linkedin' /> </Link>
      </div>
      <a target="_blank" href="https://icons8.com" style={{ color: 'white', display: 'flex', alignItems: 'flex-end' }}>Icons by icons8.com</a>
    </footer>
  )
}

export default Footer