import React, { useState } from 'react'

const App = () => {
  const [formData, setformData] = useState({name: '', image:'', role:'',desc:''});
  const [users, setUsers] = useState([])
  const changeHandler = (e) => {
    setformData({...formData, 
      [e.target.name] : e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setUsers([...users, formData])
    setformData({name: '',image: '',role: '',desc: ''})
  }
  return (
    <div className='min-h-screen overflow-y-auto bg-black text-white'>
      <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-wrap p-2'>
        <input name="name" value={formData.name} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 w-[45%] rounded m-2' 
        type="text" placeholder='Enter your Name' required />
        <input name="image" value={formData.image} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" placeholder='Image URL' required />
        <input name="role" value={formData.role} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" placeholder='Enter Role' required />
        <input name="desc" value={formData.desc} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" placeholder='Enter Description' required  />
        <button className='bg-emerald-600  text-xl font-semibold p-3 m-2 rounded
         text-gray-100 active:scale-95 cursor-pointer w-[91.4%]'>
          Create User
        </button>
      </form>

      <div className='flex flex-wrap '>
      {
        users.map((elem) => {
          return <div className='text-3xl border-2 w-fit p-1 m-2 
          flex hover:scale-105 transition-transform'>
            <img className='h-35 w-27' src={elem.image} alt="" />
            <div className='px-2 py-3'>
            <h1>{elem.name}</h1>
            <h1 className='text-gray-300 text-xl'>{elem.role}</h1>
            <h1>{elem.desc}</h1>
            </div>
          </div>
        })
      }
      </div>
      
    </div>
  )
}

export default App
