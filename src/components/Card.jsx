import React from 'react'

const Card = ({click, value}) => {


  return (
    <div  onClick={click} className='h-[100px] w-[100px] bg-gray-300 mx-1 my-1 rounded-md hover:bg-gray-800 cursor-pointer flex justify-center items-center'>
    {value}
    </div>
  )
}

export default Card