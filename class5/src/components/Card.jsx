import React from 'react'

const Card = (props) => {
  return (
      <div key={props.idx} className='w-[23vw]
        rounded-xl py-8 px-4 m-4
        items-center flex flex-col 
        text-center bg-white text-black'>
        <img className='h-24 w-24 rounded-full object-center object-cover' src={props.elem.image} />
        <h1 className='text-xl font-semibold mt-1'>{props.elem.name}</h1>
        <h5 className='text-blue-500 font-semibold text-base my-1' >{props.elem.role}</h5>
        <p className='text-sm font-medium text-gray-500 leading-tight'>{props.elem.desc}</p>
        <button onClick={()=>{
          props.deleteHandler(props.idx)
        }}
        className='bg-red-600 text-white mt-4 rounded px-2 py-1 
            active:scale-95 cursor-pointer'>Remove</button>
        </div>
  )
}

export default Card
