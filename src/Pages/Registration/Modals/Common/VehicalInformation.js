import React from 'react';
import { MenuItem, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const VehicalInformation = ({ register }) => {
    return (
        <div>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Vehicle Information
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, md: 12 }}>
                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Vehicle name"
                        type='text'
                        {...register("vehicleName", { required: true })} />
                </Grid>
                <Grid item xs={8} md={6} >
                    <TextField
                        sx={{ width: 1 }}
                        label="Model"
                        type='text'
                        {...register("vehicleModel", { required: true })} />
                </Grid>
                <Grid item xs={8} md={6} >
                    <TextField
                        fullWidth
                        select
                        label="Vehicle type"
                        {...register("vehicleType", { required: true })}
                    >
                        <MenuItem value=''>
                            None
                        </MenuItem>
                        <MenuItem value='car'>
                            Car
                        </MenuItem>
                        <MenuItem value='bike'>
                            Bike
                        </MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={8} md={6} >
                    <TextField
                        helperText="Upload vehicle name palate"
                        sx={{ width: 1 }}
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                        type="file"
                        {...register("vehicleImg", { required: true })}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default VehicalInformation;