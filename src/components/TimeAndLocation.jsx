import React from 'react'

export default function TimeAndLocation({weather}) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">
            {weather.formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">
          {weather.name}, {weather.country}
        </p>
      </div>
    </div>
  )
}
