import React from 'react'
import { Outlet } from 'react-router-dom'
import './pedidos.css'
import { useToView } from '../../../hooks/useToView'
import SectionTitle from '../../../components/sectionTitle/sectionTitle'

export default function Pedidos() {
    return (
        <div className='pedidos'>
            <SectionTitle title='Pedidos'/>
            <nav className='pedidos__nav'>
                <ul className='nav__list'>
                    <li className='list__item'>
                        {useToView('realizarPedido', 'Realizar pedido')}
                    </li>
                    <li className='list__item'>
                        {useToView('historialPedidos', 'Historial Pedidos')}
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}