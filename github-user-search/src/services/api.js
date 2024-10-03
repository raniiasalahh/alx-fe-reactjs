import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchUser = (username) => {
  return axios.get(`${API_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  });
};
