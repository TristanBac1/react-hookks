import { useContext } from "react";
import { AppContext } from "../UseContextPage.js";

function Login() {
  const { setUsername, username } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
          console.log(username);
        }}
      />
    </div>
  );
}

export default Login;
