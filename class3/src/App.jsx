import React, { useState } from 'react'

const App = () => {
  const mark = [45,56,76,20,28]
  const [marks, setMarks] = useState(mark)  

  function graceStudent(){
    const grace = marks.map((elem)=>{
      return elem+5>100?100:elem+5;
    })
    setMarks(grace);
  }

  return (
    <div className='p-3 text-3xl'>
      {
        marks.map((elem,idx)=>{
          return <h1 key={idx}>Student {idx+1} = {elem} ({elem>=33?'PASS':'FAIL'}) </h1>
        })
      }

      <button onClick={graceStudent} 
      className='bg-emerald-500 active:scale-90 mt-3 w-fit px-4 py-2 text-2xl cursor-pointer rounded'>
      Give them grace</button>
    </div>
  )       
}

export default App
