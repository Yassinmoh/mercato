import { useState } from 'react';
import './App.css';
import Card from './components/Card'
import data from './players.json'


function App() {
  const [players, setPlayer] = useState(data)
  console.log(players);
  return (
    <div className="App">
      <Card players={players} />
    </div>
  );
}

export default App;
