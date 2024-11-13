import { useState } from 'react';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch(https : //lichess.org/api/user/${username});
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      setProfileData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProfileData(null);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Get Profile</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profileData && (
        <div>
          <h2>{profileData.username}</h2>
          <p>Bio: {profileData.bio || 'No bio available'}</p>
          <p>Games played: {profileData.count.all}</p>
          <p>Blitz rating: {profileData.perfs.blitz.rating}</p>
          <img src={profileData.profile.image || ''} alt="Profile" />
        </div>
      )}
    </div>
  );
}