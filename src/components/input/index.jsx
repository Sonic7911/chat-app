import React from 'react'

const Input = ({
    label= '',
    id= '',
    type= '',
    placeholder= '',
    name= '',
    isRequired= true,
    value= '',
    onChange= () => {},
}) => {
  return (
    <div className="w-1/2 mx-auto mt-4 ">
    <label htmlFor={name} className="block mb-2 text-sm font-bold text-gray-700"/>{label}              
    <input type={type} id = {id} className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-500" placeholder={placeholder} required={isRequired} value={value} onChange={onChange}/>
  </div>
  )
}

export default Input
