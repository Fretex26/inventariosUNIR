import React, { useEffect, useState } from 'react'
import makers from '../../../data/makers.json'
import productos from '../../../data/productos.json'
import Modal from '../../../components/modal/modal'
import { useSelectOptionsToJson } from '../../../hooks/useSelectOptionsFromJson/useSelectOptionsToJson'
import './realizarEnvio.css'
import Button from '../../../components/button/button'

export default function RealizarEnvio() {
  const [showModal, setShowModal] = useState(false)
  const [dataEnvio, setDataEnvio] = useState({})
  const [makerProducts, setMakerProducts] = useState([])
  const [makerChangeFlag, setMakerChangeFlag] = useState(false)

  const getMakerProducts = () => {
    productos.productos.forEach(producto => {
      if (producto.maker === dataEnvio.maker){
        setMakerProducts(makerProducts => [...makerProducts, producto.name])
      }
    });
  }

  useEffect(() => {
    setMakerProducts(() => [])
    setMakerChangeFlag(!makerChangeFlag)
    if(dataEnvio.maker){
      getMakerProducts()
    }
    setMakerChangeFlag(!makerChangeFlag)
  }, [dataEnvio.maker])
  
  useEffect(() => {
    setDataEnvio({...dataEnvio,'productName':makerProducts[0]})
  }, [makerChangeFlag])

  const MessageSucced = () => {
    return (
      <div >
        Envío en camino
      </div>
    )
  }
  return (
    <div className='envios'>
      <form className='envios__form'>
        <label >Escoge un proveedor:</label>
        {useSelectOptionsToJson(makers.makers, 'maker', dataEnvio, setDataEnvio)}
        <label >Escoge un producto:</label>
        {useSelectOptionsToJson(makerProducts, 'productName', dataEnvio, setDataEnvio)}
        <label >Cantidad a pedir:</label>
        <input className='inputCantidad' onChange={(e)=>setDataEnvio({...dataEnvio, 'cantidad':e.target.value})} type="number" />
        <label >Dirección:</label>
        <input className='inputCantidad' onChange={(e)=>setDataEnvio({...dataEnvio, 'direccion':e.target.value})} type="text" />
        <label >Quien recibe:</label>
        <input className='inputCantidad' onChange={(e)=>setDataEnvio({...dataEnvio, 'quienRecibe':e.target.value})} type="text" />
        <label >Mensaje:</label>
        <textarea className='textAreaMessage' onChange={(e)=>setDataEnvio({...dataEnvio, 'mensaje':e.target.value})} placeholder='Instrucciones adicionales de envío' rows="5"></textarea>
        <Button action={() => setShowModal(!showModal)} value='Realizar Envío'/>
      </form>
      <Modal show={showModal} setShow={setShowModal} children={<MessageSucced />} />
    </div>
  )
}



