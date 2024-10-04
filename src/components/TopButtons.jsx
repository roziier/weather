import React from 'react'

export default function TopButtons() {
    const cities = [{
            id: 1,
            name: "Brescia"
        },
        {
            id: 2,
            name: "Cork"
        },
        {
            id: 3,
            name: "Tokyo"
        },
        {
            id: 4,
            name: "Perth"
        },
        {
            id: 5,
            name: "Sacramento"
        }
    ]


  return (
    <div className="flex flex-items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'>{city.name}</button>
      ))}
    </div>
  )
}
