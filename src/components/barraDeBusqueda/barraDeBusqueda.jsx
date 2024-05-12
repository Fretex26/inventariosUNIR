import React from 'react'
import './barraDeBusqueda.css'

export default function BarraDeBusqueda({setBusqueda}) {
  return (
    <div className='searchBar'>
        <img className='searchBar__lupa' src="/src/assets/lupa.png" alt="lupa" />
        <input className='searchBar__input' type="search" name="itemsSearch" id="itemsSearch" onChange={(event)=>setBusqueda(event.target.value)}/>
    </div>
  )
}
