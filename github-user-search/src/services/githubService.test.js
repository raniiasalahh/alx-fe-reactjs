import axios from 'axios';
import { fetchUserData } from './githubService';

jest.mock('axios');  // Mock axios to simulate API calls

describe('fetchUserData', () => {
  it('fetches and returns GitHub user data successfully', async () => {
    const mockData = { login: 'mockuser', avatar_url: 'mockurl', html_url: 'mockhtmlurl' };

    axios.get.mockResolvedValueOnce({ data: mockData }); // Mock successful response

    const result = await fetchUserData('mockuser'); // Call the function
    expect(result).toEqual(mockData);  // Check if result matches mock data
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/mockuser');  // Verify API call
  });

  it('handles errors when API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('User not found'));  // Mock error

    await expect(fetchUserData('unknownuser')).rejects.toThrow('User not found');  // Expect error
  });
});
