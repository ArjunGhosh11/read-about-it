import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='answers'>
            <h1>Question & Answer</h1>
            <h4>1. What is context API?</h4>
            <p>= Usually we pass data top-down through props (parent to child) in a react application. But the process can be very boring and inefficient in some cases where we need the same values/states in different level of our application. That is where the Context Api comes into play, it helps us to get the value or states in different level of our applications without having to manually pass it in every level.</p>

            <h4>2. What are Semantic tags?</h4>
            <p>= Semantic tags are the tags, those doesn’t necessarily have any functional value compare to other tags rather semantic tags help us understand the code better. It not only help us but almost make it easier for the search engines to read the page, which helps the search engine to understand the contents of the page. Such as article tag helps the search engine to understand that this part is an article, section tag helps the search engine to understand that this part will be contained with different elements and probably will have a header etc.</p>
        </div>
    );
};

export default Blogs;