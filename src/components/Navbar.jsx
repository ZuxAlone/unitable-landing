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

    return (
        <nav class="nav">
            <h1 class="logo">UniTable</h1>
            <ul class="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Herramientas</a></li>
                <li><a href="#">Empresas</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Únetenos</a></li>
                <li><a href="#" class="button-nav">Inicie Aquí</a></li>
            </ul>
        </nav>
    )
}

export default Navbar