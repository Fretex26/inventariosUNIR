import React from 'react'
import HistoryPedidoCard from '../../../components/historyPedidoCard/historyPedidoCard'
import pedidos from '../../../data/pedidos.json'

export default function HistorialPedidos() {
  return (
    <div className='historialPedidos'>
      {
        pedidos.pedidos.map((pedido)=>{
          return <HistoryPedidoCard pedido={pedido}/>
        })
      }
    </div>
  )
}
