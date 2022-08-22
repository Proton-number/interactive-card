import React from 'react'
import {motion} from 'framer-motion'
import back from '/src/images/bg-card-back.png'
import front from '/src/images/bg-card-front.png'
import logo from '/src/images/card-logo.svg'


function Card() {
  return (
    <>
      <div className="container">

     

        <div className="back-of-card">
           <img src={back} alt="" />
           <p>000</p>
        </div>


        <div className="front-of-card">
          <img src={front} alt="" />

         <div className="cardBody">
         <img className='logo' src={logo} alt="" />
         <h3>0000 0000 0000 0000</h3>

         <div className="bottomBody">
            <p>Jane Appleased</p>
             <p className='dates'>00/00</p>
         </div>

         </div>

        </div>
      </div>
    </>
  )
}

export default Card
