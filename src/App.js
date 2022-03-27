import ToggleBox from "./components/ToggleBox";
import InputField from "./components/InputField";
import Posts from "./components/Posts";
import MoveBox from "./components/MoveBox";
import HookIncrement from './components/HookIncrement'

function App() {
  return (
    <div className="App">
      <HookIncrement defaultStart={10} text={"Hooks"}/>
      <hr />
      <ToggleBox text={"ToggleBox"}/>
      <hr />
      <MoveBox text={"MoveBox"}/>
      <hr />
      <InputField />    
      <Posts />
    </div>
  );
}

export default App;
