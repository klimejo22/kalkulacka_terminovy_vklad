import { useState } from 'react'
import './App.css'
import BankOptions from './components/BankOptions'
import banks from './utils/banks'

function App() {
  const [amount, setAmount] = useState(0)
  const [selectedBank, setSelectedBank] = useState("")
  
  const checkInput = () : Boolean => {
    if (selectedBank === null || selectedBank === "default") {
      return false
    }

    return Object.keys(banks).some((key) => {
      return key === selectedBank
    })

  }
  const handleClick = () => {
    if (!checkInput()) {
      return
    }
    
    const interest = amount * (banks[selectedBank] / 100)
  }

  return (
    <>
      <h1>Kalkulačka termínovaných vkladů</h1>
      <main className={"card"}>
        <h2>Platba</h2>


        <div className={"row"}>
            <p>Částka</p>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="0"
              onChange={(e) => setAmount(Number(e.target.value))}
              required />
            <div className={"hint"}>Zadejte částku v Kč</div>
          </div>


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
      </main>
    </>
  )
}

export default App
