import React, { useEffect, useState } from 'react'
import makers from '../../../data/makers.json'
import productos from '../../../data/productos.json'
import Modal from '../../../components/modal/modal'
import { useSelectOptionsToJson } from '../../../hooks/useSelectOptionsFromJson/useSelectOptionsToJson'
import './realizarPedido.css'
import Button from '../../../components/button/button'

export default function RealizarPedido() {
  const [showModal, setShowModal] = useState(false)
  const [dataPedido, setDataPedido] = useState({})
  const [makerProducts, setMakerProducts] = useState([])
  const [makerChangeFlag, setMakerChangeFlag] = useState(false)

  const getMakerProducts = () => {
    productos.productos.forEach(producto => {
      if (producto.maker === dataPedido.maker){
        setMakerProducts(makerProducts => [...makerProducts, producto.name])
      }
    });
  }

  useEffect(() => {
    setMakerProducts(() => [])
    setMakerChangeFlag(!makerChangeFlag)
    if(dataPedido.maker){
      getMakerProducts()
    }
    setMakerChangeFlag(!makerChangeFlag)
  }, [dataPedido.maker])
  
  useEffect(() => {
    setDataPedido({...dataPedido,'productName':makerProducts[0]})
  }, [makerChangeFlag])

  const MessageSucced = () => {
    return (
      <div >
        Pedido Realizado con éxito
      </div>
    )
  }
  return (
    <div className='pedidos'>
      <form className='pedidos__form'>
        <label >Escoge un proveedor:</label>
        {useSelectOptionsToJson(makers.makers, 'maker', dataPedido, setDataPedido)}
        <label >Escoge un producto:</label>
        {useSelectOptionsToJson(makerProducts, 'productName', dataPedido, setDataPedido)}
        <label >Cantidad a pedir:</label>
        <input className='inputCantidad' onChange={(e)=>setDataPedido({...dataPedido, 'cantidad':e.target.value})} type="number" />
        <label >Mensaje:</label>
        <textarea className='textAreaMessage' onChange={(e)=>setDataPedido({...dataPedido, 'mensaje':e.target.value})} placeholder='Mensaje al proveedor' rows="5"></textarea>
        <Button action={() => setShowModal(!showModal)} value='Realizar Pedido'/>
      </form>
      <Modal show={showModal} setShow={setShowModal} children={<MessageSucced />} />
    </div>
  )
}
