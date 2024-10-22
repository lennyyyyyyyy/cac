import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that wraps the app
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Check localStorage for the initial auth status on load
    const authStatus = localStorage.getItem('userId');
    if (authStatus) {
        setUserId(true);
    }
    else {
        setUserId(false);
    }

    setLoading(false);
  }, []);

  const login = (userData) => {
    console.log(userData)
    localStorage.setItem('userId', userData);
    setUserId(true);
  };

  const logout = () => {
    localStorage.removeItem('userId');
    setUserId(false);
  };

  const value = {
    userId,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};