import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='blog'>
                <h3>Difference between props and state?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='blog'>
                <h3>what is useeffect used for in react?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Blog;