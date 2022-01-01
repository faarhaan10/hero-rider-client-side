import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography, Button, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import UserInformation from '../Common/UserInformation';
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

const LearnerJoining = (props) => {
    const [userImage, setUserImage] = React.useState('');
    const [userNid, setUserNid] = React.useState('');

    const { handleEmailPasswordRegister, uploadImage } = useAuth();

    const { openLearner, setOpenLearner } = props;
    const handleCloseLearner = () => setOpenLearner(false);

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const onSubmit = data => {

        if (data.password1 !== data.password2 && data.password1.length <= 6) {
            alert('password dose not match or less than 6 characters');
            return;
        };

        if (data.age <= 17) {
            alert('Time for study kid! Your age was not satisfy our policy');
            return;
        };

        const location = `/payment/${data.vehicleType}`;
        const isBlock = false;
        const role = 'learner';
        const newData = {
            role,
            isBlock,
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
                open={openLearner}
                onClose={handleCloseLearner}
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
                                    fullWidth
                                    select
                                    label="Vehicle type"
                                    {...register("vehicleType", { required: true })}
                                >

                                    <MenuItem defaultValue=''>
                                        none
                                    </MenuItem>
                                    <MenuItem value='car'>
                                        Car
                                    </MenuItem>
                                    <MenuItem value='bike'>
                                        Bike
                                    </MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                        <br />
                        <UserPassword register={register} />

                        <Button variant="contained" sx={{ mt: 2 }} type='submit' >Register</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default LearnerJoining;