import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Dashboard from '../components/Dashboard'

const ProtectedRoutes = (props) => {
    const { token } = useAuth();

    return token ? (
        <Routes>
            <Route {...props} path="/Dashboard/*" element={<Dashboard />} />
        </Routes>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoutes;
