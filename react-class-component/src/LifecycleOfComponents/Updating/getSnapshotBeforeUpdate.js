import React from "react";

class Updating4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"}
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = 
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return(
        <>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </>
    );
    }
}

export default Updating4;