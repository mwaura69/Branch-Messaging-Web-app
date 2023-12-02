import { createContext, useContext, useState } from 'react';
import Dashboard from '../components/Dashboard'

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userId, setUserId] = useState(localStorage.getItem('_id') || null);

    const setNewUserId = (newUserId) => {
        setUserId(newUserId);
        localStorage.setItem('_id', newUserId);
    };

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    const logout = () => {
        setToken(null);
        setUserId(null)
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, userId, setNewUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
