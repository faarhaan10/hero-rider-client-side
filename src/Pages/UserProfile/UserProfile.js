import React from 'react';
import { Box } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Grid, Typography } from '@mui/material';

const UserProfile = () => {
    return (
        <div>
            <Navigation />
            <Container sx={{ mt: 3 }}>
                <Typography variant="h4" component="div"
                    gutterBottom
                >
                    My Profile
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 4, sm: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ pt: 5 }}
                >
                    <Grid item xs={4} sm={4} md={3} sx={{ alignItems: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img style={{ width: '250px', height: '250px', borderRadius: '50%' }} src='https://i.ibb.co/Sss7yqN/1636959068313.jpg' alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3} >
                        <Typography variant="subtitle1" component="div">
                            Full Name
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Farhan Elias
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            Phone
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            0000000000
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            Email
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            farhan@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3} >
                        <Typography variant="subtitle1" component="div">
                            Vehicle Type
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Car
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Vehicle Name
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            BMW
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            Vehicle model
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            BMW 777h
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            Area
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Dhaka,Bangladesh
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default UserProfile;