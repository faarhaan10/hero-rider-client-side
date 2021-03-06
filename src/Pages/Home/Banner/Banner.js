import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import taxi from '../../../Assets/Banner/taxi.png'

const Banner = () => {
    return (
        <Box
            sx={{ textAlign: 'center' }}>
            <Container sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                >
                    Enjoy your trip!
                </Typography>
                <Box sx={{
                    backgroundImage: `url(${taxi})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 323,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'end'
                }}>
                    <Button variant="contained">Book Now</Button>
                </Box>
            </Container>

        </Box>
    );
};

export default Banner;