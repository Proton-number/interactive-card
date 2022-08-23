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



  // const confirm = (e) => {
  // showThankyou(!thankyou)
  // setShowModal(!showModal)
  //  e.preventDefault();
  // }

  

  return (
    <>
  

  <div className="Details">


    <form>
      <p>CardHolder Name</p>
      <input 
      maxLength={18}
      placeholder='e.g. Jane Applessed'
      type="text" />

      <p>Card number</p>
      <input
      maxLength={16} 
      placeholder='e.g. 1234 5678 9123 0000'
      type="text" />

       <div className="cvc-date">


       <div className="date">
        <p>exp.date (mm/yy) </p>

        <div className="date-inputs">
         <input
         maxLength={2}
         placeholder='MM'
          type="text" />

         <input 
          maxLength={2}
          placeholder='YY'    
         type="text" />
        </div>
       </div>
    

       <div className="cvc">

      <p>cvc </p>
      <input 
          maxLength={3}
          placeholder='e.g 123'    
         type="text" />

      </div>
      
      
      

       </div>

      <div className="btn">
      <button>Confirm</button>
      </div>


    </form>


  </div>


   

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
