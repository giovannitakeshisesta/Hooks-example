import Counter from "./components/Counter";
import InputField from "./components/InputField";
import Posts from "./components/Posts";
import Rectangle from "./components/Rectangle";

function App() {
  return (
    <div className="App">
      {/* <Counter defaultStart={10} title="Title" />
      <Rectangle /> */}
      <InputField />
      <Posts />
    </div>
  );
}

export default App;
