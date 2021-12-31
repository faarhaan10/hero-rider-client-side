import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography, Button, Input } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: 700
};

export default function KeepMountedModal(props) {
    const { open, setOpen } = props;
    const handleClose = () => setOpen(false);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const { img, ...rest } = data;

        const formData = new FormData();
        formData.append('image', img[0]);
        formData.append('title', rest.title);
        formData.append('vendor', rest.vendor);
        formData.append('price', rest.price);
        formData.append('flavour', rest.flavour);
        formData.append('description', rest.description);

        fetch('http://localhost:5000/soaps', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    alert('Succesfully added .');
                }
            })
    };

    const Input = styled('input')({
        display: 'none',
    });
    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
                        Please fill up this form
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <fieldset>
                            <legend>
                                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                    User Information
                                </Typography>
                            </legend>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 8, md: 12 }}>


                                <Grid item sm={8} md={6} >
                                    <TextField
                                        sx={{ width: 1 }}
                                        label="Full Name"
                                        type='text'
                                        {...register("fullName", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <TextField
                                        sx={{ width: 1 }}
                                        label="Email"
                                        type='email'
                                        {...register("email", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <TextField
                                        sx={{ width: 1 }}
                                        label="Age"
                                        type='number'
                                        {...register("age", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <TextField
                                        sx={{ width: 1 }}
                                        label="address"
                                        type='text'
                                        {...register("address", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <TextField
                                        sx={{ width: 1 }}
                                        label="Phone"
                                        type='number'
                                        defaultValue='3'
                                        {...register("phone", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <TextField
                                        label="Profile Picture"
                                        sx={{ width: 1 }}
                                        accept="image/png, image/jpg, image/jpeg"
                                        multiple
                                        type="file"
                                        {...register("userImg", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <TextField
                                        label="Driving licence"
                                        sx={{ width: 1 }}
                                        accept="image/png, image/jpg, image/jpeg"
                                        multiple
                                        type="file"
                                        {...register("drivingLicence", { required: true })} />
                                </Grid>

                                <Grid item sm={8} md={6} >
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                        <Button variant="outlined" component="span">
                                            Upload
                                        </Button>
                                    </label>
                                </Grid>


                            </Grid>
                        </fieldset>

                        <Button color="primary" variant="contained" sx={{ mt: 2, backgroundColor: 'hotpink' }} type='submit' >Add Package</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}