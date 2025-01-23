import {useState, MouseEvent} from 'react';
import { Avatar, Badge, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Settings, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  const handleLogout = () => {
    // Clear authentication token from cookies
    // deleteAuthToken();

    // // Dispatch Redux action to clear the token
    // dispatch(clearAuthToken());

    // Optionally reset any other state (e.g., user data in Redux store)

    // Redirect the user to the login page
    localStorage.clear();
    navigate('/login'); // Replace with your login route
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
            >
              <MoreIcon />
        </IconButton>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>  

            <MenuItem onClick={()=>navigate('/profile', { replace: true })}>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                    <Avatar />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    </Box>
  );
}
