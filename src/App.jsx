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

  function handleSubmit(city) {
    setQuery({q: city})
  }

  function handleUnit(unit) {
    setUnits(unit)
  }

  const getWeather = async () => {
    const data = await getFormattedWeatherData({...query, units}).then((data) => {
      setWeather(data)
    })
  }

  useEffect(() => {
    getWeather()
    
  }, [query, units])

  let cssClass = 'bg-gradient-to-tl from-sky-200 to-blue-600 shadow-xl shadow-gray-300'
  if (units !== "metric") {
    cssClass = 'bg-gradient-to-r from-red-500 to-orange-500'
  }

  console.log(weather);


  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 rounded-md px-32 ${cssClass}`}>
      <TopButtons onCity={handleSubmit}/>
      <Inputs onCity={handleSubmit} onUnit={handleUnit}/>
      
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
