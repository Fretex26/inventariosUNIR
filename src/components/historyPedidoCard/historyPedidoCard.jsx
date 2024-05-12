import React from 'react'
import './historyPedidoCard.css'
import Button from '../button/button'
import FormInfoBlock from '../formInfoBlock/formInfoBlock'

export default function HistoryPedidoCard({pedido}) {
    return (
        <div className='historyPedidoCard'>
            <div className='historyPedidoCard__formularioHistorialPedido'>
                <div className='formularioHistorialPedido__columna1'>
                    <FormInfoBlock title='Proveedor' content={pedido.proveedor} />
                    <FormInfoBlock title='Fecha' content={pedido.fecha_pedido} />
                    <h3>Productos</h3>
                    <div className='columna1__products'>
                        {
                            pedido.productos.map((producto, index) => {
                                return (
                                    <div className='cardProduct'>
                                        <FormInfoBlock key={index} title={producto.nombre} content={
                                            <>
                                                <FormInfoBlock title='Cantidad' content={producto.cantidad} />
                                                <FormInfoBlock title='Precio unitario' content={`$${producto.precio_unitario} USD`} />
                                                <FormInfoBlock title='Precio total' content={`$${producto.valor_total_producto} USD`} />
                                            </>
                                        } />
                                    </div>

                                )
                            })
                        }
                    </div>


                </div>
                <div className='formularioHistorialPedido__columna2'></div>
            </div>
            <FormInfoBlock title='Precio total de la compra' content={`$${pedido.valor_total_pedido} USD`} />
            <div className='historyPedidoCard_segundaParte'>
                <h4>Mensaje</h4>
                <p>Mensaje al proveedor</p>
            </div>
            <Button value='Repetir Pedido' />
        </div>
    )
}
