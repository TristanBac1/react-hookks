import { useReducer } from "react";

function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE_SHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    showText: false,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT_COUNT" });
          dispatch({ type: "TOGGLE_SHOWTEXT" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default UseReducerHook;
