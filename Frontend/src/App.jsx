
import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import { useGlobalContext } from './context'
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import ComandaPlatte from './components/ComandaPlatte';
import CreateNew from './components/CreateNew';


import Events from './pages/events/Events'



const url = 'https://api.github.com/users/Muh1isa/received_events'

export default function App() {
      const {
        username,
        isOpen,
        isOpenRight, 
        isOpenSearchModal,
        comandaPalette,
        createNew, 
      } = useGlobalContext();
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
    {!username ? null: <Navbar/>}
    {isOpen && username ?<SidebarLeft/>:null}
    {isOpenRight && username ?<SidebarRight/>:null}
    {isOpenSearchModal && username ? <SearchModal/>:null}
    {comandaPalette && username ? <ComandaPlatte/> : null}
    {createNew && username ? <CreateNew/> : null}


    <Routes>
      <Route path='/' element={username ? null:<LoginPage/>}/>
      {/* <Route path='/' element={username ? null:<Footer/>}/> */}
    </Routes>
    <Events eventsList={eventsList} />
    <Footer/>
    
    </>
  )}
