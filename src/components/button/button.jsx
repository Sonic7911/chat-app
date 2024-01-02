import React from 'react'

const Button = ({
    label = '',
    id = '',
    type = '',

}) => {
  return (
    <div>
      <button id ={id} type = {type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-3xl  transition-transform transform hover:scale-105 my-6" >{label}</button>
    </div>
  )
}

export default Button
