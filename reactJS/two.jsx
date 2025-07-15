import { useState } from 'react';
export default function App() {
  return (
      <>
          <h1>Hello world</h1>
          <UserInput />
          <ToggleVisibility />
          <Counter />
      </>
         )
    
}

function UserInput() {
  const [input, setInput] = useState('');

  const handleClick = () => {
    alert(input);
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type anythng over here"
      />
      <button onClick={handleClick}>Submit</button>
      <p>You typed: {input}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}


function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility as mine
      </button>
      {isVisible && <p>This paragraph is visible!</p>}
    </div>
  );
}
