import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {

    const { jobTitle, id, companyLogo, companyName, jobType, jobTime, location, salary } = job;

    return (
        <div className='border rounded p-4 mb-5' >
            <img className='mb-4' src={companyLogo} alt="" />
            <h4 className='job-title'>{jobTitle}</h4>
            <h5 >{companyName}</h5>
            <div className='d-flex gap-2'>
                <div>
                    <h6 className='btn btn-outline-primary' >{jobType}</h6>
                </div>
                <div>
                    <h6 className='btn btn-outline-primary'>{jobTime}</h6>
                </div>
            </div>
            <div className='d-flex gap-4'>
                <h5 >{location}</h5>
                <h5 > Salary: {salary}</h5>
            </div>

            <Link to={`/details/${id}`}><button className='btn-custom text-white'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob;