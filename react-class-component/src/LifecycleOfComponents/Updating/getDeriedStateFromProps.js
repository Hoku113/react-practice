import React from "react";

class Updating1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }

    static getDerivedStateFromProps(props, state){
        return {favoritecolor: props.favcol}
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
        return(
            <>
                <h1>My favorite Color is {this.state.favoritecolor}</h1>
                <button
                type="button"
                onClick={this.changeColor}
                >Change color</button>
            </>
        );
    }
}

export default Updating1;