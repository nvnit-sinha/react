import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [allUsers, setAllUsers] = useState(['aman'])

  const submitHandler = (e) => {
    e.preventDefault()
    const oldUsers = [...allUsers]
    oldUsers.push(title)

  }

  return (
    <div className='h-screen w-screen bg-white'>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input type="text" 
          placeholder='enter your name'
          value={title}
          required
          onChange = {(e)=>{
            setTitle(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
