import React from 'react'
import {FaThermometerEmpty} from 'react-icons/fa'
import {FiWind} from 'react-icons/fi'
import {GiSunrise, GiSunset} from 'react-icons/gi'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

export default function TodayTempDetails() {
  return (
    <div className='flex flex-row justify-between'>

      <div className="border border-black w-1/3 rounded-lg flex flex-col items-start justify-center p-4 m-2">
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather" />
        <h1 className='font-semibold text-3xl ml-3'>32 °C</h1>
        <div className='font-normal text-sm ml-3'>feels like 22 °C</div>
        <h3 className='font-semibold text-xl ml-3'>Rainy</h3>

      </div>
      <div className="border border-black rounded-lg w-2/3 flex flex-wrap p-6 m-2">
      <div className="p-2 w-2/4 flex flex-row items-center justify-center">
            <FaThermometerEmpty size={30}/>
            <p className='font-light ml-2'>46% <span className='font-medium'>Humidity</span></p>
        </div>
        <div className="p-2 w-2/4 flex flex-row items-center justify-center">
            <FiWind size={30}/>
            <p className='font-light ml-2'>46% <span className='font-medium'>Wind</span></p>
        </div>
        <div className="p-2 w-2/4 flex flex-row items-center justify-center">
            <GiSunrise size={30}/>
            <p className='font-light ml-2'>46% <span className='font-medium'>Sunrise</span></p>
        </div>
        <div className="p-2 w-2/4 flex flex-row items-center justify-center">
            <GiSunset size={30}/>
            <p className='font-light ml-2'>46% <span className='font-medium'>Sunset</span></p>
        </div>
        <div className="p-2 w-2/4 flex flex-row items-center justify-center">
            <MdKeyboardArrowUp size={30}/>
            <p className='font-light ml-2'>46% <span className='font-medium'>High</span></p>
        </div>
        <div className="p-2 w-2/4 flex flex-row items-center justify-center">
            <MdKeyboardArrowDown size={30}/>
            <p className='font-light ml-2'>46% <span className='font-medium'>Low</span></p>
        </div>
      </div>
    </div>
  )
}
