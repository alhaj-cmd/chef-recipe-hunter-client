import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-4'>
            {/* Question one */}
            <section>
                <h2>Tell us the differences between uncontrolled and controlled components?</h2>
                <p>Controlled components are components that are fully controlled by the parent component. This means that the parent component manages the state of the child component, and the child component receives its values and updates through props. In other words, the child component doesn't have its own state - it relies entirely on the parent component for its state. Controlled components are useful in situations where you want to have more fine-grained control over the behavior of a component, or when you need to synchronize the state of multiple components. </p>
                <p>Uncontrolled components, on the other hand, manage their own state internally. They are responsible for handling their own updates, and the parent component does not have direct control over their behavior. Instead, the parent component can read the current state of the child component using refs. Uncontrolled components are useful when you want a component to be self-contained and independent, or when you don't need fine-grained control over its behavior.</p>
                <p>the main difference between controlled and uncontrolled components is the way they handle state. Controlled components have their state managed by the parent component, while uncontrolled components manage their own state internally.</p>
            </section>
            {/* Question two */}
            <section>
                <h2>How to validate React props using PropTypes?</h2>
                <p>React provides a library called PropTypes that allows you to validate the props passed to a React component. PropTypes helps you to catch common mistakes early on in development and ensures that the props passed to your component are of the correct type.</p>
            </section>
            {/* Question three */}
            <section>
                <h2>Tell us the difference between nodejs and express js.</h2>
                <p>Node.js is a server-side JavaScript runtime environment, which allows you to run JavaScript code on the server. It is built on top of the V8 JavaScript engine used by Google Chrome and provides features such as file system access, network communication, and process management. Node.js is often used for building scalable and high-performance server-side applications.</p>
                <p>Express.js, on the other hand, is a popular web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs. Express.js includes middleware for handling HTTP requests and responses, routing, and template rendering. It is designed to be flexible and modular, allowing developers to use only the features they need and easily extend the framework with custom middleware.</p>
                <p> Node.js is a runtime environment for executing JavaScript code on the server, while Express.js is a web framework built on top of Node.js for building web applications and APIs.</p>
            </section>
            {/* Question four */}
            <section>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>a custom hook is a JavaScript function that uses built-in React hooks and/or other custom hooks to provide a reusable piece of stateful logic. Custom hooks allow you to abstract and reuse complex stateful logic between components in your React application.Custom hooks can be used to encapsulate common patterns, such as fetching data from an API, managing form state, or handling local storage. By extracting these patterns into a custom hook, you can reduce code duplication and improve the overall organization and maintainability of your codebase.</p>
            </section>

        </Container>
    );
};

export default Blog;