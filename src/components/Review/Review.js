import React from 'react';
import './Review.css';
const Review = ({ review }) => {
    const { name, body, rating } = review;
    return (
        <div className='review'>
            <h5>Name: {name}</h5>
            <p title={body}>
                {body.length > 100 ? body.slice(0, 200) + '...' : body}
            </p>
            <h4>Rating: {rating}/5</h4>
        </div>
    );
};

export default Review;