import React from 'react'
import {BiSearch, BiCurrentLocation} from "react-icons/bi"

export default function Inputs() {
  return (
    
        <div className='flex flex-row justify-around my-6'>
            <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>
                <input type="text" placeholder='search by city...' className='text-gray-500 font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'/>
                <BiSearch size={30} className='cursor-pointer transition ease-out hover:scale-125'/>
                <BiCurrentLocation size={30} className='cursor-pointer transition ease-out hover:scale-125'/>
            </div>
            <div className='flex flex-row justify-center items-center w-1/4'>
                <button className="text-2xl font-medium transition ease-out hover:scale-125">°C</button>
                <p className="text-2xl font-medium mx-4">|</p>
                <button className="text-2xl font-medium transition ease-out hover:scale-125">°F</button>
            </div>
        </div>
        
    
  )
}
