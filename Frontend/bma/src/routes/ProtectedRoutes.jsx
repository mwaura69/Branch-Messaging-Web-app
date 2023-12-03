import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Dashboard from '../components/Dashboard'
import Signup from '../components/Signup'
import Login from '../components/Login'
import LandingPage from '../components/LandingPage'

const ProtectedRoutes = (props) => {
    const { token } = useAuth();

    return token ? (
        <Routes>
            <Route {...props} path="/Dashboard/*" element={<Dashboard />} />
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
        
    );
};

export default ProtectedRoutes;
