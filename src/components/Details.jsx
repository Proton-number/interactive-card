import React, { useRef, useState } from 'react'
import './Details.css'
import {motion} from 'framer-motion'
import Thankyou from './Thankyou'



const backdrop ={
  visible:{opacity:1},
  hidden:{opacity:0}
}

const inputVariants={
  focus:{
    scale: 1.1,
  }
}


function Details({ setCardNumber, setCardName, setMonth,  setYear, setCvc}) {
const[ thankyou, showThankyou] = useState(false)
const [showModal, setShowModal] = useState(false)



  const confirm = (e) => {
  showThankyou(!thankyou)
  setShowModal(!showModal)
   e.preventDefault();
  }

  

  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1.2}}
    className='Details'
    >
     <form onSubmit={confirm}>
      
      <label className='name'>CardHolder Name</label>
      <motion.input 
      variants={inputVariants}
      whileFocus='focus'
      type="text" 
      maxLength={19}
      placeholder='e.g. Jane Applessed' 
      onChange={(e)=> setCardName(e.target.value)}
      />

      <label className='number'>Card Number</label>
      <motion.input 
       variants={inputVariants}
       whileFocus='focus'
      type="tel"
      inputMode='numeric'
      pattern='[0-9] {16}*'
      maxLength={16} 
      placeholder='e.g. 1234 5678 9123 0000'
      onChange={(e)=> setCardNumber(e.target.value)}
       />


   
    <div className="bottom">
         
    <label className='month'>Exp. Date (MM/YY) </label>
   
   <label className='cvc'>cvc</label>
    </div>

 
      <div className="expiry">
       <motion.input 
        variants={inputVariants}
        whileFocus='focus'
       type='text' 
       placeholder='MM'
       maxLength={2}
       onChange={(e)=> setMonth(e.target.value)}
       />

          <motion.input
           variants={inputVariants}
           whileFocus='focus' 
          type="year" 
          placeholder='YY' 
          maxLength={2}
          onChange={(e)=> setYear(e.target.value)}
          />
            
<motion.input 
 variants={inputVariants}
 whileFocus='focus'
type="text"  
placeholder='e.g. 123' 
maxLength={3}
onChange={(e)=> setCvc(e.target.value)}
/>
 
  </div> 
         

<motion.button
whileHover={{scale:1.2}}
transition={{delay:0.4}}
>
  Confirm
  </motion.button>

      </form>
    </motion.div>
   

   {showModal && <motion.div
    variants={backdrop}
    initial='hidden'
    animate='visible'
    className='backdrop'
    >
   {thankyou && <Thankyou/>}
    </motion.div>}
    </>
  )
}

export default Details
