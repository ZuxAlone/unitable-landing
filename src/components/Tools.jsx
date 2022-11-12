import React from 'react'
import featImg1 from '../img/Rutas.png'
import featImg2 from '../img/Grupos.png'

function Tools() {
  return (
    <section class="section" id="tools">
        <div class="tools-divs">
            <div class="tools-divs-components">
                <h1 class="tools-title">Rutas de Aprendizaje</h1>
                <p class="tools-content">
                    Aprende diversos temas y cursos uniéndote a las rutas de aprendizaje que tenemos preparadas para tí, con muchos retos que harán que tu experiencia aprendiendo sea más divertida.
                </p>
            </div>
            <div class="tools-divs-components">
                <img src={featImg1} alt="fondo-rutas" class="lr-image"/>
            </div>
        </div>
        <div class="tools-divs">
            <div class="tools-divs-components">
                <img src={featImg2} alt="fondo-grupos" class="lr-image"/>
            </div>
            <div class="tools-divs-components">
                <h1 class="tools-title">Grupos de Estudio</h1>
                <p class="tools-content">
                    Únete o crea grupos de estudio para poder hablar sobre diversos temas con otros estudiantes y realizar conferencias con diversas herramientas que te ayudaran demostrar tus conocimientos, etc.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Tools