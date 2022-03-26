import { useEffect, useState } from "react";


function useDocumentTitle() {
  const [value, setValue] = useState('')
  const [uselessState, setUselessState] = useState(true)

  useEffect(() => {
    console.log('componentDidMount')

    if (value) {
      document.title = value
    }
  }, [value])

  const handleChange = e => setValue(e.target.value)

  const handleUselessState = () => setUselessState(!uselessState)

  return { value, setValue: handleChange, setUselessState: handleUselessState }
}

export default useDocumentTitle