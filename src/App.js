import { useState } from 'react';
import './App.css';
import Card from './components/Card'
import RowCard from './components/RowCard'
import data from './players.json'


function App() {
  let limit = 4;
  const [players, setPlayer] = useState(data)
  return (
    <div className="App">
      <div className='card-1'><Card players={players.slice(0, limit)} /></div>
      <div className='card-2'><RowCard players={players.slice(limit, 10)} /></div>
    </div>
  );
}

export default App;
