import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <>  
      
      <motion.div className="box-pre">
          <div className="nombre">
              <motion.p 
                initial={{scale:0}}
                animate={{scale:1}}
                exit={{scale:0}}
                transition={{duration:1}}
              >
                  Desarrollador Web
              </motion.p>
              <span>Hola, soy Facundo Sandoval</span>
              <div>
                  <Link className="btn" to="/aboutme">Ver Mas</Link>
              </div>
          </div>	
      </motion.div>
    </>
  )
}
