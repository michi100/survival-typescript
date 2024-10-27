import './App.css';
import { useState } from 'react';

export function App() {
  return (
    <div>
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ❤️ {count}
    </span>
  );
}
