import React, { useState } from 'react'
import back from '/src/images/bg-card-back.png'
import front from '/src/images/bg-card-front.png'
import logo from '/src/images/card-logo.svg'
import {motion} from 'framer-motion'
import Details from './Details'

function Card() {
  const[cardNumber, setCardNumber] =useState(`0000 0000 0000 0000`)
  const [cardName,setCardName] =useState('Jane Applessed')
  const [month,setMonth] = useState('00')
  const [year,setYear] = useState('00')
  const [cvc, setCvc] = useState('000')

  return (
   <>
    <div className='container'>
      
       <div className="back-of-card">
        <motion.img 
        initial={{x:'300vw'}}
        animate={{x:0}}
        transition={{
          delay:0.1,
          type:'spring',
          stiffness:30
        }}
        whileHover={{scale:1.1}}
        src={back} alt="back of the card" />
        <motion.p  
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.9}}
        className="CVC">
          {cvc}
          </motion.p>
        </div>



        <div className="front-of-card">
        <motion.img 
        initial={{x:'-300vw'}}
       animate={{x:0}}
       transition={{
        delay:0.1,
        type:'spring',
        stiffness:30
         }}
          whileHover={{scale:1.1}}
        className='information' src={front} alt="front of the card" />
        <motion.img 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1.6}}
        className='logo' src={logo} alt="Card-Logo" />
        </div>  

        <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1.6}}
        className="Card-Details">

          <div className="card-number">
          <h4>{cardNumber}</h4>
          </div>
        
        <div className="Card-bottom">
        <p>{cardName}</p>
        <div className="dates">
      <p className="month"> {month}  </p>
      <p className='year'>/{year} </p>
     </div>
        
        </div>
     
    
        </motion.div>


    
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
