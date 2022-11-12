import React, {useState} from 'react'

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <nav className="nav">
            <h1 className="logo">UniTable</h1>
            <ul className="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Herramientas</a></li>
                <li><a href="#">Empresas</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Únetenos</a></li>
                <li><a href="#" className="button-nav">Inicie Aquí</a></li>
            </ul>
        </nav>
    )
}

export default Navbar