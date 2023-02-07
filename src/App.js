import { useState } from 'react';
import './App.css';
import Cookie from './resources/cookie.png';
import CookieNoCrumbs from './resources/cookieNoCrumbs.png';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className="App">
      <h1>Küpsiseloendur</h1>
      <button onClick={() => setCount(0)} className="bubble">
        NULLI
      </button>
      <img
        alt="cookie"
        src={count === 1 ? CookieNoCrumbs : Cookie}
        onClick={handleClick}
        name="cookie-increment"
      ></img>
      <h2 id="cookie-count">{count}</h2>
    </div>
  );
}

export default App;
