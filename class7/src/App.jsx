import React, { useEffect, useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [rounds, setRounds] = useState(0)

  useEffect(()=>{
    console.log("hi")
  },[counter])

  const increment = () =>{
    setCounter(counter + 1)
    if(counter + 1 == 108){
      setRounds(rounds + 1)
      setCounter(0)
    }
  }

  const decrement = () =>{
    if(counter - 1 < 0) return 0
    setCounter(counter - 1)
  }

  const reset = () =>{
    setCounter(0)
  }

  const resetAll = () =>{
    const cnfrm = confirm("Do you really want to reset your progress?")
    if(cnfrm){
      setCounter(0)
      setRounds(0)
    }
  }

  return (
    <div className='h-screen bg-black flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center border-4  border-emerald-900 rounded-xl px-12 py-10 gap-2 text-gray-200'>

      <h1 className='text-3xl mt-2' >Nimai Counter </h1>
      <h2 className='text-7xl mt-2 mb-2' >{counter}</h2>

      <div className='flex'>
        <Button onClick={increment} children={"+"} />
        <Button onClick={decrement} children={"-"} />
        <Button onClick={reset} children={<i className="ri-reset-right-fill"></i>} />
      </div>

      <h3 className='text-3xl m-2'>Rounds : {rounds}</h3>
      <Button onClick={resetAll} children={"Reset"} variant="danger" />
    </div>
      </div>
  )
}

export default App
