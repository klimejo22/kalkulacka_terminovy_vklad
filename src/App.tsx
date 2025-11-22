import { useState } from 'react'
import './App.css'
import BankOptions from './components/BankOptions'
import banks from './utils/banks'
import Result from './components/Result'
import removeDiacritics from './utils/removeDiacritics'
import bankAliases from './utils/bankAliases'
import { AmountInput } from './components/AmountInput'

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
      console.log("Vybrana banka: " + selectedBank)
      console.log("Banka bez fce: " + key)
      console.log("Banka s fci: " + removeDiacritics(key))
      console.log(removeDiacritics(key) === selectedBank)
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
    
    console.log("ZACATEK HANDLE")
    console.log("Interest: " + interest)
    console.log("net: " + netInterest)
    console.log("result: " + Math.round(netInterest * 100) / 100)
    
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
        
        <div className={"row"}>
          <p>Banka</p>
          <select
            id="bank"
            name="bank"
            onChange={(e) => setSelectedBank(e.target.value)}
            required
          >
            <option value="default">— vyberte banku —</option>
            <BankOptions></BankOptions>
          </select>
        </div>

        <button onClick={handleClick}>Potvrdit</button>

        <Result result={result}></Result>
        
      </main>
</>

  )
}

export default App
