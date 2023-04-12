import React, { useEffect, useState } from 'react';
import Image from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    const jobCategory = useLoaderData();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className='container'>

            <section className=' d-flex  align-items-center  justify-content-between'>
                <div>
                    <h1 className='fs-1 fw-bold'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span> </h1>
                    <p> Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='img-fluid' src={Image} alt="" />
                </div>
            </section>

            <section className='jobCategory-container'>
                <h2 className='fs-2 fw-bold text-center mt-5'>Job Category List</h2>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 '>
                    {
                        jobCategory.map(category => <JobCategory
                            key={category.id}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </section>

            <section>
                <FeaturedJobs
                    jobs={jobs}
                ></FeaturedJobs>
            </section>
        </div>
    );
};

export default Home;