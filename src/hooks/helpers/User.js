import { useContext } from "react";
import { AppContext } from "../UseContextPage.js";

function User() {
  const { username } = useContext(AppContext);

  return <div>User: {username}</div>;
}

export default User;
<div>User</div>;
