import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='text-center my-4'>Blog page</h3>
            <div className="question-answer">
                <h4>Question No-01: When should you use context API?</h4>
                <p >Answer: We will use context API. It is a method to avoid prop-drilling into deeply nested components. Without context API, we pass props from the parent component all the way via subcomponents and finally to the child component, where it is required. Context API removes the prop-drilling in the subcomponents and it allows the child component to access the piece of data with the help of useContext() hook wherever the data is required in any component. It makes the code much more readable, leaner, and less complex.</p> <br /><br />

                <h4>Question No-02: What is a custom hook?</h4>
                <p >Answer: A custom hook is a JavaScript function that starts with the word “use” and uses built-in React hooks such as useState, useEffect, useContext, and others. Custom hooks are created by combining these built-in hooks with additional state and logic that is specific to our application.</p> <br /><br />

                <h4>Question No-03: What is useRef?</h4>
                <p >Answer: With useRef we can create and update a single mutable value that exists for the lifetime of the component instance. After assigning the ref to a variable, we use .current to access the mutable value.</p> <br /><br />

                <h4>Question No-04: What is useMemo?</h4>
                <p >Answer: The React useMemo hook performs some calculations when requested and caches the result in the computer memory. Whenever the React memo hooks are asked to perform another operation with the same value, the old result will be returned without needing to waste computer resources calculating all over again.</p> <br /><br />

            </div>
        </div>
    );
};

export default Blog;