import { useState } from 'react'

// this.state = {
//   count: 0,
//   showCounter: true
// }

const Counter = ({ defaultStart, title }) => {
  const [count, setCount] = useState(defaultStart || 0)
  const [showCounter, setShowCounter] = useState(true)

  const increment = () => {
    // setCount(count + 1)
    setCount(count)
  }

  return (
    <div>
      <h1>{title}</h1>
      {showCounter && (
        <>
          <p>{count}</p>

          <button onClick={increment}>Increment</button>
        </>
      )}

      <div>
        <button onClick={() => setShowCounter(!showCounter)}>Toggle view counter</button>
      </div>
    </div>
  )
}

export default Counter