import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useAuth from '../../hooks/useAuth'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51JwA8ICJB2Pdfh3ScyEoJ0i06YwIFydT6QuW1KLDBIM9kA2H3OI6jgQPXH9CJZ22bwDq2KGJs9KTZqgz9Xbl6aGj00JfjZvPoS');


const Payment = () => {
    const [newPackage, setNewPackage] = React.useState([]);
    const { user, databaseUri } = useAuth();
    const { vehicle } = useParams();

    React.useEffect(() => {
        axios.get(`${databaseUri}/packages/${vehicle}`)
            .then(res => {
                setNewPackage(res.data);
            })
    }, [vehicle]);

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
                    component="div"
                    sx={{ textAlign: 'center' }}
                >
                    Pay for standard package
                </Typography>
                {user.displayName && <TextField
                    label="Name"
                    fullWidth
                    sx={{ mb: 2 }}
                    defaultValue={user.displayName}
                    InputProps={{
                        readOnly: true,
                    }}
                />}
                <TextField
                    label="Email"
                    fullWidth
                    sx={{ mb: 2 }}
                    defaultValue={user.email}
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
                <Elements stripe={stripePromise}>
                    <CheckoutForm newPackage={newPackage} />
                </Elements>
            </Container>

        </Box>
    );
};

export default Payment;