import React from 'react'
import { useToView } from '../../hooks/useToView'
import './mainMenu.css'

export default function MainMenu() {
    return (
        <ul className='menu'>
            <li>
                {useToView('inventario', 'Inventarios')}
            </li>
            <li>
                {useToView('pedidos', 'Pedidos')}
            </li>
            <li>
                {useToView('envios', 'Envíos')}
            </li>
        </ul>
    )
}
