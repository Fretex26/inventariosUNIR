import React from 'react'
import './button.css'

export default function Button({action, value}) {
  return (
    <input className='inputButton' type='button' onClick={action} value={value} />
  )
}
