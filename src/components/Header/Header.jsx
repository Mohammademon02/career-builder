import React from 'react';
import { Button } from 'react-bootstrap';


const Header = () => {
    return (
        <header className='d-flex align-items-center justify-content-between'>
            <h1>CareerBuiler</h1>
            <ul>
                <a href="">Home</a>
                <a href="">Applied Jobs</a>
                <a href="">Statistics</a>
                <a href="">Blog</a>
            </ul>
            <button className='btn btn-primary'>Start Applying</button>
        </header>

    );
};

export default Header;