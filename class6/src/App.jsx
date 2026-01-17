import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [details, setDetails] = useState({id:null,author:"",url:""})

  const getData = async ()=>{

    const random = Math.floor(Math.random()*30)
    const {data} = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')

    const res = data[random];

    setDetails({id: res.id,author: res.author,url: res.url});
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <h2>{details.id}</h2>
      <h2>{details.author}</h2>
      <h2>{details.url}</h2>
    </div>
  )
}

export default App
