import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (specialCharAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

      // pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  },[length, numberAllowed, specialCharAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto mt-10 shadow-md p-4 bg-gray-700 rounded text-orange-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly  
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type = "range"
              min = "8"
              max = "20"
              value = {length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type = "checkbox"
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className='text-white'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type = "checkbox"
              defaultChecked = {specialCharAllowed}
              id='characterInput'
              onChange={() => {
                setSpecialCharAllowed((prev) => !prev);
              }}
            />
            <label className='text-white'>Special Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
