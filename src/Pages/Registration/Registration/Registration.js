import React from 'react';
import { Button, Chip, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import RiderJoining from '../Modals/RiderJoining/RiderJoining'
import LearnerJoining from '../Modals/LearnerJoining/LearnerJoining';

const Registration = () => {

    const [openRider, setOpenRider] = React.useState(false);
    const [openLearner, setOpenLearner] = React.useState(false);
    const handleOpenRider = () => setOpenRider(true);
    const handleOpenLearner = () => setOpenLearner(true);


    return (
        <Box sx={{ height: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#ddd' }}>
            <Container maxWidth="sm" sx={{ p: 5, borderRadius: { xs: 0, md: 8 }, boxShadow: '0 0 11px rgb(0 0 0 / 30%)', backgroundColor: '#fff' }}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={4} >
                        <Typography variant="h5" component="div"
                        >
                            Register to
                        </Typography>
                        <hr />
                        <Typography variant="h4" component="div"
                        >
                            Be a Hero Rider
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ borderLeft: { xs: 0, md: '1px solid gray' }, py: 3 }}>
                        <Button fullWidth
                            variant="contained"
                            onClick={handleOpenRider}
                        >
                            Join as a Rider
                        </Button>

                        <RiderJoining openRider={openRider} setOpenRider={setOpenRider} />

                        <Divider>
                            <Chip label="OR " />
                        </Divider>

                        <Button
                            onClick={handleOpenLearner}
                            fullWidth
                            variant="contained"
                        >
                            Driving Lesson Learner
                        </Button>

                        <LearnerJoining openLearner={openLearner} setOpenLearner={setOpenLearner} />

                        <Link to="/login">
                            <Button fullWidth variant="text">
                                Existing user? Log in
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default Registration;