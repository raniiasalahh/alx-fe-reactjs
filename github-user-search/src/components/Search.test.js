import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { render, screen } from '@testing-library/react';
import Search from './Search';

test('displays error message', () => {
  render(<Search onSearch={() => {}} loading={false} userData={null} error={'Looks like we can’t find the user.'} />);
  expect(screen.getByText(/Looks like we can’t find the user/i)).toBeInTheDocument();  // Verify error message
});

test('renders search form and triggers onSearch on form submission', () => {
  const mockOnSearch = jest.fn();  // Mock onSearch function
  render(<Search onSearch={mockOnSearch} loading={false} userData={null} error={''} />);

  const input = screen.getByPlaceholderText(/Enter GitHub username/i);
  const button = screen.getByText(/Search/i);

  // Simulate user typing and submitting the form
  fireEvent.change(input, { target: { value: 'mockuser' } });
  fireEvent.click(button);

  expect(mockOnSearch).toHaveBeenCalledWith('mockuser');  // Ensure the function is called with correct value
});

test('displays loading state', () => {
  render(<Search onSearch={() => {}} loading={true} userData={null} error={''} />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();  // Verify loading message
});

test('displays user data', () => {
  const mockUserData = { login: 'mockuser', avatar_url: 'mockurl', html_url: 'mockhtmlurl' };

  render(<Search onSearch={() => {}} loading={false} userData={mockUserData} error={''} />);

  expect(screen.getByText(/mockuser/i)).toBeInTheDocument();  // Verify user login is displayed
  expect(screen.getByAltText(/User Avatar/i)).toBeInTheDocument();  // Verify avatar is displayed
});

test('displays error message', () => {
  render(<Search onSearch={() => {}} loading={false} userData={null} error={'Looks like we can’t find the user'} />);

  expect(screen.getByText(/Looks like we can’t find the user/i)).toBeInTheDocument();  // Verify error message
});
