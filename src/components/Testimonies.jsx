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
        <div className="prom-video">
            <h1>Video Introductorio</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ccf12v83Cj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
  )
}

export default Testimonies