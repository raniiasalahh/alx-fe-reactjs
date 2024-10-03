import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = '';
    if (username) query += `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(`${GITHUB_API_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data', error);
    throw error;
  }
};
