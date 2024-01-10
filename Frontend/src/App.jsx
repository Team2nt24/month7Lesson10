

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
import './App.css'
import Events from './pages/events/Events'

// const url = 'https://api.github.com/users/Muh1isa/received_events'

function App() {


  



      const {
        username,
        isOpen,
        isOpenRight, 
        isOpenSearchModal,
        comandaPalette,
        createNew, 
      } = useGlobalContext();




      
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
    
    {username? <Events />:null}
    <Footer/>
  </>  
  )}



export default App
