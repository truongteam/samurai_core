import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App">
      <h1 className='mb-8 font-bold text-3xl'>Dashboard</h1>
      <div className="card">
        <button className='btn-indigo' onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Tuyendv
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
