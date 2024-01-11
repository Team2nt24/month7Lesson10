// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { createContext, useContext, useEffect, useState } from "react";

// const AppContext = createContext();
// // eslint-disable-next-line react-refresh/only-export-components
// const AppProvider = ({children}) => {
//  const [ data, setData] =  useState({})

//      useEffect(() => {
//         fetch('https://api.github.com/users/hojiakbar')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setData(data);
//             });

//     }, []);
//     return(
//         <AppContext.Provider value={data}>{children}</AppContext.Provider>
//     )
// }
// export const useGlobalContext = () => {
// 	return useContext(AppContext);
// };
// export { AppContext, AppProvider };