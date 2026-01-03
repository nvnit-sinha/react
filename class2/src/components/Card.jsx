import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-gray-300 h-111 w-70 rounded-3xl relative hover:scale-110 transition-all ease-in-out'>

        <img className='h-111 w-100 p-2 object-cover rounded-3xl' src={props.img} alt="" />

        <div className='absolute bottom-1.5 p-4 flex flex-col gap-2 bg-transparent' >
            <h1 className='text-white px-3'>{props.name} <i class="ri-verified-badge-fill text-blue-800"></i></h1>

            <p className='text-white px-3 leading-5 line-clamp-1 hover:line-clamp-none'>{props.slogan}</p>

            <div className='text-white flex justify-between items-center px-3 leading-5'>
                <div>
                <i class="ri-star-fill text-amber-300"></i>
                <span> {props.rating}</span>
                <h3>Rating</h3>
                </div>

                <div>
                    <h3>${props.earning}k+</h3>
                    <h3>Earned</h3>
                </div>

                <div>
                    <h3>${props.rate}/hr</h3>
                    <h3>Rate</h3>
                </div>
            </div>
            <div className='flex gap-8 mt-1'>
                    <div className='flex gap-1  bg-white text-gray-600 w-fit rounded-3xl px-10 py-0.5 active:bg-transparent hover:cursor-none transition-all'>
                    <i class="ri-mail-line"></i>
                    <span>Get in Touch</span>
                    </div>
                    <h3 className='rounded-xl px-1 bg-gray-400 active:scale-200 cursor-pointer transition-all'><i class="ri-bookmark-line text-white"></i></h3>
            </div>

        </div>
    </div>
  )
}

export default Card