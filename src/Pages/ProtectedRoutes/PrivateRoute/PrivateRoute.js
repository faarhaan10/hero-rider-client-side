import React from 'react';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    let location = useLocation();
    if (isLoading) { return <Box sx={{ textAlign: 'center' }} ><CircularProgress /></Box> }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;