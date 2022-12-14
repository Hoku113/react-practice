import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Modules directory
import Football from './Modules/addingEvents';
import Football2 from './Modules/passingArguments';
import Football3 from './Modules/reacrEventObject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football3/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals