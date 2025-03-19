import React from "react";
import { motion } from 'framer-motion'

export const TransitionPage = ({children}) =>{
  
  return (
    <motion.main
      style={{height: `calc(100vh - 70px)`}}
      initial={{opacity: 0, y:20}}
      animate={{opacity: 1, y:0}}
      exit={{opacity:0 , y: -20}}
      transition={{duration: .5 }}
    >
      {children}
    </motion.main>
  );
}
