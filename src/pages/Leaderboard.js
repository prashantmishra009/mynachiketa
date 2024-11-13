import { useState, useEffect } from 'react';

export default function Leaderboards() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      const res = await fetch('https://lichess.org/player');
      const data = await res.json();
      setPlayers(data);
    };
    fetchLeaderboards();
  }, []);

  return (
    <div>
      <h1>Leaderboards</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.username} - Title: {player.title || 'No title'} - Rating: {player.perfs.blitz.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

