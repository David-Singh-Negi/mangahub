import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex h-screen w-screen  justify-center items-center'>
        <div className='custom-loader'></div>
    </div>
  )
}

export default Spinner