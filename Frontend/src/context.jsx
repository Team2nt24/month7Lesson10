import axios from "axios";
import { useContext, useState, createContext } from "react";





const AppContext = createContext();



const AppPrivider = ({children}) => {
       
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState(null);


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
    const signOut = () => {
        setUsername('')
        location.reload(true)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`, {
            auth: {
              username: username,       
            },
          });
    
          console.log('Login successful:', response.data);
          setErrorMessage('');
        } catch (error) {
          console.error('Login failed:', error);
          setErrorMessage('Invalid username or password');
        }
      };

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
            handlePasswordChange,
            handleFormSubmit,
            signOut

        }}>
          {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext,AppPrivider};