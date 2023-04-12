import React from 'react';
import Image from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {

    const jobCategory = useLoaderData();
    return (
        <div className='container'>

            <div className=' d-flex  align-items-center  justify-content-between'>
                <div>
                    <h1 className='fs-1 fw-bold'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span> </h1>
                    <p> Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='img-fluid' src={Image} alt="" />
                </div>
            </div>

            <div>
                <h2 className='fs-2 fw-bold text-center mt-5'>Job Category List</h2>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='d-flex align-items-center justify-content-between mt-5'>
                    {
                        jobCategory.map(category => <JobCategory
                            key={category.id}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;