import React from 'react'
import { Outlet } from 'react-router-dom'
import { useToView } from '../../../hooks/useToView'
import './envios.css'
import SectionTitle from '../../../components/sectionTitle/sectionTitle'

export default function Envios() {
    return (
        <div className='envios'>
            <SectionTitle title='Envíos'/>
            
            <nav className='envios__nav'>
                <ul className='nav__list'>
                    <li className='list__item'>
                        {useToView('realizarEnvio', 'Realizar Envío')}
                    </li>
                    <li className='list__item'>
                        {useToView('historialEnvios', 'Historial Envíos')}
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}