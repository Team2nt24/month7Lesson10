/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useContext, useState, createContext, useEffect } from "react";
import useFetch from "./components/UseFetch";





const AppContext = createContext();



const AppPrivider = ({children}) => {

       
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState(null);
    const [logName, setLogName] = useState('');
    // const [id, setId] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRight, setIsOpenRight] = useState(false);
    const [isOpenSearchModal, setIsOpenSearchModal ] = useState(false)
    const [comandaPalette, setComandaPalette] = useState(false)
    const [createNew, setCreateNew] = useState(false)
    const userData = useFetch(`https://api.github.com/users/${username}`);
    const [eventsList, setEventsList] = useState([]);
  


    const img = userData[0].avatar_url


    const handleUsernameChange = () => {
        setUsername(logName);
      };


    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    //   };
    
    const signOut = () => {
        setUsername('')
        location.reload(true)
    }

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const fetchEvents = async () => {
      try {
        const resp = await fetch(`https://api.github.com/users/${username}/received_events`);
        const data = await resp.json();
        setEventsList(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchEvents();
    }, []);

    


    // const handleFormSubmit = async (e) => {
    //     // e.preventDefault();
    
    //     try {
    //       const response = await axios.get(`https://api.github.com/users/${username}`, {
    //         auth: {
    //           username: username,       
    //         },
    //       });
          
    //       console.log('Login successful:', response.data);
          
    //       setErrorMessage('');
    //     } catch (error) {
    //       console.error('Login failed:', error);
    //       setErrorMessage('Invalid username');
    //     }
    //   };

      useEffect(() =>{

      },[])
    return(
        <AppContext.Provider value={{
            username,
            setUsername,
            // password,
            // setPassword,
            errorMessage,
            setErrorMessage,
            data, setData,
            handleUsernameChange,
            signOut, setLogName,logName,
            img, 
            toggleSidebar,
            isOpen, setIsOpen,
            isOpenRight, setIsOpenRight,
            isOpenSearchModal, setIsOpenSearchModal,
            comandaPalette, setComandaPalette,
            createNew, setCreateNew,
            eventsList, setEventsList,
            fetchEvents

        }}>
          {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext,AppPrivider};