import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    // Load authentication state from localStorage on page refresh
    const storedUser = JSON.parse(localStorage.getItem('authUser'));
    return storedUser ? { isAuthenticated: true, currentUser: storedUser } : { isAuthenticated: false, currentUser: null };
  });

  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:5000/api/users/login')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error loading users:', error));
  }, []);

  const saveUsers = async (newUsers) => {
    try {
      console.log(newUsers);
      
      await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ users: newUsers }),
      });
      setUsers(newUsers);
    } catch (error) {
      console.error('Error saving users:', error);
    }
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setAuth({ isAuthenticated: true, currentUser: user });
      localStorage.setItem('authUser', JSON.stringify(user)); // ✅ Save user in localStorage
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, currentUser: null });
    localStorage.removeItem('authUser'); // ✅ Clear user from storage on logout
    
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, signup: saveUsers, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
