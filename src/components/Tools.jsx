import React from 'react'
import featImg1 from '../img/Rutas.png'
import featImg2 from '../img/Grupos.png'

function Tools() {
  return (
    <section className="section" id="tools">
        <div className="tools-divs">
            <div className="tools-divs-components">
                <h1 className="tools-title">Rutas de Aprendizaje</h1>
                <p className="tools-content">
                    Aprende diversos temas y cursos uniéndote a las rutas de aprendizaje que tenemos preparadas para tí, con muchos retos que harán que tu experiencia aprendiendo sea más divertida.
                </p>
            </div>
            <div className="tools-divs-components">
                <img src={featImg1} alt="fondo-rutas" className="routes-image"/>
            </div>
        </div>
        <div className="tools-divs">
            <div className="tools-divs-components">
                <img src={featImg2} alt="fondo-grupos" className="groups-image"/>
            </div>
            <div className="tools-divs-components">
                <h1 className="tools-title">Grupos de Estudio</h1>
                <p className="tools-content">
                    Únete o crea grupos de estudio para poder hablar sobre diversos temas con otros estudiantes y realizar conferencias con diversas herramientas que te ayudaran demostrar tus conocimientos, etc.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Tools