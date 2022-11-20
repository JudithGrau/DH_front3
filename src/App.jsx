import { useState } from 'react'
import './App.css'
import FunctionComponent from './components/clase2_useEffect_Pokemon/FunctionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FunctionComponent />
  )
}

export default App
