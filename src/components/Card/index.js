import React from 'react'
import "./index.css"
const Card = (props) => {
  return (
    <div className='card'>
        this is card title
        {props.children}
    </div>
  )
}

export default Card