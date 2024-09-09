import React from "react";
import Inicio from "./Inicio2.jsx";
import Footer from "./footer.jsx";
import '../css/proyecto.css'

export default function Proyectos(){
    return(<>
        <Inicio/>
        
        <section>
            <h2>Proyectos</h2>
            <div className="proyectos">
                <div className="proyecto">
                    <img src="../../public/img/logistruck.png"/>
                    <div className="proyecto-content">
                        <h4>LogisTruck</h4>
                        <p>
                            Es una aplicacion para logisticas con el fin de automatizar y facilitar el trabajo a las empresas y sus trabajadores. 
                        </p>
                        <div className="proyecto-lenguajes">
                            <img src="../../public/icon/html5.svg" />
                            <img src="../../public/icon/javascript.svg" />
                            <img src="../../public/icon/css.svg"/>
                            <img src="../../public/icon/php.svg" />
                        </div>	
                    </div>
                </div>
                
                <div className="proyecto">
                    <img src="../../public/img/foodbranch.png"/>
                    <div className="proyecto-content">
                        <h4>Food Branch</h4>
                        <p>
                            Es una pagina que permite administrar una empresa de comida rapida, como  manejar varias sucursales desde la misma; registrar pedidos,modificarlos y cancelarlos.
                        </p>
                        <div className="proyecto-lenguajes">
                            <img src="../../public/icon/html5.svg" />
                            <img src="../../public/icon/javascript.svg" />
                            <img src="../../public/icon/css.svg" />
                            <img src="../../public/icon/php.svg" />
                        </div>	
                    </div>
                </div>
            </div>	
        </section>
        
        <Footer/>
    </>)
}