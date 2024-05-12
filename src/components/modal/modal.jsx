import React, { useEffect, useState } from 'react'
import "./modal.css"

export default function Modal({show, setShow,children}) {
    const [isVisible, setIsVisible] = useState(show)
    const [visibility, setVisibility] = useState('invisible')

    useEffect(()=>{
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
            <button className='content__button' 
                    onClick={()=>{
                        setIsVisible(!isVisible)
                        setShow(false)
                    }}
            >Ocultar</button>
        </div>
    </div>
  )
}
