import React from 'react';
import BoardForm from './components/board-form'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="header">DOTS</h1>
      <BoardForm />
      
      <div className="main">
        <div className="board-box"></div> 

      </div>

    </div>
  );
}

export default App;
