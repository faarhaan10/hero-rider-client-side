import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { user, handleLogOut, admin } = useAuth();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        HERO RIDER
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/profile' style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">My Profile</Typography>
                                </MenuItem>
                            </Link>
                            {admin && <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Dashboard</Typography>
                                </MenuItem>
                            </Link>}
                            {!user && <Link to='/login' style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                            </Link>}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Hero Rider
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Home
                            </Button>
                        </Link>
                        <Link to='/profile' style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >My Profile
                            </Button>
                        </Link>
                        {admin && <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Dashboard
                            </Button>
                        </Link>}
                    </Box>
                    {!user.email && <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' }, justifyContent: 'end'
                    }}>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Login
                            </Button>
                        </Link>
                    </Box>}

                    {user.email && <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user.photoURL}
                                >
                                    {user?.displayName?.slice(0, 1)}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <Link to='/profile' style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{user.displayName}</Typography>
                                </MenuItem>
                            </Link>

                            <MenuItem onClick={handleLogOut}>
                                <Typography textAlign="center" sx={{ color: 'blue' }}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
