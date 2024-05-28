import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
    // console.log("Value Added: ", counter);
    // setCounter is an async func toh woh queue, loop ke andar jaege, so clg will return prev value
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    // console.log("Value removed: ", counter);
  };

  return (
    <>
      <h1>Range: 0-20</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
