import { useState } from 'react'

import './App.css'

function App() {
  let[counter,setcounter] = useState(0)

  const addvalue = () =>{
    setcounter(counter= counter + 1)
    setcounter(counter= counter + 1)
    setcounter(counter= counter + 1)
    setcounter(counter= counter + 1)
  }
  const removevalue = () =>{
    setcounter(counter - 1)
  }
  return (
    <>
    <h1>React cource with hitesh {counter}</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}>Add value</button> {" "}
    <button onClick={removevalue}>Remove value</button>
    <p>Footer:{counter}</p>
    </>
  )
}
export default App

