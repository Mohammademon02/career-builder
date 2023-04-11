import React from 'react';
import Image from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    return (
        <div>
            <div className='container d-flex  align-items-center  justify-content-between'>
                <div>
                    <h1 className='fs-1 fw-bold'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span> </h1>
                    <p> Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='img-fluid' src={Image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;