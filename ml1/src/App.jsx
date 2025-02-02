import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>This is first project</h1>
      <h2> Count : {count}</h2>
      <button onClick={addHandler}>Add +</button>
    </>
  );
}

export default App;
