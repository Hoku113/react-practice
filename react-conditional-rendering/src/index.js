import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Modules
import Goal from './Modules/IfStatement';
import Goal2 from './Modules/ternaryOperator';
import Garage from './Modules/logicalOperator';

const cars = ['Ford', 'BMW', 'Audi'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal2 isGoal={false}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
