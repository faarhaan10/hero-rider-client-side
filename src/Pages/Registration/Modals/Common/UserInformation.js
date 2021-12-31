import React from 'react';
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const UserInformation = ({ register }) => {

    return (
        <div>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                User Information
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, md: 12 }}>


                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Full Name"
                        type='text'
                        {...register("fullName", { required: true })} />
                </Grid>

                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Email"
                        type='email'
                        {...register("email", { required: true })} />
                </Grid>

                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Age"
                        type='number'
                        {...register("age", { required: true })} />
                </Grid>


                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Phone"
                        type='number'
                        {...register("phone", { required: true })} />
                </Grid>

                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Address"
                        type='text'
                        {...register("address", { required: true })} />
                </Grid>


                <Grid item xs={8} md={6} >
                    <TextField
                        helperText="Upload your profile picture"
                        sx={{ width: 1 }}
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                        type="file"
                        {...register("userImg", { required: true })}
                    />
                </Grid>


                <Grid item xs={8} md={6} >
                    <TextField
                        helperText="Upload your NID"
                        sx={{ width: 1 }}
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                        type="file"
                        {...register("userNID", { required: true })}
                    />
                </Grid>

            </Grid>
        </div>
    );
};

export default UserInformation;