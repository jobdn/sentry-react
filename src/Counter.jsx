import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((count) => count + 1);
  };

  const handleError = () => {
    throw new Error(`Error on ${count} count`);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleError}>Throw Error</button>
    </div>
  );
};
