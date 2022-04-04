import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='home-main'>
                <div className='heading'>
                    <div>
                        <h1 className='title-1'>READ ABOUT IT,</h1>
                        <h1 className='title-2'>BEFORE YOU BUY IT!!!</h1>
                    </div>
                    <p>Are you planing on buying headphones? Find out wheather you are making the right choice or not from the people who have already used the product. So that you have no regrets.  </p>
                </div>
                <div>
                    <img src="https://i.ibb.co/Kq1gr0N/headphones.jpg" alt="" />
                </div>
            </div>
            <div className='customer-review'>
                <h1 className='customer-review-title title-1'>CUSTOMER REVIEWS-{reviews.length}</h1>
                <div className='reviews-container'>
                    {reviews.map(review => (review.id < 4) && <Review key={review.id} review={review}></Review>)}
                </div>
                <Link to={'/reviews'}>
                    <div className='review-button-container'><button className='review-button'>See All Reviews</button></div>
                </Link>
            </div>
        </div>
    );
};

export default Home;