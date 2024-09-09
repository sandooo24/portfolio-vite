import React from "react";
import Inicio2 from "./Inicio2";
import Footer from "./footer";
import '../css/Contacto.css'

export default function Contacto() {
    return(<>
        <Inicio2/>

        <section>
            <h2>Contacto</h2>
            <div className="contacto">
                <form method='post' name='portafolio'>
                    <input type='hidden' name='form-name' value='portafolio' />
                    <label htmlFor="email">Tu email</label>
                    <input type="text" id="email" name="destinatario" required />
                    <label htmlFor="asunto">Asunto</label>
                    <input type="text" id="asunto" name="asunto" required />
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" placeholder="escribe aqui..." required></textarea>
                    <button type="submit" className="btn">
                        Enviar
                    </button>
                </form>
                <div className="contactos">
                    <div>
                        <img src="../../public/icon/map.svg" width="25"/>
                        <a >Buenos Aires, Argentina</a>
                    </div>
                    <div>
                        <img src="../../public/icon/linkedin.svg" width="25"/>
                        <a href="https://ar.linkedin.com/in/facundo-sandoval-bb4733320?trk=people-guest_people_search-card" target="_blank">Facundo Sandoval</a>
                    </div>
                    <div>
                        <img src="../../public/icon/github-light.svg" width="25"/>
                        <a href="https://github.com/sandooo24" target="_blank">sandooo24</a>
                    </div>
                    <div>
                        <img src="../../public/icon/mail.svg" width="25"/>
                        <a >facundosandoval376@gmail.com</a>
                    </div>
                </div>
            </div>	
	    </section>

        <Footer/>
    </>)
}