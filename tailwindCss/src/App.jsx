import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    name: "himanshi",
    age:20,
    password:123
  }

  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl p-7">Tailwind css</h1>
      <Card username="himanshi" btntext="view"/>
      <Card username="monkey" btntext="hehe"/>

    </>
  )
}

export default App
