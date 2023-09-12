import React, { useEffect } from 'react'
import useFetch from '../assets/useFetch'

const ResidentCard = ({url}) => {

 const [ residents,getResident ] = useFetch(url)

useEffect(() => {
    getResident()
},[])


  return (
    <article className='resident'>
        <header className='resident_header'>
            <img className='resident_img' src={residents?.image} alt="" />
        <div className='resident_status'>
            <span className={`resident_status_circle ${residents?.status}`}></span>
            <span className='resident_status_value'>{residents?.status}</span>
        </div >
        </header >
        <section className='resident_body'>
            <h3 className='resident_name'>{residents?.name}</h3>
            <hr className='resident_separator' />
            <ul className='resident_list'>
          <li className='resident_item'>
            <span className='resident_label'>Specie</span>
            <span className='resident_value'>{residents?.species}</span>
            </li>
          <li className='resident_item'>
            <span className='resident_label'> Origin</span>
            <span className='resident_value'>{residents?.origin.name}</span>
            </li>
          <li className='resident_item'>
            <span className='resident_label'>Episodes where appear</span>
            <span className='resident_value'>{residents?.episode.length}</span>
            </li>
        </ul>
        </section>
    </article>
  )
}

export default ResidentCard