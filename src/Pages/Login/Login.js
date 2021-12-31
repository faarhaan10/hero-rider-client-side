import React from 'react';
import { Button, Chip, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // const { handleGoogleLogin, handleUserLogin } = useAuth();
    const { register, handleSubmit } = useForm();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        // handleUserLogin(data.email, data.password, navigate, location);
        console.log(data);
    };

    // const handleLogin = () => {
    //     handleGoogleLogin(navigate, location);
    // }

    return (
        <Box sx={{
            height: {
                xs: 'auto',
                md: '100vh'
            },
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ddd'
        }}>
            <Container maxWidth="sm"
                sx={{
                    p: 5,
                    borderRadius: { xs: 0, md: 8 },
                    boxShadow: '0 0 11px rgb(0 0 0 / 30%)',
                    backgroundColor: '#fff'
                }}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={4} >
                        <Typography variant="h4" gutterBottom component="div"

                        >
                            Log in
                        </Typography>
                        <hr />
                        <Typography variant="body1" gutterBottom>
                            Get access to your
                            Orders, Wishlist and Recommendations.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ borderLeft: { xs: 0, md: '1px solid gray' }, py: 3 }}>
                        <Box>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    id="email"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    {...register("email", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    id="password"
                                    variant="standard"
                                    sx={{ mb: 3 }}
                                    {...register("password", { required: true })}
                                />
                                <Button
                                    fullWidth variant="contained" color="warning"
                                    type='submit'
                                >
                                    Log in
                                </Button>
                            </form>
                        </Box>
                        <Link to="/registration">
                            <Button fullWidth variant="text">
                                Don't have an account? Sign up
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default Login;