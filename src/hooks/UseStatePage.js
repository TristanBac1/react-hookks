import { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Tristan");

  function increment() {
    setCounter((counter) => counter + 1);
  }

  function changeInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <p>useState</p>
      <input placeholder="Input Something..." onChange={changeInput} />
      {inputValue}
      <button onClick={increment}>Add</button>
      <p>{counter}</p>
    </div>
  );
}

export default UseStateHook;
