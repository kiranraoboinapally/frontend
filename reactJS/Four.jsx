import React, { useState } from 'react';

export default function App() {
  const [total, setTotal] = useState(null);

  const greetUser = (name) => {
    alert(`Hello, ${name}!`);
  };

  const sumAll = (...numbers) => {
    const result = numbers.reduce((a, b) => a + b, 0);
    setTotal(result);
  };

  return (
    <div>
      <h3>Arrow Function with Parameters in React</h3>
      <button onClick={() => greetUser('Alice')}>Greet Alice</button>
      <button onClick={() => greetUser('Bob')}>Greet Bob</button>
      <button onClick={() => sumAll(1, 2, 3, 4)}>Sum All</button>
      {total !== null && <p>Total: {total}</p>}
    </div>
  );
}
