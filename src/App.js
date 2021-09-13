import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-600 flex flex-col justify-center items-center h-screen">
      <h1 className="text-white text-3xl font-semibold">Hello World</h1>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white shadow-xl hover:bg-green-700 p-3 rounded-sm flex"
      >
        Increment
      </button>

      <p className="text-white text-9xl">{count}</p>
    </div>
  );
}

export default App;
