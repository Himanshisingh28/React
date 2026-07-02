import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [lenght, setlenght] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false);
  const [characterAllowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 0; i <= array.length; index++) {
      let char = Math.floor(Math.random * str.lenght + 1)

      pass = str.charAt(char)
    }
    setPassword(pass)
  }
    , [lenght, numberAllowed, characterAllowed, setPassword])

  return (
    <div className="w-auto max-w-md h-30 px-4 mx-7 my-7 rounded-lg shadow-md bg-gray-700"><h3 className='text-center text-white-500'>Password Generator</h3>
      <div className="rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          className="w-95 h-10 px-4 py-4 my-4 mx-4 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
          value={password}
          readOnly
          placeholder="Password"
        />
      </div>
    </div>
  )
}

export default App
