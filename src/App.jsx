import {useEffect, useState} from 'react'
import TopButtons from './components/TopButtons.jsx'
import Inputs from './components/Inputs.jsx'
import TimeAndLocation from './components/TimeAndLocation.jsx'
import TodayTempDetails from './components/TodayTempDetails.jsx'
import Forecast from './components/Forecast.jsx'
import getFormattedWeatherData from './services/weatherService.js'

const App = () => {
  const [query, setQuery] = useState({q: "sacramento"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    const data = await getFormattedWeatherData({...query, units}).then((data) => {
      setWeather(data)
    })
  }

  useEffect(() => {
    getWeather()
  }, [query, units])


  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 rounded-md px-32 bg-gradient-to-tl from-sky-200 to-blue-600 shadow-xl shadow-gray-300 '>
      <TopButtons/>
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TodayTempDetails weather={weather}/>
          <Forecast subtitle={'3 hour step forecast'} weather={weather.hourly}/>
          <Forecast subtitle={'Daily forecast'} weather={weather.daily}/>
        </>
      )
      }
      
    </div>
  )
}

export default App
