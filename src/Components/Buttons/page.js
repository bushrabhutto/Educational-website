import React from 'react'


const Button = ({learn}) => {
  return (
    <div>
<button className="bg-pink-600 hover:scale-105 shadow-md hover:bg-amber-500 duration-300 text-white font-bold py-2 px-4 rounded w-[150px]">{learn}
  </button>
    </div>
  )
}

export default Button