import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='container_information'>
        <h2 className='container_location'>{location?.name}</h2>
        <ul className='container_inf'>
        <li className='father'><span className='tipos'>Type:</span><br /><span className='type_inf'>{location?.type}</span></li>
        <li className='father'><span className='container_dimension'>Dimension:</span><br /><span className='type_inf'>{location?.dimension || 'unknown'}</span></li>
        <li className='father'><span className='container_population'>Population:</span><br /><span className='type_inf'>{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationInfo