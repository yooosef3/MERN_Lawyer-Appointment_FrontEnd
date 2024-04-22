import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

const Reviews = () => {
    return (
        <div className='p-5'>
            <Review />
            <Review />
            <Review />
            <ReviewForm />
        </div>
    );
};

export default Reviews;