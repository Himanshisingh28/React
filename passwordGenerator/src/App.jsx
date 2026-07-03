import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [lenght, setLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false);
  const [characterAllowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
    , [lenght, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9); //range of selected values
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [lenght, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <div className="w-auto max-w-md h-30 px-4 mx-7 my-7 rounded-lg shadow-md bg-gray-700 text-orange-500"><h3 className='text-center text-white'>Password Generator</h3>
      <div className="rounded-lg overflow-hidden mb-2" style={{ display: "flex", justifyContent: "space-between", height: "50px", alignItems: "center" }}>
        <input
          type="text"
          className="w-95 h-10 px-4 py-4 my-4 mx-4 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
          value={password}
          readOnly
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shrink-0">
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={8}
            max={100}
            value={lenght}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="">Length:{lenght}</label>
        </div>
        <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberallowed((prev) => !prev); //true ka false karne ke liye prev ka use kiya hai
          }} />
        <label htmlFor="">Number </label>
        <input type="checkbox"
          defaultChecked={characterAllowed}
          id='charInput'
          onChange={() => {
            setCharacterallowed((prev) => !prev);//true ka false karne ke liye prev ka use kiya hai
          }} />
        <label htmlFor="">Character </label>
      </div>
    </div>
  )
}

export default App
