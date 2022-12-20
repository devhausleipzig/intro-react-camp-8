import { useState } from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{count}</span>
      <div className="flex gap-3">
        <Button onClick={() => setCount(count - 1)}>
          <span className="text-red-500">Decrement</span>
        </Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
}
