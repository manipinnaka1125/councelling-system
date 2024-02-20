import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, Typography, ImageList, ImageListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import i from '../images/i.jpg';

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'black' }} position='sticky'>
        <Toolbar>
        <ImageList sx={{ width: 50, height: 50, marginRight: '10px' }}>
  <ImageListItem sx={{ padding: 0 }}>
    <img src={i} alt="kl logo" style={{ width: '150%', height: '150%', objectFit: 'cover' }} />
  </ImageListItem>
</ImageList>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px', color: 'white' }}>
            COUNSELLING AND VISITOR MANAGEMENT SYSTEM 
          </Typography>

          <div>
            <Tabs 
              sx={{ ml: 'auto' }} 
              textColor='yellow' 
              indicatorColor='primary'
              value={value} 
              onChange={handleChange}  
            >
              <Tab component={NavLink} to='/home' label="Home"/>
              <Tab component={NavLink} to='/fetchregistration' label="Fetchregistration"/>
              <Tab component={NavLink} to='/appointment' label="Appointment"/>
              <Tab component={NavLink} to='/add-visitor' label="Add Visitor"/>
              <Tab component={NavLink} to='/signin' label="Sign In"/>
              <Tab component={NavLink} to='/signup' label="Sign Up"/>
              <Tab component={NavLink} to='/contact' label="CONTACT"/>
              <Tab component={NavLink} to='/about' label="About Us"/>
              
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
