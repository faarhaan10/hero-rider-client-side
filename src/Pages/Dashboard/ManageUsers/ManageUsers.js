import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, ButtonGroup, Checkbox, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';






const ManageUsers = () => {
    const [allUser, setAllUser] = React.useState([]);
    const [selectedUsers, setSelectedUsers] = React.useState([]);
    const { databaseUri } = useAuth();

    // load all allUser 
    React.useEffect(() => {
        axios.get(`${databaseUri}/users`)
            .then(res => {
                setAllUser(res.data);
            })
    }, []);


    // Product delete handler
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure to delete these users?');
        if (proceed) {
            axios.delete(`${databaseUri}/users`, selectedUsers)
                .then(res => {
                    console.log(res)
                    if (res.data.acknowledged) {
                        alert('Product deleted Succesfully');

                    }
                });
        }
    };
    const handleBlock = () => {
        axios.put(`${databaseUri}/users`, selectedUsers)
            .then(res => {
                console.log(res)
                if (res.data.acknowledged) {
                    alert('Product deleted Succesfully');

                }
            });
    }

    const handleCheck = (isChecked, id) => {
        let newUser = [...selectedUsers];
        if (isChecked) {
            newUser.push(id);
            setSelectedUsers(newUser);
        }
        else {
            newUser.pop(id);
            setSelectedUsers(newUser);
        }
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ p: 2 }} >
                    Selected: {selectedUsers.length}
                </Typography>
                {selectedUsers.length && <Box>
                    <ButtonGroup size="small" variant="text" aria-label="outlined button group">
                        <Button onClick={handleBlock}>Block</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </ButtonGroup>
                </Box>}
                <Typography variant="body1" sx={{ p: 2 }} >
                    Total user: {allUser.length}
                </Typography>
            </Box>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Select
                            </TableCell>
                            <TableCell>
                                No.
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Phone
                            </TableCell>
                            <TableCell>
                                Age
                            </TableCell>
                            <TableCell>
                                Type
                            </TableCell>
                            <TableCell>
                                Block
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allUser.map(singleUser => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={singleUser._id}
                            >
                                <TableCell >
                                    <Checkbox
                                        color="success"
                                        onChange={e => handleCheck(e.target.checked, singleUser._id)}
                                    />
                                </TableCell>
                                <TableCell >
                                    {allUser.indexOf(singleUser) + 1}
                                </TableCell>
                                <TableCell >
                                    {singleUser.fullName}
                                </TableCell>
                                <TableCell >
                                    {singleUser.email}
                                </TableCell>
                                <TableCell >
                                    {singleUser.phone}
                                </TableCell>
                                <TableCell >
                                    {singleUser.age}
                                </TableCell>
                                <TableCell >
                                    {singleUser.role}
                                </TableCell>
                                <TableCell >
                                    {singleUser.isBlock?.toString()}
                                </TableCell>

                            </TableRow>
                            )}

                    </TableBody>
                </Table>
            </TableContainer>

            {/* {!allUser.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No orders
            </Typography>
            } */}
        </Paper >
    );
};

export default ManageUsers;  