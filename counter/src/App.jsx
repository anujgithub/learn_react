import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  const addCounter = () => {
    if(count === 10) return
    setCount((count) => count + 1)
  }

  const subtractCounter = () => {
    if(count === 0) return
    setCount((count) => count - 1)
  }

  return (
    <>
      <h1 className="p-3 rounded-xl bg-green-200">
        Tailwind Test
      </h1>
      <div className="card">
        <strong>Count is  {count}</strong>
        <br />
        <button onClick={addCounter} className='bg-blue-500 text-white rounded-xl'>
          Add Counter
        </button>
        <br /><br />
        <button onClick={subtractCounter} className='bg-blue-500 text-white rounded-xl'>
          Subtract Counter
        </button>
      </div>
      <Card name="Card 1" btnText="Click Me" />
      <Card name="Card 2" btnText="Visit Me" />      
      <Card name="Card 3" />
    </>
  )
}

export default App
