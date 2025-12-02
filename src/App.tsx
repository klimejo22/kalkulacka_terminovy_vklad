import { useState } from 'react'
import './App.css'
import banks from './utils/banks'
import Result, { type ResultProps } from './components/Result'
import removeDiacritics from './utils/removeDiacritics'
import bankAliases from './utils/bankAliases'
import { AmountInput } from './components/AmountInput'
import { BankInput } from './components/BankInput'

function App() {
  const [amount, setAmount] = useState<number>(0)
  const [selectedBank, setSelectedBank] = useState<string>("")

  const [results, setResults] = useState<ResultProps[]>([])

  const RATE = 0.15
  
  const checkInput = () : Boolean => {
    if (selectedBank === null || selectedBank === "default") {
      return false
    }

    if (amount < 0) {
      return false
    }

    if (selectedBank === "all") {
      return true
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

    setResults([])
    
    if (selectedBank === "all") {
      const allResults: ResultProps[] = Object.keys(banks).map((bankKey) => {
        const interest = Number(amount) * Number(banks[bankKey]);
        const netInterest = interest * (1 - RATE);
        const result = Math.round(netInterest * 100) / 100;
        return { result, bank: bankKey };
      });
      setResults((prev) => [...allResults, ...prev]); // Destrukturuje array allResults a da ho do predu arraye
    } else {
      const interest = Number(amount) * Number(banks[bankAliases[selectedBank]]);
      const netInterest = interest * (1 - RATE);
      const result = Math.round(netInterest * 100) / 100;
      setResults((prev) => [{ result, bank: bankAliases[selectedBank] }, ...prev]);
    }

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
        
        <div className="results-list">
          {results.map((result, key) => (
            <Result key={key} result={result.result} bank={result.bank} />
          ))}
        </div>
        
      </main>
    </>

  )
}

export default App
