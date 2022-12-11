import ReactDOM from 'react-dom/client';
import './index.css';

// pages directory
import InlineStyling from './pages/inlineStyling';
import CamelCased from './pages/camelCased';
import JSObject from './pages/javaScriptObject';
import StyleSheet from './pages/styleSheet';
import Car from './pages/car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

