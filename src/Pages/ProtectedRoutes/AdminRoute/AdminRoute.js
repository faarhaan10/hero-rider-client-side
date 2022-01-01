import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();

    const location = useLocation();

    if (isLoading) { return <Box sx={{ textAlign: 'center' }} ><CircularProgress /></Box> }

    if (user.email && admin) {
        return children;
    }

    return <Navigate to="/dashboard" state={{ from: location }} />;

};

export default AdminRoute;