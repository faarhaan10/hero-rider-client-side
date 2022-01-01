import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import UserInformation from '../Common/UserInformation';
import VehicalInformation from '../Common/VehicalInformation';
import UserPassword from '../Common/UserPassword';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: { xs: '100%', md: 700 },
    height: 450,
    overflowY: 'scroll'
};

export default function RiderJoining(props) {
    const [userImage, setUserImage] = React.useState('');
    const [userNid, setUserNid] = React.useState('');
    const [drivingLicence, setDrivingLicence] = React.useState('');
    const [carPalate, setCarPalate] = React.useState('');

    const { handleEmailPasswordRegister, uploadImage } = useAuth();

    const { openRider, setOpenRider } = props;
    const handleClose = () => setOpenRider(false);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        if (data.password1 !== data.password2 && data.password1.length <= 6) {
            alert('password dose not match or less than 6 characters');
            return;
        };

        if (data.age <= 17) {
            alert('Time for study kid! Your age was not satisfy our policy');
            return;
        };

        const location = '/profile';
        const isBlock = false;
        const role = 'rider';
        const newData = {
            role,
            isBlock,
            drivingLicence,
            carPalate,
            userImage,
            userNid,
            ...data
        };

        handleEmailPasswordRegister(newData, navigate, location);

    };

    const handleImgUpload = (img, setImg) => {
        uploadImage(img)
            .then(res => {
                setImg(res.data.data.url);
            })
    }

    return (
        <div>
            <Modal
                keepMounted
                open={openRider}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h4" component="h2">
                        Please fill up this form
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <UserInformation
                            register={register}
                            setUserNid={setUserNid}
                            setUserImage={setUserImage}
                            handleImgUpload={handleImgUpload}
                        />

                        <br />
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, md: 12 }}>
                            <Grid item xs={8} md={6} >
                                <TextField
                                    helperText="Upload your Driving Licence"
                                    sx={{ width: 1 }}
                                    accept="image/png, image/jpg, image/jpeg"
                                    type="file"
                                    onChange={e => handleImgUpload(e.target.files[0], setDrivingLicence)}
                                />
                            </Grid>
                            <Grid item xs={8} md={6} >
                                <TextField
                                    sx={{ width: 1 }}
                                    label="Area"
                                    type='text'
                                    {...register("area", { required: true })} />
                            </Grid>
                        </Grid>
                        <br />
                        <VehicalInformation
                            register={register}
                            setCarPalate={setCarPalate}
                            handleImgUpload={handleImgUpload}
                        />

                        <br />
                        <UserPassword register={register} />

                        <Button variant="contained" sx={{ mt: 2 }} type='submit' >Register</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}