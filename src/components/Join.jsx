import React from 'react'

function Join() {
  return (
    <section className="section" id="join-us">
        <div className="join-div">
            <div>
                <div><h1>Únete a nuestra comunidad y comienza a aprender con UniTable</h1></div>
                <div className="inputs">
                    <input type="text" placeholder="Nombres y Apellidos"/>
                    <input type="email" placeholder="Correo electrónico"/>
                </div>
            </div>
            <div className="join-btn-div">
                <a href="#" className="button-primario">Únete</a>
            </div>
        </div>
    </section>
  )
}

export default Join