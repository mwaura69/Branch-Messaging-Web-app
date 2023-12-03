import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userId, setUserId] = useState(localStorage.getItem('_id') || null);
    const [userName, setUserName] = useState(localStorage.getItem('name') || null);

    //getting id of user
    const setNewUserId = (newUserId) => {
        setUserId(newUserId);
        localStorage.setItem('_id', newUserId);
    };

    //getting name of user
    const getNames = (names) => {
        setUserName(names)
    }

    // getting token
    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    //deleting token to logout
    const logout = () => {
        setToken(null);
        setUserId(null)
        setUserName(null)
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, userId, setNewUserId, getNames, userName }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
