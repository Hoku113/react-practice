import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Module directory
import Garage from './Modules/firstStep';
import Garage2 from './Modules/keys';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage2 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
