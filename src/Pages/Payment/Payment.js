import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useFirebase from '../../hooks/useFirebase'


const stripePromise = loadStripe('pk_test_51JvTmwKKPIXU1Tgx8SiIyxMFYTIyOKZFEBJQhEUaFN444MPUgsn6zscUL43IVaWtVmJueXwhyPsNeThjc4Pu2RtN00ZO7uUvaI');


const Payment = () => {
    const firebse = useFirebase();
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
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    sx={{ textAlign: 'center' }}
                >
                    Pay for standard package
                </Typography>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6} >
                        <TextField
                            label="Name"
                            fullWidth
                            sx={{ mb: 2 }}
                            defaultValue="Hello"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            sx={{ mb: 2 }}
                            defaultValue="Hello"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Phone"
                            fullWidth
                            sx={{ mb: 2 }}
                            defaultValue="Hello"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TextField
                            label="Package"
                            fullWidth
                            sx={{ mb: 2 }}
                            defaultValue="Hello"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Payment method"
                            fullWidth
                            sx={{ mb: 2 }}
                            defaultValue="Stripe"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Price $"
                            fullWidth
                            sx={{ mb: 2 }}
                            defaultValue="100"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </Container>

        </Box>
    );
};

export default Payment;