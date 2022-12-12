import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pages directory
import FirstHook from './pages/first_hook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstHook/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
