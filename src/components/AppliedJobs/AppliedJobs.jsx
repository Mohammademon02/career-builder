import React from 'react';
import { useEffect, useState } from 'react';
import { getShoppingCart } from '../Utilities/fakedb';
import AppliedJobList from '../AppliedJobList/AppliedJobList';

const AppliedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const data = getShoppingCart();

    const savedJob = [];
    for (const id in data) {
        const addedJob = jobs.find(pd => pd.id === id);
        if (addedJob) {
            savedJob.push(addedJob);
        }
    };

    return (
        <section>
            <div className=' text-center '>
                <h1 className='title'>Applied Jobs</h1>
            </div>
            <div>
                {
                    savedJob.map(job => <AppliedJobList
                    key={job.id}
                    job={job}
                    ></AppliedJobList> )
                }
            </div>
        </section>
    );
};

export default AppliedJobs;