import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Details from './components/Details'

function App() {
  const [cardName, setCardName] = useState('Jane Appleased')
  const [cardNumber, setCardNumber] =useState('0000 0000 0000 0000')
  const[month,setMonth] = useState('00')
  const [year,setYear] = useState('00')
  const[cvc, setCvc] = useState('000')
 

  return (
    <div className="App">

     <Card
     cardName={cardName}
     cardNumber={cardNumber}
     month={month}
     year={year}
     cvc={cvc}
     />


     <Details
     setCardName={setCardName}
     setCardNumber={setCardNumber}
     setMonth={setMonth}
     setYear={setYear}
     setCvc={setCvc}
     />
    </div>
  )
}

export default App
