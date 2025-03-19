import React from 'react'
import { Description } from '../components/AboutMe'
import { Skills } from '../components/Skills'
import { motion } from 'framer-motion'

export const AboutMe = () => {
  return (
    <>

      <section>
        <Description />
      </section>    

      <motion.hr 
        initial={{scaleX:0}} 
        animate={{scaleX:1}}
        exit={{scaleX:0}}
        transition={{duration:1}}
        />
      
      <section>
        <Skills/>
      </section>
    </>
  )
}

