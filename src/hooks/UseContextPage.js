import { useState, createContext } from "react";
import Login from "./helpers/Login.js";
import User from "./helpers/User.js";

export const AppContext = createContext(null);

function UseContextHook() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

export default UseContextHook;
