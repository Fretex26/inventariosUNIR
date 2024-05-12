import React from 'react'
import './barraDeBusqueda.css'
import lupa from '../../assets/lupa.png'

export default function BarraDeBusqueda({setBusqueda}) {
  return (
    <div className='searchBar'>
        <img className='searchBar__lupa' src={lupa} alt="lupa" />
        <input className='searchBar__input' type="search" name="itemsSearch" id="itemsSearch" onChange={(event)=>setBusqueda(event.target.value)}/>
    </div>
  )
}
