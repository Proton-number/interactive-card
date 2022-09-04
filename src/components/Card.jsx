import React, { useState } from 'react'
import {motion} from 'framer-motion'
import back from '/src/images/bg-card-back.png'
import front from '/src/images/bg-card-front.png'
import logo from '/src/images/card-logo.svg'
import Details from './Details'


function Card({cardName, cardNumber, month, year, cvc}) {
  
  return (
    <>
      <div className="container">

     

        <div className="back-of-card">
           <img src={back} alt="" />
            <p>{cvc}</p>| 
        </div>


        <div className="front-of-card">
          <img src={front} alt="" className='cardFront' />

         <div className="cardBody">
         <img className='logo' src={logo} alt="" />
         <h3> {cardNumber} </h3>

         <div className="bottomBody">
             <p> {cardName} </p> 
              <p className='dates'>{month}/{year}</p> 
         </div>

         </div>

        </div>
      </div>
      
    </>
  )
}

export default Card
