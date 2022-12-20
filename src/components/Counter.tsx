import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{count}</span>
      <div className="flex gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-slate-600 text-white py-2 px-4 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-slate-600 text-white py-2 px-4 rounded-md"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
