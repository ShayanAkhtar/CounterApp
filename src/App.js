import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);

  const increment=()=>{
    setCount(count+1);
  };
  const decrement=()=>
  {
    setCount(count>0?count-1:0);
  }
  const reset=()=>
  {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Water Counter</h1>
        <p>Number of glasses of water you drank today:</p>
        <div className="counter">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={reset} className="reset-button">Reset</button>
      </header>
      <footer>
        <h5>Developed By @Shayan Akhtar</h5>
      </footer>
    </div>
    
  );
}

export default App;
