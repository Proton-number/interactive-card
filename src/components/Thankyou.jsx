import React from "react"
import "./Thankyou.css"
import Tick from "/src/images/icon-complete.svg"

function Thankyou({ setShowModal }) {
  return (
    <>
      <div className="thankyou">
        <img src={Tick} alt="complete task" />
        <h2>Thank you!</h2>
        <p>We've added your card details!</p>
        <button onClick={() => setShowModal(false)}>Continue</button>
      </div>
    </>
  )
}

export default Thankyou
