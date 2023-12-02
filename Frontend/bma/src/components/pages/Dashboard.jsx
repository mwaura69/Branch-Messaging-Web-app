import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { token, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>User Token: {token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
