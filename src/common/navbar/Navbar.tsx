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

                            <div className='logo-cal'>
                                <div className='logo-heading'>
                                    <a href='#' className='desktopLogo'><img src={logo} alt="logo here."></img></a>
                                    <a href='#' className='mobileLogo'><img src={MobileLogo} alt="logo here."></img></a>
                                    <div className='page-title'>
                                        <h2>My DashBoard</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='navbar-option'>
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
                                <div className='navbar-icons'>
                                    <div className='notification'>
                                        <div className='ball-bage'>
                                            <Badge className='count' badgeContent={3} color="primary">
                                                <IcnBell />
                                            </Badge>
                                        </div>
                                        <div className='profile'>
                                            <PopupState variant="popover" popupId="demo-popup-menu">
                                                {(popupState) => (
                                                    <React.Fragment>
                                                        <Button {...bindTrigger(popupState)} className='profile-btn'>
                                                            <div className='profile-icon'>
                                                                <Avatar><img src={profile} /></Avatar>
                                                                <div className='person-name'>
                                                                    <strong>Edward Campbell</strong>
                                                                    <span>Profile</span>
                                                                </div>
                                                                <div className='down-icon'>
                                                                    <IcnDown />
                                                                </div>
                                                            </div>
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)} className='drop-down'>
                                                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                                                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                )}
                                            </PopupState>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
