import { DateTime } from "luxon"

const API_KEY = '8266357b4624952d92a408594a186d5f'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    return fetch(url)
        .then((res) => res.json())
}

const formatToLocalTime = (secs, 
    offset, 
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => 
    DateTime.fromSeconds(secs + offset, {zone: 'utc'}).toFormat(format)

const formatCurrent = (data) => {
    const { 
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone
    } = data

    const {main: details, icon} = weather[0]
    const formattedLocalTime = formatToLocalTime(dt, timezone)

    return {
        name,
        country,
        temp: temp,
        feels_like: feels_like,
        temp_min: temp_min,
        temp_max: temp_max,
        humidity,
        sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
        sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
        speed,
        details,
        icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        formattedLocalTime,
        dt,
        timezone,
        lat,
        lon
    }
}

const formatForecastWeather = (secs, offset, data) => {
    
    const hourly = data.filter(f => f.dt > secs)
        .slice(0,5)
        .map((f) => ({
        temp: f.main.temp,
        wind: f.wind.speed,
        title: formatToLocalTime(f.dt, offset, "hh:mm a"),
        icon: `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        date: f.dt_txt
    }))
    
    const daily = data
        .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
        .map((f) => ({
            temp: f.main.temp,
            wind: f.wind.speed,
            title: formatToLocalTime(f.dt, offset, "ccc"),
            icon: `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
            date: f.dt_txt
        }))

    return {hourly, daily}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrent)

    const {dt, lat, lon, timezone} = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData('forecast', {
        lat, lon, units: searchParams.units
    }).then((data) => formatForecastWeather(dt, timezone, data.list))

    return {...formattedCurrentWeather, ...formattedForecastWeather}
}

export default getFormattedWeatherData