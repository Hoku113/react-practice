import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX (JavaScript XML)
const myElement = <h1> I Love JSX</h1>

// JSX (using formula)
const myElement2 = <h1>React is {5 + 5} time better with JSX</h1> 

// JSX (Large HTML block)
const myElement3 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
    </ul>
)

// One Top Level Element (wrapped <div>)
const myElement4 = (
    <div>
        <p>I am a Student</p>
        <p>I am a Student too</p>
    </div>
)

// fragment
const myElement5 = (
    <>
        <p>I am a Student</p>
        <p>I am a Student too</p>
    </>
)

const myElement6 = <input type="text" />

// Attribute class = className
const myElement7 = <h1 className='myclass'>Hello World</h1>

// Conditions - if statements
// Option 1
const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}

const myElement8 = <h1>{text}</h1>

// Option 2 (ternary expressions)
const myElement9 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>

// Not JSX
// const myElement = React.createElement('h1', {}, 'I do not use JSX')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myElement9)