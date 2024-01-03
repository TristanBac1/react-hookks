import { useRef } from "react";

function UseRefHook() {
  const inputRef = useRef(null);

  function onClick() {
    console.log("Test Click");
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Pedro</h1>
      <input ref={inputRef} type="text" placeholder="..." />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRefHook;
