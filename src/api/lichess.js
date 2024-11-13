import axios from 'axios';

const lichessApi = axios.create({
  baseURL: process.env.REACT_APP_LICHESS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserProfile = async (username) => {
  const response = await lichessApi.get(`/user/${username}`);
  return response.data;
};

export const getTopPlayers = async () => {
  const response = await lichessApi.get('/player');
  return response.data;
};

export const getOngoingTournaments = async () => {
  const response = await lichessApi.get('/tournament');
  return response.data;
};
