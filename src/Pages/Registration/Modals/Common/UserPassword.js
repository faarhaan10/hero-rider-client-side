import React from 'react';
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const UserPassword = ({ register }) => {
    return (
        <div>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Use strong password
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, md: 12 }}>


                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Password"
                        type='password'
                        {...register("password1", { required: true })} />
                </Grid>
                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Confirm Password"
                        type='password'
                        {...register("password2", { required: true })} />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPassword;