import React from 'react'
import './Thankyou.css'
import {motion} from 'framer-motion'
import Tick from '/src/images/icon-complete.svg'


function Thankyou() {
  return (
    <>
    <motion.div
    initial={{y:-450}}
    animate={{y:0}}
    transition={{ type:'spring', stiffness:60}}
className='thank-you'
    >
        <img src={Tick} alt="complete task" />
        <h2>Thank you</h2>
        <p>We've added your card details!</p>
        <motion.button
        whileHover={{scale:1.2}}
        transition={{delay:0.4}}
        >
          Continue
          </motion.button>
    </motion.div>
    </>
  )
}

export default Thankyou
