import { useState } from 'react'
import './App.css'
import AllData from './Components/AllData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllData/>
    </>
  )
}

export default App
