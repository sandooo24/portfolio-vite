import React from "react";
import Inicio from "./Inicio2.jsx";
import Footer from "./footer.jsx";
import '../css/proyecto.css'
import '@splidejs/react-splide/css';
import { Splide, SplideTrack,SplideSlide } from '@splidejs/react-splide'

export default function Proyectos(){
    return(<>
        <Inicio/>
        
        <section>
            <h2>Proyectos</h2>
            <div className="proyectos">
                {/* LOGISTRUCK */}
                <div className="proyecto logistruck">
                    <div className="proyecto-links">
                        <a className="proyecto-link" href="https://logistruck.escuelarobertoarlt.com" target="blank">
                            <img src="../../public/icon/arrow-right-up.svg"/>
                        </a>
                    </div>

                    <h3>LogisTruck</h3>
                    <p>
                        Es una aplicación web destinada a logisticas con el fin de automatizar y facilitar el trabajo a las empresas y sus trabajadores. 
                    </p>
                    
                    <Splide options={{
                        type: 'loop',
                        autoplay: true,
                        arrows: false,
                    }}>
                            <SplideSlide>
                                <img src="../../public/img/logistruck.png"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src="../../public/img/screen-1-logistruck.png"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src="../../public/img/screen-2-logistruck.png"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src="../../public/img/screen-3-logistruck.png"/>
                            </SplideSlide>
                    </Splide>
                    
                    <div className="proyecto-tools">
                        <img src="../../public/icon/html5.svg" />
                        <img src="../../public/icon/javascript.svg" />
                        <img src="../../public/icon/css.svg"/>
                        <img src="../../public/icon/php.svg" />
                        <img src="../../public/icon/api.svg" />
                        <img src="../../public/icon/mysql.svg" />
                    </div>
                </div>
                
                {/* RAPIDASH */}
                <div className="proyecto rapidash">
                    <div className="proyecto-links">
                        <a className="proyecto-link" href="https://github.com/7mo-3ra-G2-2024/sucursal" target="blank">
                            <img src="../../public/icon/github-light.svg"/>
                        </a>
                    </div>

                    <h3>Rapidash</h3>
                    <p>
                        Es una página que permite administrar una empresa de comida rapida, como  manejar varias sucursales desde la misma; registrar pedidos,modificarlos y cancelarlos. 
                    </p>
                    
                    <div className="proyecto-imgs-una">
                        <img src="../../public/img/rapidash.png"/>
                    </div>
                    
                    <div className="proyecto-tools">
                        <img src="../../public/icon/html5.svg" />
                        <img src="../../public/icon/javascript.svg" />
                        <img src="../../public/icon/css.svg"/>
                        <img src="../../public/icon/php.svg" />
                    </div>
                </div>

                {/* BUSCADOR DE DIRECCIONES */}
                <div className="proyecto">
                    <div className="proyecto-links">
                        <a className="proyecto-link" href="https://github.com/sandooo24/buscador-direcciones" target="blank">
                            <img src="../../public/icon/github-light.svg"/>
                        </a>
                        <a className="proyecto-link" href="https://buscadorapigeoref.netlify.app/" target="blank">
                            <img src="../../public/icon/arrow-right-up.svg"/>
                        </a>
                    </div>

                    <h3>Buscador de direcciones</h3>
                    <p>
                        Es una página web para buscar direcciones solamente de argentina hecho con la api <b>Georef</b> para las direcciones  y <b>leaflet js</b> para mostrar el mapa.
                    </p>
                    
                    <div className="proyecto-imgs-una">
                        <img src="../../public/img/buscadordire.png"/>
                    </div>
                    
                    <div className="proyecto-tools">
                        <img src="../../public/icon/html5.svg" />
                        <img src="../../public/icon/javascript.svg" />
                        <img src="../../public/icon/css.svg"/>
                        <img src="../../public/icon/api.svg" />
                    </div>
                </div>

                
            </div>	
        </section>
        
        <Footer/>
    </>)
}