import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function BTForm() {
  return (
    
    <div className='button'>
      
      <Link to="/PageForm" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="success">Book Now</Button>
      </Link>
  </div>
  );
}

export default BTForm;
