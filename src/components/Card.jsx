import React, { useState } from 'react'
import {motion} from 'framer-motion'
import back from '/src/images/bg-card-back.png'
import front from '/src/images/bg-card-front.png'
import logo from '/src/images/card-logo.svg'
import Details from './Details'


function Card() {
  const [cardNumber, setCardNumber] =useState('0000 0000 0000 0000')
  const [cardName, setCardName] = useState('Jane Appleased')
  const[month,setMonth] = useState('00')
  const [year,setYear] = useState('00')
  const[cvc, setCvc] = useState('000')
  return (
    <>
      <div className="container">

     

        <div className="back-of-card">
           <img src={back} alt="" />
           <p>{cvc}</p>
        </div>


        <div className="front-of-card">
          <img src={front} alt="" />

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
      <Details 
      setCardNumber={setCardNumber}
      setCardName={setCardName}
      setMonth={setMonth}
      setYear={setYear}
      setCvc={setCvc}
      />
    </>
  )
}

export default Card
