import React from 'react';
import { Box } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';

const UserProfile = () => {
    const [profile, setProfile] = React.useState({});
    const { user, databaseUri } = useAuth();

    React.useEffect(() => {
        axios.get(`${databaseUri}/profile?email=${user.email}`)
            .then(res => setProfile(res.data))
    }, [user.email]);

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
                            <img
                                style={{
                                    width: '250px',
                                    height: 'auto', borderRadius: '10px'
                                }}

                                src={profile.userImage}
                                alt={profile.fullName} />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3} >
                        <Typography variant="subtitle1" component="div">
                            Full Name
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                            {profile.fullName}
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            Phone
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                            {profile.phone}
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            Email
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                            {profile.email}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Age
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                            {profile.age}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3} >
                        <Typography variant="subtitle1" component="div">
                            Vehicle Type
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                            {profile.vehicleType}
                        </Typography>
                        {profile.vehicleName && <Box>
                            <Typography variant="subtitle1" component="div">
                                Vehicle Name
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                                {profile.vehicleName}
                            </Typography>

                            <Typography variant="subtitle1" component="div">
                                Vehicle model
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ mb: 2 }} >
                                {profile.vehicleModel}
                            </Typography>

                            <Typography variant="subtitle1" component="div">
                                Area
                            </Typography>
                            <Typography variant="h6" component="div" >
                                {profile.area}
                            </Typography>
                        </Box>}
                    </Grid>

                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default UserProfile;