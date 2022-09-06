import React, { useState } from 'react'
import {motion} from 'framer-motion'
import back from '/src/images/bg-card-back.png'
import front from '/src/images/bg-card-front.png'
import logo from '/src/images/card-logo.svg'


function Card({cardName, cardNumber, month, year, cvc}) {
  
  return (
    <>
      <div className="container">

     

        <div className="back-of-card">
           <motion.img 
           initial={{x:'250vw'}}
           animate={{x:0}}
           transition={{delay:0.1, type:'spring', stiffness: 30}}
           src={back} alt="" />
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}}
            >{cvc}</motion.p>
        </div>


        <div className="front-of-card">
          <motion.img 
           initial={{x:'-250vw'}}
           animate={{x:0}}
           transition={{delay:0.1, type:'spring', stiffness: 30}}
          src={front} alt="" 
          className='cardFront' />

         <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1.5}}
         className="cardBody">
         <img className='logo'src={logo} alt="" />
         <h3> {cardNumber} </h3>

         <div className="bottomBody">
             <p> {cardName} </p> 
              <p className='dates'>{month}/{year}</p> 
         </div>

         </motion.div>

        </div>
      </div>
      
    </>
  )
}

export default Card
