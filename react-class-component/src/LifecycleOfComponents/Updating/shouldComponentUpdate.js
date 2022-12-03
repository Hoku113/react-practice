import React from "react";

// shouldComponentUpdate

class Updating2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return false;
        // return true;
    }

    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }

    render() {
        return (
            <>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button
                type="button"
                onClick={this.changeColor}
                >Change color</button>
            </>
        );
    }
}

export default Updating2;