import Image from 'next/image'
import React from 'react'

const CardsFeatures = ({titulo,parrafo,foto}) => {
  return (
    <div className="cardAsic">
          {/* <div className="cardIcon"> <img className='foto-card-asic' alt='' src={foto}/> </div>
          <h1>{titulo}</h1>
          <span>
            {parrafo}
          </span> */}
          <Image height={100} width={150} alt='' src={`${foto}`}/>
        </div>
  )
}

export default CardsFeatures