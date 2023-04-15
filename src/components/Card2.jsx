import React from 'react'

export const Card = () => {
  return (
    <div className=' w-full h-screen bg-gray-900 text-neutral-300'>
        <div className='mx-auto p-4 border rounded-2xl w-full bg-slate-800 hover:bg-slate-700 max-w-sm flex flex-col justify-center items-center mt-[70px] mb-56 h-[240px] transform transition duration-500 hover:scale-110 shadow-lg shadow-slate-700 text-lg'>
            <h1 className=' text-2xl text-center font-bold mt-4'>Download</h1>
            <p className=' p-2 text-center' >
            TCET Linux source code and installers are available for download for all versions!<br/>
            </p>
            <a href='https://opensource.tcetmumbai.in/docs/projects/docs-site/getting-started' target='_blank'> 
            {/* change the link to direct downloads*/}
            <div className=' flex items-center justify-center '>
                <button className=' p-2 border rounded-md bg-cyan-900 hover:bg-cyan-700 ring ring-cyan-700 ring-offset-1 mt-4 mb-4'>
                    Download 
                </button>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Card


