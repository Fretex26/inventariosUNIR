import React, { useEffect, useState } from 'react'
import "./modal.css"

export default function Modal({show, children}) {
    const [isVisible, setIsVisible] = useState(show)
    const [visibility, setVisibility] = useState('visible')
    console.log('isVisible: ',isVisible);
    console.log('show: ',show);
    useEffect(()=>{
        console.log('Entroooooooooo');
        if (show){
            setVisibility('visible')
        } else {
            setVisibility('invisible')
        }
    },[show])
  return (
    <div className={`modal ${visibility}`}>
        <div className='modal__content'>
            {children}
            <button className='content__button' onClick={()=>setIsVisible(!isVisible)}>Ocultar</button>
        </div>
    </div>
  )
}
