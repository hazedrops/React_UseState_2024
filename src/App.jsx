import { useState } from 'react'

function App() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount((prevCount) => prevCount - 1) // Need to use prev value to update value from the previous state
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
