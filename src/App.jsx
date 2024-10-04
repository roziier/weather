import React from 'react'
import TopButtons from './components/TopButtons.jsx'
import Inputs from './components/Inputs.jsx'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 rounded-md px-32 bg-gradient-to-r from-slate-100 to-zinc-300 shadow-xl shadow-gray-300 '>
      <TopButtons/>
      <Inputs />
    </div>
  )
}

export default App
