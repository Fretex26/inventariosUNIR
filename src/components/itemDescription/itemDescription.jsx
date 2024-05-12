import React from 'react'
import './itemDescription.css'

export default function ItemDescription({item}) {
  return (
    <div className='itemDescription'>
        <h3>Descripción</h3>
        Nombre: {item.name} <br />
        Categoría: {item.category} <br />
        Fabricante: {item.maker} <br />
        Stock: {item.stock} <br />
        Garantía: {item.warranty} <br />
        Precio: ${item.price} USD
    </div>
  )
}