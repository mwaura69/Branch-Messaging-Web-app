import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, ...rest }) => {
    const { token } = useAuth();
    return token ? (
        <Route {...rest} element={children} />
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
