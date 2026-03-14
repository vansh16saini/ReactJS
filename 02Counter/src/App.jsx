import './App.css'

function App() {
  let counter = 5
  const addValue = () => {
    counter = counter +1 
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: 5</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button>Decrement value</button>
    </>
  )
}

export default App
