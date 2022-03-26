import useDocumentTitle from "../hooks/useDocumentTitle"

function InputField() {
  const { value, setValue, setUselessState } = useDocumentTitle()

  return (
    <div>
      <input value={value} onChange={setValue} />

      <button onClick={setUselessState}>Foo</button>
    </div>
  )
}

export default InputField