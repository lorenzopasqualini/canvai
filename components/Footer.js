import React from 'react'
import Link from 'next/link';
import Icon from 'react-simple-icons'

function Footer() {
  return (
    <footer>
      <div style={{ display: 'flex' }}>
        <Link href='' className='icon'> <Icon name='instagram' /> </Link>
        <Link href='' className='icon'> <Icon name='facebook' /> </Link>
      </div>
      <a target="_blank" href="https://icons8.com" style={{ color: 'white', display: 'flex', alignItems: 'flex-end' }}>Icons by icons8.com</a>
    </footer>
  )
}

export default Footer