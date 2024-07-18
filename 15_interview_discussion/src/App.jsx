import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  // const [multiplyValue, setMultiplyValue] = useState(1)
  let multiplyValue = value * 5;

  const multiplyBy5 = () => {
    // setMultiplyValue(value*5)
    setValue(value + 1);
  };
  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplyBy5}>Click to multiply by 5</button>
      <h2>Multiplied Value: {multiplyValue}</h2>
    </>
  );
}

export default App;
