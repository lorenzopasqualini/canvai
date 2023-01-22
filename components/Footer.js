import React from 'react'
import Link from 'next/link';
import Icon from 'react-simple-icons'

function Footer() {
  return (
    <footer>
      <Link href='' className='card'> <Icon name='instagram' /> </Link>
      <Link href='' className='card'> <Icon name='facebook' /> </Link>
    </footer>
  )
}

export default Footer