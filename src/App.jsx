import { useState } from 'react'
import './App.css'
import WebDesign from './WebDesign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WebDesign />
    </>
  )
}

export default App
