import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleEmailPasswordLogin } = useAuth();
    const { register, handleSubmit } = useForm();


    const navigate = useNavigate();

    const onSubmit = data => {
        handleEmailPasswordLogin(data.email, data.password, navigate);
    };


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
                        <Typography variant="h4" component="div"

                        >
                            Log in
                        </Typography>
                        <hr />
                        <Typography variant="body1" >
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
                                    type='password'
                                    sx={{ mb: 3 }}
                                    {...register("password", { required: true })}
                                />
                                <Button fullWidth variant="contained" sx={{ mt: 2 }} type='submit' >Login</Button>
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