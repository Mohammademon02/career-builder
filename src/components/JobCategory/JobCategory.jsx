import React from 'react';
import './JobCategory.css'

const JobCategory = ({category}) => {
   
    return (
        <div className='job-category border p-3 text-start  '>
            <img src={category.categoryLogo} alt="" />
            <h4>{category.categoryName}</h4>
            <p>{category.availableJobs}</p>
        </div>
    );
};

export default JobCategory;