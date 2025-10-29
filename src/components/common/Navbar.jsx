import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

//===========================================================================

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(1, 18, 54, 0.84)', color: '#04eeffff' }}>
      <Toolbar>
        {}
        <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
          
          {}
          <Avatar src="/logo-1.png" sx={{ mr: 2, width: 100, height: 100 }} />
          
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Bilgi Drawgs AirApp 
          </Typography>
        </Link>
        
        {}
        <div style={{ flexGrow: 1 }}></div>

        {/* Menü Linkleri */}
        <Button color="white" component={Link} to="/flights">Uçuş Ara</Button>
        <Button color="white" component={Link} to="/support">Yardım</Button>
        
        {}
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/login"
          sx={{ ml: 2 }}
        >
          Giriş Yap
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
