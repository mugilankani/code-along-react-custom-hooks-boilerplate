import { useState } from 'react'
import useStorage from './CoustomHooks/useStorage'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [input,setInput] = useState('')
  const [value , setValue] = useStorage("Contain" , "")

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(input)
  }
  useEffect(()=>{
    setInput(value)
  },[])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) =>setInput(e.target.value)} type="text" />

      </form>
      <div>
        <h3>{value}</h3>
      </div>

    </div>
  )
}

export default App
