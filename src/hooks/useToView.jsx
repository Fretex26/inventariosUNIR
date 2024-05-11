import React from 'react'
import { Link } from 'react-router-dom'
import './useToView.css'

export function useToView(to, label) {
  return (
    <Link className='toView' to={to}><h4>{label}</h4></Link>
  )
}
