import React from 'react'
import Navbar from './Navbar'
import fondo from '../img/Fondo.jpg'

function Header() {
    return (
        <div>
        <Navbar/>
        <div className="main">
            <div>
                <h1>¿Qué es UniTable?</h1>
                <p>UniTable es una plataforma web que te ayudara a mejorar en los estudios con sus diversas funcionalidades, además te
                ayudará a mejorar tu concentración y a organizar tu tiempo.</p>
                <div className="main-buttons">
                    <a href="https://ggonzalesd.github.io/UnitableWebApp/" className="button-primario">Únete</a>
                    <a href="#" className="button-secundario">App móvil gratis</a>
                </div>
            </div>
            <div>
                <img src={fondo} alt="fondo-main" className="main-image"/>
            </div>
        </div>
        </div>
    )
}

export default Header