import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';


function ResponsiveAppBar() {
  return (
    <AppBar style={{ background: '#022C43'}} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} mr={4}  >
           Logo here
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }} align="right">
           About Us
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
