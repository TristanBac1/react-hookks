import axios from "axios";
import { useEffect, useState } from "react";

function UseEffectHook() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setData(response.data[0].email);
      });
  }, []);

  return <div>Hello World {data}</div>;
}

export default UseEffectHook;
