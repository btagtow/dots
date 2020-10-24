import React from 'react';
import BoardContainer from './components/BoardContainer'
import PlayerForm from './components/PlayerForm'
import './App.css';

class App extends React.Component {
  state = {
    player1: "", 
    player2: "",
  }

  setPlayers = (player1, player2) => {
    this.setState({
      player1: player1, player2: player2
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1 className="header">Connect Four</h1>
        <PlayerForm />

        <BoardContainer />

      </div>
    );
  }
}

export default App;
