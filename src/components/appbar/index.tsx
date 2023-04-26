import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton
} from "@mui/material";

import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';


const AppHeader: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DashboardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ensinar
          </Typography>
          <Box sx={{ marginLeft: 'auto' }}>
               <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                // onClick={handleSettings}
                color="inherit"
                >
                <SettingsIcon />
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;
