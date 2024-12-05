import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button
    >{label}
    <img 
    src={iconURL}
    alt="arrow right icon"
    className='ml-2 rounded-full w-5 h-5'
    />
    </button>
  )
}

export default Button