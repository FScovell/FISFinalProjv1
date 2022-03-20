import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from '../pages/Dashboard'
import { Link } from 'react-router-dom'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function ButtonAppBar({user, handleLogout}) {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        {user.username}
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                            <Link to="/">Profile</Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            <Link to="/walks">Walks</Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            <Link to="/social">Social</Link>
                        </MenuItem>
                    </Menu>
                    </React.Fragment>
                )}
            </PopupState>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Welcome {user.username} */}
          </Typography>
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}