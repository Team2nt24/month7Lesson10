
import { useEffect, useState } from 'react'
import './App.css'
import Events from './pages/events/Events'

const url = 'https://api.github.com/users/ali/received_events'

function App() {

  const [eventsList, setEventsList] = useState([])

  const fetchEvents = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setEventsList(data)
      console.log(data);
    } catch (error) {
      console.error(error);     
    }
  }

  useEffect(() => {
    fetchEvents()
    
  }, [])

  return (
    <>
      <Events eventsList={eventsList} />
    </>
  )
}

export default App
