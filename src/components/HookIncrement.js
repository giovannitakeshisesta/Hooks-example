import { useState } from 'react'

const HookIncrement = ({ defaultStart , text}) => {
  const [count,  setCount ] = useState(5);
  const [count2, setCount2] = useState(defaultStart || 0);

  const increment = () => {
     setCount(count + 1);
     setCount2(count2 +1);
  }

  return (
    <div>   
      <h1>{text}</h1>     
      <p>{count}</p>
      <p>{count2}</p>

      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default HookIncrement