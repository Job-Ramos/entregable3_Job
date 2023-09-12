
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './assets/useFetch'
import getRandomNumber from './assets/utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setinputValue] = useState(getRandomNumber(126))

  
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [ location,getLocation, hasError] = useFetch(url)
 
useEffect(( )=>  {
   getLocation()
}, [inputValue])

console.log();

const inputSearch =useRef()

const handleSubnit = e =>{
  e.preventDefault()
  setinputValue(inputSearch.current.value.trim())
}

  return (
      <div className='container_body'>
        <h1 className='container_title'>Rick and Morty app</h1>
        <form className='container_form' onSubmit={handleSubnit} >
          <input className='container_type' ref={inputSearch} type="text" />
          <button  className='container_button'>search </button >
        </form>
        {
          hasError
          ?<h2 className='phrase'>❌ Hey! you must provide an id from 1 to 126 😭</h2>
          : (
          <>
          <LocationInfo 
            location={location}
          />
            <div className='container_img'>
              {
                location?.residents.map(url => (
                  <ResidentCard 
                  key={url}
                  url={url}
                  />
                ))
              }
            </div>
          </>
         )
        }
    </div>
  )
}

export default App
