import React from "react";
import '../css/sobremi.css'

export default function Sobremi() {
    return(<>
        <section>
            <h2>Sobre Mi</h2>
            <div className="about">
                Tengo 18 años soy Desarrolador Web, realizo mis estudios en la escuela E.E.S.T.Nº3. Me gusta mucho aprender tecnologias nuevas y asi poder mejorar mis habilidades.
                <p></p>
                <a className="btn">
                    Ver CV
                </a>
            </div>	
        </section>

        <hr/>
        <section>
            <h2>Habilidades</h2>
            <div className="skills">
                <div className="skills-item skills-item-color">
                    <h3>Frontend</h3>
                    <div className="lenguajes">
                        <div>
                            <img src="../../public/icon/html5.svg"/>
                            <h4>HTML</h4>
                        </div>
                        <div>
                            <img src="../../public/icon/javascript.svg"/>
                            <h4>JavaScript</h4>
                        </div>
                        <div>
                            <img src="../../public/icon/css.svg"/>
                            <h4>CSS</h4>
                        </div>
                    </div>
                </div>

                <div className="skills-item">
                    <h3>Backend</h3>
                    <div className="lenguajes">
                        <div>
                            <img src="../../public/icon/php.svg"/>
                            <h4>PHP</h4>
                        </div>

                        <div>
                            <img src="../../public/icon/mysql.svg"/>
                            <h4>MySQL</h4>
                        </div>
                        <div>
                            <img src="../../public/icon/api.svg"/>
                            <h4>API</h4>
                        </div>
                    </div>
                </div>
                
                <div className="skills-item">
                    <h3>Herramientas</h3>
                    <div className="lenguajes">
                        <div>
                            <img src="../../public/icon/git.svg"/>
                            <h4>Git</h4>
                        </div>
                        <div>
                            <img src="../../public/icon/bash.svg"/>
                            <h4>BashScript</h4>
                        </div>
                        <div>
                            <img src="../../public/icon/trello.svg"/>
                            <h4>Trello</h4>
                        </div>			
                    </div>	
                </div>

                <div className="skills-item skills-item-color">
                    <h3>Aprendiendo</h3>
                    <div className="lenguajes">
                        <div>
                            <img src="../../public/icon/python.svg"/>
                            <h4>Python</h4>
                        </div>
                        <div>
                            <img src="../../public/icon/react.svg"/>
                            <h4>React</h4>
                        </div>
                    </div>
                </div>
            </div>	
        </section>        
    </>)
}