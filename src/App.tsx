import { useState } from 'react'
import './App.css'
import banks from './utils/banks'
import Result from './components/Result'
import removeDiacritics from './utils/removeDiacritics'
import bankAliases from './utils/bankAliases'
import { AmountInput } from './components/AmountInput'
import { BankInput } from './components/BankInput'

function App() {
  const [amount, setAmount] = useState(-1)
  const [selectedBank, setSelectedBank] = useState("")
  const [result, setResult] = useState(-1)

  const RATE = 0.15
  
  const checkInput = () : Boolean => {
    if (selectedBank === null || selectedBank === "default") {
      return false
    }

    if (amount < 0) {
      return false
    }

    return Object.keys(banks).some((key) => {
      return removeDiacritics(key) === selectedBank
    })

  }
  const handleClick = () => {
    if (!checkInput()) {
      console.log("Neco je spatne")
      return
    }
    
    const interest = Number(amount) * Number(banks[bankAliases[selectedBank]])
    const netInterest = interest * (1 - RATE)
    
    setResult(Math.round(netInterest * 100) / 100);
  }

  return (
    <>
      <h1>Kalkulačka termínovaných vkladů</h1>
      <main className={"card"}>
        <h2>Platba</h2>

        <AmountInput
          amount={amount}
          setAmount={setAmount}
        ></AmountInput>
        
        <BankInput setSelectedBank={setSelectedBank}></BankInput>

        <button onClick={handleClick}>Potvrdit</button>

        <Result result={result}></Result>
        
      </main>
</>

  )
}

export default App
