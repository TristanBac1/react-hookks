import { useRef } from "react";
import Button from "./helpers/Button.js";

function UseImperativeHandleHook() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        {" "}
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default UseImperativeHandleHook;
