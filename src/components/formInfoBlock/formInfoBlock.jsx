import React from 'react'
import './formInfoBlock.css'

export default function FormInfoBlock({title, content}) {
  return (
    <div className='formInfoBlock'>
        <h4>{title}</h4>
        <div>{content}</div>
    </div>
  )
}
