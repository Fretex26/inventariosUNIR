import React from 'react'
import './historyEnvioCard.css'
import Button from '../button/button'
import FormInfoBlock from '../formInfoBlock/formInfoBlock'

export default function HistoryPedidoCard({envio}) {
    return (
        <div className='historyEnvioCard'>
            <div className='historyEnvioCard__formularioHistorialEnvio'>
                <div className='formularioHistorialEnvio__columna1'>
                    <FormInfoBlock title='Cliente' content={envio.nombre} />
                    <FormInfoBlock title='Fecha' content={envio.fecha_compra} />
                    <h3>Productos</h3>
                    <div className='columna1__products'>
                        {
                            envio.productos.map((producto, index) => {
                                return (
                                    <div className='cardProduct'>
                                        <FormInfoBlock key={index} title={producto.nombre} content={
                                            <>
                                                <FormInfoBlock title='Producto' content={producto.nombre} />
                                                <FormInfoBlock title='Cantidad' content={producto.cantidad} />
                                                <FormInfoBlock title='Total' content={`$${producto.total} USD`} />
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
            <FormInfoBlock title='Precio total de la compra' content={`$${envio.valor_total} USD`} />
            <div className='historyPedidoCard_segundaParte'>
                <h4>Mensaje</h4>
                <p>Instrucciones de envío</p>
            </div>
        </div>
    )
}
