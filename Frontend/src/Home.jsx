import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState([])
    const [records, setRecords] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            setData(res.data)
            setRecords(res.data);
        })
        .catch(err => console.log(err));
    }, [])
    const Filter = (event) => {
        setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }

  return (
    <div className='show'>
      <div className='bg-light'>
        <div className='bg-white shadow border'>
             < input type="text"  className='form-control'  onChange={Filter}></input>
             
            <table className='table'>
                <div>
                    <ul>
                        <li>owners</li>
                        
                    </ul>
                </div>
                <tbody>
                    {records.map((d,i) => (
                        <tr key={i}>
                            {/* <td>{d.id}</td> */}
                            <td>{d.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

