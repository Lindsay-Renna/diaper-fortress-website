import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for token when the app loads
    const token = localStorage.getItem('token');
    setIsAdmin(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);