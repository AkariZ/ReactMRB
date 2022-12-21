import React from 'react';
import Clock from "./Date.js";



function header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header-content'>
                            <div className='header-section'>
                                <h1>Meeting Room</h1>
                                <Clock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default header;