import { useState } from "react"
import '../index.css'

function MoveBox( {text}) {

  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [size, setSize] = useState({ width: 20, height: 20 });

  const move = () => setPosition({
    left: position.left + 10,
    top : position.top + 10
  })
  
  const incrementSize = () => setSize({
    width: size.width + 10,
    height: size.height + 10
  })

  return (
    <div>
        <h1>{text}</h1>
        <div >
          <button onClick={move}>Position</button>
          <button onClick={incrementSize}>Size</button>
          <div
            style={{
              backgroundColor: 'red',
              position : "relative",
              top:    position.top,
              left:   position.left,
              width : size.width,
              height: size.height
            }}
          ></div>
        </div>
    </div>
  )
}

export default MoveBox