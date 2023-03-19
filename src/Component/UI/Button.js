import React from 'react'

function Button(props) {
  return (
    <button className={` btn ${props.btnType} `}>{props.text}</button> 
  )
}

export default Button