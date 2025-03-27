import { useState } from 'react'
import './App.css'
import Youtube from './youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>make a react app</h1>
    <Youtube />
    </>
  )
}
export default App
