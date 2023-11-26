import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Divider, Drawer, MenuItem, MenuList, styled } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../theme/theme.ts';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function MenuAppBar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar variant="dense" onClick={handleDrawerOpen}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Varian
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />

      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <MenuList>
          <MenuItem onClick={handleDrawerClose} component={Link} to="/">
            <HomeIcon sx={{ marginRight: 1 }} />
            Home
          </MenuItem>
          <Divider></Divider>
          <MenuItem onClick={handleDrawerClose} component={Link} to="/calendar">
            <InfoIcon sx={{ marginRight: 1 }} />
            Calendar
          </MenuItem>
          <MenuItem onClick={handleDrawerClose} component={Link} to="/beds">
            <InfoIcon sx={{ marginRight: 1 }} />
            Beds
          </MenuItem>
          <MenuItem
            onClick={handleDrawerClose}
            component={Link}
            to="/utilization"
          >
            <InfoIcon sx={{ marginRight: 1 }} />
            Utilization
          </MenuItem>
        </MenuList>
      </Drawer>
    </React.Fragment>
  );
}
