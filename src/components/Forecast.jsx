import React from 'react'

export default function Forecast({subtitle, weather}) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-mendium uppercase'>{subtitle}</p>
      </div>
      <hr className="my-1" />
      <div className='flex flex-row items-center justify-center mt-6'>
        {weather.map((data, index) => 
          <li key={index} className='flex flex-col items-center justify-between ml-6 mr-6'>
            <div>{data.title}</div>
            <img id="small-icon" src={data.icon} alt="icon" />
            <div>{data.temp.toFixed(0)}</div>
          </li>
        )}
      </div>
    </div>
  )
}
