import React, { Fragment } from 'react'
import {motion} from 'framer-motion';
import '../Style/InputIntro.css';
import {Link} from 'react-router-dom';
import Box from './Box';
import NavSide from '../component/NavSide';
import '../Style/Landingpage3.css';

function AddStudent() {
  return (
    <div className='AddPage' style={{
      backgroundColor:"transparent",
      height:"100vh"
    }}>
      <div>
        <NavSide/>
      </div>
      <div className='Add'>
        <motion.div
          initial={{width:0}}
          animate={{width:'100%'}}
          exit={{x:window.innerWidth, transition: {duration: 0.1}}}
          >
          <div>
            <Box/>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AddStudent;