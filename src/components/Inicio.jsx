import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sobremi from "./Sobremi";
import Footer from "./footer";

export default function Inicio() {
    return(<>
        <Header/>

        <div className="box-pre">
            <div className="nombre">
                <p>
                    Desarrollador Web
                </p>
                <span>Hola, soy Facundo Sandoval</span>
                <div>
                    <Link className="btn" to="/contacto">Contacto</Link>
                </div>
            </div>	
        </div>

        <Sobremi/>

        <Footer/>
    </>)
}