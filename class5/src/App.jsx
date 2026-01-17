import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {

  localStorage.setItem('user','Harshit')
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

  const deleteHandler = (idx) => {
    const copyUsers = [...users]
    copyUsers.splice(idx,1)
    setUsers(copyUsers)
  }

  return (
    <div className='min-h-screen overflow-y-auto bg-black text-white'>
      <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-wrap p-2'>
        <input name="name" value={formData.name} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 w-[48%] rounded m-2' 
        type="text" placeholder='Enter your Name' required />
        <input name="image" value={formData.image} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" placeholder='Image URL' required />
        <input name="role" value={formData.role} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" placeholder='Enter Role' required />
        <input name="desc" value={formData.desc} onChange={changeHandler} 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" placeholder='Enter Description' required  />
        <button className='bg-emerald-600  text-xl font-semibold p-3 m-2 rounded
         text-gray-100 active:scale-95 cursor-pointer w-[97%]'>
          Create User
        </button>
      </form>

    <div className='flex flex-wrap gap-4 px-4 py-10'>
      {
        users.map((elem,idx)=>{
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
        })
      }
        </div>
      
    </div>
  )
}

export default App