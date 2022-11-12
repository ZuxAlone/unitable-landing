import React from 'react'
import img1 from "../img/vec_whatsapp.png"
import img2 from "../img/vec_twitter.png"
import img3 from "../img/vec_instagram.png"
import img4 from "../img/vec_facebook.png"

function Footer() {
  return (
    <footer>
        <table className="footer-table">
            <tr id="footer-table-left">
                <td>
                    <h1 className="logo">UniTable</h1>
                </td>
                <td id="footer-table-right">
                    <nav className="nav-footer">
                        <ul className="nav-list">
                            <li><a href="#">Contáctanos</a></li>
                            <li><a href="#">Ayuda</a></li>
                            <li><a href="#">App móvil gratis</a></li>
                        </ul>
                    </nav>
                </td>
            </tr>
            <tr>
                <td id="footer-table-left">
                    <h6>Términos y condiciones</h6>
                </td>
                <td id="footer-table-right">
                    <nav className="logos">
                        <ul className="nav-list logo-list">
                            <li><a href="#"><img src={img1} alt="WhatsApp_logo"/></a></li>
                            <li><a href="#"><img src={img2} alt="Twitter"/></a></li>
                            <li><a href="#"><img src={img3} alt="Instagram_logo"/></a></li>
                            <li><a href="#"><img src={img4} alt="Facebook_logo"/></a></li>
                        </ul>
                    </nav>
                </td>
            </tr>
        </table>
    </footer>
  )
}

export default Footer