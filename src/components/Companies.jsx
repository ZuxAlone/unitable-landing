import React from 'react'
import compImg1 from "../img/UPC_logo.png"
import compImg2 from "../img/UPN_logo.png"
import compImg3 from "../img/COURSERA_logo.png"
import compImg4 from "../img/UTP_logo.png"

function Companies() {
  return (
    <section className="section" id="companies">
        <div className="companies-section-main">
            <h1>Relaciones empresariales</h1>
            <p>Contamos con el apoyo de diversas entidades educativas y empresas como:</p>
        </div>
        <div className="companies-grid1">
            <div className="companies-grid2">
                <img src={compImg1} alt="UPC_logo" className="company-img"/>
                <img src={compImg2} alt="UPN_log" className="company-img"/>
            </div>
            <div className="companies-grid2">
                <img src={compImg3} alt="COURSERA_logo" className="company-img"/>
                <img src={compImg4} alt="UTP_log" className="company-img"/>
            </div>
        </div>
    </section>
  )
}

export default Companies