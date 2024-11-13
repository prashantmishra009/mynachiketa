import { useState, useEffect } from 'react';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const res = await fetch('https://lichess.org/api/tournament');
      const data = await res.json();
      setTournaments(data);
    };
    fetchTournaments();
  }, []);

  return (
    <div>
      <h1>Tournaments</h1>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            {tournament.name} - {tournament.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

