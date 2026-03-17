import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(5)
  const addValue = () => {
    setCounter(counter + 1)
  }
  const reduceValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={reduceValue}>Decrement value</button>
      <br />
      <button
      onClick={addValue}>Add value</button>
      <br />
    </>
  )
}

export default App
