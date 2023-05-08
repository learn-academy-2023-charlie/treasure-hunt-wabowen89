import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleClick = (selectedIndex) => {
    const newBoard = [...board]
    newBoard[selectedIndex] = "🌴"
    setBoard(newBoard)
    
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square 
        board={board}
        handleClick={handleClick}
      />
    </>
  )
}

export default App
