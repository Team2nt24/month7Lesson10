
import './App.css'
// import Nav from './components/navigation/Nav'
import {useEffect, useState} from "react";
import Repository from './components/repository';
import Fayl from './components/Fayl';

function App() {
 // eslint-disable-next-line no-unused-vars
 const [ datas, setData] =  useState({})
 const [ search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/hojiakbar')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });

    }, []);


    console.log('input', search);


  return (
    <>

<Repository data={datas} search = {setSearch}/>
<Fayl data={datas}/>
    </>
  )
}

export default App
