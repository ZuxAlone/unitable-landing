import React, {useState} from 'react'

function Navbar() {
    return (
        <nav className="nav">
            <h1 className="logo">UniTable</h1>
            <ul className="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Herramientas</a></li>
                <li><a href="#">Empresas</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Únetenos</a></li>
                <li><a href="https://ggonzalesd.github.io/UnitableWebApp/" className="button-nav">Inicie Aquí</a></li>
            </ul>
        </nav>
    )
}

export default Navbar