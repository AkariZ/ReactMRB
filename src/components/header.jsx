import React from 'react';

import Clock from "./clock.js";


function header() {
    return (
        <header className='header'>
            <h1>Meeting Room</h1>       
            <Clock />
        </header >
    )
};

export default header;