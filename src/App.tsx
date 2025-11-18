import { useState } from 'react'
import './App.css'
import BankOptions from './components/BankOptions'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <h1>Kalkulačka termínovaných vkladů</h1>
      <main className={"card"}>
        <h2>Platba</h2>


        <form action="/submit" method="post">
          <div className={"row"}>
          <p>Částka</p>
          <input id="amount" name="amount" type="number" placeholder="0" required />
          <div className={"hint"}>Zadejte částku v Kč</div>
        </div>


        <div className={"row"}>
          <p>Banka</p>
          <select id="bank" name="bank" required>
            <option value="">— vyberte banku —</option>
            <BankOptions></BankOptions>
          </select>
        </div>


        <button type="submit">Potvrdit</button>
        </form>
      </main>
    </>
  )
}

export default App
