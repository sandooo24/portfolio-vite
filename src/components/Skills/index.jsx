import React from "react";
import styles from './styles.module.css';
import skillsJSON from '../../assets/skills.json'
import { motion } from "framer-motion";

export const Skills = () =>{
    return (
        <>
            <h2>Habilidades</h2>
            <ListSkills skills={skillsJSON} />
        </>
    );
}

const ListSkills = ({skills}) =>{
    return (
        <div className={styles.skills}>
            {skills.map( (skill,index) =>{
                return <CardSkill data={skill} key={index}/>
            })}
        </div>
    );
}

const CardSkill = ({data}) =>{
    const { name, skills, color } = data;

    return (
        <motion.div 
         className={`${styles.skillItem} ${color && styles.skillItemColor}`}
         initial={{opacity: .5, scale:0.90}}
         whileInView={{
            opacity:1,
            scale:1,
            transition:{
                duration: .5
            }
         }}
         viewport={{
            amount: .5
         }}
        >
            <h3>{name}</h3>
            <div className={styles.languages}>
                {skills.map( (skill, index) =>{
                    return (
                        <div key={index}>
                            <img src={`${skill.img}`}/>
                            <h4>{skill.name}</h4>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    )
}