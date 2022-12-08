import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Modules directory
import FirstForm from './Modules/firstForm';
import HandlingForms from './Modules/handlingForms';
import SubmitForms from './Modules/submitForms';
import MultiInputFields from './Modules/multiInputFields';
import TextArea from './Modules/textArea';
import Select from './Modules/select';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Select/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
