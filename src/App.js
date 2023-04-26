import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import "./App.css"
function App() {

const [info,setInfo] = useState([])
  
useEffect(()=>{
  axios.get('/api/data/')
  .then(({data})=>
  // console.log(data)
  setInfo(data)
 
  )
},[])

return (
     <>
    
  {info.map((lt)=>{
    return(
<div className="table">
  <table>
    <tr>
    {/* <th>Employement</th>
    <th>Movies</th> */}
    </tr>
    <tr></tr>
      <td><h3>{lt.name}</h3></td>
      <td> <h3>{lt.title}</h3></td>
      </table>
      </div>
    )
  })}

     </>
   )
}


export default App


