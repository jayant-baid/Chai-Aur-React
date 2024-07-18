import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // When we use useState, if there is a change in the state, then the whole component will get re-mounted/re-render.
  // If same value is given, then no re-render

  console.log("App rendered", Math.random());
  // const [value, setValue] = useState(1);
  const [value, setValue] = useState({
    value: 0,
  });
  // const [multiplyValue, setMultiplyValue] = useState(1)
  // let multiplyValue = value * 5;

  // const multiplyBy5 = () => {
  //   // setMultiplyValue(value*5)
  //   setValue(value + 1);
  // };
  const clickMe = () => {
    console.log("logged");
    //  setValue(value+1) // re-render
    //  setValue(1) // No re-render, when useState value is same as of setvalue value
    //  setValue(3) // 2 re-render, then no re-render

    setValue({
      value: 0,
    }); // re-render hoga
  };

  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Multiplied Value: {multiplyValue}</h2> */}
    </>
  );
}

export default App;
