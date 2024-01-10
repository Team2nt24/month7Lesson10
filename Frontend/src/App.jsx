
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import { useGlobalContext } from "./context";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import SearchModal from "./components/SearchModal";
import Footer from "./components/Footer";
import ComandaPlatte from "./components/ComandaPlatte";
import CreateNew from "./components/CreateNew";

import Events from "./pages/events/Events";

export default function App() {
  const {
    username,
    isOpen,
    isOpenRight,
    isOpenSearchModal,
    comandaPalette,
    createNew
    
  } = useGlobalContext();

  

  // const url = `https://api.github.com/users/${username}/received_events`;

  
  return (
    <>
      {!username ? null : <Navbar />}
      {isOpen && username ? <SidebarLeft /> : null}
      {isOpenRight && username ? <SidebarRight /> : null}
      {isOpenSearchModal && username ? <SearchModal /> : null}
      {comandaPalette && username ? <ComandaPlatte /> : null}
      {createNew && username ? <CreateNew /> : null}

      <Routes>
        <Route path="/" element={username ? null : <LoginPage />} />
      </Routes>
      <Events  />
      <Footer />
    </>
  );
}
