import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car6 from './Module/Car.js'
import Header from './LifecycleOfComponents/Mounting/constructor.js'
import Header2 from './LifecycleOfComponents/Mounting/getDerivedStateFromProps.js'
import Header3 from './LifecycleOfComponents/Mounting/render.js'
import Header4 from './LifecycleOfComponents/Mounting/componentDidMount.js'
import Updating1 from './LifecycleOfComponents/Updating/getDeriedStateFromProps';
import Updating2 from './LifecycleOfComponents/Updating/shouldComponentUpdate';
import Updating3 from './LifecycleOfComponents/Updating/render';
import Updating4 from './LifecycleOfComponents/Updating/getSnapshotBeforeUpdate';
import Updating5 from './LifecycleOfComponents/Updating/componentDidUpdate';
import Container from './Unmounting/componentWillUnmount';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class component

class Car extends React.Component{
  render() {
    return <h2>Hi, I am a Car!</h2>
  }
}

// Component constructor
class Car2 extends React.Component{
  constructor() {
    super();
    this.state = {color: "red"}
  }
  render() {
    return <h2>I am a Car</h2>
  }
}

// props
class Car3 extends React.Component{
  render() {
    return <h2>I am a {this.props.color} Car!</h2>
  }
}

// Props of constructor
class Car4 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h2>I am a {this.props.model}!</h2>
  }
}

// Component in Component
class Car5 extends React.Component{
  render() {
    return <h2>I am a Car</h2>
  }
}

class Garage extends React.Component{
  render() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car5 />
      </>
    );
  }
}

// Creating the state Object
class Car7 extends React.Component{
  constructor(props){
    super(props);
  this.state = {brand: "Ford"};
  }
  render() {
    return (
      <>
        <h1>My Car</h1>
      </>
    );
  }
}

// many properties
class Car8 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1898
    };
  }
  render() {
    return (
      <>
        <h1>My Car</h1>
      </>
    )
  }
}

// Using the state Object
class Car9 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} <br/>
          {this.state.model}<br/>
          from {this.state.year}
        </p>
      </>
    )
  }
}

// Changing the state Object
class Car10 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <>
        <h1>My {this.state.brand}</h1>
        <p>
          it is a {this.state.color}<br/>
          {this.state.model} <br/>
          from {this.state.year}
        </p>
        <button
        type='button'
        onClick={this.changeColor}
        >Change color</button>
      </>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
