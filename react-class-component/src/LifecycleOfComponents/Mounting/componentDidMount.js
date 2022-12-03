import React from "react";

// componentDidMount: first: "red", after 1 second: "yellow"
class Header4 extends React.Component{
    constructor(props){
        super(props)
            this.state = {favoritecolor: "red"};
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        )
    }
}

export default Header4;