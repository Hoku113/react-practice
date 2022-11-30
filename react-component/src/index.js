import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car5 from './Module/Car.js';
import reportWebVitals from './reportWebVitals';

// function Component
function Car2(){
  return <h2>Hi, I am a Car</h2>
}

// Props
function Car3(props){
  return <h2> I am a {props.color} Car!</h2>
}

// Components in Components
function Car4(props) {
  return <h2>I am a {props.color} Car</h2>
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car4 color="red"/>
    </>
  );
}

// Components in Files

// Rendering of Component
const root = ReactDOM.createRoot(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

root.render(<Car5 />)
