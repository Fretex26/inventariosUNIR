import React from 'react'
import { Outlet } from 'react-router-dom'
import './home.css'
import CompanyLogo from '../../components/companyLogo/companyLogo'
import MainMenu from '../../components/mainMenu/mainMenu'

export default function Home() {
    return (
        <div className='home'>
            <nav className='home__menu'>
                <CompanyLogo/>
                <MainMenu/>
            </nav>
            <div className='home__viewContent'>
                <Outlet />
            </div>
        </div>
    )
}
