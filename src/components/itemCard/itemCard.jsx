import React, { useState } from 'react'
import './itemCard.css'
import Modal from '../modal/modal'
import ItemDescription from '../itemDescription/itemDescription'
import itemImg from '../../assets/LogoInventarios.png'

export default function ItemCard({ ...item }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='itemCard' onClick={() => setShowModal(!showModal)}>
      <h4>{item.name}</h4>
      <img className='itemCard__img' src={itemImg} alt="itemImg" />
      <h4>Stock: {item.stock}</h4>
      <Modal show={showModal} setShow={setShowModal} children={<ItemDescription item={item} />} />
    </div>
  )
}
