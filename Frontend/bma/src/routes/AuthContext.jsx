import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userId, setUserId] = useState(localStorage.getItem('_id') || null);
    const [userName, setUserName] = useState(localStorage.getItem('name') || null);
    const [userNo, setUserNo] = useState(localStorage.getItem('phoneNumber') || null);

    const setNewUserId = (newUserId) => {
        setUserId(newUserId);
        localStorage.setItem('_id', newUserId);
    };

    const getNames = (names) => {
        setUserName(names)
    }

    const stickyNumbers = (no) => {
        setUserNo(no)
    }

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
        <AuthContext.Provider value={{ token, login, logout, userId, setNewUserId, getNames, userName, stickyNumbers, userNo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
