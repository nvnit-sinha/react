import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-emerald-500 w-fit p-4 m-5 rounded-md'>
      <h1 className='text-2xl font-bold'>{props.text}</h1>
    </div>
  )
}

export default Card
