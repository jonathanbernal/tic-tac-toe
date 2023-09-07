import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
        <h1>Tic Tac Toe</h1>
        <h2>Player's Turn:</h2>
        <div className="gameboard">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      
    </>
  )
}

export default App
