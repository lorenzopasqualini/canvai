import Head from 'next/head'
import Link from 'next/link'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
    <Head>
      <title>CanVai</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Logo />

    <div className="cont">

      <div className="home" id='reformas'>
        <Link href="/reformas" className='card'> Reformas </Link>
      </div>

      <div className="home" id='inmuebles'>
        <Link href="/inmuebles" className='card'> Inmuebles </Link>
      </div>

    </div>
    </>
  )
}