'use client'

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="w-full ">
       <div className=" mt-10 flex flex-col gap-5 place-items-center align-body pb-10">
      <h1 data-testid = 'count'>Counter: {count}</h1>
      <button data-testid='incrementbtn'
        className="border bg-soft-blue p-2 rounded hover:bg-soft-blue/50"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button data-testid='decrementbtn'
        className="border bg-soft-red p-2 rounded hover:bg-soft-red/50"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Increment
      </button>
    </div> 
    </section>
    
  );
};

export default Counter;
