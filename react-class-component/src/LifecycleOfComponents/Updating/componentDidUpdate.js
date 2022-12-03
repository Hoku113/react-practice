import React from "react";

class Updating5 extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    componentDidUpdate() {
        document.getElementById('mydiv').innerHTML = 
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return(
            <>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <div id="mydiv"></div>
            </>
        )
    }
}

export default Updating5;