import React from 'react'
import './companyLogo.css'
import logo from './../../assets/LogoInventarios.png'

export default function CompanyLogo() {
    return (
        <div className='companyLogo'>
            <img src={logo} alt="LogoInventarios" />
            <h3>Inventario</h3>
        </div>
    )
}
