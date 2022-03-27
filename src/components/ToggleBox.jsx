import { useState } from 'react'

const ToggleBox = ({ text }) => {
  const [showCounter, setShowCounter] = useState(true)


  return (
    <div>
      <h1>{text}</h1>
      
      <button onClick={() => setShowCounter(!showCounter)}>Toggle view counter</button>
      
      {showCounter && (
        <div style={{backgroundColor:"red", height:"100px", width:"100px"}}></div>
      )}

    </div>
  )
}

export default ToggleBox