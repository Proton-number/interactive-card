import React from 'react'
import './Thankyou.css'
import Tick from '/src/images/icon-complete.svg'




function Thankyou() {
  return (
   <>
   <div className="thankyou">

<img src={Tick} alt="complete task" />
        <h2>Thank you!</h2>
        <p>We've added your card details!</p>
        <button>Continue</button>
   </div>
   </>
  )
}

export default Thankyou
