import React from 'react'
import './Thankyou.css'
import Tick from '/src/images/icon-complete.svg'
import { motion } from 'framer-motion'



function Thankyou() {
  return (
   <>
   <motion.div className="thankyou">

<img src={Tick} alt="complete task" />
        <h2>Thank you!</h2>
        <p>We've added your card details!</p>
        <button>Continue</button>
   </motion.div>
   </>
  )
}

export default Thankyou
