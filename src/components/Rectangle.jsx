import { useState } from "react"

function Rectangle() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });


  const incrementSize = () => setSize({
    width: size.width + 10,
    height: size.height + 10,
  })

  const move = () => setPosition({
    left: position.left + 10,
    top: position.top + 10
  })

  return (
    <div>
      <div
        style={{
          backgroundColor: 'red', width: size.width, height: size.height,
          position: 'absolute',
          top: position.top,
          left: position.left,
        }}
      ></div>

      <div>
        <button onClick={incrementSize}>Size</button>
        <button onClick={move}>Position</button>
      </div>
    </div>
  )
}

export default Rectangle