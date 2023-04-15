import React from 'react'

export const Card = () => {
  return (
    <div className=' w-full h-screen bg-gray-900 text-neutral-300'>
        <div className='mx-auto p-4 border rounded-2xl w-full bg-slate-800 hover:bg-slate-700 max-w-sm flex flex-col justify-center items-center mt-[70px] mb-56 h-[240px] transform transition duration-500 hover:scale-110 shadow-lg shadow-slate-700 text-lg'>
            <h1 className=' text-2xl text-center font-bold mt-4 mb-4'>About Us</h1>
            <p className=' p-2 text-center'>
            Arch Linux based Linux distribution built for enhancing college infrastructure and promoting Linux in software engineering education.
            </p>
           
        </div>
    </div>
  )
}

export default Card


