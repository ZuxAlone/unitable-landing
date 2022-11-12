import React from 'react'
import TestimonyBox from './TestimonyBox'
import testImg1 from "../img/tperson_1.png"
import testImg2 from "../img/tperson_2.png"

function Testimonies() {
  return (
    <section className="section" id="testimonies">
        <div className="testimonies-divs">
            <TestimonyBox title="Testimonio 1" image={testImg1} text="Me gusta esta plataforma, puedo organizar mi horario de manera fácil y sencilla. Además, puedo conocer mas personas en los grupos de estudio."/>
            <TestimonyBox title="Testimonio 2" image={testImg2} text="Me encanta, es muy intuitiva y puedo encontrar estudiantes que tienen horarios flexibles que se adecuan a mi horas de enseñanza."/>
        </div>
    </section>
  )
}

export default Testimonies