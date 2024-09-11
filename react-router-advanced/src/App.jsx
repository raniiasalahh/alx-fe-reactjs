// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = true; // Simulate an authentication check

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route for Blog Posts */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
