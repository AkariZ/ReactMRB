import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function BTForm() {
  return (
    <div className='button'>
      <Link to="/PageForm">
        <Button variant="contained">Book Now</Button>
      </Link>
  </div>
  );
}

export default BTForm;
