import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobList = ({ job }) => {

    const { jobTitle, id, companyLogo, companyName, jobType, jobTime, location, salary } = job;

    return (
        <div iv className='container mt-5'>
            <div className=' d-flex align-items-center justify-content-between p-3 border rounded-3'>
                <div className='d-flex align-items-center gap-4'>
                    <div className=''>
                        <img className='img-fluid' src={companyLogo} alt="" />
                    </div>
                    <div >
                        <h4 >{jobTitle}</h4>
                        <h5 >{companyName}</h5>
                        <div className='d-flex' >
                            <div>
                                <h6 className='btn btn-outline-primary me-2' >{jobType}</h6>
                            </div>
                            <div>
                                <h6 className='btn btn-outline-primary' >{jobTime}</h6>
                            </div>
                        </div>
                        <div className='d-flex gap-4'>
                            <h5 >{location}</h5>
                            <h5>Salary: {salary}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${id}`}><button className='btn btn-primary px-4'>View Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobList;