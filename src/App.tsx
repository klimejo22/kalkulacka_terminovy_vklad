import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const banks = {
    "Moneta": 3.4,
    "Česká spořitelna": 2.25,
    "Komerční banka": 3,
    "Air Bank" : 3.2
  }

  return (
    <>
      <h1>Kalkulačka termínovaných vkladů</h1>
    </>
  )
}

export default App
