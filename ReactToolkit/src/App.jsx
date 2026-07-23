import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center pt-10 gap-6">
      <h1 className="text-white text-2xl">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
