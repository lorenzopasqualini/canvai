import React from 'react'
import Image from 'next/image'

export default function ServicioReforma() {
  return (
    <div className='parent' id='servicios'>
        <h2>Servicios</h2>

        <div className='child'>
            <div className='child'>
                <div className='parent'>
                    <Image src="/img/kitchen.png" width="100" height="100" />    
                    Realizamos reformas PARCIALES: baños, cocinas o cualquier aspecto puntual de tu inmueble que requiera una refacción!
                </div>
            </div>

            <div className='child'>
                <div className='parent'>
                    <Image src="/img/home.png" width="100" height="100" />
                    Realizamos reformas INTEGRALES: tu inmueble completamente a estrenar! Esta es tu mejor opción sí quieres dejar todo como nuevo.
                </div>
            </div>

            <div className='child'>
                <div className='parent'>
                    <Image src="/img/building.png" width="100" height="100" />
                    Realizamos CONSTRUCCIÓN, obra nueva: ¿Tienes un terreno y quieres construir la casa de tus sueños? Juntos lo hacemos realidad!
                </div>
            </div>
        </div>
    </div>
  )
}