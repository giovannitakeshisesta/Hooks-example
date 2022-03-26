import { useState } from "react"


function useInput() {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return {
    value,
    setValue: handleChange
  }
}

export default useInput