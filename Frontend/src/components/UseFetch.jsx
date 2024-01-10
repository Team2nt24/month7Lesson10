import { useEffect, useState } from "react";



const useFetch = (adress) => {
    const [datas, setData] = useState([]);
    useEffect(() => {
      fetch(adress)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [adress]);
  
    return [datas];
  };


export default useFetch;