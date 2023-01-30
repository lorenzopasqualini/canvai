import React from 'react'
import Image from 'next/image'

export default function ServicioReforma() {
  return (
    <div className='parent' id='servicios'>
        <h2>Servicios</h2>

        <div className='child'>
            <div className='child'>
                <Image src="/img/kitchen.png" width="100" height="100" />
                <div className='parent'>
                    Realizamos reformas parciales: baños, cocinas o cualquier aspecto puntual de tu inmueble que requiera una refacción!
                </div>
            </div>

            <div className='child'>
                <Image src="/img/home.png" width="100" height="100" />
                <div className='parent'>
                    Realizamos reformas integrales: tu inmueble completamente a estrenar! Esta es tu mejor opción sí quieres dejar todo como nuevo.
                </div>
            </div>

            <div className='child'>
                <Image src="/img/building.png" width="100" height="100" />
                <div className='parent'>
                    Realizamos construcción a nuevo ¿Tienes un terreno y quieres construir la casa de tus sueños? Juntos lo hacemos realidad!
                </div>
            </div>
        </div>
    </div>
  )
}