import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo.png';
import MobileLogo from '../../assets/images/mobile-logo.png';
import './Navbar.scss'
import profile from '../../assets/images/profile.jpg'
import IcnDown from '../../assets/icons/IcnDown'
import IcnBell from '../../assets/icons/IcnBell'
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Typography } from '@mui/material';

interface Props {

    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Dashboard', 'Academics', 'Finances', 'Career', 'Student Services'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Container maxWidth="xl">
                    <Toolbar>
                        <header>
                            <Box className='logo-cal'>
                                <Box className='logo-heading'>
                                    <Typography component='a' href='#' className='desktopLogo'><img src={logo} alt="logo here."></img></Typography>
                                    <Typography component='a' href='#' className='mobileLogo'><img src={MobileLogo} alt="logo here."></img></Typography>
                                    <Box className='page-title'>
                                        <Typography component='h2'>My DashBoard</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='navbar-option'>
                                <IconButton
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { lg: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                                    {navItems.map((item) => (
                                        <Button key={item}>
                                            {item}
                                        </Button>
                                    ))}
                                </Box>
                                <Box className='navbar-icons'>
                                    <Box className='notification'>
                                        <Box className='ball-bage'>
                                            <Badge className='count' badgeContent={3} color="primary">
                                                <IcnBell />
                                            </Badge>
                                        </Box>
                                        <Box className='profile'>
                                            <PopupState variant="popover" popupId="demo-popup-menu">
                                                {(popupState) => (
                                                    <React.Fragment>
                                                        <Button {...bindTrigger(popupState)} className='profile-btn'>
                                                            <Box className='profile-icon'>
                                                                <Avatar><img src={profile} /></Avatar>
                                                                <Box className='person-name'>
                                                                    <Typography component='strong'>Edward Campbell</Typography>
                                                                    <Typography component='span'>Profile</Typography>
                                                                </Box>
                                                                <Box className='down-icon'>
                                                                    <IcnDown />
                                                                </Box>
                                                            </Box>
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)} className='drop-down'>
                                                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                                                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                )}
                                            </PopupState>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </header>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}
