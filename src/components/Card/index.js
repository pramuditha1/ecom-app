import React from 'react'
import "./index.scss"
const Card = (props) => {
  return (
    <div className='card' style={{height: props.height}}>
        {props.children}
    </div>
  )
}

export default Card