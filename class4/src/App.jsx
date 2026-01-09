import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [allUsers, setAllUsers] = useState([])

  function submitHandler(e){
    e.preventDefault();

    const oldUsers = [...allUsers]
    oldUsers.push({title,email})

    setAllUsers(oldUsers)

    setTitle('')
    setEmail('')
  }

  return (
    <div className='h-screen w-screen bg-black text-white p-2'>
      <h1 className='text-4xl mb-4 px-1'>hey bruh!</h1>
      <form 
        onClick={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col'>
        <input 
        type="text" 
        className='w-fit px-2 py-1'
        placeholder='Enter your name' 
        value={title}
        required
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
         />

        <input 
        type="text" 
        className='w-fit px-2 py-1'
        placeholder='Enter your email' 
        value={email}
        required
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
         />
        <button className='bg-gray-600 px-2 w-fit mt-3 rounded py-1'>Submit</button>
      </form>
      {
        allUsers.map((elem,idx)=>{
          return <div key={idx} > 
          <h4>{elem.title}</h4>
          <h4>{elem.email}</h4>
          </div>
        })
      }
    </div>
  )
}

export default App
