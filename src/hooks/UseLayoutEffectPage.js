import { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffectHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "HELLO";

    console.log("UseEffect: " + inputRef.current.value);
  }, []);

  useLayoutEffect(() => {
    console.log("UseLayoutEffect:" + inputRef.current.value);
  }, []);

  return (
    <div>
      Hello World
      <input ref={inputRef} value="PEDRO" />
    </div>
  );
}

export default UseLayoutEffectHook;
