import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter=15
  const addValue = () =>{
    console.log("clicked", counter);
    counter=counter+1
    setCounter(counter)
  }
  const removeValue = () => {
    console.log(counter);
    setCounter(counter-1)
  }

  return (
    <>
      <h1>react learning</h1>
      <h2>Counter valu:{counter}</h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Decreas value{counter}</button>
    </>
  )
}

export default App
