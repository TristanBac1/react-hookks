import * as Hooks from "./hooks/index.js";
import Home from "./home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/useState" element={<Hooks.UseStateHook />} />
          <Route exact path="/useReducer" element={<Hooks.UseReducerHook />} />
          <Route exact path="/useEffect" element={<Hooks.UseEffectHook />} />
          <Route exact path="/useRef" element={<Hooks.UseRefHook />} />
          <Route
            exact
            path="/useLayoutEffect"
            element={<Hooks.UseLayoutEffectHook />}
          />
          <Route
            exact
            path="/useImperativeHandle"
            element={<Hooks.UseImperativeHandleHook />}
          />

          <Route exact path="/useContext" element={<Hooks.UseContextHook />} />
          <Route
            exact
            path="/useCallback"
            element={<Hooks.UseCallbackHook />}
          />
          <Route exact path="/useMemo" element={<Hooks.UseMemoHook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
