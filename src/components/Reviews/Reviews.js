import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews'>
            <h1>WHAT THE <span className='title-1'>CUSTOMERS THINK!!!</span></h1>
            <div className='review-container'>
                {reviews.map(review => <Review review={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;