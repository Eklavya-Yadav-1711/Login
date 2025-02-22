import { useState } from 'react'
import './App.css'
import Startup from './assets/Startup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Startup/>
    </div>

    </>
  )
}

export default App
