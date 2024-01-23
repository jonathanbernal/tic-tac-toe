import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gameboard from './components/Gameboard';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
        <Gameboard />
    </>
  )
}

export default App
