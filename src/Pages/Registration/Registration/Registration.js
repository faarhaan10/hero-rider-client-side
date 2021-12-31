import React from 'react';
import { Alert, Button, Chip, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RiderJoining from '../Modals/RiderJoining'
// import useAuth from '../../../hooks/useAuth';

const Registration = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    return (
        <Box sx={{ height: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#ddd' }}>
            <Container maxWidth="sm" sx={{ p: 5, borderRadius: { xs: 0, md: 8 }, boxShadow: '0 0 11px rgb(0 0 0 / 30%)', backgroundColor: '#fff' }}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={4} >
                        <Typography variant="h5" gutterBottom component="div"

                        >
                            Register to
                        </Typography>
                        <hr />
                        <Typography variant="h4" gutterBottom component="div"

                        >
                            Be a Hero Rider
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ borderLeft: { xs: 0, md: '1px solid gray' }, py: 3 }}>
                        <Button fullWidth
                            variant="contained"
                            gutterBottom
                            onClick={handleOpen}
                        >
                            Join as a Rider
                        </Button>
                        <RiderJoining open={open} setOpen={setOpen} />
                        <Divider>
                            <Chip label="OR " />
                        </Divider>
                        <Button fullWidth
                            variant="contained"
                            gutterBottom
                        >
                            Driving Lesson Learner
                        </Button>

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