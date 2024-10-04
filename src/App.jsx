import React from 'react'
import TopButtons from './components/TopButtons.jsx'
import Inputs from './components/Inputs.jsx'
import TimeAndLocation from './components/TimeAndLocation.jsx'
import TodayTempDetails from './components/TodayTempDetails.jsx'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 rounded-md px-32 bg-gradient-to-tl from-sky-200 to-blue-600 shadow-xl shadow-gray-300 '>
      <TopButtons/>
      <Inputs />
      <TimeAndLocation />
      <TodayTempDetails />
    </div>
  )
}

export default App
