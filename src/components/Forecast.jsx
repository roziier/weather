import React from 'react'

export default function Forecast({subtitle}) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-mendium uppercase'>{subtitle}</p>
      </div>
      <hr className="my-1" />
      
    </div>
  )
}
