import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';



const Packages = () => {
    return (
        <Box>
            <Container sx={{ mx: 'auto' }}>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', mt: 3 }}>
                    Choose your favorite package
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 15, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Card sx={{ minWidth: 275, m: 2, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Standard
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ m: 5 }} color="skyblue">
                                $100
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ mx: 'auto' }} size="small">Choose</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275, m: 2, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Premium
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ m: 5 }} color="gold">
                                $200
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ mx: 'auto' }} size="small">Choose</Button>
                        </CardActions>
                    </Card>

                </Box>

            </Container>
        </Box>
    );
};

export default Packages;