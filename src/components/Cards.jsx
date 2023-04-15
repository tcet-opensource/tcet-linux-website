import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

export const Cards = () => {
  return (
    <div className='flex flex-row h-[48vh] bg-gray-900'>
        <Card1 />
        <Card2 />
        <Card3 />
    </div>
  )
}

export default Cards
