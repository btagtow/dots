import React from 'react';
import BoardContainer from './components/BoardContainer'
import './App.css';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <h1 className="header">DOTS</h1>

        <BoardContainer />

      </div>
    );
  }
}

export default App;
