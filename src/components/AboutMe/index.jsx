import React from 'react'
import styles from './styles.module.css'

export const Description = () => {
  return (
    <>
        <h2>Sobre Mi</h2>
        <div className={styles.about}>
            <p>
              Tengo 19 años, soy desarrollador web con más de 2 años de experiencia práctica en el diseño, desarrollo e implementación de aplicaciones y soluciones utilizando una variedad de tecnologías y lenguajes de programación.
              <br />
              Actualmente estoy mejorando mi desarrollo web y aprendiendo otros lenguajes de programación con pequeños proyectos asi mejorar mis habilidades.
            </p>
            <a className={`btn ${styles.btnCv}`}>
                <img src="icon/pdf.svg" />
                Ver CV
            </a>
        </div>	
    </>
  )
}
