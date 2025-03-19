import React from 'react'
import projectsJSON from '../../assets/projects.json'
import styles from './styles.module.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const ListProjects = () => {
  return (
    <div className={styles.projects}>
        {projectsJSON.map( (project, index) =>{
            return <CardProjects data={project} key={index} />
        })}
    </div>
  )
}

const CardProjects = ({data}) =>{
    const { name, rols, links, description, imgs, technologies, style } = data;

    return (
        <div className={`${styles.cardProject} ${styles[style]} ${styles.animateScroll}`}>
            <div className={styles.projectLinks}>
                {links.map( ({link, icon}, index) => {
                    return <LinkProject link={link} icon={icon} key={index} />
                })}
            </div>
            <h3>{name}</h3>
            <span className={styles.rolProject}>
                {rols.map( (rol,i) => { return `${rol} ${ i !== rols.length-1 ? '•': '' } ` })}
            </span>
            <p>
                {description}
            </p>
            
            {imgs.length == 1 ? 
            (
                <div className={styles.projectImg}>
                    <img src={`${imgs[0]}`} />
                </div>
            ):
            (
                <Splide options={{
                    type: 'loop',
                    autoplay: true,
                    arrows: false,
                }}>
                    {imgs.map( (img, index) =>{
                        return (
                            <SplideSlide key={index}>
                                <img src={`${img}`} />
                            </SplideSlide>)
                    })}
                </Splide>
            )}

            <div className={styles.projectTechnologies}>
                {technologies.map( (technologie,index) =>{
                    return <span className={styles[technologie.toLowerCase()]} key={index}>{technologie}</span>
                })}
            </div>
        </div>
    )
}

const LinkProject = ({link, icon}) =>{
    return (
        <a className={styles.linkProject} href={link} target="blank">
            <img src={`${icon}`}/>
        </a>
    );
}