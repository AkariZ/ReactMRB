import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../App.css"

function BTForm() {
  return (
    <div className="button">
      <Link to="/PageForm">
        <Button>Book Now</Button>
      </Link>
    </div>
  );
}

export default BTForm;
