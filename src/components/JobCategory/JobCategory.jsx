import React from 'react';

const JobCategory = ({category}) => {
   
    return (
        <div className='border p-3 text-start rounded '>
            <img src={category.categoryLogo} alt="" />
            <h4>{category.categoryName}</h4>
            <p>{category.availableJobs}</p>
        </div>
    );
};

export default JobCategory;