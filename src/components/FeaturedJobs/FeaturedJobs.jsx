import React, { useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';



const FeaturedJobs = ({ jobs }) => {

    const [seeMore, setSeeMore] = useState(false);

    const handleSeeMore = () => {
        setSeeMore(true)
    }
    return (
        <section>
            <h2 className='fs-2 fw-bold text-center mt-5'>Featured Jobs</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    jobs.slice(0, seeMore ? 6 : 4).map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={() => handleSeeMore()} className='btn btn-primary'>See All Jobs</button>
            </div>
        </section>
    );
};

export default FeaturedJobs;