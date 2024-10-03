import axios from 'axios';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Function to search for users with advanced criteria
export const searchUsers = async (queryParams) => {
  const { username, location, minRepos } = queryParams;

  // Construct the base query string
  let query = `q=${username ? username : ''}`;

  // Append location if provided
  if (location) {
    query += `+location:${location}`;
  }

  // Append minimum repositories filter if provided
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  // API endpoint for searching users with the constructed query
  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  
  // Return the array of user objects
  return response.data.items; 
};
