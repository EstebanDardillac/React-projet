import { useState } from 'react'
import './App.css'

function Compteur() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Compteur :</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Compteur