import React from 'react'
import NavSide from '../component/NavSide'
import '../Style/Landingpage2.css';
import {motion} from 'framer-motion';

function AboutPage() {
  return (
    <div 
      className='pageAbout'
      >
      <div className='navAbout'>
        <NavSide></NavSide>
      </div>
      <motion.div
        initial={{width:0}}
        animate={{width:'100%'}}
        exit={{x:window.innerWidth, transition: {duration: 0.1}}}
      >
        <div className='titleAbout'>
          <h1>About this page</h1>
        </div>
        <div className='contentAbout'>
          <p>This page was created by me Daniel Giay as part of JAVA course 
            Final exam project, the goal of this project is to 
            developing webApp that implement the fullstack development where frontend and backend component is involved
          </p>
          <p> in this project, JAVA is used as the language for developing API server</p>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage;